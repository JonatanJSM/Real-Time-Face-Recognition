from flask import Flask, render_template, jsonify, request
import face_recognition
import numpy as np
import os, base64, uuid

app = Flask(__name__, static_folder='static')

# Directorio donde se guardarán las imágenes y los archivos con las codificaciones de rostros
ENCODINGS_DIR = "known_faces"
os.makedirs(ENCODINGS_DIR, exist_ok=True)

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
    if encodings:
        return encodings[0]  # Devuelve la primera codificación encontrada
    return None

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

# Ruta principal para cargar la página HTML
@app.route('/')
def index():
    return render_template('index.html')

# Ruta para subir una imagen y comprobar si el rostro está registrado
@app.route("/upload", methods=["POST"])
def upload():
    """Recibe la imagen, la procesa y responde si el rostro es conocido o no"""
    data = request.json
    image_data = data.get("image")

    # Generar un nombre temporal para la imagen recibida
    temp_path = f"temp_{uuid.uuid4().hex}.jpg"
    save_image_from_base64(image_data, temp_path)

    # Obtener la codificación facial de la imagen
    uploaded_encoding = encode_face_from_file(temp_path)
    os.remove(temp_path)  # Elimina la imagen temporal después de procesarla

    # Si no se detecta rostro, responde que no se detectó cara
    if uploaded_encoding is None:
        return jsonify({"status": "no_face"})

    # Cargar los rostros registrados y compararlos con el rostro subido
    known_encodings, known_metadata = load_known_faces()

    for idx, known_encoding in enumerate(known_encodings):
        # Compara los rostros utilizando la tolerancia para evitar coincidencias falsas
        match = face_recognition.compare_faces([known_encoding], uploaded_encoding, tolerance=0.5)[0]
        if match:
            user = known_metadata[idx]  # Si hay coincidencia, devuelve los datos del usuario
            return jsonify({"status": "known", "name": user["name"], "age": user["age"]})

    # Si no se encuentra coincidencia, responde como desconocido
    return jsonify({"status": "unknown"})


# Ruta para registrar un nuevo rostro
@app.route("/register", methods=["POST"])
def register():
    """Registra un nuevo rostro, guardando su codificación y la información del usuario"""
    data = request.json
    name = data.get("name")
    age = data.get("age")
    image_data = data.get("image")

    # Generar el nombre del archivo y la ruta donde se guardará la imagen
    image_filename = f"{name}_{age}.jpg"
    image_path = os.path.join(ENCODINGS_DIR, image_filename)
    save_image_from_base64(image_data, image_path)

    # Obtener la codificación facial de la imagen
    encoding = encode_face_from_file(image_path)
    
    if encoding is not None:
        # Guardar la codificación facial en un archivo .npy
        save_face_encoding(encoding, name, age)
        return jsonify({"status": "known", "name": name, "age": age})
    else:
        # Si no se detectó un rostro, responder con error
        return jsonify({"status": "error", "message": "No se detectó rostro"})

# Función para guardar la codificación facial en un archivo .npy
def save_face_encoding(encoding, name, age):
    """Guarda la codificación facial como un archivo .npy"""
    filename = f"{name}_{age}.npy"
    path = os.path.join(ENCODINGS_DIR, filename)
    np.save(path, encoding)  

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=True)
