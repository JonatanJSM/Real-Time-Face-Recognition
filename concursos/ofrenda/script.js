const grupos = [
  { nombre: "Grupo 1", monedas: 4 },
  { nombre: "Grupo 2", monedas: 6 },
  { nombre: "Grupo 3", monedas: 9 },
  { nombre: "Grupo 4", monedas: 11 },
  { nombre: "Grupo 5", monedas: 12 }
];

// Coordenadas de cada moneda (ajusta según la imagen)
const posiciones = [
  { x: 615, y: 489 },
  { x: 685, y: 489 },
  { x: 715, y: 439 },
  { x: 715, y: 385 },
  { x: 720, y: 333 },

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
    moneda.src = "coin_1.png";
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