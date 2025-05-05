let lastCapturedImage = null;

document.addEventListener('DOMContentLoaded', async () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('overlay');
  const status = document.getElementById('status');
  const context = canvas.getContext('2d');
  const overlay = document.getElementById("overlay");
  const captureBtn = document.getElementById("captureBtn");
  const ctx = overlay.getContext("2d");

  const modal = document.getElementById("resultModal");
  const closeModal = document.getElementById("closeModal");
  const capturedImage = document.getElementById("capturedImage");
  const modalText = document.getElementById("modalText");
  const registerForm = document.getElementById("registerForm");

  let isDetectionActive = true;

  // Cargar modelos
  await faceapi.nets.tinyFaceDetector.loadFromUri('/static/models');
  status.textContent = "✅ Modelos cargados. Iniciando cámara...";

  // Activar cámara
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch(err => {
      status.textContent = "❌ No se pudo acceder a la cámara.";
      console.error(err);
    });

  video.addEventListener('play', () => {
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      if (!isDetectionActive) return;

      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (detections.length > 0) {
        status.textContent = "🟢 Rostro detectado";
        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        resizedDetections.forEach(detection => {
          const { x, y, width, height } = detection.box;
          context.beginPath();
          context.lineWidth = "4";
          context.strokeStyle = "red";
          context.rect(x, y, width, height);
          context.stroke();
        });
      } else {
        status.textContent = "🔍 Buscando rostro...";
      }
    }, 200);
  });

  captureBtn.addEventListener("click", async () => {
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const imageData = canvas.toDataURL("image/jpeg");

    // Guardar imagen globalmente para usarla en el registro
    lastCapturedImage = imageData;

    // Mostrar la imagen en el modal
    capturedImage.src = imageData;
    modal.style.display = "block";

    isDetectionActive = false;

    const response = await fetch("/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: imageData }),
    });

    const result = await response.json();
    if (result.status === "known") {
      modalText.innerHTML = `<h2>🎉 ¡Hola, ${result.name}!</h2><p>Edad: ${result.age}</p>`;
      registerForm.style.display = "none";
    } else {
      modalText.innerHTML = `<h3>😕 No te reconocimos</h3><p>¿Te registras?</p>`;
      registerForm.style.display = "block";
    }
  });

  document.getElementById("registerBtn").addEventListener("click", async () => {
    const name = document.getElementById("regName").value;
    const age = document.getElementById("regAge").value;

    if (!lastCapturedImage) {
      alert("No se ha capturado ninguna imagen.");
      return;
    }

    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, image: lastCapturedImage })
    });

    const data = await res.json();
    modalText.innerHTML = `<h2>🎉 ¡Bienvenido, ${data.name}!</h2>`;
    registerForm.style.display = "none";
  });

  closeModal.onclick = () => {
    modal.style.display = "none";
    isDetectionActive = true;
  };
});

