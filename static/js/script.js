document.addEventListener('DOMContentLoaded', async () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('overlay');
  const status = document.getElementById('status');
  const context = canvas.getContext('2d');

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
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());

      context.clearRect(0, 0, canvas.width, canvas.height);

      if (detections.length > 0) {
        status.textContent = "🟢 Rostro detectado";
        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        // Dibujar rectángulo rojo
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

  document.getElementById('captureBtn').addEventListener('click', () => {
    const snapshotCanvas = document.createElement('canvas');
    snapshotCanvas.width = video.videoWidth;
    snapshotCanvas.height = video.videoHeight;
    const snapshotCtx = snapshotCanvas.getContext('2d');
    snapshotCtx.drawImage(video, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
    snapshotCanvas.toBlob(blob => {
      const formData = new FormData();
      formData.append('photo', blob, 'snapshot.png');

      fetch('/upload', {
        method: 'POST',
        body: formData
      })
        .then(res => res.text())
        .then(data => alert("✅ Foto enviada"))
        .catch(err => console.error(err));
    }, 'image/png');
  });
});
