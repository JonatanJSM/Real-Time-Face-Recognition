from flask import Flask, render_template, Response, jsonify, request
import os 

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    photo = request.files['photo']
    photo.save('face_snapshot.png')  # luego lo puedes procesar
    return 'Imagen recibida'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=True)
