const grupos = [
  { nombre: "Grupo 1", monedas: 4 },
  { nombre: "Grupo 2", monedas: 6 },
  { nombre: "Grupo 3", monedas: 9 },
  { nombre: "Grupo 4", monedas: 11 },
  { nombre: "Grupo 5", monedas: 12 }
];

// Coordenadas de cada moneda (ajusta según la imagen)
const posiciones = [
  { x: 640, y: 497 },
  { x: 724, y: 488 },
  { x: 731, y: 376 },
  { x: 772, y: 298 },
  { x: 793, y: 290 },
  { x: 865, y: 318 },
  { x: 874, y: 402 },
  { x: 876, y: 473 },
  { x: 933, y: 504 },
  { x: 1010, y: 502 },
  { x: 1074, y: 501 },
  { x: 1111, y: 476 },
  { x: 1116, y: 410 },
  { x: 1069, y: 354 },
  { x: 1004, y: 294 },
  { x: 948, y: 236 },
  { x: 917, y: 201 },
  { x: 663, y: 190 },
  { x: 632, y: 226 },
  { x: 571, y: 207 },
  { x: 552, y: 139 },
  { x: 492, y: 112 },
  { x: 461, y: 182 },
  { x: 460, y: 245 },
  { x: 468, y: 300 },
  { x: 529, y: 319 },
  { x: 572, y: 318 },
  { x: 620, y: 352 },
  { x: 621, y: 396 },
  { x: 570, y: 421 },
  { x: 487, y: 429 },
  { x: 469, y: 464 },
  { x: 502, y: 501 },
  { x: 545, y: 503 },
];

const auto = document.getElementById("auto");
const mensaje = document.getElementById("mensaje");
const mensajeTexto = document.getElementById("mensaje-texto");
const monedasContainer = document.getElementById("monedas-container");

let grupoActual = 0;

// Dibujar monedas en pantalla
function dibujarMonedas() {
  posiciones.forEach(pos => {
    const moneda = document.createElement("img");
    moneda.src = "moneda.png";
    moneda.classList.add("moneda");
    moneda.style.left = pos.x + "px";
    moneda.style.top = pos.y + "px";
    monedasContainer.appendChild(moneda);
  });
}

// Animar auto hacia las monedas
function moverAuto(grupoIndex) {
  const grupo = grupos[grupoIndex];
  const cantidad = grupo.monedas;
  const recorrido = posiciones.slice(0, cantidad);

  let tl = gsap.timeline();

  recorrido.forEach((pos, i) => {
    tl.to(auto, {
      duration: 0.8,
      left: pos.x + "px",
      top: pos.y + "px",
      ease: "power1.inOut"
    });
  });

  tl.call(() => {
    mensajeTexto.innerText = `${grupo.nombre} recolectó ${grupo.monedas} monedas 🎉`;
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