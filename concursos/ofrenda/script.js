const grupos = [
  { nombre: "Inicio", monedas: 0 },
  { nombre: "Grupo 2", monedas: 40 },
  { nombre: "Grupo 3", monedas: 9 },
  { nombre: "Grupo 4", monedas: 11 },
  { nombre: "Grupo 5", monedas: 12 }
];

const posiciones = [
  { x: 615, y: 489, angulo: 0 },
  { x: 685, y: 489 },
  { x: 715, y: 439, angulo: -45 },
  { x: 715, y: 385, angulo: -90 },
  { x: 720, y: 333 },
  { x: 755, y: 280, angulo: -68},
  { x: 832, y: 280, angulo: -35 },
  { x: 863, y: 335, angulo: 37},
  { x: 863, y: 385, angulo: 90 },
  { x: 863, y: 439 },
  { x: 875, y: 489, angulo: 65 },
  { x: 930, y: 489, angulo: 0 },
  { x: 985, y: 489 },
  { x: 1045, y: 489 },
  { x: 1100, y: 460, angulo: -45 },
  { x: 1110, y: 417, angulo: -65 },
  { x: 1084, y: 372, angulo: -102 },
  { x: 1040, y: 329, angulo: -130  },
  { x: 996, y: 288 },
  { x: 946, y: 237 },
  { x: 896, y: 187 },
  { x: 852, y: 141 },
  { x: 808, y: 104 },
  { x: 747, y: 93, angulo: -180 },
  { x: 693, y: 91 },
  { x: 651, y: 134, angulo:-214 },
  { x: 645, y: 188, angulo: -250 },
  { x: 617, y: 216, angulo: -200},
  { x: 552, y: 189, angulo: -167 },
  { x: 545, y: 126, angulo: -117 },
  { x: 480, y: 97, angulo: -139  },
  { x: 448, y: 147, angulo: -238 },
  { x: 448, y: 216, angulo: -270 },
  { x: 448, y: 282 },
  { x: 515, y: 302, angulo: -305 },
  { x: 580, y: 314, angulo: -354 },
  { x: 606, y: 349, angulo: -298 },
  { x: 568, y: 406, angulo: -250 },
  { x: 479, y: 410, angulo: -204 },
  { x: 450, y: 443, angulo: -245 },
  { x: 495, y: 489, angulo: -310 },
  { x: 567, y: 489, angulo: -359 },
];

const auto = document.getElementById("auto");
const mensaje = document.getElementById("mensaje");
const mensajeTexto = document.getElementById("mensaje-texto");
const monedasContainer = document.getElementById("monedas-container");
const contadorMonedas = document.getElementById("contador-monedas");
const sonidoMoneda = document.getElementById("coin-sound");

let grupoActual = 0;
let totalMonedas = 0;
const monedasDOM = [];

// Dibujar monedas en pantalla
function dibujarMonedas() {
  posiciones.forEach(pos => {
    const moneda = document.createElement("img");
    moneda.src = "ninios1.png";
    moneda.classList.add("moneda");
    moneda.style.left = pos.x + "px";
    moneda.style.top = pos.y + "px";
    monedasContainer.appendChild(moneda);
    monedasDOM.push(moneda);
  });
}

// Animar auto hacia las monedas
function moverAuto(grupoIndex) {
  const grupo = grupos[grupoIndex];
  const cantidad = grupo.monedas;
  const recorrido = posiciones.slice(0, cantidad);

  let tl = gsap.timeline();
  let anguloActual = 0;

  recorrido.forEach((pos, i) => {
    if (typeof pos.angulo === "number") {
      anguloActual = pos.angulo;
      tl.to(auto, {
        duration: 0.2,
        rotate: anguloActual,
        ease: "none"
      });
    }

    tl.to(auto, {
      duration: 0.5,
      left: pos.x + "px",
      top: pos.y + "px",
      ease: "power1.inOut",
      onComplete: () => {
        const moneda = monedasDOM[i];
        if (moneda) {
          moneda.style.display = "none"; // ocultar moneda
        }
        sonidoMoneda.currentTime = 0;
        sonidoMoneda.play();
        totalMonedas++;
        contadorMonedas.textContent = `Invitados: ${totalMonedas}`;
      }
    });
  });

  tl.call(() => {
    mensajeTexto.innerText = `${grupo.nombre} invitó ${grupo.monedas} amigos 🎉`;
    mensaje.classList.remove("oculto");
    mensaje.style.display = "block";
  });
}

// Cerrar mensaje y avanzar al siguiente grupo
function cerrarMensaje() {
  mensaje.classList.add("oculto");
  mensaje.style.display = "none";
  grupoActual++;

  if (grupoActual < grupos.length) {
    // Reiniciar monedas visibles
    monedasDOM.forEach(moneda => {
      moneda.style.display = "block";
    });

    // Reiniciar contador
    totalMonedas = 0;
    contadorMonedas.textContent = `Invitados: ${totalMonedas}`;

    moverAuto(grupoActual);
  }
}

dibujarMonedas();
moverAuto(grupoActual);

document.querySelector('.pista-container').addEventListener('click', function (e) {
  const container = e.currentTarget;
  const rect = container.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  console.log(`{ left: ${x}px, top: ${y}px }`);
});

const img = document.querySelector('.pista');
img.onload = () => {
  console.log(`Ancho: ${img.naturalWidth}, Alto: ${img.naturalHeight}`);
};
