document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const registerModal = document.getElementById('register-modal');
    const closeBtn = document.querySelector('.close-btn');
    const registerBtn = document.getElementById('register-btn');
    const nameInput = document.getElementById('name-input');
    const errorMessage = document.getElementById('error-message');
    const welcomeText = document.getElementById('welcome-text');
    const subText = document.getElementById('sub-text');
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('startBtn');
    const captureBtn = document.getElementById('captureBtn');
    const resultsDiv = document.getElementById('results');

    // Mostrar modal de registro
    function showRegisterModal() {
        registerModal.style.display = 'flex';
        nameInput.focus();
    }

    // Ocultar modal
    function hideRegisterModal() {
        registerModal.style.display = 'none';
        nameInput.value = '';
        errorMessage.textContent = '';
    }

    // Registrar nuevo usuario
    async function registerUser() {
        const name = nameInput.value.trim();
        
        if (!name) {
            errorMessage.textContent = 'Por favor ingresa tu nombre';
            return;
        }

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `name=${encodeURIComponent(name)}`
            });

            const data = await response.json();

            if (data.success) {
                welcomeUser(data.name);
                hideRegisterModal();
            } else {
                errorMessage.textContent = data.error || 'Error al registrar';
            }
        } catch (error) {
            errorMessage.textContent = 'Error de conexión';
            console.error('Error:', error);
        }
    }

    // Mostrar bienvenida
    function welcomeUser(name) {
        welcomeText.textContent = `¡Hola ${name}!`;
        subText.textContent = 'Bienvenido/a al EBDV';
        
        // Resetear después de 5 segundos
        setTimeout(() => {
            welcomeText.textContent = '¡Bienvenido/a!';
            subText.textContent = 'Acércate a la cámara para identificarte';
        }, 5000);
    }

    // Event Listeners
    closeBtn.addEventListener('click', hideRegisterModal);
    registerBtn.addEventListener('click', registerUser);
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            registerUser();
        }
    });

    async function loadModels() {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        resultsDiv.textContent = "Modelos cargados correctamente";
    }
    
    // 2. Iniciar cámara
    async function startCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { width: 640, height: 480 },
                audio: false 
            });
            video.srcObject = stream;
            captureBtn.disabled = false;
            startBtn.disabled = true;
            detectFaces(); // Iniciar detección
        } catch (err) {
            console.error("Error al acceder a la cámara:", err);
            resultsDiv.textContent = "Error: " + err.message;
        }
    }
    
    // 3. Detección facial en tiempo real
    async function detectFaces() {
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);
    
        setInterval(async () => {
            const detections = await faceapi.detectAllFaces(
                video, 
                new faceapi.TinyFaceDetectorOptions()
            ).withFaceLandmarks();
    
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    
            if (detections.length > 0) {
                resultsDiv.textContent = `Rostros detectados: ${detections.length}`;
            }
        }, 100);
    }
    
    // 4. Capturar rostro
    captureBtn.addEventListener('click', async () => {
        const detections = await faceapi.detectAllFaces(
            video, 
            new faceapi.TinyFaceDetectorOptions()
        );
    
        if (detections.length === 0) {
            resultsDiv.textContent = "No se detectó ningún rostro";
            return;
        }
    
        // Crear imagen
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/jpeg');
    
        // Enviar al backend (ejemplo con Fetch API)
        try {
            const response = await fetch('/api/process-face', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: imageData })
            });
            const data = await response.json();
            resultsDiv.textContent = `Respuesta del servidor: ${data.message}`;
        } catch (err) {
            console.error("Error al enviar:", err);
            resultsDiv.textContent = "Error al enviar al servidor";
        }
    });
    
    // Iniciar
    startBtn.addEventListener('click', startCamera);
    loadModels();

    // Simular detección de rostro desconocido (en producción esto vendría del backend)
    // setTimeout(showRegisterModal, 3000); // Solo para pruebas
});