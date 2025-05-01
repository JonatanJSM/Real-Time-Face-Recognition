from flask import Flask, render_template, Response, jsonify, request
from datetime import datetime
import base64, os

app = Flask(__name__, static_folder='static')

DUMMY_USERS = {
    "face_123": {"name": "Carlos", "age": 10},
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/upload", methods=["POST"])
def upload():
    data = request.json
    image_data = data.get("image")

    dummy_face_id = "face_123" if datetime.now().second % 2 == 0 else "unknown"

    if dummy_face_id in DUMMY_USERS:
        return jsonify({
            "status": "known",
            "name": DUMMY_USERS[dummy_face_id]["name"],
            "age": DUMMY_USERS[dummy_face_id]["age"]
        })
    else:
        return jsonify({"status": "unknown"})
    
@app.route("/register", methods=["POST"])
def register():
    data = request.json
    name = data.get("name")
    age = data.get("age")
    return jsonify({"status": "registered", "name": name})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=True)
