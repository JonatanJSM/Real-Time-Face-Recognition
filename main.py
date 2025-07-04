from flask import Flask, render_template, jsonify, request
import face_recognition
import numpy as np
import os, base64, uuid, psycopg2

app = Flask(__name__, static_folder='static')

# Directorio donde se guardarán las imágenes y los archivos con las codificaciones de rostros. Además la DB
ENCODINGS_DIR = "known_faces"
os.makedirs(ENCODINGS_DIR, exist_ok=True)
DB_CONFIG = {
    'dbname': "faces_db",
    'user': "admin",
    'password': "admin123",
    'host': "localhost",
    'port': "5432"
}

# Conexión a la base de datos PostgreSQL
def get_db_conn():
    """Conecta a la base de datos PostgreSQL y devuelve el objeto de conexión"""
    try:
        conn = psycopg2.connect(**DB_CONFIG)
        return conn
    except Exception as e:
        print(f"Error al conectar a la base de datos: {e}")
        return None
    
# Crear tabla si no existe
def init_db():
    conn = get_db_conn()
    cur = conn.cursor()
    cur.execute("""
    CREATE TABLE IF NOT EXISTS faces (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        age INT NOT NULL,
        encoding BYTEA NOT NULL
    );
    """)
    conn.commit()
    cur.close()
    conn.close()

init_db()

# Función para guardar una imagen base64 como un archivo en el servidor
def save_image_from_base64(image_data, filename):
    """Convierte la imagen en base64 a un archivo físico .jpg"""
    header, encoded = image_data.split(",", 1)
    with open(filename, "wb") as f:
        f.write(base64.b64decode(encoded))

# Función para extraer la codificación facial (embedding) de una imagen
def encode_face_from_file(filepath):
    """Genera una codificación facial a partir de una imagen"""
    image = face_recognition.load_image_file(filepath)
    encodings = face_recognition.face_encodings(image)
    return encodings[0] if encodings else None

# Función para cargar todos los rostros registrados y sus codificaciones
def load_known_faces():
    """Carga todas las codificaciones faciales registradas desde los archivos .npy"""
    known_encodings = []
    known_metadata = []

    for file in os.listdir(ENCODINGS_DIR):
        if file.endswith(".npy"):  # Solo archivos .npy contienen las codificaciones
            path = os.path.join(ENCODINGS_DIR, file)
            encoding = np.load(path)  # Carga la codificación facial guardada
            name, age = file.replace(".npy", "").split("_")  # Extrae el nombre y edad del archivo
            known_encodings.append(encoding)
            known_metadata.append({"name": name, "age": int(age)})
    return known_encodings, known_metadata

def load_known_faces_from_db():
    conn = get_db_conn()
    cur = conn.cursor()
    cur.execute("SELECT name, age, encoding FROM faces;")
    results = cur.fetchall()
    cur.close()
    conn.close()

    known_encodings = []
    known_metadata = []
    for name, age, encoding_bytes in results:
        encoding = np.frombuffer(encoding_bytes, dtype=np.float64)
        known_encodings.append(encoding)
        known_metadata.append({"name": name, "age": age})
    return known_encodings, known_metadata

# Ruta principal para cargar la página HTML
@app.route('/')
def index():
    return render_template('index.html')


@app.route("/upload", methods=["POST"])
def upload():
    data = request.json
    image_data = data.get("image")
    temp_path = f"temp_{uuid.uuid4().hex}.jpg"
    save_image_from_base64(image_data, temp_path)

    uploaded_encoding = encode_face_from_file(temp_path)
    os.remove(temp_path)

    if uploaded_encoding is None:
        return jsonify({"status": "no_face"})

    known_encodings, known_metadata = load_known_faces_from_db()
    for idx, known_encoding in enumerate(known_encodings):
        match = face_recognition.compare_faces([known_encoding], uploaded_encoding, tolerance=0.5)[0]
        if match:
            user = known_metadata[idx]
            return jsonify({"status": "known", "name": user["name"], "age": user["age"]})

    return jsonify({"status": "unknown"})

@app.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    age = int(data.get("age"))
    image_data = data.get("image")

    temp_path = f"{ENCODINGS_DIR}/{name}_{age}.jpg"
    save_image_from_base64(image_data, temp_path)

    encoding = encode_face_from_file(temp_path)
    if encoding is not None:
        encoding_bytes = encoding.astype(np.float64).tobytes()

        conn = get_db_conn()
        cur = conn.cursor()
        cur.execute("INSERT INTO faces (name, age, encoding) VALUES (%s, %s, %s);",
                    (name, age, psycopg2.Binary(encoding_bytes)))
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"status": "known", "name": name, "age": age})
    else:
        return jsonify({"status": "error", "message": "No se detectó rostro"})

# Función para guardar la codificación facial en un archivo .npy
def save_face_encoding(encoding, name, age):
    """Guarda la codificación facial como un archivo .npy"""
    filename = f"{name}_{age}.npy"
    path = os.path.join(ENCODINGS_DIR, filename)
    np.save(path, encoding)  

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=True)
