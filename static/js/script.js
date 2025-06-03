let lastCapturedImage = null;

const verses = {
  0: "Salmos 3:3 — Mas tú, Jehová, eres escudo alrededor de mí; Mi gloria, y el que levanta mi cabeza.",
  1: "Génesis 1:1 — En el principio creó Dios los cielos y la tierra.",
  2: "Proverbios 3:5 — Confía en Jehová con todo tu corazón, Y no te apoyes en tu propia prudencia.",
  3: "Filipenses 4:13 — Todo lo puedo en Cristo que me fortalece.",
  4: "Isaías 41:10 — No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
  5: "Mateo 5:14 — Vosotros sois la luz del mundo; una ciudad asentada sobre un monte no se puede esconder.",
  6: "Juan 3:16 — Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...",
};

const dailyDecorations = {
  0: "domingo.png",
  1: "lunes.png",
  2: "martes.png",
  3: "miercoles.png",
  4: "jueves.png",
  5: "viernes.png",
  6: "sabado.png",
};


function showDailyVerse() {
  const today = new Date().getDay();
  const verse = verses[today] || "Versículo no disponible.";
  document.getElementById("dailyVerse").innerText = verse;
}

// 🔸 NUEVO: aplicar decoración visual
function applyImageDecoration() {
  const today = new Date().getDay();
  const overlay = document.getElementById("imageEffectOverlay");

  // Animación suave con GSAP
  gsap.fromTo(overlay, 
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  );
}

// 🔸 NUEVO: mostrar el modal con animación GSAP
function openModal() {
  const modal = document.getElementById("resultModal");
  modal.style.display = "block";

  const content = modal.querySelector(".modal-content");
  gsap.fromTo(content, 
    { scale: 0.8, opacity: 0, y: -30 },
    { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  );

  showDailyVerse();
  applyImageDecoration();
  gsap.to("#floatingFrame", {
  duration: 2,
  repeat: -1,
  yoyo: true,
  boxShadow: "0 0 40px gold",
  ease: "sine.inOut"
});
}

document.addEventListener('DOMContentLoaded', async () => {
  const video = document.getElementById('video');
  const canvas = document.getElementById('overlay');
  const status = document.getElementById('status');
  const context = canvas.getContext('2d');
  const captureBtn = document.getElementById("captureBtn");

  const modal = document.getElementById("resultModal");
  const closeModal = document.getElementById("closeModal");
  const capturedImage = document.getElementById("capturedImage");
  const modalText = document.getElementById("modalText");
  const registerForm = document.getElementById("registerForm");

  let isDetectionActive = true;

  await faceapi.nets.tinyFaceDetector.loadFromUri('/static/models');
  status.textContent = "✅ Modelos cargados. Iniciando cámara...";

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

    lastCapturedImage = imageData;
    capturedImage.src = imageData;

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

    openModal();  // 🔸 ahora usa la nueva función con GSAP y overlay
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
    modalText.innerHTML = "<h2></h2>";
    isDetectionActive = true;
  };
});
