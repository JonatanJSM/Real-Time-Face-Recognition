	//Para AÑADIR preguntas nuevas se añade en el JSON y en base a las preguntas en el archivo "generador.js" agregaras la cantidad de preguntas de "data.js"
	
	
	const preguntas = [
		{
			titulo: "Punto del emblema que es más popular",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Alerta", puntuacionUno: 39},
				{respuestaDos: "Físico", puntuacionDos: 23},
				{respuestaTres: "Espiritual", puntuacionTres: 18},
				{respuestaCuatro: "Mental", puntuacionCuatro: 13},
				{respuestaCinco: "Limpio", puntuacionCinco: 7}
			]
		},
		{
			titulo: "Qué anima a un destacamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Servir a Dios", puntuacionUno: 49},
				{respuestaDos: "Invitar amigos", puntuacionDos: 25},
				{respuestaTres: "Ganar premios de avance", puntuacionTres: 15},
				{respuestaCuatro: "Asistir a todos los servicios", puntuacionCuatro: 6},
				{respuestaCinco: "Que más niños se integren", puntuacionCinco: 5}
			]
		},
		{
			titulo: "Qué es lo que más disfrutas de un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Convivencia", puntuacionUno: 53},
				{respuestaDos: "La naturaleza", puntuacionDos: 18},
				{respuestaTres: "La fogata", puntuacionTres: 12},
				{respuestaCuatro: "Cursos y juegos", puntuacionCuatro: 10},
				{respuestaCinco: "La comida", puntuacionCinco: 7}
			]
		},
		{
			titulo: "Qué actividades hacen más en tu destacamento durante un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Fogata", puntuacionUno: 38},
				{respuestaDos: "Competencias", puntuacionDos: 30},
				{respuestaTres: "Jugar", puntuacionTres: 15},
				{respuestaCuatro: "Comer", puntuacionCuatro: 10},
				{respuestaCinco: "Contar anéctodas", puntuacionCinco: 7}
			]
		},
				{
			titulo: "Qué herramientas llevas a un campamento para cortar",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Navaja", puntuacionUno: 61},
				{respuestaDos: "cuchillo", puntuacionDos: 19},
				{respuestaTres: "Hacha", puntuacionTres: 9},
				{respuestaCuatro: "Machete", puntuacionCuatro: 8},
				{respuestaCinco: "Cierra", puntuacionCinco: 3}
			]
		},
				{
			titulo: "Durante un campamento, en dónde es más común dormir",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Casa de campaña", puntuacionUno: 41},
				{respuestaDos: "Bolsa para dormir", puntuacionDos: 29},
				{respuestaTres: "Hamaca", puntuacionTres: 13},
				{respuestaCuatro: "Colchón", puntuacionCuatro: 10},
				{respuestaCinco: "Sobre el pasto", puntuacionCinco: 7}
			]
		},
				{
			titulo: "Qué compran más los exploradores",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Parches", puntuacionUno: 62},
				{respuestaDos: "Gorras", puntuacionDos: 12},
				{respuestaTres: "Playeras", puntuacionTres: 10},
				{respuestaCuatro: "Herramientas", puntuacionCuatro: 9},
				{respuestaCinco: "Recuerdos", puntuacionCinco: 7}
			]
		},
				{
			titulo: "Nombre de un animal que se menciona en el manual de Navegantes",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Castor", puntuacionUno: 64},
				{respuestaDos: "León", puntuacionDos: 14},
				{respuestaTres: "Serpiente", puntuacionTres: 10},
				{respuestaCuatro: "Pantera", puntuacionCuatro: 8},
				{respuestaCinco: "Mapache", puntuacionCinco: 4}
			]
		},
				{
			titulo: "Menciona un punto azul",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Alerta", puntuacionUno: 59},
				{respuestaDos: "Limpio", puntuacionDos: 17},
				{respuestaTres: "Espiritual", puntuacionTres: 12},
				{respuestaCuatro: "Valiente", puntuacionCuatro: 10},
				{respuestaCinco: "Honrado", puntuacionCinco: 5}
			]
		},
				{
			titulo: "Elementos u objetos que se utilizan en la ceremonia de colores",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Bandera de Exploradores", puntuacionUno: 33},
				{respuestaDos: "Velas", puntuacionDos: 23},
				{respuestaTres: "Biblias", puntuacionTres: 19},
				{respuestaCuatro: "Bandera cristiana", puntuacionCuatro: 14},
				{respuestaCinco: "Lonas", puntuacionCinco: 11}
			]
		},
				{
			titulo: "Menciona un libro de la Biblia más conocido por los Exploradores del Rey",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Salmos", puntuacionUno: 40},
				{respuestaDos: "Génesis", puntuacionDos: 38},
				{respuestaTres: "Apocalipsis", puntuacionTres: 11},
				{respuestaCuatro: "Juan", puntuacionCuatro: 8},
				{respuestaCinco: "Exodo", puntuacionCinco: 3}
			]
		},
				{
			titulo: "Prenda del uniforme de los Exploradores del Rey",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Chaleco", puntuacionUno: 62},
				{respuestaDos: "Camisa utilitaria", puntuacionDos: 20},
				{respuestaTres: "Corbata bolo", puntuacionTres: 9},
				{respuestaCuatro: "Cinturón", puntuacionCuatro: 6},
				{respuestaCinco: "Gorras", puntuacionCinco: 3}
			]
		},
				{
			titulo: "Tareas que nadie quiere hacer en un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Lavar trastes", puntuacionUno: 50},
				{respuestaDos: "Lavar baños", puntuacionDos: 20},
				{respuestaTres: "Hacer guardia", puntuacionTres: 15},
				{respuestaCuatro: "Recoger basura", puntuacionCuatro: 10},
				{respuestaCinco: "Buscar leña", puntuacionCinco: 5}
			]
		},
				{
			titulo: "Persnoaje bíblico del antiguo testamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Moises", puntuacionUno: 51},
				{respuestaDos: "Noé", puntuacionDos: 19},
				{respuestaTres: "David", puntuacionTres: 15},
				{respuestaCuatro: "Adán", puntuacionCuatro: 9},
				{respuestaCinco: "Abraham", puntuacionCinco: 6}
			]
		},
				{
			titulo: "¿Qué pierdes normalmente en un campamento?",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Calcetines", puntuacionUno: 33},
				{respuestaDos: "Toalla para secarse", puntuacionDos: 27},
				{respuestaTres: "Herramientas", puntuacionTres: 20},
				{respuestaCuatro: "Botellas de agua", puntuacionCuatro: 13},
				{respuestaCinco: "Ropa", puntuacionCinco: 7}
			]
		},
				{
			titulo: "Menciona uno de los 10 mandamientos",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "No robarás", puntuacionUno: 37},
				{respuestaDos: "No matas", puntuacionDos: 20},
				{respuestaTres: "No tendrás Dioses ajenos", puntuacionTres: 15},
				{respuestaCuatro: "Honra a tu padre y a tu madre", puntuacionCuatro: 8},
				{respuestaCinco: "Amarás a tu señor dios", puntuacionCinco: 3}
			]
		},
				{
			titulo: "Algo que haces en vez de dormir en un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Platicas", puntuacionUno: 64},
				{respuestaDos: "Jugar", puntuacionDos: 14},
				{respuestaTres: "Orar", puntuacionTres: 10},
				{respuestaCuatro: "Ayunar", puntuacionCuatro: 8},
				{respuestaCinco: "Guardia", puntuacionCinco: 4}
			]
		},
						{
			titulo: "¿Qué objeto es obligatorio llevar a un campamento?",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Biblia", puntuacionUno: 59},
				{respuestaDos: "Casa de campaña", puntuacionDos: 17},
				{respuestaTres: "Lampara", puntuacionTres: 12},
				{respuestaCuatro: "Platos", puntuacionCuatro: 10},
				{respuestaCinco: "Gorras", puntuacionCinco: 5}
			]
		},
								{
			titulo: "Alimento o bebida que no debe faltar en un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Agua", puntuacionUno: 62},
				{respuestaDos: "Coca cola", puntuacionDos: 20},
				{respuestaTres: "Café", puntuacionTres: 9},
				{respuestaCuatro: "Horchata", puntuacionCuatro: 6},
				{respuestaCinco: "Huevo", puntuacionCinco: 3}
			]
		},
								{
			titulo: "Algo importante que deben hacer siempre los Exploradores del Rey",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Orar", puntuacionUno: 64},
				{respuestaDos: "Gritar la moral", puntuacionDos: 14},
				{respuestaTres: "Campamentos", puntuacionTres: 10},
				{respuestaCuatro: "Buscar a Dios", puntuacionCuatro: 8},
				{respuestaCinco: "Devocional", puntuacionCinco: 4}
			]
		},
								{
			titulo: "Animal o insecto que puedes ver en un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Arañas", puntuacionUno: 50},
				{respuestaDos: "Serpientes", puntuacionDos: 20},
				{respuestaTres: "Lagartijas", puntuacionTres: 15},
				{respuestaCuatro: "Moscos", puntuacionCuatro: 10},
				{respuestaCinco: "Pájaros", puntuacionCinco: 5}
			]
		},
								{
			titulo: "Menciona un premio de avance",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Fogatas", puntuacionUno: 64},
				{respuestaDos: "Herramientas", puntuacionDos: 14},
				{respuestaTres: "Tiro con arco", puntuacionTres: 10},
				{respuestaCuatro: "Caminata", puntuacionCuatro: 8},
				{respuestaCinco: "Administración", puntuacionCinco: 4}
			]
		},
								{
			titulo: "Algo que dice tu mamá cuando vuelves de un campamento",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "¿Cómo te fue?", puntuacionUno: 40},
				{respuestaDos: "Lava tu ropa", puntuacionDos: 38},
				{respuestaTres: "Qué bueno que todo salió bien", puntuacionTres: 11},
				{respuestaCuatro: "Andas todo suci@", puntuacionCuatro: 8},
				{respuestaCinco: "Trajiste una sarten", puntuacionCinco: 3}
			]
		},
								{
			titulo: "Menciona por qué llegas tarde a una reunión de Exploradores del Rey",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Me dormí", puntuacionUno: 33},
				{respuestaDos: "Tráfico", puntuacionDos: 23},
				{respuestaTres: "No me llevaron mis papás", puntuacionTres: 19},
				{respuestaCuatro: "El camión", puntuacionCuatro: 14},
				{respuestaCinco: "Estaba caro el Uber", puntuacionCinco: 11}
			]
		},
								{
			titulo: "Personajes de la Biblia además de Jesús",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Pablo", puntuacionUno: 62},
				{respuestaDos: "Pedro", puntuacionDos: 20},
				{respuestaTres: "Juan", puntuacionTres: 9},
				{respuestaCuatro: "David", puntuacionCuatro: 6},
				{respuestaCinco: "Moisés", puntuacionCinco: 3}
			]
		},
		{
			titulo: "Menciona una milagro de Jesús",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Convertir el agua en vino", puntuacionUno: 59},
				{respuestaDos: "Multiplicar los panes y los pescados", puntuacionDos: 17},
				{respuestaTres: "Sanar enfermos", puntuacionTres: 12},
				{respuestaCuatro: "Resucitar a Lázaro", puntuacionCuatro: 10},
				{respuestaCinco: "Liberar endemoniados", puntuacionCinco: 5}
			]
		},
		{
			titulo: "En qué se desempeña más un Explorador del Rey en un grupo de alabanza",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Guitarra", puntuacionUno: 37},
				{respuestaDos: "Vocalista", puntuacionDos: 29},
				{respuestaTres: "Batería", puntuacionTres: 18},
				{respuestaCuatro: "Teclado", puntuacionCuatro: 10},
				{respuestaCinco: "Bajo", puntuacionCinco: 6}
			]
		},
		{
			titulo: "Qué actividades son las más esperadas en el año",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Campamentos", puntuacionUno: 61},
				{respuestaDos: "Premios de avance", puntuacionDos: 19},
				{respuestaTres: "Semana del explorador", puntuacionTres: 10},
				{respuestaCuatro: "Aniversario del destacamento", puntuacionCuatro: 9},
				{respuestaCinco: "Entrega de reconocimientos", puntuacionCinco: 1}
			]
		}
		,
		{
			titulo: "Qué debe hacer un explorador en la sociedad",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Evangelizar", puntuacionUno: 60},
				{respuestaDos: "Ayudar en la comunidad", puntuacionDos: 15},
				{respuestaTres: "Dar consejos", puntuacionTres: 14},
				{respuestaCuatro: "Cuidar calles y parques", puntuacionCuatro: 10},
				{respuestaCinco: "Obedecer", puntuacionCinco: 1}
			]
		},
		{
			titulo: "Qué lleva un explorador en su mochila cuando va a la reunión semanal",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Biblia", puntuacionUno: 48},
				{respuestaDos: "Libretas", puntuacionDos: 26},
				{respuestaTres: "Agua/comida", puntuacionTres: 12},
				{respuestaCuatro: "Balón", puntuacionCuatro: 9},
				{respuestaCinco: "Ropa extra", puntuacionCinco: 5}
			]
		}
		,
		{
			titulo: "Frases que repiten los Exploradores del Rey",
			tipo: "normal",
			respuestas: [
				{respuestaUno: "Cómo está la moral", puntuacionUno: 48},
				{respuestaDos: "Dios es bueno", puntuacionDos: 26},
				{respuestaTres: "Silencio", puntuacionTres: 12},
				{respuestaCuatro: "Ya me voy a aprender la consigna", puntuacionCuatro: 9},
				{respuestaCinco: "¡Sí señor!", puntuacionCinco: 5}
			]
		}
	]
		

var sonido = new Audio();
sonido.src="mp3/correcto.mp3";

var sonidoIncorrecto = new Audio();
sonidoIncorrecto.src="mp3/incorrecto.mp3";

var sonidoGanador = new Audio();
sonidoGanador.src="mp3/ganador.mp3";

var sonidoInicio = new Audio();
sonidoInicio.src="mp3/inicio.wav";

var sonidoTimer = new Audio();
sonidoTimer.src="mp3/timer2.mp3";


//Apellidos

var familiaUno = "";
var familiaDos = "";

//preguntas visibles
var preguntasVisibles = true;

//puntos normales, x2 o x3
var puntosMult = 0;

//Puntuaciones Familias.
var puntuacionPorRonda = 0;
var puntuacionFamUno = 0;
var puntuacionFamDos = 0;

var puntuacionUnoR= 0;
var textoRonda = "puntuacionPorRonda";


//Vidas
var vidasCambio = '<img src="img/x.png" class="vidas">';
var conteoVidas = 0;


const cantidadPreguntas = preguntas.length;
const cantidadPreguntasMenos1 = cantidadPreguntas - 1;

//Visibilidad de preguntas.
function mostrarPreguntas(){
	preguntasVisibles = document.getElementById("mostrarPreguntas");
	preguntasVisibles = preguntasVisibles.checked;
}

//Puntos normales
function puntosMultiplicados0(){
	puntosMult = document.getElementById("flexRadioDefault0").value;
}
//Puntos X2
function puntosMultiplicados1(){
	puntosMult = document.getElementById("flexRadioDefault1").value;
}
//Puntos X3
function puntosMultiplicados2(){
	puntosMult = document.getElementById("flexRadioDefault2").value;
}

function reinicioDeVidas(){
	conteoVidas = 0;
}

//Intefraz IDEX



function mainIndex(){
	var printMainIndex = '<div class="main"><div class="style-img-main-top"><img class="img-main-top" src="img/logo-100.png"></div><div class="menu-main"><div class="main-btns"><button class="btn-menu" onclick="preComenzar()">Jugar</button><button class="btn-menu" onclick="respuestas()">Respuestas</button><button class="btn-menu" onclick="instrucciones()">Instrucciones</button></div></div></div>';

	document.getElementById('mainIndex').innerHTML = printMainIndex;
}

//Interfaz para introducir los nombres de familias.
function preComenzar(){
	var printInt = '<div class="btn-position" id="list-btn-modal"><div class="containerRegister"><h3>Ingrese Familias</h3><br><div class="inputFamilias"><input type="text" name="familiaUno" id="familiaUno" placeholder="Familia Uno"><h1 class="textVS">VS</h1><input type="text" name="familiaDos" id="familiaDos" placeholder="Familia Dos"></div><br><hr><p>Configuración:</p><div class="form-check"><input class="form-check-input" onclick="mostrarPreguntas()" type="checkbox" value="true" id="mostrarPreguntas" checked><label class="form-check-label" for="mostrarPreguntas">Mostrar preguntas</label></div><br><hr><br><button onclick="comenzar()">Comenzar</button></div><hr><br></div><button class="btn-regresar-listRespuestas" onclick="mainIndex()">Regresar</button>';

	document.getElementById('mainIndex').innerHTML = printInt;
}
 

//Interfaz con respuestas.
function respuestas(){
	var printResp = '<div class="mainListPreguntas"><div class="listPreguntas"><h4>Lista de preguntas</h4></div><br><p style="text-align: center;" >Cantidad de preguntas: '+cantidadPreguntas+'</p>';
	
for (var x = 0; x < cantidadPreguntas; x++) {

		printResp += '<hr><div class="accordion accordion-flush" id="flush-headingOne"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#resAccor'+x+'" aria-expanded="false" aria-controls="resAccor'+x+'"><div class="listRespText"><strong>'+x+':.  </strong>'+preguntas[x].titulo+'</div></button></h2><div id="resAccor'+x+'" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#flush-headingOne"><div class="accordion-body-X-Resp">';
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[0].respuestaUno+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[0].puntuacionUno+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 2
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[1].respuestaDos+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[1].puntuacionDos+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 3
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[2].respuestaTres+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[2].puntuacionTres+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 4
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[3].respuestaCuatro+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[3].puntuacionCuatro+'</div>';
		printResp += '</div></div>';

		//pizarra Respuesta 5
		printResp += '<div class="card-X-Resp card-body" style=" text-align: center;"><div class="row">';
		printResp += '<div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[4].respuestaCinco+'</div><div class="col-2">---></div><div class="col-5 col-5X-Resp">'+preguntas[x].respuestas[4].puntuacionCinco+'</div>';
		printResp += '</div></div></div></div></div></div>';
		
	}
	printResp += '<br><button class="btn-regresar-listRespuestas" onclick="mainIndex()">Regresar</button></div>';
	document.getElementById('mainIndex').innerHTML = printResp;

}

function instrucciones(){
	var printAbout = '<h2>Se mostrara como se juega</h2><br><br><button onclick="mainIndex()">Regresar</button>';

	document.getElementById('mainIndex').innerHTML = printAbout;
}


//Interfaz donde se muestra la lista de preguntas.
function comenzar(){
	familiaUno = document.getElementById("familiaUno").value;
	familiaDos = document.getElementById("familiaDos").value;

var print = '<div class="container-menu-list"><p>Configuracion de puntuación:</p><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados0()" value="0" type="radio" name="flexRadioDefault" id="flexRadioDefault0" checked><label class="form-check-label" for="flexRadioDefault0">Normal |</label></div><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados1()" value="1" type="radio" name="flexRadioDefault" id="flexRadioDefault1"><label class="form-check-label" for="flexRadioDefault1">Puntos X2 |</label></div><div class="form-check form-check-inline"><input class="form-check-input" onclick="puntosMultiplicados2()" value="2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"><label class="form-check-label" for="flexRadioDefault2">Puntos X3</label></div><hr><div class="listPreguntas"><h4>Lista de preguntas</h4><p>Cantidad de preguntas: '+cantidadPreguntasMenos1+'</p></div></div><div class="container-list-preg">';

for (var i = 0; i < cantidadPreguntas; i++) {

		//Botones
		print += '<div class="btn-list-modal" onclick="reinicioDeVidas()" data-bs-toggle="modal" data-bs-target="#exampleModal'+i+'">';
		print += '<ul class="list-group" onmousedown="sonidoInicio.play()">';
		print += '<li class="list-group-item">';
		print += '<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched'+i+'">';
		
		print += '<label class="form-check-label stretched-link" for="firstCheckboxStretched'+i+'">';

		//Definir que categoria es
		if (preguntas[i].tipo == "musica"){
			print += '<strong style="color:red;">'+i+':. </strong>';
		}else {
			print += '<strong>'+i+':. </strong>';
		}

		//Definir si el usuario selecciono ver o no ver las preguntas.
		if (preguntasVisibles == true){
			print += ' '+preguntas[i].titulo;
		}else{
			print += '<i>...Preguntas Ocultas...</i>';
		}

		print += '</label>';

		print += '</li>';
		print += '</ul>';
		print += '</div>';

		//Contenedor Modal
		print += '<div class="modal fade" id="exampleModal'+i+'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">';
		print += '<div class="modal-dialog modal-fullscreen">';
		print += '<div class="modal-content">';
		print += '<div class="modal-header">';
		print += '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
		print += '</div>';

		if (preguntasVisibles == true){
			print += '<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>'+i+': </strong>'+preguntas[i].titulo+'</h1>';
		}else{
			print += '<h1 class="modal-title fs-5" id="exampleModalLabel"><strong>'+i+': </strong><i>...Preguntas Ocultas...</i></h1>';
		}
		print += '<div class="modal-body">';


					

		//Contenido Modal ------------------------
		print += '<div class="container-panel">';
		print += '<div class="row familias">';
		print += '<div class="col stylePunt"><div class="cont-punt"><div class="fam-punt"><h2>'+familiaUno+'</h2><h2><div class="familiasCol" id="puntuacionFamUno'+i+'">0</div></h2></div>';
		print += '<br><button class="button green" id="enviar" onmousedown="sonidoGanador.play()" onclick="incrementarFamUno()"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg></button><br><br>';
		print += '</div></div>'
		print += '<div class="col"><div class="punt-ronda"><h5>PUNTUACIÓN POR RONDA</h5><h1><div class="textoPuntuacion" id="puntuacionPorRonda'+i+'">0</div></h1></div></div>';
		print += '<div class="col stylePunt"><div class="cont-punt"><div class="fam-punt"><h2>'+familiaDos+'</h2><h2><div class="familiasCol" id="puntuacionFamDos'+i+'">0</div></h2></div>';
		print += '<br><button class="button green" id="startButton" onmousedown="sonidoGanador.play()" onclick="incrementarFamDos();" ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg></button><br><br>';
		print += '</div></div>'
		print += '</div>';
		print += '<div class="tabla-respuestas">';
		print += '<h2>RESPUESTAS</H2>';
		print += '<hr>';




		//pizarra Respuesta 1

		
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesA'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregA"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 1.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregA"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[0].respuestaUno+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[0].puntuacionUno+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregA"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

	

		//pizarra Respuesta 2
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesB'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregB"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 2.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregB"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[1].respuestaDos+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[1].puntuacionDos+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregB"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 3
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesC'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregC"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 3.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregC"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[2].respuestaTres+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[2].puntuacionTres+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregC"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 4
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesD'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregD"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 4.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregD"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[3].respuestaCuatro+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[3].puntuacionCuatro+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregD"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div><hr>';

		

		//pizarra Respuesta 5
		print += '<div class="row cont">'
		print += '<div class="col-2"><button class="btn btn-primary" id="enviar" onmousedown="sonido.play()" onclick="funcionesE'+i+'()" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregE"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16"><path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/></svg><!--ICON EYE--></button></div>';
		print += '<div class="col-8"><div class="textoPregunta">Respuesta 5.</div><div style="min-height: 22.6px;">';
		print += '<div class="collapse collapse-horizontal" id="collapseWidthExample'+i+"pregE"+'">';
		print += '<div class="card card-body" style="text-align: center;"><div class="row">';
		print += '<div class="col-5 col-5X">'+preguntas[i].respuestas[4].respuestaCinco+'</div><div class="col-2">---></div><div class="col-5 col-5X">'+preguntas[i].respuestas[4].puntuacionCinco+'</div>';
		print += '</div></div></div></div></div>'
		print += '<div class="col-2"><button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample'+i+"pregE"+'" aria-expanded="false" aria-controls="collapseWidthExample"><!--ICON EYE--><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg><!--ICON EYE--></button></div></div>';

		

		print += '</div>';
		print += '<div class="row vidas-main" id="enviar" onmousedown="sonidoIncorrecto.play()" onclick="vidas'+i+'()"><div class="col" id="vida' + i + 'A"><img src="img/corazon.png" class="vidas"></div><div class="col" id="vida' + i + 'B"><img src="img/corazon.png" class="vidas"></div><div class="col" id="vida' + i + 'C"><img src="img/corazon.png" class="vidas"></div></div>';
		print += '<div class="row vidas-main2"><div class="col"><img onmousedown="sonidoIncorrecto.play()" src="img/xSound.png" class="vidas"></div><div class="col"><img onmousedown="sonidoTimer.play()" src="img/Timer.png" class="vidas"></div></div>';
		//Contenido Modal ------------------------

		print += '</div>';
		print += '</div>';
		print += '</div>';
		print += '</div>';
		print += '</div>';

}
		




		print += '</div>';



	//Imprime lista de preguntas en el Dom.
	document.getElementById('mainIndex').innerHTML = print;


	

}

const divPuntuacionUno = "puntuacionFamUno";
const divPuntuacionDos = "puntuacionFamDos";

function incrementarFamUno(){
	if (puntosMult == 0){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda;
	}else if(puntosMult == 1){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda * 2;
	}else if(puntosMult == 2){
		puntuacionFamUno = puntuacionFamUno + puntuacionPorRonda * 3;
	}
	puntuacionPorRonda = 0;

	for (var a = 0; a < cantidadPreguntas; a++) {
		var divContadorUno = divPuntuacionUno + a;
		document.getElementById(divContadorUno).innerHTML = puntuacionFamUno;
	}

	for (var e = 0; e < cantidadPreguntas; e++){
		var divPuntuacionPorRonda = textoRonda + e;
		document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
	}	
}

function incrementarFamDos(){
	if (puntosMult == 0){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda;
	}else if(puntosMult == 1){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda * 2;
	}else if(puntosMult == 2){
		puntuacionFamDos = puntuacionFamDos + puntuacionPorRonda * 3;
	}
	puntuacionPorRonda = 0;

	for (var b = 0; b < cantidadPreguntas; b++) {	
		var divContadorDos = divPuntuacionDos + b;
		document.getElementById(divContadorDos).innerHTML = puntuacionFamDos;
	}

	for (var e = 0; e < cantidadPreguntas; e++){
		var divPuntuacionPorRonda = textoRonda + e;
		document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
	}	
}



// FUNCIONES PARA LAS TECLAS
var paseA0=true;
function funcionesA0(){
if (paseA0 == true){
puntuacionUnoR = preguntas[0].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA0 = false;
}
}
var paseB0=true;
function funcionesB0(){
if (paseB0 == true){
puntuacionUnoR = preguntas[0].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB0 = false;
}
}
var paseC0=true;
function funcionesC0(){
if (paseC0 == true){
puntuacionUnoR = preguntas[0].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC0 = false;
}
}
var paseD0=true;
function funcionesD0(){
if (paseD0 == true){
puntuacionUnoR = preguntas[0].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD0 = false;
}
}
var paseE0=true;
function funcionesE0(){
if (paseE0 == true){
puntuacionUnoR = preguntas[0].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE0 = false;
}
}
//----------------------------------------------
function vidas0(){
if(conteoVidas == 0){
document.getElementById("vida0A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida0B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida0C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA1=true;
function funcionesA1(){
if (paseA1 == true){
puntuacionUnoR = preguntas[1].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA1 = false;
}
}
var paseB1=true;
function funcionesB1(){
if (paseB1 == true){
puntuacionUnoR = preguntas[1].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB1 = false;
}
}
var paseC1=true;
function funcionesC1(){
if (paseC1 == true){
puntuacionUnoR = preguntas[1].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC1 = false;
}
}
var paseD1=true;
function funcionesD1(){
if (paseD1 == true){
puntuacionUnoR = preguntas[1].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD1 = false;
}
}
var paseE1=true;
function funcionesE1(){
if (paseE1 == true){
puntuacionUnoR = preguntas[1].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE1 = false;
}
}
//----------------------------------------------
function vidas1(){
if(conteoVidas == 0){
document.getElementById("vida1A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida1B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida1C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA2=true;
function funcionesA2(){
if (paseA2 == true){
puntuacionUnoR = preguntas[2].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA2 = false;
}
}
var paseB2=true;
function funcionesB2(){
if (paseB2 == true){
puntuacionUnoR = preguntas[2].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB2 = false;
}
}
var paseC2=true;
function funcionesC2(){
if (paseC2 == true){
puntuacionUnoR = preguntas[2].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC2 = false;
}
}
var paseD2=true;
function funcionesD2(){
if (paseD2 == true){
puntuacionUnoR = preguntas[2].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD2 = false;
}
}
var paseE2=true;
function funcionesE2(){
if (paseE2 == true){
puntuacionUnoR = preguntas[2].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE2 = false;
}
}
//----------------------------------------------
function vidas2(){
if(conteoVidas == 0){
document.getElementById("vida2A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida2B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida2C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA3=true;
function funcionesA3(){
if (paseA3 == true){
puntuacionUnoR = preguntas[3].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA3 = false;
}
}
var paseB3=true;
function funcionesB3(){
if (paseB3 == true){
puntuacionUnoR = preguntas[3].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB3 = false;
}
}
var paseC3=true;
function funcionesC3(){
if (paseC3 == true){
puntuacionUnoR = preguntas[3].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC3 = false;
}
}
var paseD3=true;
function funcionesD3(){
if (paseD3 == true){
puntuacionUnoR = preguntas[3].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD3 = false;
}
}
var paseE3=true;
function funcionesE3(){
if (paseE3 == true){
puntuacionUnoR = preguntas[3].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE3 = false;
}
}
//----------------------------------------------
function vidas3(){
if(conteoVidas == 0){
document.getElementById("vida3A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida3B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida3C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA4=true;
function funcionesA4(){
if (paseA4 == true){
puntuacionUnoR = preguntas[4].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA4 = false;
}
}
var paseB4=true;
function funcionesB4(){
if (paseB4 == true){
puntuacionUnoR = preguntas[4].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB4 = false;
}
}
var paseC4=true;
function funcionesC4(){
if (paseC4 == true){
puntuacionUnoR = preguntas[4].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC4 = false;
}
}
var paseD4=true;
function funcionesD4(){
if (paseD4 == true){
puntuacionUnoR = preguntas[4].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD4 = false;
}
}
var paseE4=true;
function funcionesE4(){
if (paseE4 == true){
puntuacionUnoR = preguntas[4].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE4 = false;
}
}
//----------------------------------------------
function vidas4(){
if(conteoVidas == 0){
document.getElementById("vida4A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida4B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida4C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA5=true;
function funcionesA5(){
if (paseA5 == true){
puntuacionUnoR = preguntas[5].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA5 = false;
}
}
var paseB5=true;
function funcionesB5(){
if (paseB5 == true){
puntuacionUnoR = preguntas[5].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB5 = false;
}
}
var paseC5=true;
function funcionesC5(){
if (paseC5 == true){
puntuacionUnoR = preguntas[5].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC5 = false;
}
}
var paseD5=true;
function funcionesD5(){
if (paseD5 == true){
puntuacionUnoR = preguntas[5].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD5 = false;
}
}
var paseE5=true;
function funcionesE5(){
if (paseE5 == true){
puntuacionUnoR = preguntas[5].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE5 = false;
}
}
//----------------------------------------------
function vidas5(){
if(conteoVidas == 0){
document.getElementById("vida5A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida5B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida5C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA6=true;
function funcionesA6(){
if (paseA6 == true){
puntuacionUnoR = preguntas[6].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA6 = false;
}
}
var paseB6=true;
function funcionesB6(){
if (paseB6 == true){
puntuacionUnoR = preguntas[6].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB6 = false;
}
}
var paseC6=true;
function funcionesC6(){
if (paseC6 == true){
puntuacionUnoR = preguntas[6].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC6 = false;
}
}
var paseD6=true;
function funcionesD6(){
if (paseD6 == true){
puntuacionUnoR = preguntas[6].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD6 = false;
}
}
var paseE6=true;
function funcionesE6(){
if (paseE6 == true){
puntuacionUnoR = preguntas[6].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE6 = false;
}
}
//----------------------------------------------
function vidas6(){
if(conteoVidas == 0){
document.getElementById("vida6A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida6B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida6C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA7=true;
function funcionesA7(){
if (paseA7 == true){
puntuacionUnoR = preguntas[7].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA7 = false;
}
}
var paseB7=true;
function funcionesB7(){
if (paseB7 == true){
puntuacionUnoR = preguntas[7].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB7 = false;
}
}
var paseC7=true;
function funcionesC7(){
if (paseC7 == true){
puntuacionUnoR = preguntas[7].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC7 = false;
}
}
var paseD7=true;
function funcionesD7(){
if (paseD7 == true){
puntuacionUnoR = preguntas[7].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD7 = false;
}
}
var paseE7=true;
function funcionesE7(){
if (paseE7 == true){
puntuacionUnoR = preguntas[7].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE7 = false;
}
}
//----------------------------------------------
function vidas7(){
if(conteoVidas == 0){
document.getElementById("vida7A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida7B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida7C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA8=true;
function funcionesA8(){
if (paseA8 == true){
puntuacionUnoR = preguntas[8].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA8 = false;
}
}
var paseB8=true;
function funcionesB8(){
if (paseB8 == true){
puntuacionUnoR = preguntas[8].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB8 = false;
}
}
var paseC8=true;
function funcionesC8(){
if (paseC8 == true){
puntuacionUnoR = preguntas[8].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC8 = false;
}
}
var paseD8=true;
function funcionesD8(){
if (paseD8 == true){
puntuacionUnoR = preguntas[8].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD8 = false;
}
}
var paseE8=true;
function funcionesE8(){
if (paseE8 == true){
puntuacionUnoR = preguntas[8].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE8 = false;
}
}
//----------------------------------------------
function vidas8(){
if(conteoVidas == 0){
document.getElementById("vida8A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida8B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida8C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA9=true;
function funcionesA9(){
if (paseA9 == true){
puntuacionUnoR = preguntas[9].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA9 = false;
}
}
var paseB9=true;
function funcionesB9(){
if (paseB9 == true){
puntuacionUnoR = preguntas[9].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB9 = false;
}
}
var paseC9=true;
function funcionesC9(){
if (paseC9 == true){
puntuacionUnoR = preguntas[9].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC9 = false;
}
}
var paseD9=true;
function funcionesD9(){
if (paseD9 == true){
puntuacionUnoR = preguntas[9].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD9 = false;
}
}
var paseE9=true;
function funcionesE9(){
if (paseE9 == true){
puntuacionUnoR = preguntas[9].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE9 = false;
}
}
//----------------------------------------------
function vidas9(){
if(conteoVidas == 0){
document.getElementById("vida9A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida9B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida9C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA10=true;
function funcionesA10(){
if (paseA10 == true){
puntuacionUnoR = preguntas[10].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA10 = false;
}
}
var paseB10=true;
function funcionesB10(){
if (paseB10 == true){
puntuacionUnoR = preguntas[10].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB10 = false;
}
}
var paseC10=true;
function funcionesC10(){
if (paseC10 == true){
puntuacionUnoR = preguntas[10].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC10 = false;
}
}
var paseD10=true;
function funcionesD10(){
if (paseD10 == true){
puntuacionUnoR = preguntas[10].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD10 = false;
}
}
var paseE10=true;
function funcionesE10(){
if (paseE10 == true){
puntuacionUnoR = preguntas[10].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE10 = false;
}
}
//----------------------------------------------
function vidas10(){
if(conteoVidas == 0){
document.getElementById("vida10A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida10B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida10C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA11=true;
function funcionesA11(){
if (paseA11 == true){
puntuacionUnoR = preguntas[11].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA11 = false;
}
}
var paseB11=true;
function funcionesB11(){
if (paseB11 == true){
puntuacionUnoR = preguntas[11].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB11 = false;
}
}
var paseC11=true;
function funcionesC11(){
if (paseC11 == true){
puntuacionUnoR = preguntas[11].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC11 = false;
}
}
var paseD11=true;
function funcionesD11(){
if (paseD11 == true){
puntuacionUnoR = preguntas[11].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD11 = false;
}
}
var paseE11=true;
function funcionesE11(){
if (paseE11 == true){
puntuacionUnoR = preguntas[11].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE11 = false;
}
}
//----------------------------------------------
function vidas11(){
if(conteoVidas == 0){
document.getElementById("vida11A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida11B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida11C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA12=true;
function funcionesA12(){
if (paseA12 == true){
puntuacionUnoR = preguntas[12].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA12 = false;
}
}
var paseB12=true;
function funcionesB12(){
if (paseB12 == true){
puntuacionUnoR = preguntas[12].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB12 = false;
}
}
var paseC12=true;
function funcionesC12(){
if (paseC12 == true){
puntuacionUnoR = preguntas[12].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC12 = false;
}
}
var paseD12=true;
function funcionesD12(){
if (paseD12 == true){
puntuacionUnoR = preguntas[12].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD12 = false;
}
}
var paseE12=true;
function funcionesE12(){
if (paseE12 == true){
puntuacionUnoR = preguntas[12].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE12 = false;
}
}
//----------------------------------------------
function vidas12(){
if(conteoVidas == 0){
document.getElementById("vida12A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida12B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida12C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA13=true;
function funcionesA13(){
if (paseA13 == true){
puntuacionUnoR = preguntas[13].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA13 = false;
}
}
var paseB13=true;
function funcionesB13(){
if (paseB13 == true){
puntuacionUnoR = preguntas[13].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB13 = false;
}
}
var paseC13=true;
function funcionesC13(){
if (paseC13 == true){
puntuacionUnoR = preguntas[13].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC13 = false;
}
}
var paseD13=true;
function funcionesD13(){
if (paseD13 == true){
puntuacionUnoR = preguntas[13].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD13 = false;
}
}
var paseE13=true;
function funcionesE13(){
if (paseE13 == true){
puntuacionUnoR = preguntas[13].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE13 = false;
}
}
//----------------------------------------------
function vidas13(){
if(conteoVidas == 0){
document.getElementById("vida13A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida13B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida13C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA14=true;
function funcionesA14(){
if (paseA14 == true){
puntuacionUnoR = preguntas[14].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA14 = false;
}
}
var paseB14=true;
function funcionesB14(){
if (paseB14 == true){
puntuacionUnoR = preguntas[14].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB14 = false;
}
}
var paseC14=true;
function funcionesC14(){
if (paseC14 == true){
puntuacionUnoR = preguntas[14].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC14 = false;
}
}
var paseD14=true;
function funcionesD14(){
if (paseD14 == true){
puntuacionUnoR = preguntas[14].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD14 = false;
}
}
var paseE14=true;
function funcionesE14(){
if (paseE14 == true){
puntuacionUnoR = preguntas[14].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE14 = false;
}
}
//----------------------------------------------
function vidas14(){
if(conteoVidas == 0){
document.getElementById("vida14A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida14B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida14C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA15=true;
function funcionesA15(){
if (paseA15 == true){
puntuacionUnoR = preguntas[15].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA15 = false;
}
}
var paseB15=true;
function funcionesB15(){
if (paseB15 == true){
puntuacionUnoR = preguntas[15].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB15 = false;
}
}
var paseC15=true;
function funcionesC15(){
if (paseC15 == true){
puntuacionUnoR = preguntas[15].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC15 = false;
}
}
var paseD15=true;
function funcionesD15(){
if (paseD15 == true){
puntuacionUnoR = preguntas[15].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD15 = false;
}
}
var paseE15=true;
function funcionesE15(){
if (paseE15 == true){
puntuacionUnoR = preguntas[15].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE15 = false;
}
}
//----------------------------------------------
function vidas15(){
if(conteoVidas == 0){
document.getElementById("vida15A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida15B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida15C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA16=true;
function funcionesA16(){
if (paseA16 == true){
puntuacionUnoR = preguntas[16].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA16 = false;
}
}
var paseB16=true;
function funcionesB16(){
if (paseB16 == true){
puntuacionUnoR = preguntas[16].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB16 = false;
}
}
var paseC16=true;
function funcionesC16(){
if (paseC16 == true){
puntuacionUnoR = preguntas[16].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC16 = false;
}
}
var paseD16=true;
function funcionesD16(){
if (paseD16 == true){
puntuacionUnoR = preguntas[16].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD16 = false;
}
}
var paseE16=true;
function funcionesE16(){
if (paseE16 == true){
puntuacionUnoR = preguntas[16].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE16 = false;
}
}
//----------------------------------------------
function vidas16(){
if(conteoVidas == 0){
document.getElementById("vida16A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida16B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida16C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA17=true;
function funcionesA17(){
if (paseA17 == true){
puntuacionUnoR = preguntas[17].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA17 = false;
}
}
var paseB17=true;
function funcionesB17(){
if (paseB17 == true){
puntuacionUnoR = preguntas[17].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB17 = false;
}
}
var paseC17=true;
function funcionesC17(){
if (paseC17 == true){
puntuacionUnoR = preguntas[17].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC17 = false;
}
}
var paseD17=true;
function funcionesD17(){
if (paseD17 == true){
puntuacionUnoR = preguntas[17].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD17 = false;
}
}
var paseE17=true;
function funcionesE17(){
if (paseE17 == true){
puntuacionUnoR = preguntas[17].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE17 = false;
}
}
//----------------------------------------------
function vidas17(){
if(conteoVidas == 0){
document.getElementById("vida17A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida17B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida17C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA18=true;
function funcionesA18(){
if (paseA18 == true){
puntuacionUnoR = preguntas[18].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA18 = false;
}
}
var paseB18=true;
function funcionesB18(){
if (paseB18 == true){
puntuacionUnoR = preguntas[18].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB18 = false;
}
}
var paseC18=true;
function funcionesC18(){
if (paseC18 == true){
puntuacionUnoR = preguntas[18].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC18 = false;
}
}
var paseD18=true;
function funcionesD18(){
if (paseD18 == true){
puntuacionUnoR = preguntas[18].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD18 = false;
}
}
var paseE18=true;
function funcionesE18(){
if (paseE18 == true){
puntuacionUnoR = preguntas[18].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE18 = false;
}
}
//----------------------------------------------
function vidas18(){
if(conteoVidas == 0){
document.getElementById("vida18A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida18B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida18C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA19=true;
function funcionesA19(){
if (paseA19 == true){
puntuacionUnoR = preguntas[19].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA19 = false;
}
}
var paseB19=true;
function funcionesB19(){
if (paseB19 == true){
puntuacionUnoR = preguntas[19].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB19 = false;
}
}
var paseC19=true;
function funcionesC19(){
if (paseC19 == true){
puntuacionUnoR = preguntas[19].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC19 = false;
}
}
var paseD19=true;
function funcionesD19(){
if (paseD19 == true){
puntuacionUnoR = preguntas[19].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD19 = false;
}
}
var paseE19=true;
function funcionesE19(){
if (paseE19 == true){
puntuacionUnoR = preguntas[19].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE19 = false;
}
}
//----------------------------------------------
function vidas19(){
if(conteoVidas == 0){
document.getElementById("vida19A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida19B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida19C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA20=true;
function funcionesA20(){
if (paseA20 == true){
puntuacionUnoR = preguntas[20].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA20 = false;
}
}
var paseB20=true;
function funcionesB20(){
if (paseB20 == true){
puntuacionUnoR = preguntas[20].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB20 = false;
}
}
var paseC20=true;
function funcionesC20(){
if (paseC20 == true){
puntuacionUnoR = preguntas[20].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC20 = false;
}
}
var paseD20=true;
function funcionesD20(){
if (paseD20 == true){
puntuacionUnoR = preguntas[20].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD20 = false;
}
}
var paseE20=true;
function funcionesE20(){
if (paseE20 == true){
puntuacionUnoR = preguntas[20].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE20 = false;
}
}
//----------------------------------------------
function vidas20(){
if(conteoVidas == 0){
document.getElementById("vida20A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida20B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida20C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA21=true;
function funcionesA21(){
if (paseA21 == true){
puntuacionUnoR = preguntas[21].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA21 = false;
}
}
var paseB21=true;
function funcionesB21(){
if (paseB21 == true){
puntuacionUnoR = preguntas[21].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB21 = false;
}
}
var paseC21=true;
function funcionesC21(){
if (paseC21 == true){
puntuacionUnoR = preguntas[21].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC21 = false;
}
}
var paseD21=true;
function funcionesD21(){
if (paseD21 == true){
puntuacionUnoR = preguntas[21].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD21 = false;
}
}
var paseE21=true;
function funcionesE21(){
if (paseE21 == true){
puntuacionUnoR = preguntas[21].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE21 = false;
}
}
//----------------------------------------------
function vidas21(){
if(conteoVidas == 0){
document.getElementById("vida21A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida21B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida21C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA22=true;
function funcionesA22(){
if (paseA22 == true){
puntuacionUnoR = preguntas[22].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA22 = false;
}
}
var paseB22=true;
function funcionesB22(){
if (paseB22 == true){
puntuacionUnoR = preguntas[22].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB22 = false;
}
}
var paseC22=true;
function funcionesC22(){
if (paseC22 == true){
puntuacionUnoR = preguntas[22].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC22 = false;
}
}
var paseD22=true;
function funcionesD22(){
if (paseD22 == true){
puntuacionUnoR = preguntas[22].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD22 = false;
}
}
var paseE22=true;
function funcionesE22(){
if (paseE22 == true){
puntuacionUnoR = preguntas[22].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE22 = false;
}
}
//----------------------------------------------
function vidas22(){
if(conteoVidas == 0){
document.getElementById("vida22A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida22B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida22C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA23=true;
function funcionesA23(){
if (paseA23 == true){
puntuacionUnoR = preguntas[23].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA23 = false;
}
}
var paseB23=true;
function funcionesB23(){
if (paseB23 == true){
puntuacionUnoR = preguntas[23].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB23 = false;
}
}
var paseC23=true;
function funcionesC23(){
if (paseC23 == true){
puntuacionUnoR = preguntas[23].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC23 = false;
}
}
var paseD23=true;
function funcionesD23(){
if (paseD23 == true){
puntuacionUnoR = preguntas[23].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD23 = false;
}
}
var paseE23=true;
function funcionesE23(){
if (paseE23 == true){
puntuacionUnoR = preguntas[23].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE23 = false;
}
}
//----------------------------------------------
function vidas23(){
if(conteoVidas == 0){
document.getElementById("vida23A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida23B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida23C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA24=true;
function funcionesA24(){
if (paseA24 == true){
puntuacionUnoR = preguntas[24].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA24 = false;
}
}
var paseB24=true;
function funcionesB24(){
if (paseB24 == true){
puntuacionUnoR = preguntas[24].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB24 = false;
}
}
var paseC24=true;
function funcionesC24(){
if (paseC24 == true){
puntuacionUnoR = preguntas[24].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC24 = false;
}
}
var paseD24=true;
function funcionesD24(){
if (paseD24 == true){
puntuacionUnoR = preguntas[24].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD24 = false;
}
}
var paseE24=true;
function funcionesE24(){
if (paseE24 == true){
puntuacionUnoR = preguntas[24].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE24 = false;
}
}
//----------------------------------------------
function vidas24(){
if(conteoVidas == 0){
document.getElementById("vida24A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida24B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida24C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA25=true;
function funcionesA25(){
if (paseA25 == true){
puntuacionUnoR = preguntas[25].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA25 = false;
}
}
var paseB25=true;
function funcionesB25(){
if (paseB25 == true){
puntuacionUnoR = preguntas[25].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB25 = false;
}
}
var paseC25=true;
function funcionesC25(){
if (paseC25 == true){
puntuacionUnoR = preguntas[25].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC25 = false;
}
}
var paseD25=true;
function funcionesD25(){
if (paseD25 == true){
puntuacionUnoR = preguntas[25].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD25 = false;
}
}
var paseE25=true;
function funcionesE25(){
if (paseE25 == true){
puntuacionUnoR = preguntas[25].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE25 = false;
}
}
//----------------------------------------------
function vidas25(){
if(conteoVidas == 0){
document.getElementById("vida25A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida25B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida25C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA26=true;
function funcionesA26(){
if (paseA26 == true){
puntuacionUnoR = preguntas[26].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA26 = false;
}
}
var paseB26=true;
function funcionesB26(){
if (paseB26 == true){
puntuacionUnoR = preguntas[26].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB26 = false;
}
}
var paseC26=true;
function funcionesC26(){
if (paseC26 == true){
puntuacionUnoR = preguntas[26].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC26 = false;
}
}
var paseD26=true;
function funcionesD26(){
if (paseD26 == true){
puntuacionUnoR = preguntas[26].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD26 = false;
}
}
var paseE26=true;
function funcionesE26(){
if (paseE26 == true){
puntuacionUnoR = preguntas[26].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE26 = false;
}
}
//----------------------------------------------
function vidas26(){
if(conteoVidas == 0){
document.getElementById("vida26A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida26B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida26C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA27=true;
function funcionesA27(){
if (paseA27 == true){
puntuacionUnoR = preguntas[27].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA27 = false;
}
}
var paseB27=true;
function funcionesB27(){
if (paseB27 == true){
puntuacionUnoR = preguntas[27].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB27 = false;
}
}
var paseC27=true;
function funcionesC27(){
if (paseC27 == true){
puntuacionUnoR = preguntas[27].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC27 = false;
}
}
var paseD27=true;
function funcionesD27(){
if (paseD27 == true){
puntuacionUnoR = preguntas[27].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD27 = false;
}
}
var paseE27=true;
function funcionesE27(){
if (paseE27 == true){
puntuacionUnoR = preguntas[27].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE27 = false;
}
}
//----------------------------------------------
function vidas27(){
if(conteoVidas == 0){
document.getElementById("vida27A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida27B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida27C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA28=true;
function funcionesA28(){
if (paseA28 == true){
puntuacionUnoR = preguntas[28].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA28 = false;
}
}
var paseB28=true;
function funcionesB28(){
if (paseB28 == true){
puntuacionUnoR = preguntas[28].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB28 = false;
}
}
var paseC28=true;
function funcionesC28(){
if (paseC28 == true){
puntuacionUnoR = preguntas[28].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC28 = false;
}
}
var paseD28=true;
function funcionesD28(){
if (paseD28 == true){
puntuacionUnoR = preguntas[28].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD28 = false;
}
}
var paseE28=true;
function funcionesE28(){
if (paseE28 == true){
puntuacionUnoR = preguntas[28].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE28 = false;
}
}
//----------------------------------------------
function vidas28(){
if(conteoVidas == 0){
document.getElementById("vida28A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida28B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida28C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA29=true;
function funcionesA29(){
if (paseA29 == true){
puntuacionUnoR = preguntas[29].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA29 = false;
}
}
var paseB29=true;
function funcionesB29(){
if (paseB29 == true){
puntuacionUnoR = preguntas[29].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB29 = false;
}
}
var paseC29=true;
function funcionesC29(){
if (paseC29 == true){
puntuacionUnoR = preguntas[29].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC29 = false;
}
}
var paseD29=true;
function funcionesD29(){
if (paseD29 == true){
puntuacionUnoR = preguntas[29].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD29 = false;
}
}
var paseE29=true;
function funcionesE29(){
if (paseE29 == true){
puntuacionUnoR = preguntas[29].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE29 = false;
}
}
//----------------------------------------------
function vidas29(){
if(conteoVidas == 0){
document.getElementById("vida29A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida29B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida29C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA30=true;
function funcionesA30(){
if (paseA30 == true){
puntuacionUnoR = preguntas[30].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA30 = false;
}
}
var paseB30=true;
function funcionesB30(){
if (paseB30 == true){
puntuacionUnoR = preguntas[30].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB30 = false;
}
}
var paseC30=true;
function funcionesC30(){
if (paseC30 == true){
puntuacionUnoR = preguntas[30].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC30 = false;
}
}
var paseD30=true;
function funcionesD30(){
if (paseD30 == true){
puntuacionUnoR = preguntas[30].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD30 = false;
}
}
var paseE30=true;
function funcionesE30(){
if (paseE30 == true){
puntuacionUnoR = preguntas[30].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE30 = false;
}
}
//----------------------------------------------
function vidas30(){
if(conteoVidas == 0){
document.getElementById("vida30A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida30B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida30C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA31=true;
function funcionesA31(){
if (paseA31 == true){
puntuacionUnoR = preguntas[31].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA31 = false;
}
}
var paseB31=true;
function funcionesB31(){
if (paseB31 == true){
puntuacionUnoR = preguntas[31].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB31 = false;
}
}
var paseC31=true;
function funcionesC31(){
if (paseC31 == true){
puntuacionUnoR = preguntas[31].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC31 = false;
}
}
var paseD31=true;
function funcionesD31(){
if (paseD31 == true){
puntuacionUnoR = preguntas[31].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD31 = false;
}
}
var paseE31=true;
function funcionesE31(){
if (paseE31 == true){
puntuacionUnoR = preguntas[31].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE31 = false;
}
}
//----------------------------------------------
function vidas31(){
if(conteoVidas == 0){
document.getElementById("vida31A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida31B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida31C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA32=true;
function funcionesA32(){
if (paseA32 == true){
puntuacionUnoR = preguntas[32].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA32 = false;
}
}
var paseB32=true;
function funcionesB32(){
if (paseB32 == true){
puntuacionUnoR = preguntas[32].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB32 = false;
}
}
var paseC32=true;
function funcionesC32(){
if (paseC32 == true){
puntuacionUnoR = preguntas[32].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC32 = false;
}
}
var paseD32=true;
function funcionesD32(){
if (paseD32 == true){
puntuacionUnoR = preguntas[32].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD32 = false;
}
}
var paseE32=true;
function funcionesE32(){
if (paseE32 == true){
puntuacionUnoR = preguntas[32].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE32 = false;
}
}
//----------------------------------------------
function vidas32(){
if(conteoVidas == 0){
document.getElementById("vida32A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida32B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida32C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA33=true;
function funcionesA33(){
if (paseA33 == true){
puntuacionUnoR = preguntas[33].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA33 = false;
}
}
var paseB33=true;
function funcionesB33(){
if (paseB33 == true){
puntuacionUnoR = preguntas[33].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB33 = false;
}
}
var paseC33=true;
function funcionesC33(){
if (paseC33 == true){
puntuacionUnoR = preguntas[33].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC33 = false;
}
}
var paseD33=true;
function funcionesD33(){
if (paseD33 == true){
puntuacionUnoR = preguntas[33].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD33 = false;
}
}
var paseE33=true;
function funcionesE33(){
if (paseE33 == true){
puntuacionUnoR = preguntas[33].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE33 = false;
}
}
//----------------------------------------------
function vidas33(){
if(conteoVidas == 0){
document.getElementById("vida33A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida33B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida33C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA34=true;
function funcionesA34(){
if (paseA34 == true){
puntuacionUnoR = preguntas[34].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA34 = false;
}
}
var paseB34=true;
function funcionesB34(){
if (paseB34 == true){
puntuacionUnoR = preguntas[34].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB34 = false;
}
}
var paseC34=true;
function funcionesC34(){
if (paseC34 == true){
puntuacionUnoR = preguntas[34].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC34 = false;
}
}
var paseD34=true;
function funcionesD34(){
if (paseD34 == true){
puntuacionUnoR = preguntas[34].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD34 = false;
}
}
var paseE34=true;
function funcionesE34(){
if (paseE34 == true){
puntuacionUnoR = preguntas[34].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE34 = false;
}
}
//----------------------------------------------
function vidas34(){
if(conteoVidas == 0){
document.getElementById("vida34A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida34B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida34C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA35=true;
function funcionesA35(){
if (paseA35 == true){
puntuacionUnoR = preguntas[35].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA35 = false;
}
}
var paseB35=true;
function funcionesB35(){
if (paseB35 == true){
puntuacionUnoR = preguntas[35].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB35 = false;
}
}
var paseC35=true;
function funcionesC35(){
if (paseC35 == true){
puntuacionUnoR = preguntas[35].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC35 = false;
}
}
var paseD35=true;
function funcionesD35(){
if (paseD35 == true){
puntuacionUnoR = preguntas[35].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD35 = false;
}
}
var paseE35=true;
function funcionesE35(){
if (paseE35 == true){
puntuacionUnoR = preguntas[35].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE35 = false;
}
}
//----------------------------------------------
function vidas35(){
if(conteoVidas == 0){
document.getElementById("vida35A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida35B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida35C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA36=true;
function funcionesA36(){
if (paseA36 == true){
puntuacionUnoR = preguntas[36].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA36 = false;
}
}
var paseB36=true;
function funcionesB36(){
if (paseB36 == true){
puntuacionUnoR = preguntas[36].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB36 = false;
}
}
var paseC36=true;
function funcionesC36(){
if (paseC36 == true){
puntuacionUnoR = preguntas[36].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC36 = false;
}
}
var paseD36=true;
function funcionesD36(){
if (paseD36 == true){
puntuacionUnoR = preguntas[36].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD36 = false;
}
}
var paseE36=true;
function funcionesE36(){
if (paseE36 == true){
puntuacionUnoR = preguntas[36].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE36 = false;
}
}
//----------------------------------------------
function vidas36(){
if(conteoVidas == 0){
document.getElementById("vida36A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida36B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida36C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA37=true;
function funcionesA37(){
if (paseA37 == true){
puntuacionUnoR = preguntas[37].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA37 = false;
}
}
var paseB37=true;
function funcionesB37(){
if (paseB37 == true){
puntuacionUnoR = preguntas[37].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB37 = false;
}
}
var paseC37=true;
function funcionesC37(){
if (paseC37 == true){
puntuacionUnoR = preguntas[37].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC37 = false;
}
}
var paseD37=true;
function funcionesD37(){
if (paseD37 == true){
puntuacionUnoR = preguntas[37].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD37 = false;
}
}
var paseE37=true;
function funcionesE37(){
if (paseE37 == true){
puntuacionUnoR = preguntas[37].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE37 = false;
}
}
//----------------------------------------------
function vidas37(){
if(conteoVidas == 0){
document.getElementById("vida37A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida37B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida37C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA38=true;
function funcionesA38(){
if (paseA38 == true){
puntuacionUnoR = preguntas[38].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA38 = false;
}
}
var paseB38=true;
function funcionesB38(){
if (paseB38 == true){
puntuacionUnoR = preguntas[38].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB38 = false;
}
}
var paseC38=true;
function funcionesC38(){
if (paseC38 == true){
puntuacionUnoR = preguntas[38].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC38 = false;
}
}
var paseD38=true;
function funcionesD38(){
if (paseD38 == true){
puntuacionUnoR = preguntas[38].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD38 = false;
}
}
var paseE38=true;
function funcionesE38(){
if (paseE38 == true){
puntuacionUnoR = preguntas[38].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE38 = false;
}
}
//----------------------------------------------
function vidas38(){
if(conteoVidas == 0){
document.getElementById("vida38A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida38B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida38C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA39=true;
function funcionesA39(){
if (paseA39 == true){
puntuacionUnoR = preguntas[39].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA39 = false;
}
}
var paseB39=true;
function funcionesB39(){
if (paseB39 == true){
puntuacionUnoR = preguntas[39].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB39 = false;
}
}
var paseC39=true;
function funcionesC39(){
if (paseC39 == true){
puntuacionUnoR = preguntas[39].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC39 = false;
}
}
var paseD39=true;
function funcionesD39(){
if (paseD39 == true){
puntuacionUnoR = preguntas[39].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD39 = false;
}
}
var paseE39=true;
function funcionesE39(){
if (paseE39 == true){
puntuacionUnoR = preguntas[39].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE39 = false;
}
}
//----------------------------------------------
function vidas39(){
if(conteoVidas == 0){
document.getElementById("vida39A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida39B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida39C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA40=true;
function funcionesA40(){
if (paseA40 == true){
puntuacionUnoR = preguntas[40].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA40 = false;
}
}
var paseB40=true;
function funcionesB40(){
if (paseB40 == true){
puntuacionUnoR = preguntas[40].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB40 = false;
}
}
var paseC40=true;
function funcionesC40(){
if (paseC40 == true){
puntuacionUnoR = preguntas[40].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC40 = false;
}
}
var paseD40=true;
function funcionesD40(){
if (paseD40 == true){
puntuacionUnoR = preguntas[40].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD40 = false;
}
}
var paseE40=true;
function funcionesE40(){
if (paseE40 == true){
puntuacionUnoR = preguntas[40].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE40 = false;
}
}
//----------------------------------------------
function vidas40(){
if(conteoVidas == 0){
document.getElementById("vida40A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida40B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida40C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA41=true;
function funcionesA41(){
if (paseA41 == true){
puntuacionUnoR = preguntas[41].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA41 = false;
}
}
var paseB41=true;
function funcionesB41(){
if (paseB41 == true){
puntuacionUnoR = preguntas[41].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB41 = false;
}
}
var paseC41=true;
function funcionesC41(){
if (paseC41 == true){
puntuacionUnoR = preguntas[41].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC41 = false;
}
}
var paseD41=true;
function funcionesD41(){
if (paseD41 == true){
puntuacionUnoR = preguntas[41].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD41 = false;
}
}
var paseE41=true;
function funcionesE41(){
if (paseE41 == true){
puntuacionUnoR = preguntas[41].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE41 = false;
}
}
//----------------------------------------------
function vidas41(){
if(conteoVidas == 0){
document.getElementById("vida41A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida41B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida41C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA42=true;
function funcionesA42(){
if (paseA42 == true){
puntuacionUnoR = preguntas[42].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA42 = false;
}
}
var paseB42=true;
function funcionesB42(){
if (paseB42 == true){
puntuacionUnoR = preguntas[42].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB42 = false;
}
}
var paseC42=true;
function funcionesC42(){
if (paseC42 == true){
puntuacionUnoR = preguntas[42].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC42 = false;
}
}
var paseD42=true;
function funcionesD42(){
if (paseD42 == true){
puntuacionUnoR = preguntas[42].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD42 = false;
}
}
var paseE42=true;
function funcionesE42(){
if (paseE42 == true){
puntuacionUnoR = preguntas[42].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE42 = false;
}
}
//----------------------------------------------
function vidas42(){
if(conteoVidas == 0){
document.getElementById("vida42A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida42B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida42C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA43=true;
function funcionesA43(){
if (paseA43 == true){
puntuacionUnoR = preguntas[43].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA43 = false;
}
}
var paseB43=true;
function funcionesB43(){
if (paseB43 == true){
puntuacionUnoR = preguntas[43].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB43 = false;
}
}
var paseC43=true;
function funcionesC43(){
if (paseC43 == true){
puntuacionUnoR = preguntas[43].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC43 = false;
}
}
var paseD43=true;
function funcionesD43(){
if (paseD43 == true){
puntuacionUnoR = preguntas[43].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD43 = false;
}
}
var paseE43=true;
function funcionesE43(){
if (paseE43 == true){
puntuacionUnoR = preguntas[43].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE43 = false;
}
}
//----------------------------------------------
function vidas43(){
if(conteoVidas == 0){
document.getElementById("vida43A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida43B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida43C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA44=true;
function funcionesA44(){
if (paseA44 == true){
puntuacionUnoR = preguntas[44].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA44 = false;
}
}
var paseB44=true;
function funcionesB44(){
if (paseB44 == true){
puntuacionUnoR = preguntas[44].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB44 = false;
}
}
var paseC44=true;
function funcionesC44(){
if (paseC44 == true){
puntuacionUnoR = preguntas[44].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC44 = false;
}
}
var paseD44=true;
function funcionesD44(){
if (paseD44 == true){
puntuacionUnoR = preguntas[44].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD44 = false;
}
}
var paseE44=true;
function funcionesE44(){
if (paseE44 == true){
puntuacionUnoR = preguntas[44].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE44 = false;
}
}
//----------------------------------------------
function vidas44(){
if(conteoVidas == 0){
document.getElementById("vida44A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida44B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida44C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA45=true;
function funcionesA45(){
if (paseA45 == true){
puntuacionUnoR = preguntas[45].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA45 = false;
}
}
var paseB45=true;
function funcionesB45(){
if (paseB45 == true){
puntuacionUnoR = preguntas[45].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB45 = false;
}
}
var paseC45=true;
function funcionesC45(){
if (paseC45 == true){
puntuacionUnoR = preguntas[45].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC45 = false;
}
}
var paseD45=true;
function funcionesD45(){
if (paseD45 == true){
puntuacionUnoR = preguntas[45].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD45 = false;
}
}
var paseE45=true;
function funcionesE45(){
if (paseE45 == true){
puntuacionUnoR = preguntas[45].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE45 = false;
}
}
//----------------------------------------------
function vidas45(){
if(conteoVidas == 0){
document.getElementById("vida45A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida45B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida45C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA46=true;
function funcionesA46(){
if (paseA46 == true){
puntuacionUnoR = preguntas[46].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA46 = false;
}
}
var paseB46=true;
function funcionesB46(){
if (paseB46 == true){
puntuacionUnoR = preguntas[46].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB46 = false;
}
}
var paseC46=true;
function funcionesC46(){
if (paseC46 == true){
puntuacionUnoR = preguntas[46].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC46 = false;
}
}
var paseD46=true;
function funcionesD46(){
if (paseD46 == true){
puntuacionUnoR = preguntas[46].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD46 = false;
}
}
var paseE46=true;
function funcionesE46(){
if (paseE46 == true){
puntuacionUnoR = preguntas[46].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE46 = false;
}
}
//----------------------------------------------
function vidas46(){
if(conteoVidas == 0){
document.getElementById("vida46A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida46B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida46C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA47=true;
function funcionesA47(){
if (paseA47 == true){
puntuacionUnoR = preguntas[47].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA47 = false;
}
}
var paseB47=true;
function funcionesB47(){
if (paseB47 == true){
puntuacionUnoR = preguntas[47].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB47 = false;
}
}
var paseC47=true;
function funcionesC47(){
if (paseC47 == true){
puntuacionUnoR = preguntas[47].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC47 = false;
}
}
var paseD47=true;
function funcionesD47(){
if (paseD47 == true){
puntuacionUnoR = preguntas[47].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD47 = false;
}
}
var paseE47=true;
function funcionesE47(){
if (paseE47 == true){
puntuacionUnoR = preguntas[47].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE47 = false;
}
}
//----------------------------------------------
function vidas47(){
if(conteoVidas == 0){
document.getElementById("vida47A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida47B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida47C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA48=true;
function funcionesA48(){
if (paseA48 == true){
puntuacionUnoR = preguntas[48].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA48 = false;
}
}
var paseB48=true;
function funcionesB48(){
if (paseB48 == true){
puntuacionUnoR = preguntas[48].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB48 = false;
}
}
var paseC48=true;
function funcionesC48(){
if (paseC48 == true){
puntuacionUnoR = preguntas[48].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC48 = false;
}
}
var paseD48=true;
function funcionesD48(){
if (paseD48 == true){
puntuacionUnoR = preguntas[48].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD48 = false;
}
}
var paseE48=true;
function funcionesE48(){
if (paseE48 == true){
puntuacionUnoR = preguntas[48].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE48 = false;
}
}
//----------------------------------------------
function vidas48(){
if(conteoVidas == 0){
document.getElementById("vida48A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida48B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida48C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA49=true;
function funcionesA49(){
if (paseA49 == true){
puntuacionUnoR = preguntas[49].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA49 = false;
}
}
var paseB49=true;
function funcionesB49(){
if (paseB49 == true){
puntuacionUnoR = preguntas[49].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB49 = false;
}
}
var paseC49=true;
function funcionesC49(){
if (paseC49 == true){
puntuacionUnoR = preguntas[49].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC49 = false;
}
}
var paseD49=true;
function funcionesD49(){
if (paseD49 == true){
puntuacionUnoR = preguntas[49].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD49 = false;
}
}
var paseE49=true;
function funcionesE49(){
if (paseE49 == true){
puntuacionUnoR = preguntas[49].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE49 = false;
}
}
//----------------------------------------------
function vidas49(){
if(conteoVidas == 0){
document.getElementById("vida49A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida49B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida49C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA50=true;
function funcionesA50(){
if (paseA50 == true){
puntuacionUnoR = preguntas[50].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA50 = false;
}
}
var paseB50=true;
function funcionesB50(){
if (paseB50 == true){
puntuacionUnoR = preguntas[50].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB50 = false;
}
}
var paseC50=true;
function funcionesC50(){
if (paseC50 == true){
puntuacionUnoR = preguntas[50].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC50 = false;
}
}
var paseD50=true;
function funcionesD50(){
if (paseD50 == true){
puntuacionUnoR = preguntas[50].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD50 = false;
}
}
var paseE50=true;
function funcionesE50(){
if (paseE50 == true){
puntuacionUnoR = preguntas[50].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE50 = false;
}
}
//----------------------------------------------
function vidas50(){
if(conteoVidas == 0){
document.getElementById("vida50A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida50B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida50C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA51=true;
function funcionesA51(){
if (paseA51 == true){
puntuacionUnoR = preguntas[51].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA51 = false;
}
}
var paseB51=true;
function funcionesB51(){
if (paseB51 == true){
puntuacionUnoR = preguntas[51].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB51 = false;
}
}
var paseC51=true;
function funcionesC51(){
if (paseC51 == true){
puntuacionUnoR = preguntas[51].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC51 = false;
}
}
var paseD51=true;
function funcionesD51(){
if (paseD51 == true){
puntuacionUnoR = preguntas[51].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD51 = false;
}
}
var paseE51=true;
function funcionesE51(){
if (paseE51 == true){
puntuacionUnoR = preguntas[51].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE51 = false;
}
}
//----------------------------------------------
function vidas51(){
if(conteoVidas == 0){
document.getElementById("vida51A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida51B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida51C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA52=true;
function funcionesA52(){
if (paseA52 == true){
puntuacionUnoR = preguntas[52].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA52 = false;
}
}
var paseB52=true;
function funcionesB52(){
if (paseB52 == true){
puntuacionUnoR = preguntas[52].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB52 = false;
}
}
var paseC52=true;
function funcionesC52(){
if (paseC52 == true){
puntuacionUnoR = preguntas[52].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC52 = false;
}
}
var paseD52=true;
function funcionesD52(){
if (paseD52 == true){
puntuacionUnoR = preguntas[52].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD52 = false;
}
}
var paseE52=true;
function funcionesE52(){
if (paseE52 == true){
puntuacionUnoR = preguntas[52].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE52 = false;
}
}
//----------------------------------------------
function vidas52(){
if(conteoVidas == 0){
document.getElementById("vida52A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida52B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida52C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA53=true;
function funcionesA53(){
if (paseA53 == true){
puntuacionUnoR = preguntas[53].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA53 = false;
}
}
var paseB53=true;
function funcionesB53(){
if (paseB53 == true){
puntuacionUnoR = preguntas[53].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB53 = false;
}
}
var paseC53=true;
function funcionesC53(){
if (paseC53 == true){
puntuacionUnoR = preguntas[53].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC53 = false;
}
}
var paseD53=true;
function funcionesD53(){
if (paseD53 == true){
puntuacionUnoR = preguntas[53].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD53 = false;
}
}
var paseE53=true;
function funcionesE53(){
if (paseE53 == true){
puntuacionUnoR = preguntas[53].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE53 = false;
}
}
//----------------------------------------------
function vidas53(){
if(conteoVidas == 0){
document.getElementById("vida53A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida53B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida53C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA54=true;
function funcionesA54(){
if (paseA54 == true){
puntuacionUnoR = preguntas[54].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA54 = false;
}
}
var paseB54=true;
function funcionesB54(){
if (paseB54 == true){
puntuacionUnoR = preguntas[54].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB54 = false;
}
}
var paseC54=true;
function funcionesC54(){
if (paseC54 == true){
puntuacionUnoR = preguntas[54].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC54 = false;
}
}
var paseD54=true;
function funcionesD54(){
if (paseD54 == true){
puntuacionUnoR = preguntas[54].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD54 = false;
}
}
var paseE54=true;
function funcionesE54(){
if (paseE54 == true){
puntuacionUnoR = preguntas[54].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE54 = false;
}
}
//----------------------------------------------
function vidas54(){
if(conteoVidas == 0){
document.getElementById("vida54A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida54B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida54C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA55=true;
function funcionesA55(){
if (paseA55 == true){
puntuacionUnoR = preguntas[55].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA55 = false;
}
}
var paseB55=true;
function funcionesB55(){
if (paseB55 == true){
puntuacionUnoR = preguntas[55].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB55 = false;
}
}
var paseC55=true;
function funcionesC55(){
if (paseC55 == true){
puntuacionUnoR = preguntas[55].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC55 = false;
}
}
var paseD55=true;
function funcionesD55(){
if (paseD55 == true){
puntuacionUnoR = preguntas[55].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD55 = false;
}
}
var paseE55=true;
function funcionesE55(){
if (paseE55 == true){
puntuacionUnoR = preguntas[55].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE55 = false;
}
}
//----------------------------------------------
function vidas55(){
if(conteoVidas == 0){
document.getElementById("vida55A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida55B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida55C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA56=true;
function funcionesA56(){
if (paseA56 == true){
puntuacionUnoR = preguntas[56].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA56 = false;
}
}
var paseB56=true;
function funcionesB56(){
if (paseB56 == true){
puntuacionUnoR = preguntas[56].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB56 = false;
}
}
var paseC56=true;
function funcionesC56(){
if (paseC56 == true){
puntuacionUnoR = preguntas[56].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC56 = false;
}
}
var paseD56=true;
function funcionesD56(){
if (paseD56 == true){
puntuacionUnoR = preguntas[56].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD56 = false;
}
}
var paseE56=true;
function funcionesE56(){
if (paseE56 == true){
puntuacionUnoR = preguntas[56].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE56 = false;
}
}
//----------------------------------------------
function vidas56(){
if(conteoVidas == 0){
document.getElementById("vida56A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida56B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida56C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA57=true;
function funcionesA57(){
if (paseA57 == true){
puntuacionUnoR = preguntas[57].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA57 = false;
}
}
var paseB57=true;
function funcionesB57(){
if (paseB57 == true){
puntuacionUnoR = preguntas[57].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB57 = false;
}
}
var paseC57=true;
function funcionesC57(){
if (paseC57 == true){
puntuacionUnoR = preguntas[57].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC57 = false;
}
}
var paseD57=true;
function funcionesD57(){
if (paseD57 == true){
puntuacionUnoR = preguntas[57].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD57 = false;
}
}
var paseE57=true;
function funcionesE57(){
if (paseE57 == true){
puntuacionUnoR = preguntas[57].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE57 = false;
}
}
//----------------------------------------------
function vidas57(){
if(conteoVidas == 0){
document.getElementById("vida57A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida57B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida57C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA58=true;
function funcionesA58(){
if (paseA58 == true){
puntuacionUnoR = preguntas[58].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA58 = false;
}
}
var paseB58=true;
function funcionesB58(){
if (paseB58 == true){
puntuacionUnoR = preguntas[58].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB58 = false;
}
}
var paseC58=true;
function funcionesC58(){
if (paseC58 == true){
puntuacionUnoR = preguntas[58].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC58 = false;
}
}
var paseD58=true;
function funcionesD58(){
if (paseD58 == true){
puntuacionUnoR = preguntas[58].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD58 = false;
}
}
var paseE58=true;
function funcionesE58(){
if (paseE58 == true){
puntuacionUnoR = preguntas[58].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE58 = false;
}
}
//----------------------------------------------
function vidas58(){
if(conteoVidas == 0){
document.getElementById("vida58A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida58B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida58C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA59=true;
function funcionesA59(){
if (paseA59 == true){
puntuacionUnoR = preguntas[59].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA59 = false;
}
}
var paseB59=true;
function funcionesB59(){
if (paseB59 == true){
puntuacionUnoR = preguntas[59].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB59 = false;
}
}
var paseC59=true;
function funcionesC59(){
if (paseC59 == true){
puntuacionUnoR = preguntas[59].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC59 = false;
}
}
var paseD59=true;
function funcionesD59(){
if (paseD59 == true){
puntuacionUnoR = preguntas[59].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD59 = false;
}
}
var paseE59=true;
function funcionesE59(){
if (paseE59 == true){
puntuacionUnoR = preguntas[59].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE59 = false;
}
}
//----------------------------------------------
function vidas59(){
if(conteoVidas == 0){
document.getElementById("vida59A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida59B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida59C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA60=true;
function funcionesA60(){
if (paseA60 == true){
puntuacionUnoR = preguntas[60].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA60 = false;
}
}
var paseB60=true;
function funcionesB60(){
if (paseB60 == true){
puntuacionUnoR = preguntas[60].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB60 = false;
}
}
var paseC60=true;
function funcionesC60(){
if (paseC60 == true){
puntuacionUnoR = preguntas[60].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC60 = false;
}
}
var paseD60=true;
function funcionesD60(){
if (paseD60 == true){
puntuacionUnoR = preguntas[60].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD60 = false;
}
}
var paseE60=true;
function funcionesE60(){
if (paseE60 == true){
puntuacionUnoR = preguntas[60].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE60 = false;
}
}
//----------------------------------------------
function vidas60(){
if(conteoVidas == 0){
document.getElementById("vida60A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida60B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida60C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA61=true;
function funcionesA61(){
if (paseA61 == true){
puntuacionUnoR = preguntas[61].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA61 = false;
}
}
var paseB61=true;
function funcionesB61(){
if (paseB61 == true){
puntuacionUnoR = preguntas[61].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB61 = false;
}
}
var paseC61=true;
function funcionesC61(){
if (paseC61 == true){
puntuacionUnoR = preguntas[61].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC61 = false;
}
}
var paseD61=true;
function funcionesD61(){
if (paseD61 == true){
puntuacionUnoR = preguntas[61].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD61 = false;
}
}
var paseE61=true;
function funcionesE61(){
if (paseE61 == true){
puntuacionUnoR = preguntas[61].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE61 = false;
}
}
//----------------------------------------------
function vidas61(){
if(conteoVidas == 0){
document.getElementById("vida61A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida61B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida61C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA62=true;
function funcionesA62(){
if (paseA62 == true){
puntuacionUnoR = preguntas[62].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA62 = false;
}
}
var paseB62=true;
function funcionesB62(){
if (paseB62 == true){
puntuacionUnoR = preguntas[62].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB62 = false;
}
}
var paseC62=true;
function funcionesC62(){
if (paseC62 == true){
puntuacionUnoR = preguntas[62].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC62 = false;
}
}
var paseD62=true;
function funcionesD62(){
if (paseD62 == true){
puntuacionUnoR = preguntas[62].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD62 = false;
}
}
var paseE62=true;
function funcionesE62(){
if (paseE62 == true){
puntuacionUnoR = preguntas[62].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE62 = false;
}
}
//----------------------------------------------
function vidas62(){
if(conteoVidas == 0){
document.getElementById("vida62A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida62B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida62C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA63=true;
function funcionesA63(){
if (paseA63 == true){
puntuacionUnoR = preguntas[63].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA63 = false;
}
}
var paseB63=true;
function funcionesB63(){
if (paseB63 == true){
puntuacionUnoR = preguntas[63].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB63 = false;
}
}
var paseC63=true;
function funcionesC63(){
if (paseC63 == true){
puntuacionUnoR = preguntas[63].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC63 = false;
}
}
var paseD63=true;
function funcionesD63(){
if (paseD63 == true){
puntuacionUnoR = preguntas[63].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD63 = false;
}
}
var paseE63=true;
function funcionesE63(){
if (paseE63 == true){
puntuacionUnoR = preguntas[63].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE63 = false;
}
}
//----------------------------------------------
function vidas63(){
if(conteoVidas == 0){
document.getElementById("vida63A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida63B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida63C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA64=true;
function funcionesA64(){
if (paseA64 == true){
puntuacionUnoR = preguntas[64].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA64 = false;
}
}
var paseB64=true;
function funcionesB64(){
if (paseB64 == true){
puntuacionUnoR = preguntas[64].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB64 = false;
}
}
var paseC64=true;
function funcionesC64(){
if (paseC64 == true){
puntuacionUnoR = preguntas[64].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC64 = false;
}
}
var paseD64=true;
function funcionesD64(){
if (paseD64 == true){
puntuacionUnoR = preguntas[64].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD64 = false;
}
}
var paseE64=true;
function funcionesE64(){
if (paseE64 == true){
puntuacionUnoR = preguntas[64].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE64 = false;
}
}
//----------------------------------------------
function vidas64(){
if(conteoVidas == 0){
document.getElementById("vida64A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida64B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida64C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA65=true;
function funcionesA65(){
if (paseA65 == true){
puntuacionUnoR = preguntas[65].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA65 = false;
}
}
var paseB65=true;
function funcionesB65(){
if (paseB65 == true){
puntuacionUnoR = preguntas[65].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB65 = false;
}
}
var paseC65=true;
function funcionesC65(){
if (paseC65 == true){
puntuacionUnoR = preguntas[65].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC65 = false;
}
}
var paseD65=true;
function funcionesD65(){
if (paseD65 == true){
puntuacionUnoR = preguntas[65].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD65 = false;
}
}
var paseE65=true;
function funcionesE65(){
if (paseE65 == true){
puntuacionUnoR = preguntas[65].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE65 = false;
}
}
//----------------------------------------------
function vidas65(){
if(conteoVidas == 0){
document.getElementById("vida65A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida65B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida65C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA66=true;
function funcionesA66(){
if (paseA66 == true){
puntuacionUnoR = preguntas[66].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA66 = false;
}
}
var paseB66=true;
function funcionesB66(){
if (paseB66 == true){
puntuacionUnoR = preguntas[66].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB66 = false;
}
}
var paseC66=true;
function funcionesC66(){
if (paseC66 == true){
puntuacionUnoR = preguntas[66].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC66 = false;
}
}
var paseD66=true;
function funcionesD66(){
if (paseD66 == true){
puntuacionUnoR = preguntas[66].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD66 = false;
}
}
var paseE66=true;
function funcionesE66(){
if (paseE66 == true){
puntuacionUnoR = preguntas[66].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE66 = false;
}
}
//----------------------------------------------
function vidas66(){
if(conteoVidas == 0){
document.getElementById("vida66A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida66B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida66C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA67=true;
function funcionesA67(){
if (paseA67 == true){
puntuacionUnoR = preguntas[67].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA67 = false;
}
}
var paseB67=true;
function funcionesB67(){
if (paseB67 == true){
puntuacionUnoR = preguntas[67].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB67 = false;
}
}
var paseC67=true;
function funcionesC67(){
if (paseC67 == true){
puntuacionUnoR = preguntas[67].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC67 = false;
}
}
var paseD67=true;
function funcionesD67(){
if (paseD67 == true){
puntuacionUnoR = preguntas[67].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD67 = false;
}
}
var paseE67=true;
function funcionesE67(){
if (paseE67 == true){
puntuacionUnoR = preguntas[67].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE67 = false;
}
}
//----------------------------------------------
function vidas67(){
if(conteoVidas == 0){
document.getElementById("vida67A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida67B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida67C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA68=true;
function funcionesA68(){
if (paseA68 == true){
puntuacionUnoR = preguntas[68].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA68 = false;
}
}
var paseB68=true;
function funcionesB68(){
if (paseB68 == true){
puntuacionUnoR = preguntas[68].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB68 = false;
}
}
var paseC68=true;
function funcionesC68(){
if (paseC68 == true){
puntuacionUnoR = preguntas[68].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC68 = false;
}
}
var paseD68=true;
function funcionesD68(){
if (paseD68 == true){
puntuacionUnoR = preguntas[68].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD68 = false;
}
}
var paseE68=true;
function funcionesE68(){
if (paseE68 == true){
puntuacionUnoR = preguntas[68].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE68 = false;
}
}
//----------------------------------------------
function vidas68(){
if(conteoVidas == 0){
document.getElementById("vida68A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida68B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida68C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA69=true;
function funcionesA69(){
if (paseA69 == true){
puntuacionUnoR = preguntas[69].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA69 = false;
}
}
var paseB69=true;
function funcionesB69(){
if (paseB69 == true){
puntuacionUnoR = preguntas[69].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB69 = false;
}
}
var paseC69=true;
function funcionesC69(){
if (paseC69 == true){
puntuacionUnoR = preguntas[69].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC69 = false;
}
}
var paseD69=true;
function funcionesD69(){
if (paseD69 == true){
puntuacionUnoR = preguntas[69].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD69 = false;
}
}
var paseE69=true;
function funcionesE69(){
if (paseE69 == true){
puntuacionUnoR = preguntas[69].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE69 = false;
}
}
//----------------------------------------------
function vidas69(){
if(conteoVidas == 0){
document.getElementById("vida69A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida69B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida69C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA70=true;
function funcionesA70(){
if (paseA70 == true){
puntuacionUnoR = preguntas[70].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA70 = false;
}
}
var paseB70=true;
function funcionesB70(){
if (paseB70 == true){
puntuacionUnoR = preguntas[70].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB70 = false;
}
}
var paseC70=true;
function funcionesC70(){
if (paseC70 == true){
puntuacionUnoR = preguntas[70].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC70 = false;
}
}
var paseD70=true;
function funcionesD70(){
if (paseD70 == true){
puntuacionUnoR = preguntas[70].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD70 = false;
}
}
var paseE70=true;
function funcionesE70(){
if (paseE70 == true){
puntuacionUnoR = preguntas[70].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE70 = false;
}
}
//----------------------------------------------
function vidas70(){
if(conteoVidas == 0){
document.getElementById("vida70A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida70B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida70C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA71=true;
function funcionesA71(){
if (paseA71 == true){
puntuacionUnoR = preguntas[71].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA71 = false;
}
}
var paseB71=true;
function funcionesB71(){
if (paseB71 == true){
puntuacionUnoR = preguntas[71].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB71 = false;
}
}
var paseC71=true;
function funcionesC71(){
if (paseC71 == true){
puntuacionUnoR = preguntas[71].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC71 = false;
}
}
var paseD71=true;
function funcionesD71(){
if (paseD71 == true){
puntuacionUnoR = preguntas[71].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD71 = false;
}
}
var paseE71=true;
function funcionesE71(){
if (paseE71 == true){
puntuacionUnoR = preguntas[71].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE71 = false;
}
}
//----------------------------------------------
function vidas71(){
if(conteoVidas == 0){
document.getElementById("vida71A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida71B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida71C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA72=true;
function funcionesA72(){
if (paseA72 == true){
puntuacionUnoR = preguntas[72].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA72 = false;
}
}
var paseB72=true;
function funcionesB72(){
if (paseB72 == true){
puntuacionUnoR = preguntas[72].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB72 = false;
}
}
var paseC72=true;
function funcionesC72(){
if (paseC72 == true){
puntuacionUnoR = preguntas[72].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC72 = false;
}
}
var paseD72=true;
function funcionesD72(){
if (paseD72 == true){
puntuacionUnoR = preguntas[72].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD72 = false;
}
}
var paseE72=true;
function funcionesE72(){
if (paseE72 == true){
puntuacionUnoR = preguntas[72].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE72 = false;
}
}
//----------------------------------------------
function vidas72(){
if(conteoVidas == 0){
document.getElementById("vida72A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida72B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida72C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA73=true;
function funcionesA73(){
if (paseA73 == true){
puntuacionUnoR = preguntas[73].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA73 = false;
}
}
var paseB73=true;
function funcionesB73(){
if (paseB73 == true){
puntuacionUnoR = preguntas[73].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB73 = false;
}
}
var paseC73=true;
function funcionesC73(){
if (paseC73 == true){
puntuacionUnoR = preguntas[73].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC73 = false;
}
}
var paseD73=true;
function funcionesD73(){
if (paseD73 == true){
puntuacionUnoR = preguntas[73].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD73 = false;
}
}
var paseE73=true;
function funcionesE73(){
if (paseE73 == true){
puntuacionUnoR = preguntas[73].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE73 = false;
}
}
//----------------------------------------------
function vidas73(){
if(conteoVidas == 0){
document.getElementById("vida73A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida73B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida73C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA74=true;
function funcionesA74(){
if (paseA74 == true){
puntuacionUnoR = preguntas[74].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA74 = false;
}
}
var paseB74=true;
function funcionesB74(){
if (paseB74 == true){
puntuacionUnoR = preguntas[74].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB74 = false;
}
}
var paseC74=true;
function funcionesC74(){
if (paseC74 == true){
puntuacionUnoR = preguntas[74].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC74 = false;
}
}
var paseD74=true;
function funcionesD74(){
if (paseD74 == true){
puntuacionUnoR = preguntas[74].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD74 = false;
}
}
var paseE74=true;
function funcionesE74(){
if (paseE74 == true){
puntuacionUnoR = preguntas[74].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE74 = false;
}
}
//----------------------------------------------
function vidas74(){
if(conteoVidas == 0){
document.getElementById("vida74A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida74B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida74C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA75=true;
function funcionesA75(){
if (paseA75 == true){
puntuacionUnoR = preguntas[75].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA75 = false;
}
}
var paseB75=true;
function funcionesB75(){
if (paseB75 == true){
puntuacionUnoR = preguntas[75].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB75 = false;
}
}
var paseC75=true;
function funcionesC75(){
if (paseC75 == true){
puntuacionUnoR = preguntas[75].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC75 = false;
}
}
var paseD75=true;
function funcionesD75(){
if (paseD75 == true){
puntuacionUnoR = preguntas[75].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD75 = false;
}
}
var paseE75=true;
function funcionesE75(){
if (paseE75 == true){
puntuacionUnoR = preguntas[75].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE75 = false;
}
}
//----------------------------------------------
function vidas75(){
if(conteoVidas == 0){
document.getElementById("vida75A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida75B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida75C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA76=true;
function funcionesA76(){
if (paseA76 == true){
puntuacionUnoR = preguntas[76].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA76 = false;
}
}
var paseB76=true;
function funcionesB76(){
if (paseB76 == true){
puntuacionUnoR = preguntas[76].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB76 = false;
}
}
var paseC76=true;
function funcionesC76(){
if (paseC76 == true){
puntuacionUnoR = preguntas[76].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC76 = false;
}
}
var paseD76=true;
function funcionesD76(){
if (paseD76 == true){
puntuacionUnoR = preguntas[76].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD76 = false;
}
}
var paseE76=true;
function funcionesE76(){
if (paseE76 == true){
puntuacionUnoR = preguntas[76].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE76 = false;
}
}
//----------------------------------------------
function vidas76(){
if(conteoVidas == 0){
document.getElementById("vida76A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida76B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida76C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA77=true;
function funcionesA77(){
if (paseA77 == true){
puntuacionUnoR = preguntas[77].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA77 = false;
}
}
var paseB77=true;
function funcionesB77(){
if (paseB77 == true){
puntuacionUnoR = preguntas[77].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB77 = false;
}
}
var paseC77=true;
function funcionesC77(){
if (paseC77 == true){
puntuacionUnoR = preguntas[77].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC77 = false;
}
}
var paseD77=true;
function funcionesD77(){
if (paseD77 == true){
puntuacionUnoR = preguntas[77].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD77 = false;
}
}
var paseE77=true;
function funcionesE77(){
if (paseE77 == true){
puntuacionUnoR = preguntas[77].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE77 = false;
}
}
//----------------------------------------------
function vidas77(){
if(conteoVidas == 0){
document.getElementById("vida77A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida77B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida77C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA78=true;
function funcionesA78(){
if (paseA78 == true){
puntuacionUnoR = preguntas[78].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA78 = false;
}
}
var paseB78=true;
function funcionesB78(){
if (paseB78 == true){
puntuacionUnoR = preguntas[78].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB78 = false;
}
}
var paseC78=true;
function funcionesC78(){
if (paseC78 == true){
puntuacionUnoR = preguntas[78].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC78 = false;
}
}
var paseD78=true;
function funcionesD78(){
if (paseD78 == true){
puntuacionUnoR = preguntas[78].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD78 = false;
}
}
var paseE78=true;
function funcionesE78(){
if (paseE78 == true){
puntuacionUnoR = preguntas[78].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE78 = false;
}
}
//----------------------------------------------
function vidas78(){
if(conteoVidas == 0){
document.getElementById("vida78A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida78B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida78C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA79=true;
function funcionesA79(){
if (paseA79 == true){
puntuacionUnoR = preguntas[79].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA79 = false;
}
}
var paseB79=true;
function funcionesB79(){
if (paseB79 == true){
puntuacionUnoR = preguntas[79].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB79 = false;
}
}
var paseC79=true;
function funcionesC79(){
if (paseC79 == true){
puntuacionUnoR = preguntas[79].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC79 = false;
}
}
var paseD79=true;
function funcionesD79(){
if (paseD79 == true){
puntuacionUnoR = preguntas[79].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD79 = false;
}
}
var paseE79=true;
function funcionesE79(){
if (paseE79 == true){
puntuacionUnoR = preguntas[79].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE79 = false;
}
}
//----------------------------------------------
function vidas79(){
if(conteoVidas == 0){
document.getElementById("vida79A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida79B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida79C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA80=true;
function funcionesA80(){
if (paseA80 == true){
puntuacionUnoR = preguntas[80].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA80 = false;
}
}
var paseB80=true;
function funcionesB80(){
if (paseB80 == true){
puntuacionUnoR = preguntas[80].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB80 = false;
}
}
var paseC80=true;
function funcionesC80(){
if (paseC80 == true){
puntuacionUnoR = preguntas[80].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC80 = false;
}
}
var paseD80=true;
function funcionesD80(){
if (paseD80 == true){
puntuacionUnoR = preguntas[80].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD80 = false;
}
}
var paseE80=true;
function funcionesE80(){
if (paseE80 == true){
puntuacionUnoR = preguntas[80].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE80 = false;
}
}
//----------------------------------------------
function vidas80(){
if(conteoVidas == 0){
document.getElementById("vida80A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida80B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida80C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA81=true;
function funcionesA81(){
if (paseA81 == true){
puntuacionUnoR = preguntas[81].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA81 = false;
}
}
var paseB81=true;
function funcionesB81(){
if (paseB81 == true){
puntuacionUnoR = preguntas[81].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB81 = false;
}
}
var paseC81=true;
function funcionesC81(){
if (paseC81 == true){
puntuacionUnoR = preguntas[81].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC81 = false;
}
}
var paseD81=true;
function funcionesD81(){
if (paseD81 == true){
puntuacionUnoR = preguntas[81].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD81 = false;
}
}
var paseE81=true;
function funcionesE81(){
if (paseE81 == true){
puntuacionUnoR = preguntas[81].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE81 = false;
}
}
//----------------------------------------------
function vidas81(){
if(conteoVidas == 0){
document.getElementById("vida81A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida81B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida81C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA82=true;
function funcionesA82(){
if (paseA82 == true){
puntuacionUnoR = preguntas[82].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA82 = false;
}
}
var paseB82=true;
function funcionesB82(){
if (paseB82 == true){
puntuacionUnoR = preguntas[82].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB82 = false;
}
}
var paseC82=true;
function funcionesC82(){
if (paseC82 == true){
puntuacionUnoR = preguntas[82].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC82 = false;
}
}
var paseD82=true;
function funcionesD82(){
if (paseD82 == true){
puntuacionUnoR = preguntas[82].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD82 = false;
}
}
var paseE82=true;
function funcionesE82(){
if (paseE82 == true){
puntuacionUnoR = preguntas[82].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE82 = false;
}
}
//----------------------------------------------
function vidas82(){
if(conteoVidas == 0){
document.getElementById("vida82A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida82B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida82C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA83=true;
function funcionesA83(){
if (paseA83 == true){
puntuacionUnoR = preguntas[83].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA83 = false;
}
}
var paseB83=true;
function funcionesB83(){
if (paseB83 == true){
puntuacionUnoR = preguntas[83].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB83 = false;
}
}
var paseC83=true;
function funcionesC83(){
if (paseC83 == true){
puntuacionUnoR = preguntas[83].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC83 = false;
}
}
var paseD83=true;
function funcionesD83(){
if (paseD83 == true){
puntuacionUnoR = preguntas[83].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD83 = false;
}
}
var paseE83=true;
function funcionesE83(){
if (paseE83 == true){
puntuacionUnoR = preguntas[83].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE83 = false;
}
}
//----------------------------------------------
function vidas83(){
if(conteoVidas == 0){
document.getElementById("vida83A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida83B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida83C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA84=true;
function funcionesA84(){
if (paseA84 == true){
puntuacionUnoR = preguntas[84].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA84 = false;
}
}
var paseB84=true;
function funcionesB84(){
if (paseB84 == true){
puntuacionUnoR = preguntas[84].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB84 = false;
}
}
var paseC84=true;
function funcionesC84(){
if (paseC84 == true){
puntuacionUnoR = preguntas[84].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC84 = false;
}
}
var paseD84=true;
function funcionesD84(){
if (paseD84 == true){
puntuacionUnoR = preguntas[84].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD84 = false;
}
}
var paseE84=true;
function funcionesE84(){
if (paseE84 == true){
puntuacionUnoR = preguntas[84].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE84 = false;
}
}
//----------------------------------------------
function vidas84(){
if(conteoVidas == 0){
document.getElementById("vida84A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida84B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida84C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA85=true;
function funcionesA85(){
if (paseA85 == true){
puntuacionUnoR = preguntas[85].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA85 = false;
}
}
var paseB85=true;
function funcionesB85(){
if (paseB85 == true){
puntuacionUnoR = preguntas[85].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB85 = false;
}
}
var paseC85=true;
function funcionesC85(){
if (paseC85 == true){
puntuacionUnoR = preguntas[85].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC85 = false;
}
}
var paseD85=true;
function funcionesD85(){
if (paseD85 == true){
puntuacionUnoR = preguntas[85].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD85 = false;
}
}
var paseE85=true;
function funcionesE85(){
if (paseE85 == true){
puntuacionUnoR = preguntas[85].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE85 = false;
}
}
//----------------------------------------------
function vidas85(){
if(conteoVidas == 0){
document.getElementById("vida85A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida85B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida85C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA86=true;
function funcionesA86(){
if (paseA86 == true){
puntuacionUnoR = preguntas[86].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA86 = false;
}
}
var paseB86=true;
function funcionesB86(){
if (paseB86 == true){
puntuacionUnoR = preguntas[86].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB86 = false;
}
}
var paseC86=true;
function funcionesC86(){
if (paseC86 == true){
puntuacionUnoR = preguntas[86].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC86 = false;
}
}
var paseD86=true;
function funcionesD86(){
if (paseD86 == true){
puntuacionUnoR = preguntas[86].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD86 = false;
}
}
var paseE86=true;
function funcionesE86(){
if (paseE86 == true){
puntuacionUnoR = preguntas[86].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE86 = false;
}
}
//----------------------------------------------
function vidas86(){
if(conteoVidas == 0){
document.getElementById("vida86A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida86B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida86C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA87=true;
function funcionesA87(){
if (paseA87 == true){
puntuacionUnoR = preguntas[87].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA87 = false;
}
}
var paseB87=true;
function funcionesB87(){
if (paseB87 == true){
puntuacionUnoR = preguntas[87].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB87 = false;
}
}
var paseC87=true;
function funcionesC87(){
if (paseC87 == true){
puntuacionUnoR = preguntas[87].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC87 = false;
}
}
var paseD87=true;
function funcionesD87(){
if (paseD87 == true){
puntuacionUnoR = preguntas[87].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD87 = false;
}
}
var paseE87=true;
function funcionesE87(){
if (paseE87 == true){
puntuacionUnoR = preguntas[87].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE87 = false;
}
}
//----------------------------------------------
function vidas87(){
if(conteoVidas == 0){
document.getElementById("vida87A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida87B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida87C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA88=true;
function funcionesA88(){
if (paseA88 == true){
puntuacionUnoR = preguntas[88].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA88 = false;
}
}
var paseB88=true;
function funcionesB88(){
if (paseB88 == true){
puntuacionUnoR = preguntas[88].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB88 = false;
}
}
var paseC88=true;
function funcionesC88(){
if (paseC88 == true){
puntuacionUnoR = preguntas[88].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC88 = false;
}
}
var paseD88=true;
function funcionesD88(){
if (paseD88 == true){
puntuacionUnoR = preguntas[88].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD88 = false;
}
}
var paseE88=true;
function funcionesE88(){
if (paseE88 == true){
puntuacionUnoR = preguntas[88].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE88 = false;
}
}
//----------------------------------------------
function vidas88(){
if(conteoVidas == 0){
document.getElementById("vida88A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida88B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida88C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA89=true;
function funcionesA89(){
if (paseA89 == true){
puntuacionUnoR = preguntas[89].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA89 = false;
}
}
var paseB89=true;
function funcionesB89(){
if (paseB89 == true){
puntuacionUnoR = preguntas[89].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB89 = false;
}
}
var paseC89=true;
function funcionesC89(){
if (paseC89 == true){
puntuacionUnoR = preguntas[89].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC89 = false;
}
}
var paseD89=true;
function funcionesD89(){
if (paseD89 == true){
puntuacionUnoR = preguntas[89].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD89 = false;
}
}
var paseE89=true;
function funcionesE89(){
if (paseE89 == true){
puntuacionUnoR = preguntas[89].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE89 = false;
}
}
//----------------------------------------------
function vidas89(){
if(conteoVidas == 0){
document.getElementById("vida89A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida89B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida89C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA90=true;
function funcionesA90(){
if (paseA90 == true){
puntuacionUnoR = preguntas[90].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA90 = false;
}
}
var paseB90=true;
function funcionesB90(){
if (paseB90 == true){
puntuacionUnoR = preguntas[90].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB90 = false;
}
}
var paseC90=true;
function funcionesC90(){
if (paseC90 == true){
puntuacionUnoR = preguntas[90].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC90 = false;
}
}
var paseD90=true;
function funcionesD90(){
if (paseD90 == true){
puntuacionUnoR = preguntas[90].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD90 = false;
}
}
var paseE90=true;
function funcionesE90(){
if (paseE90 == true){
puntuacionUnoR = preguntas[90].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE90 = false;
}
}
//----------------------------------------------
function vidas90(){
if(conteoVidas == 0){
document.getElementById("vida90A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida90B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida90C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA91=true;
function funcionesA91(){
if (paseA91 == true){
puntuacionUnoR = preguntas[91].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA91 = false;
}
}
var paseB91=true;
function funcionesB91(){
if (paseB91 == true){
puntuacionUnoR = preguntas[91].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB91 = false;
}
}
var paseC91=true;
function funcionesC91(){
if (paseC91 == true){
puntuacionUnoR = preguntas[91].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC91 = false;
}
}
var paseD91=true;
function funcionesD91(){
if (paseD91 == true){
puntuacionUnoR = preguntas[91].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD91 = false;
}
}
var paseE91=true;
function funcionesE91(){
if (paseE91 == true){
puntuacionUnoR = preguntas[91].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE91 = false;
}
}
//----------------------------------------------
function vidas91(){
if(conteoVidas == 0){
document.getElementById("vida91A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida91B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida91C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA92=true;
function funcionesA92(){
if (paseA92 == true){
puntuacionUnoR = preguntas[92].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA92 = false;
}
}
var paseB92=true;
function funcionesB92(){
if (paseB92 == true){
puntuacionUnoR = preguntas[92].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB92 = false;
}
}
var paseC92=true;
function funcionesC92(){
if (paseC92 == true){
puntuacionUnoR = preguntas[92].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC92 = false;
}
}
var paseD92=true;
function funcionesD92(){
if (paseD92 == true){
puntuacionUnoR = preguntas[92].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD92 = false;
}
}
var paseE92=true;
function funcionesE92(){
if (paseE92 == true){
puntuacionUnoR = preguntas[92].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE92 = false;
}
}
//----------------------------------------------
function vidas92(){
if(conteoVidas == 0){
document.getElementById("vida92A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida92B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida92C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA93=true;
function funcionesA93(){
if (paseA93 == true){
puntuacionUnoR = preguntas[93].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA93 = false;
}
}
var paseB93=true;
function funcionesB93(){
if (paseB93 == true){
puntuacionUnoR = preguntas[93].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB93 = false;
}
}
var paseC93=true;
function funcionesC93(){
if (paseC93 == true){
puntuacionUnoR = preguntas[93].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC93 = false;
}
}
var paseD93=true;
function funcionesD93(){
if (paseD93 == true){
puntuacionUnoR = preguntas[93].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD93 = false;
}
}
var paseE93=true;
function funcionesE93(){
if (paseE93 == true){
puntuacionUnoR = preguntas[93].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE93 = false;
}
}
//----------------------------------------------
function vidas93(){
if(conteoVidas == 0){
document.getElementById("vida93A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida93B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida93C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA94=true;
function funcionesA94(){
if (paseA94 == true){
puntuacionUnoR = preguntas[94].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA94 = false;
}
}
var paseB94=true;
function funcionesB94(){
if (paseB94 == true){
puntuacionUnoR = preguntas[94].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB94 = false;
}
}
var paseC94=true;
function funcionesC94(){
if (paseC94 == true){
puntuacionUnoR = preguntas[94].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC94 = false;
}
}
var paseD94=true;
function funcionesD94(){
if (paseD94 == true){
puntuacionUnoR = preguntas[94].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD94 = false;
}
}
var paseE94=true;
function funcionesE94(){
if (paseE94 == true){
puntuacionUnoR = preguntas[94].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE94 = false;
}
}
//----------------------------------------------
function vidas94(){
if(conteoVidas == 0){
document.getElementById("vida94A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida94B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida94C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA95=true;
function funcionesA95(){
if (paseA95 == true){
puntuacionUnoR = preguntas[95].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA95 = false;
}
}
var paseB95=true;
function funcionesB95(){
if (paseB95 == true){
puntuacionUnoR = preguntas[95].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB95 = false;
}
}
var paseC95=true;
function funcionesC95(){
if (paseC95 == true){
puntuacionUnoR = preguntas[95].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC95 = false;
}
}
var paseD95=true;
function funcionesD95(){
if (paseD95 == true){
puntuacionUnoR = preguntas[95].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD95 = false;
}
}
var paseE95=true;
function funcionesE95(){
if (paseE95 == true){
puntuacionUnoR = preguntas[95].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE95 = false;
}
}
//----------------------------------------------
function vidas95(){
if(conteoVidas == 0){
document.getElementById("vida95A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida95B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida95C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA96=true;
function funcionesA96(){
if (paseA96 == true){
puntuacionUnoR = preguntas[96].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA96 = false;
}
}
var paseB96=true;
function funcionesB96(){
if (paseB96 == true){
puntuacionUnoR = preguntas[96].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB96 = false;
}
}
var paseC96=true;
function funcionesC96(){
if (paseC96 == true){
puntuacionUnoR = preguntas[96].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC96 = false;
}
}
var paseD96=true;
function funcionesD96(){
if (paseD96 == true){
puntuacionUnoR = preguntas[96].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD96 = false;
}
}
var paseE96=true;
function funcionesE96(){
if (paseE96 == true){
puntuacionUnoR = preguntas[96].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE96 = false;
}
}
//----------------------------------------------
function vidas96(){
if(conteoVidas == 0){
document.getElementById("vida96A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida96B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida96C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA97=true;
function funcionesA97(){
if (paseA97 == true){
puntuacionUnoR = preguntas[97].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA97 = false;
}
}
var paseB97=true;
function funcionesB97(){
if (paseB97 == true){
puntuacionUnoR = preguntas[97].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB97 = false;
}
}
var paseC97=true;
function funcionesC97(){
if (paseC97 == true){
puntuacionUnoR = preguntas[97].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC97 = false;
}
}
var paseD97=true;
function funcionesD97(){
if (paseD97 == true){
puntuacionUnoR = preguntas[97].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD97 = false;
}
}
var paseE97=true;
function funcionesE97(){
if (paseE97 == true){
puntuacionUnoR = preguntas[97].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE97 = false;
}
}
//----------------------------------------------
function vidas97(){
if(conteoVidas == 0){
document.getElementById("vida97A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida97B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida97C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA98=true;
function funcionesA98(){
if (paseA98 == true){
puntuacionUnoR = preguntas[98].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA98 = false;
}
}
var paseB98=true;
function funcionesB98(){
if (paseB98 == true){
puntuacionUnoR = preguntas[98].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB98 = false;
}
}
var paseC98=true;
function funcionesC98(){
if (paseC98 == true){
puntuacionUnoR = preguntas[98].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC98 = false;
}
}
var paseD98=true;
function funcionesD98(){
if (paseD98 == true){
puntuacionUnoR = preguntas[98].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD98 = false;
}
}
var paseE98=true;
function funcionesE98(){
if (paseE98 == true){
puntuacionUnoR = preguntas[98].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE98 = false;
}
}
//----------------------------------------------
function vidas98(){
if(conteoVidas == 0){
document.getElementById("vida98A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida98B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida98C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA99=true;
function funcionesA99(){
if (paseA99 == true){
puntuacionUnoR = preguntas[99].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA99 = false;
}
}
var paseB99=true;
function funcionesB99(){
if (paseB99 == true){
puntuacionUnoR = preguntas[99].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB99 = false;
}
}
var paseC99=true;
function funcionesC99(){
if (paseC99 == true){
puntuacionUnoR = preguntas[99].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC99 = false;
}
}
var paseD99=true;
function funcionesD99(){
if (paseD99 == true){
puntuacionUnoR = preguntas[99].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD99 = false;
}
}
var paseE99=true;
function funcionesE99(){
if (paseE99 == true){
puntuacionUnoR = preguntas[99].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE99 = false;
}
}
//----------------------------------------------
function vidas99(){
if(conteoVidas == 0){
document.getElementById("vida99A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida99B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida99C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA100=true;
function funcionesA100(){
if (paseA100 == true){
puntuacionUnoR = preguntas[100].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA100 = false;
}
}
var paseB100=true;
function funcionesB100(){
if (paseB100 == true){
puntuacionUnoR = preguntas[100].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB100 = false;
}
}
var paseC100=true;
function funcionesC100(){
if (paseC100 == true){
puntuacionUnoR = preguntas[100].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC100 = false;
}
}
var paseD100=true;
function funcionesD100(){
if (paseD100 == true){
puntuacionUnoR = preguntas[100].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD100 = false;
}
}
var paseE100=true;
function funcionesE100(){
if (paseE100 == true){
puntuacionUnoR = preguntas[100].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE100 = false;
}
}
//----------------------------------------------
function vidas100(){
if(conteoVidas == 0){
document.getElementById("vida100A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida100B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida100C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA101=true;
function funcionesA101(){
if (paseA101 == true){
puntuacionUnoR = preguntas[101].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA101 = false;
}
}
var paseB101=true;
function funcionesB101(){
if (paseB101 == true){
puntuacionUnoR = preguntas[101].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB101 = false;
}
}
var paseC101=true;
function funcionesC101(){
if (paseC101 == true){
puntuacionUnoR = preguntas[101].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC101 = false;
}
}
var paseD101=true;
function funcionesD101(){
if (paseD101 == true){
puntuacionUnoR = preguntas[101].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD101 = false;
}
}
var paseE101=true;
function funcionesE101(){
if (paseE101 == true){
puntuacionUnoR = preguntas[101].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE101 = false;
}
}
//----------------------------------------------
function vidas101(){
if(conteoVidas == 0){
document.getElementById("vida101A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida101B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida101C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA102=true;
function funcionesA102(){
if (paseA102 == true){
puntuacionUnoR = preguntas[102].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA102 = false;
}
}
var paseB102=true;
function funcionesB102(){
if (paseB102 == true){
puntuacionUnoR = preguntas[102].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB102 = false;
}
}
var paseC102=true;
function funcionesC102(){
if (paseC102 == true){
puntuacionUnoR = preguntas[102].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC102 = false;
}
}
var paseD102=true;
function funcionesD102(){
if (paseD102 == true){
puntuacionUnoR = preguntas[102].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD102 = false;
}
}
var paseE102=true;
function funcionesE102(){
if (paseE102 == true){
puntuacionUnoR = preguntas[102].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE102 = false;
}
}
//----------------------------------------------
function vidas102(){
if(conteoVidas == 0){
document.getElementById("vida102A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida102B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida102C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA103=true;
function funcionesA103(){
if (paseA103 == true){
puntuacionUnoR = preguntas[103].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA103 = false;
}
}
var paseB103=true;
function funcionesB103(){
if (paseB103 == true){
puntuacionUnoR = preguntas[103].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB103 = false;
}
}
var paseC103=true;
function funcionesC103(){
if (paseC103 == true){
puntuacionUnoR = preguntas[103].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC103 = false;
}
}
var paseD103=true;
function funcionesD103(){
if (paseD103 == true){
puntuacionUnoR = preguntas[103].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD103 = false;
}
}
var paseE103=true;
function funcionesE103(){
if (paseE103 == true){
puntuacionUnoR = preguntas[103].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE103 = false;
}
}
//----------------------------------------------
function vidas103(){
if(conteoVidas == 0){
document.getElementById("vida103A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida103B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida103C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA104=true;
function funcionesA104(){
if (paseA104 == true){
puntuacionUnoR = preguntas[104].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA104 = false;
}
}
var paseB104=true;
function funcionesB104(){
if (paseB104 == true){
puntuacionUnoR = preguntas[104].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB104 = false;
}
}
var paseC104=true;
function funcionesC104(){
if (paseC104 == true){
puntuacionUnoR = preguntas[104].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC104 = false;
}
}
var paseD104=true;
function funcionesD104(){
if (paseD104 == true){
puntuacionUnoR = preguntas[104].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD104 = false;
}
}
var paseE104=true;
function funcionesE104(){
if (paseE104 == true){
puntuacionUnoR = preguntas[104].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE104 = false;
}
}
//----------------------------------------------
function vidas104(){
if(conteoVidas == 0){
document.getElementById("vida104A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida104B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida104C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA105=true;
function funcionesA105(){
if (paseA105 == true){
puntuacionUnoR = preguntas[105].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA105 = false;
}
}
var paseB105=true;
function funcionesB105(){
if (paseB105 == true){
puntuacionUnoR = preguntas[105].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB105 = false;
}
}
var paseC105=true;
function funcionesC105(){
if (paseC105 == true){
puntuacionUnoR = preguntas[105].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC105 = false;
}
}
var paseD105=true;
function funcionesD105(){
if (paseD105 == true){
puntuacionUnoR = preguntas[105].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD105 = false;
}
}
var paseE105=true;
function funcionesE105(){
if (paseE105 == true){
puntuacionUnoR = preguntas[105].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE105 = false;
}
}
//----------------------------------------------
function vidas105(){
if(conteoVidas == 0){
document.getElementById("vida105A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida105B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida105C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA106=true;
function funcionesA106(){
if (paseA106 == true){
puntuacionUnoR = preguntas[106].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA106 = false;
}
}
var paseB106=true;
function funcionesB106(){
if (paseB106 == true){
puntuacionUnoR = preguntas[106].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB106 = false;
}
}
var paseC106=true;
function funcionesC106(){
if (paseC106 == true){
puntuacionUnoR = preguntas[106].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC106 = false;
}
}
var paseD106=true;
function funcionesD106(){
if (paseD106 == true){
puntuacionUnoR = preguntas[106].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD106 = false;
}
}
var paseE106=true;
function funcionesE106(){
if (paseE106 == true){
puntuacionUnoR = preguntas[106].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE106 = false;
}
}
//----------------------------------------------
function vidas106(){
if(conteoVidas == 0){
document.getElementById("vida106A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida106B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida106C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA107=true;
function funcionesA107(){
if (paseA107 == true){
puntuacionUnoR = preguntas[107].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA107 = false;
}
}
var paseB107=true;
function funcionesB107(){
if (paseB107 == true){
puntuacionUnoR = preguntas[107].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB107 = false;
}
}
var paseC107=true;
function funcionesC107(){
if (paseC107 == true){
puntuacionUnoR = preguntas[107].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC107 = false;
}
}
var paseD107=true;
function funcionesD107(){
if (paseD107 == true){
puntuacionUnoR = preguntas[107].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD107 = false;
}
}
var paseE107=true;
function funcionesE107(){
if (paseE107 == true){
puntuacionUnoR = preguntas[107].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE107 = false;
}
}
//----------------------------------------------
function vidas107(){
if(conteoVidas == 0){
document.getElementById("vida107A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida107B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida107C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA108=true;
function funcionesA108(){
if (paseA108 == true){
puntuacionUnoR = preguntas[108].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA108 = false;
}
}
var paseB108=true;
function funcionesB108(){
if (paseB108 == true){
puntuacionUnoR = preguntas[108].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB108 = false;
}
}
var paseC108=true;
function funcionesC108(){
if (paseC108 == true){
puntuacionUnoR = preguntas[108].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC108 = false;
}
}
var paseD108=true;
function funcionesD108(){
if (paseD108 == true){
puntuacionUnoR = preguntas[108].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD108 = false;
}
}
var paseE108=true;
function funcionesE108(){
if (paseE108 == true){
puntuacionUnoR = preguntas[108].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE108 = false;
}
}
//----------------------------------------------
function vidas108(){
if(conteoVidas == 0){
document.getElementById("vida108A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida108B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida108C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA109=true;
function funcionesA109(){
if (paseA109 == true){
puntuacionUnoR = preguntas[109].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA109 = false;
}
}
var paseB109=true;
function funcionesB109(){
if (paseB109 == true){
puntuacionUnoR = preguntas[109].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB109 = false;
}
}
var paseC109=true;
function funcionesC109(){
if (paseC109 == true){
puntuacionUnoR = preguntas[109].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC109 = false;
}
}
var paseD109=true;
function funcionesD109(){
if (paseD109 == true){
puntuacionUnoR = preguntas[109].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD109 = false;
}
}
var paseE109=true;
function funcionesE109(){
if (paseE109 == true){
puntuacionUnoR = preguntas[109].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE109 = false;
}
}
//----------------------------------------------
function vidas109(){
if(conteoVidas == 0){
document.getElementById("vida109A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida109B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida109C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA110=true;
function funcionesA110(){
if (paseA110 == true){
puntuacionUnoR = preguntas[110].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA110 = false;
}
}
var paseB110=true;
function funcionesB110(){
if (paseB110 == true){
puntuacionUnoR = preguntas[110].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB110 = false;
}
}
var paseC110=true;
function funcionesC110(){
if (paseC110 == true){
puntuacionUnoR = preguntas[110].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC110 = false;
}
}
var paseD110=true;
function funcionesD110(){
if (paseD110 == true){
puntuacionUnoR = preguntas[110].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD110 = false;
}
}
var paseE110=true;
function funcionesE110(){
if (paseE110 == true){
puntuacionUnoR = preguntas[110].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE110 = false;
}
}
//----------------------------------------------
function vidas110(){
if(conteoVidas == 0){
document.getElementById("vida110A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida110B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida110C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA111=true;
function funcionesA111(){
if (paseA111 == true){
puntuacionUnoR = preguntas[111].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA111 = false;
}
}
var paseB111=true;
function funcionesB111(){
if (paseB111 == true){
puntuacionUnoR = preguntas[111].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB111 = false;
}
}
var paseC111=true;
function funcionesC111(){
if (paseC111 == true){
puntuacionUnoR = preguntas[111].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC111 = false;
}
}
var paseD111=true;
function funcionesD111(){
if (paseD111 == true){
puntuacionUnoR = preguntas[111].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD111 = false;
}
}
var paseE111=true;
function funcionesE111(){
if (paseE111 == true){
puntuacionUnoR = preguntas[111].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE111 = false;
}
}
//----------------------------------------------
function vidas111(){
if(conteoVidas == 0){
document.getElementById("vida111A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida111B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida111C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA112=true;
function funcionesA112(){
if (paseA112 == true){
puntuacionUnoR = preguntas[112].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA112 = false;
}
}
var paseB112=true;
function funcionesB112(){
if (paseB112 == true){
puntuacionUnoR = preguntas[112].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB112 = false;
}
}
var paseC112=true;
function funcionesC112(){
if (paseC112 == true){
puntuacionUnoR = preguntas[112].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC112 = false;
}
}
var paseD112=true;
function funcionesD112(){
if (paseD112 == true){
puntuacionUnoR = preguntas[112].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD112 = false;
}
}
var paseE112=true;
function funcionesE112(){
if (paseE112 == true){
puntuacionUnoR = preguntas[112].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE112 = false;
}
}
//----------------------------------------------
function vidas112(){
if(conteoVidas == 0){
document.getElementById("vida112A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida112B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida112C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA113=true;
function funcionesA113(){
if (paseA113 == true){
puntuacionUnoR = preguntas[113].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA113 = false;
}
}
var paseB113=true;
function funcionesB113(){
if (paseB113 == true){
puntuacionUnoR = preguntas[113].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB113 = false;
}
}
var paseC113=true;
function funcionesC113(){
if (paseC113 == true){
puntuacionUnoR = preguntas[113].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC113 = false;
}
}
var paseD113=true;
function funcionesD113(){
if (paseD113 == true){
puntuacionUnoR = preguntas[113].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD113 = false;
}
}
var paseE113=true;
function funcionesE113(){
if (paseE113 == true){
puntuacionUnoR = preguntas[113].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE113 = false;
}
}
//----------------------------------------------
function vidas113(){
if(conteoVidas == 0){
document.getElementById("vida113A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida113B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida113C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA114=true;
function funcionesA114(){
if (paseA114 == true){
puntuacionUnoR = preguntas[114].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA114 = false;
}
}
var paseB114=true;
function funcionesB114(){
if (paseB114 == true){
puntuacionUnoR = preguntas[114].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB114 = false;
}
}
var paseC114=true;
function funcionesC114(){
if (paseC114 == true){
puntuacionUnoR = preguntas[114].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC114 = false;
}
}
var paseD114=true;
function funcionesD114(){
if (paseD114 == true){
puntuacionUnoR = preguntas[114].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD114 = false;
}
}
var paseE114=true;
function funcionesE114(){
if (paseE114 == true){
puntuacionUnoR = preguntas[114].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE114 = false;
}
}
//----------------------------------------------
function vidas114(){
if(conteoVidas == 0){
document.getElementById("vida114A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida114B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida114C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA115=true;
function funcionesA115(){
if (paseA115 == true){
puntuacionUnoR = preguntas[115].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA115 = false;
}
}
var paseB115=true;
function funcionesB115(){
if (paseB115 == true){
puntuacionUnoR = preguntas[115].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB115 = false;
}
}
var paseC115=true;
function funcionesC115(){
if (paseC115 == true){
puntuacionUnoR = preguntas[115].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC115 = false;
}
}
var paseD115=true;
function funcionesD115(){
if (paseD115 == true){
puntuacionUnoR = preguntas[115].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD115 = false;
}
}
var paseE115=true;
function funcionesE115(){
if (paseE115 == true){
puntuacionUnoR = preguntas[115].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE115 = false;
}
}
//----------------------------------------------
function vidas115(){
if(conteoVidas == 0){
document.getElementById("vida115A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida115B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida115C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA116=true;
function funcionesA116(){
if (paseA116 == true){
puntuacionUnoR = preguntas[116].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA116 = false;
}
}
var paseB116=true;
function funcionesB116(){
if (paseB116 == true){
puntuacionUnoR = preguntas[116].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB116 = false;
}
}
var paseC116=true;
function funcionesC116(){
if (paseC116 == true){
puntuacionUnoR = preguntas[116].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC116 = false;
}
}
var paseD116=true;
function funcionesD116(){
if (paseD116 == true){
puntuacionUnoR = preguntas[116].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD116 = false;
}
}
var paseE116=true;
function funcionesE116(){
if (paseE116 == true){
puntuacionUnoR = preguntas[116].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE116 = false;
}
}
//----------------------------------------------
function vidas116(){
if(conteoVidas == 0){
document.getElementById("vida116A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida116B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida116C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA117=true;
function funcionesA117(){
if (paseA117 == true){
puntuacionUnoR = preguntas[117].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA117 = false;
}
}
var paseB117=true;
function funcionesB117(){
if (paseB117 == true){
puntuacionUnoR = preguntas[117].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB117 = false;
}
}
var paseC117=true;
function funcionesC117(){
if (paseC117 == true){
puntuacionUnoR = preguntas[117].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC117 = false;
}
}
var paseD117=true;
function funcionesD117(){
if (paseD117 == true){
puntuacionUnoR = preguntas[117].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD117 = false;
}
}
var paseE117=true;
function funcionesE117(){
if (paseE117 == true){
puntuacionUnoR = preguntas[117].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE117 = false;
}
}
//----------------------------------------------
function vidas117(){
if(conteoVidas == 0){
document.getElementById("vida117A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida117B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida117C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA118=true;
function funcionesA118(){
if (paseA118 == true){
puntuacionUnoR = preguntas[118].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA118 = false;
}
}
var paseB118=true;
function funcionesB118(){
if (paseB118 == true){
puntuacionUnoR = preguntas[118].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB118 = false;
}
}
var paseC118=true;
function funcionesC118(){
if (paseC118 == true){
puntuacionUnoR = preguntas[118].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC118 = false;
}
}
var paseD118=true;
function funcionesD118(){
if (paseD118 == true){
puntuacionUnoR = preguntas[118].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD118 = false;
}
}
var paseE118=true;
function funcionesE118(){
if (paseE118 == true){
puntuacionUnoR = preguntas[118].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE118 = false;
}
}
//----------------------------------------------
function vidas118(){
if(conteoVidas == 0){
document.getElementById("vida118A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida118B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida118C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA119=true;
function funcionesA119(){
if (paseA119 == true){
puntuacionUnoR = preguntas[119].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA119 = false;
}
}
var paseB119=true;
function funcionesB119(){
if (paseB119 == true){
puntuacionUnoR = preguntas[119].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB119 = false;
}
}
var paseC119=true;
function funcionesC119(){
if (paseC119 == true){
puntuacionUnoR = preguntas[119].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC119 = false;
}
}
var paseD119=true;
function funcionesD119(){
if (paseD119 == true){
puntuacionUnoR = preguntas[119].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD119 = false;
}
}
var paseE119=true;
function funcionesE119(){
if (paseE119 == true){
puntuacionUnoR = preguntas[119].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE119 = false;
}
}
//----------------------------------------------
function vidas119(){
if(conteoVidas == 0){
document.getElementById("vida119A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida119B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida119C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA120=true;
function funcionesA120(){
if (paseA120 == true){
puntuacionUnoR = preguntas[120].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA120 = false;
}
}
var paseB120=true;
function funcionesB120(){
if (paseB120 == true){
puntuacionUnoR = preguntas[120].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB120 = false;
}
}
var paseC120=true;
function funcionesC120(){
if (paseC120 == true){
puntuacionUnoR = preguntas[120].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC120 = false;
}
}
var paseD120=true;
function funcionesD120(){
if (paseD120 == true){
puntuacionUnoR = preguntas[120].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD120 = false;
}
}
var paseE120=true;
function funcionesE120(){
if (paseE120 == true){
puntuacionUnoR = preguntas[120].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE120 = false;
}
}
//----------------------------------------------
function vidas120(){
if(conteoVidas == 0){
document.getElementById("vida120A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida120B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida120C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA121=true;
function funcionesA121(){
if (paseA121 == true){
puntuacionUnoR = preguntas[121].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA121 = false;
}
}
var paseB121=true;
function funcionesB121(){
if (paseB121 == true){
puntuacionUnoR = preguntas[121].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB121 = false;
}
}
var paseC121=true;
function funcionesC121(){
if (paseC121 == true){
puntuacionUnoR = preguntas[121].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC121 = false;
}
}
var paseD121=true;
function funcionesD121(){
if (paseD121 == true){
puntuacionUnoR = preguntas[121].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD121 = false;
}
}
var paseE121=true;
function funcionesE121(){
if (paseE121 == true){
puntuacionUnoR = preguntas[121].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE121 = false;
}
}
//----------------------------------------------
function vidas121(){
if(conteoVidas == 0){
document.getElementById("vida121A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida121B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida121C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA122=true;
function funcionesA122(){
if (paseA122 == true){
puntuacionUnoR = preguntas[122].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA122 = false;
}
}
var paseB122=true;
function funcionesB122(){
if (paseB122 == true){
puntuacionUnoR = preguntas[122].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB122 = false;
}
}
var paseC122=true;
function funcionesC122(){
if (paseC122 == true){
puntuacionUnoR = preguntas[122].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC122 = false;
}
}
var paseD122=true;
function funcionesD122(){
if (paseD122 == true){
puntuacionUnoR = preguntas[122].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD122 = false;
}
}
var paseE122=true;
function funcionesE122(){
if (paseE122 == true){
puntuacionUnoR = preguntas[122].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE122 = false;
}
}
//----------------------------------------------
function vidas122(){
if(conteoVidas == 0){
document.getElementById("vida122A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida122B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida122C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA123=true;
function funcionesA123(){
if (paseA123 == true){
puntuacionUnoR = preguntas[123].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA123 = false;
}
}
var paseB123=true;
function funcionesB123(){
if (paseB123 == true){
puntuacionUnoR = preguntas[123].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB123 = false;
}
}
var paseC123=true;
function funcionesC123(){
if (paseC123 == true){
puntuacionUnoR = preguntas[123].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC123 = false;
}
}
var paseD123=true;
function funcionesD123(){
if (paseD123 == true){
puntuacionUnoR = preguntas[123].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD123 = false;
}
}
var paseE123=true;
function funcionesE123(){
if (paseE123 == true){
puntuacionUnoR = preguntas[123].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE123 = false;
}
}
//----------------------------------------------
function vidas123(){
if(conteoVidas == 0){
document.getElementById("vida123A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida123B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida123C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA124=true;
function funcionesA124(){
if (paseA124 == true){
puntuacionUnoR = preguntas[124].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA124 = false;
}
}
var paseB124=true;
function funcionesB124(){
if (paseB124 == true){
puntuacionUnoR = preguntas[124].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB124 = false;
}
}
var paseC124=true;
function funcionesC124(){
if (paseC124 == true){
puntuacionUnoR = preguntas[124].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC124 = false;
}
}
var paseD124=true;
function funcionesD124(){
if (paseD124 == true){
puntuacionUnoR = preguntas[124].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD124 = false;
}
}
var paseE124=true;
function funcionesE124(){
if (paseE124 == true){
puntuacionUnoR = preguntas[124].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE124 = false;
}
}
//----------------------------------------------
function vidas124(){
if(conteoVidas == 0){
document.getElementById("vida124A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida124B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida124C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA125=true;
function funcionesA125(){
if (paseA125 == true){
puntuacionUnoR = preguntas[125].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA125 = false;
}
}
var paseB125=true;
function funcionesB125(){
if (paseB125 == true){
puntuacionUnoR = preguntas[125].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB125 = false;
}
}
var paseC125=true;
function funcionesC125(){
if (paseC125 == true){
puntuacionUnoR = preguntas[125].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC125 = false;
}
}
var paseD125=true;
function funcionesD125(){
if (paseD125 == true){
puntuacionUnoR = preguntas[125].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD125 = false;
}
}
var paseE125=true;
function funcionesE125(){
if (paseE125 == true){
puntuacionUnoR = preguntas[125].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE125 = false;
}
}
//----------------------------------------------
function vidas125(){
if(conteoVidas == 0){
document.getElementById("vida125A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida125B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida125C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA126=true;
function funcionesA126(){
if (paseA126 == true){
puntuacionUnoR = preguntas[126].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA126 = false;
}
}
var paseB126=true;
function funcionesB126(){
if (paseB126 == true){
puntuacionUnoR = preguntas[126].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB126 = false;
}
}
var paseC126=true;
function funcionesC126(){
if (paseC126 == true){
puntuacionUnoR = preguntas[126].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC126 = false;
}
}
var paseD126=true;
function funcionesD126(){
if (paseD126 == true){
puntuacionUnoR = preguntas[126].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD126 = false;
}
}
var paseE126=true;
function funcionesE126(){
if (paseE126 == true){
puntuacionUnoR = preguntas[126].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE126 = false;
}
}
//----------------------------------------------
function vidas126(){
if(conteoVidas == 0){
document.getElementById("vida126A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida126B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida126C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA127=true;
function funcionesA127(){
if (paseA127 == true){
puntuacionUnoR = preguntas[127].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA127 = false;
}
}
var paseB127=true;
function funcionesB127(){
if (paseB127 == true){
puntuacionUnoR = preguntas[127].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB127 = false;
}
}
var paseC127=true;
function funcionesC127(){
if (paseC127 == true){
puntuacionUnoR = preguntas[127].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC127 = false;
}
}
var paseD127=true;
function funcionesD127(){
if (paseD127 == true){
puntuacionUnoR = preguntas[127].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD127 = false;
}
}
var paseE127=true;
function funcionesE127(){
if (paseE127 == true){
puntuacionUnoR = preguntas[127].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE127 = false;
}
}
//----------------------------------------------
function vidas127(){
if(conteoVidas == 0){
document.getElementById("vida127A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida127B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida127C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA128=true;
function funcionesA128(){
if (paseA128 == true){
puntuacionUnoR = preguntas[128].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA128 = false;
}
}
var paseB128=true;
function funcionesB128(){
if (paseB128 == true){
puntuacionUnoR = preguntas[128].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB128 = false;
}
}
var paseC128=true;
function funcionesC128(){
if (paseC128 == true){
puntuacionUnoR = preguntas[128].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC128 = false;
}
}
var paseD128=true;
function funcionesD128(){
if (paseD128 == true){
puntuacionUnoR = preguntas[128].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD128 = false;
}
}
var paseE128=true;
function funcionesE128(){
if (paseE128 == true){
puntuacionUnoR = preguntas[128].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE128 = false;
}
}
//----------------------------------------------
function vidas128(){
if(conteoVidas == 0){
document.getElementById("vida128A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida128B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida128C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA129=true;
function funcionesA129(){
if (paseA129 == true){
puntuacionUnoR = preguntas[129].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA129 = false;
}
}
var paseB129=true;
function funcionesB129(){
if (paseB129 == true){
puntuacionUnoR = preguntas[129].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB129 = false;
}
}
var paseC129=true;
function funcionesC129(){
if (paseC129 == true){
puntuacionUnoR = preguntas[129].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC129 = false;
}
}
var paseD129=true;
function funcionesD129(){
if (paseD129 == true){
puntuacionUnoR = preguntas[129].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD129 = false;
}
}
var paseE129=true;
function funcionesE129(){
if (paseE129 == true){
puntuacionUnoR = preguntas[129].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE129 = false;
}
}
//----------------------------------------------
function vidas129(){
if(conteoVidas == 0){
document.getElementById("vida129A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida129B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida129C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA130=true;
function funcionesA130(){
if (paseA130 == true){
puntuacionUnoR = preguntas[130].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA130 = false;
}
}
var paseB130=true;
function funcionesB130(){
if (paseB130 == true){
puntuacionUnoR = preguntas[130].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB130 = false;
}
}
var paseC130=true;
function funcionesC130(){
if (paseC130 == true){
puntuacionUnoR = preguntas[130].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC130 = false;
}
}
var paseD130=true;
function funcionesD130(){
if (paseD130 == true){
puntuacionUnoR = preguntas[130].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD130 = false;
}
}
var paseE130=true;
function funcionesE130(){
if (paseE130 == true){
puntuacionUnoR = preguntas[130].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE130 = false;
}
}
//----------------------------------------------
function vidas130(){
if(conteoVidas == 0){
document.getElementById("vida130A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida130B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida130C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA131=true;
function funcionesA131(){
if (paseA131 == true){
puntuacionUnoR = preguntas[131].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA131 = false;
}
}
var paseB131=true;
function funcionesB131(){
if (paseB131 == true){
puntuacionUnoR = preguntas[131].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB131 = false;
}
}
var paseC131=true;
function funcionesC131(){
if (paseC131 == true){
puntuacionUnoR = preguntas[131].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC131 = false;
}
}
var paseD131=true;
function funcionesD131(){
if (paseD131 == true){
puntuacionUnoR = preguntas[131].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD131 = false;
}
}
var paseE131=true;
function funcionesE131(){
if (paseE131 == true){
puntuacionUnoR = preguntas[131].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE131 = false;
}
}
//----------------------------------------------
function vidas131(){
if(conteoVidas == 0){
document.getElementById("vida131A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida131B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida131C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA132=true;
function funcionesA132(){
if (paseA132 == true){
puntuacionUnoR = preguntas[132].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA132 = false;
}
}
var paseB132=true;
function funcionesB132(){
if (paseB132 == true){
puntuacionUnoR = preguntas[132].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB132 = false;
}
}
var paseC132=true;
function funcionesC132(){
if (paseC132 == true){
puntuacionUnoR = preguntas[132].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC132 = false;
}
}
var paseD132=true;
function funcionesD132(){
if (paseD132 == true){
puntuacionUnoR = preguntas[132].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD132 = false;
}
}
var paseE132=true;
function funcionesE132(){
if (paseE132 == true){
puntuacionUnoR = preguntas[132].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE132 = false;
}
}
//----------------------------------------------
function vidas132(){
if(conteoVidas == 0){
document.getElementById("vida132A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida132B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida132C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA133=true;
function funcionesA133(){
if (paseA133 == true){
puntuacionUnoR = preguntas[133].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA133 = false;
}
}
var paseB133=true;
function funcionesB133(){
if (paseB133 == true){
puntuacionUnoR = preguntas[133].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB133 = false;
}
}
var paseC133=true;
function funcionesC133(){
if (paseC133 == true){
puntuacionUnoR = preguntas[133].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC133 = false;
}
}
var paseD133=true;
function funcionesD133(){
if (paseD133 == true){
puntuacionUnoR = preguntas[133].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD133 = false;
}
}
var paseE133=true;
function funcionesE133(){
if (paseE133 == true){
puntuacionUnoR = preguntas[133].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE133 = false;
}
}
//----------------------------------------------
function vidas133(){
if(conteoVidas == 0){
document.getElementById("vida133A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida133B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida133C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA134=true;
function funcionesA134(){
if (paseA134 == true){
puntuacionUnoR = preguntas[134].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA134 = false;
}
}
var paseB134=true;
function funcionesB134(){
if (paseB134 == true){
puntuacionUnoR = preguntas[134].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB134 = false;
}
}
var paseC134=true;
function funcionesC134(){
if (paseC134 == true){
puntuacionUnoR = preguntas[134].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC134 = false;
}
}
var paseD134=true;
function funcionesD134(){
if (paseD134 == true){
puntuacionUnoR = preguntas[134].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD134 = false;
}
}
var paseE134=true;
function funcionesE134(){
if (paseE134 == true){
puntuacionUnoR = preguntas[134].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE134 = false;
}
}
//----------------------------------------------
function vidas134(){
if(conteoVidas == 0){
document.getElementById("vida134A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida134B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida134C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA135=true;
function funcionesA135(){
if (paseA135 == true){
puntuacionUnoR = preguntas[135].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA135 = false;
}
}
var paseB135=true;
function funcionesB135(){
if (paseB135 == true){
puntuacionUnoR = preguntas[135].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB135 = false;
}
}
var paseC135=true;
function funcionesC135(){
if (paseC135 == true){
puntuacionUnoR = preguntas[135].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC135 = false;
}
}
var paseD135=true;
function funcionesD135(){
if (paseD135 == true){
puntuacionUnoR = preguntas[135].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD135 = false;
}
}
var paseE135=true;
function funcionesE135(){
if (paseE135 == true){
puntuacionUnoR = preguntas[135].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE135 = false;
}
}
//----------------------------------------------
function vidas135(){
if(conteoVidas == 0){
document.getElementById("vida135A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida135B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida135C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA136=true;
function funcionesA136(){
if (paseA136 == true){
puntuacionUnoR = preguntas[136].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA136 = false;
}
}
var paseB136=true;
function funcionesB136(){
if (paseB136 == true){
puntuacionUnoR = preguntas[136].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB136 = false;
}
}
var paseC136=true;
function funcionesC136(){
if (paseC136 == true){
puntuacionUnoR = preguntas[136].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC136 = false;
}
}
var paseD136=true;
function funcionesD136(){
if (paseD136 == true){
puntuacionUnoR = preguntas[136].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD136 = false;
}
}
var paseE136=true;
function funcionesE136(){
if (paseE136 == true){
puntuacionUnoR = preguntas[136].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE136 = false;
}
}
//----------------------------------------------
function vidas136(){
if(conteoVidas == 0){
document.getElementById("vida136A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida136B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida136C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA137=true;
function funcionesA137(){
if (paseA137 == true){
puntuacionUnoR = preguntas[137].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA137 = false;
}
}
var paseB137=true;
function funcionesB137(){
if (paseB137 == true){
puntuacionUnoR = preguntas[137].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB137 = false;
}
}
var paseC137=true;
function funcionesC137(){
if (paseC137 == true){
puntuacionUnoR = preguntas[137].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC137 = false;
}
}
var paseD137=true;
function funcionesD137(){
if (paseD137 == true){
puntuacionUnoR = preguntas[137].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD137 = false;
}
}
var paseE137=true;
function funcionesE137(){
if (paseE137 == true){
puntuacionUnoR = preguntas[137].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE137 = false;
}
}
//----------------------------------------------
function vidas137(){
if(conteoVidas == 0){
document.getElementById("vida137A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida137B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida137C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA138=true;
function funcionesA138(){
if (paseA138 == true){
puntuacionUnoR = preguntas[138].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA138 = false;
}
}
var paseB138=true;
function funcionesB138(){
if (paseB138 == true){
puntuacionUnoR = preguntas[138].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB138 = false;
}
}
var paseC138=true;
function funcionesC138(){
if (paseC138 == true){
puntuacionUnoR = preguntas[138].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC138 = false;
}
}
var paseD138=true;
function funcionesD138(){
if (paseD138 == true){
puntuacionUnoR = preguntas[138].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD138 = false;
}
}
var paseE138=true;
function funcionesE138(){
if (paseE138 == true){
puntuacionUnoR = preguntas[138].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE138 = false;
}
}
//----------------------------------------------
function vidas138(){
if(conteoVidas == 0){
document.getElementById("vida138A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida138B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida138C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA139=true;
function funcionesA139(){
if (paseA139 == true){
puntuacionUnoR = preguntas[139].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA139 = false;
}
}
var paseB139=true;
function funcionesB139(){
if (paseB139 == true){
puntuacionUnoR = preguntas[139].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB139 = false;
}
}
var paseC139=true;
function funcionesC139(){
if (paseC139 == true){
puntuacionUnoR = preguntas[139].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC139 = false;
}
}
var paseD139=true;
function funcionesD139(){
if (paseD139 == true){
puntuacionUnoR = preguntas[139].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD139 = false;
}
}
var paseE139=true;
function funcionesE139(){
if (paseE139 == true){
puntuacionUnoR = preguntas[139].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE139 = false;
}
}
//----------------------------------------------
function vidas139(){
if(conteoVidas == 0){
document.getElementById("vida139A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida139B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida139C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA140=true;
function funcionesA140(){
if (paseA140 == true){
puntuacionUnoR = preguntas[140].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA140 = false;
}
}
var paseB140=true;
function funcionesB140(){
if (paseB140 == true){
puntuacionUnoR = preguntas[140].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB140 = false;
}
}
var paseC140=true;
function funcionesC140(){
if (paseC140 == true){
puntuacionUnoR = preguntas[140].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC140 = false;
}
}
var paseD140=true;
function funcionesD140(){
if (paseD140 == true){
puntuacionUnoR = preguntas[140].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD140 = false;
}
}
var paseE140=true;
function funcionesE140(){
if (paseE140 == true){
puntuacionUnoR = preguntas[140].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE140 = false;
}
}
//----------------------------------------------
function vidas140(){
if(conteoVidas == 0){
document.getElementById("vida140A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida140B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida140C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA141=true;
function funcionesA141(){
if (paseA141 == true){
puntuacionUnoR = preguntas[141].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA141 = false;
}
}
var paseB141=true;
function funcionesB141(){
if (paseB141 == true){
puntuacionUnoR = preguntas[141].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB141 = false;
}
}
var paseC141=true;
function funcionesC141(){
if (paseC141 == true){
puntuacionUnoR = preguntas[141].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC141 = false;
}
}
var paseD141=true;
function funcionesD141(){
if (paseD141 == true){
puntuacionUnoR = preguntas[141].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD141 = false;
}
}
var paseE141=true;
function funcionesE141(){
if (paseE141 == true){
puntuacionUnoR = preguntas[141].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE141 = false;
}
}
//----------------------------------------------
function vidas141(){
if(conteoVidas == 0){
document.getElementById("vida141A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida141B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida141C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA142=true;
function funcionesA142(){
if (paseA142 == true){
puntuacionUnoR = preguntas[142].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA142 = false;
}
}
var paseB142=true;
function funcionesB142(){
if (paseB142 == true){
puntuacionUnoR = preguntas[142].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB142 = false;
}
}
var paseC142=true;
function funcionesC142(){
if (paseC142 == true){
puntuacionUnoR = preguntas[142].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC142 = false;
}
}
var paseD142=true;
function funcionesD142(){
if (paseD142 == true){
puntuacionUnoR = preguntas[142].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD142 = false;
}
}
var paseE142=true;
function funcionesE142(){
if (paseE142 == true){
puntuacionUnoR = preguntas[142].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE142 = false;
}
}
//----------------------------------------------
function vidas142(){
if(conteoVidas == 0){
document.getElementById("vida142A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida142B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida142C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA143=true;
function funcionesA143(){
if (paseA143 == true){
puntuacionUnoR = preguntas[143].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA143 = false;
}
}
var paseB143=true;
function funcionesB143(){
if (paseB143 == true){
puntuacionUnoR = preguntas[143].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB143 = false;
}
}
var paseC143=true;
function funcionesC143(){
if (paseC143 == true){
puntuacionUnoR = preguntas[143].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC143 = false;
}
}
var paseD143=true;
function funcionesD143(){
if (paseD143 == true){
puntuacionUnoR = preguntas[143].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD143 = false;
}
}
var paseE143=true;
function funcionesE143(){
if (paseE143 == true){
puntuacionUnoR = preguntas[143].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE143 = false;
}
}
//----------------------------------------------
function vidas143(){
if(conteoVidas == 0){
document.getElementById("vida143A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida143B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida143C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA144=true;
function funcionesA144(){
if (paseA144 == true){
puntuacionUnoR = preguntas[144].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA144 = false;
}
}
var paseB144=true;
function funcionesB144(){
if (paseB144 == true){
puntuacionUnoR = preguntas[144].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB144 = false;
}
}
var paseC144=true;
function funcionesC144(){
if (paseC144 == true){
puntuacionUnoR = preguntas[144].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC144 = false;
}
}
var paseD144=true;
function funcionesD144(){
if (paseD144 == true){
puntuacionUnoR = preguntas[144].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD144 = false;
}
}
var paseE144=true;
function funcionesE144(){
if (paseE144 == true){
puntuacionUnoR = preguntas[144].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE144 = false;
}
}
//----------------------------------------------
function vidas144(){
if(conteoVidas == 0){
document.getElementById("vida144A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida144B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida144C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA145=true;
function funcionesA145(){
if (paseA145 == true){
puntuacionUnoR = preguntas[145].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA145 = false;
}
}
var paseB145=true;
function funcionesB145(){
if (paseB145 == true){
puntuacionUnoR = preguntas[145].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB145 = false;
}
}
var paseC145=true;
function funcionesC145(){
if (paseC145 == true){
puntuacionUnoR = preguntas[145].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC145 = false;
}
}
var paseD145=true;
function funcionesD145(){
if (paseD145 == true){
puntuacionUnoR = preguntas[145].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD145 = false;
}
}
var paseE145=true;
function funcionesE145(){
if (paseE145 == true){
puntuacionUnoR = preguntas[145].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE145 = false;
}
}
//----------------------------------------------
function vidas145(){
if(conteoVidas == 0){
document.getElementById("vida145A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida145B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida145C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA146=true;
function funcionesA146(){
if (paseA146 == true){
puntuacionUnoR = preguntas[146].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA146 = false;
}
}
var paseB146=true;
function funcionesB146(){
if (paseB146 == true){
puntuacionUnoR = preguntas[146].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB146 = false;
}
}
var paseC146=true;
function funcionesC146(){
if (paseC146 == true){
puntuacionUnoR = preguntas[146].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC146 = false;
}
}
var paseD146=true;
function funcionesD146(){
if (paseD146 == true){
puntuacionUnoR = preguntas[146].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD146 = false;
}
}
var paseE146=true;
function funcionesE146(){
if (paseE146 == true){
puntuacionUnoR = preguntas[146].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE146 = false;
}
}
//----------------------------------------------
function vidas146(){
if(conteoVidas == 0){
document.getElementById("vida146A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida146B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida146C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA147=true;
function funcionesA147(){
if (paseA147 == true){
puntuacionUnoR = preguntas[147].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA147 = false;
}
}
var paseB147=true;
function funcionesB147(){
if (paseB147 == true){
puntuacionUnoR = preguntas[147].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB147 = false;
}
}
var paseC147=true;
function funcionesC147(){
if (paseC147 == true){
puntuacionUnoR = preguntas[147].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC147 = false;
}
}
var paseD147=true;
function funcionesD147(){
if (paseD147 == true){
puntuacionUnoR = preguntas[147].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD147 = false;
}
}
var paseE147=true;
function funcionesE147(){
if (paseE147 == true){
puntuacionUnoR = preguntas[147].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE147 = false;
}
}
//----------------------------------------------
function vidas147(){
if(conteoVidas == 0){
document.getElementById("vida147A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida147B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida147C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA148=true;
function funcionesA148(){
if (paseA148 == true){
puntuacionUnoR = preguntas[148].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA148 = false;
}
}
var paseB148=true;
function funcionesB148(){
if (paseB148 == true){
puntuacionUnoR = preguntas[148].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB148 = false;
}
}
var paseC148=true;
function funcionesC148(){
if (paseC148 == true){
puntuacionUnoR = preguntas[148].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC148 = false;
}
}
var paseD148=true;
function funcionesD148(){
if (paseD148 == true){
puntuacionUnoR = preguntas[148].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD148 = false;
}
}
var paseE148=true;
function funcionesE148(){
if (paseE148 == true){
puntuacionUnoR = preguntas[148].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE148 = false;
}
}
//----------------------------------------------
function vidas148(){
if(conteoVidas == 0){
document.getElementById("vida148A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida148B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida148C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA149=true;
function funcionesA149(){
if (paseA149 == true){
puntuacionUnoR = preguntas[149].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA149 = false;
}
}
var paseB149=true;
function funcionesB149(){
if (paseB149 == true){
puntuacionUnoR = preguntas[149].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB149 = false;
}
}
var paseC149=true;
function funcionesC149(){
if (paseC149 == true){
puntuacionUnoR = preguntas[149].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC149 = false;
}
}
var paseD149=true;
function funcionesD149(){
if (paseD149 == true){
puntuacionUnoR = preguntas[149].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD149 = false;
}
}
var paseE149=true;
function funcionesE149(){
if (paseE149 == true){
puntuacionUnoR = preguntas[149].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE149 = false;
}
}
//----------------------------------------------
function vidas149(){
if(conteoVidas == 0){
document.getElementById("vida149A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida149B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida149C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA150=true;
function funcionesA150(){
if (paseA150 == true){
puntuacionUnoR = preguntas[150].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA150 = false;
}
}
var paseB150=true;
function funcionesB150(){
if (paseB150 == true){
puntuacionUnoR = preguntas[150].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB150 = false;
}
}
var paseC150=true;
function funcionesC150(){
if (paseC150 == true){
puntuacionUnoR = preguntas[150].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC150 = false;
}
}
var paseD150=true;
function funcionesD150(){
if (paseD150 == true){
puntuacionUnoR = preguntas[150].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD150 = false;
}
}
var paseE150=true;
function funcionesE150(){
if (paseE150 == true){
puntuacionUnoR = preguntas[150].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE150 = false;
}
}
//----------------------------------------------
function vidas150(){
if(conteoVidas == 0){
document.getElementById("vida150A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida150B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida150C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA151=true;
function funcionesA151(){
if (paseA151 == true){
puntuacionUnoR = preguntas[151].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA151 = false;
}
}
var paseB151=true;
function funcionesB151(){
if (paseB151 == true){
puntuacionUnoR = preguntas[151].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB151 = false;
}
}
var paseC151=true;
function funcionesC151(){
if (paseC151 == true){
puntuacionUnoR = preguntas[151].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC151 = false;
}
}
var paseD151=true;
function funcionesD151(){
if (paseD151 == true){
puntuacionUnoR = preguntas[151].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD151 = false;
}
}
var paseE151=true;
function funcionesE151(){
if (paseE151 == true){
puntuacionUnoR = preguntas[151].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE151 = false;
}
}
//----------------------------------------------
function vidas151(){
if(conteoVidas == 0){
document.getElementById("vida151A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida151B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida151C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA152=true;
function funcionesA152(){
if (paseA152 == true){
puntuacionUnoR = preguntas[152].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA152 = false;
}
}
var paseB152=true;
function funcionesB152(){
if (paseB152 == true){
puntuacionUnoR = preguntas[152].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB152 = false;
}
}
var paseC152=true;
function funcionesC152(){
if (paseC152 == true){
puntuacionUnoR = preguntas[152].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC152 = false;
}
}
var paseD152=true;
function funcionesD152(){
if (paseD152 == true){
puntuacionUnoR = preguntas[152].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD152 = false;
}
}
var paseE152=true;
function funcionesE152(){
if (paseE152 == true){
puntuacionUnoR = preguntas[152].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE152 = false;
}
}
//----------------------------------------------
function vidas152(){
if(conteoVidas == 0){
document.getElementById("vida152A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida152B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida152C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA153=true;
function funcionesA153(){
if (paseA153 == true){
puntuacionUnoR = preguntas[153].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA153 = false;
}
}
var paseB153=true;
function funcionesB153(){
if (paseB153 == true){
puntuacionUnoR = preguntas[153].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB153 = false;
}
}
var paseC153=true;
function funcionesC153(){
if (paseC153 == true){
puntuacionUnoR = preguntas[153].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC153 = false;
}
}
var paseD153=true;
function funcionesD153(){
if (paseD153 == true){
puntuacionUnoR = preguntas[153].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD153 = false;
}
}
var paseE153=true;
function funcionesE153(){
if (paseE153 == true){
puntuacionUnoR = preguntas[153].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE153 = false;
}
}
//----------------------------------------------
function vidas153(){
if(conteoVidas == 0){
document.getElementById("vida153A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida153B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida153C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA154=true;
function funcionesA154(){
if (paseA154 == true){
puntuacionUnoR = preguntas[154].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA154 = false;
}
}
var paseB154=true;
function funcionesB154(){
if (paseB154 == true){
puntuacionUnoR = preguntas[154].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB154 = false;
}
}
var paseC154=true;
function funcionesC154(){
if (paseC154 == true){
puntuacionUnoR = preguntas[154].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC154 = false;
}
}
var paseD154=true;
function funcionesD154(){
if (paseD154 == true){
puntuacionUnoR = preguntas[154].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD154 = false;
}
}
var paseE154=true;
function funcionesE154(){
if (paseE154 == true){
puntuacionUnoR = preguntas[154].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE154 = false;
}
}
//----------------------------------------------
function vidas154(){
if(conteoVidas == 0){
document.getElementById("vida154A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida154B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida154C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA155=true;
function funcionesA155(){
if (paseA155 == true){
puntuacionUnoR = preguntas[155].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA155 = false;
}
}
var paseB155=true;
function funcionesB155(){
if (paseB155 == true){
puntuacionUnoR = preguntas[155].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB155 = false;
}
}
var paseC155=true;
function funcionesC155(){
if (paseC155 == true){
puntuacionUnoR = preguntas[155].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC155 = false;
}
}
var paseD155=true;
function funcionesD155(){
if (paseD155 == true){
puntuacionUnoR = preguntas[155].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD155 = false;
}
}
var paseE155=true;
function funcionesE155(){
if (paseE155 == true){
puntuacionUnoR = preguntas[155].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE155 = false;
}
}
//----------------------------------------------
function vidas155(){
if(conteoVidas == 0){
document.getElementById("vida155A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida155B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida155C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA156=true;
function funcionesA156(){
if (paseA156 == true){
puntuacionUnoR = preguntas[156].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA156 = false;
}
}
var paseB156=true;
function funcionesB156(){
if (paseB156 == true){
puntuacionUnoR = preguntas[156].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB156 = false;
}
}
var paseC156=true;
function funcionesC156(){
if (paseC156 == true){
puntuacionUnoR = preguntas[156].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC156 = false;
}
}
var paseD156=true;
function funcionesD156(){
if (paseD156 == true){
puntuacionUnoR = preguntas[156].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD156 = false;
}
}
var paseE156=true;
function funcionesE156(){
if (paseE156 == true){
puntuacionUnoR = preguntas[156].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE156 = false;
}
}
//----------------------------------------------
function vidas156(){
if(conteoVidas == 0){
document.getElementById("vida156A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida156B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida156C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA157=true;
function funcionesA157(){
if (paseA157 == true){
puntuacionUnoR = preguntas[157].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA157 = false;
}
}
var paseB157=true;
function funcionesB157(){
if (paseB157 == true){
puntuacionUnoR = preguntas[157].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB157 = false;
}
}
var paseC157=true;
function funcionesC157(){
if (paseC157 == true){
puntuacionUnoR = preguntas[157].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC157 = false;
}
}
var paseD157=true;
function funcionesD157(){
if (paseD157 == true){
puntuacionUnoR = preguntas[157].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD157 = false;
}
}
var paseE157=true;
function funcionesE157(){
if (paseE157 == true){
puntuacionUnoR = preguntas[157].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE157 = false;
}
}
//----------------------------------------------
function vidas157(){
if(conteoVidas == 0){
document.getElementById("vida157A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida157B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida157C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA158=true;
function funcionesA158(){
if (paseA158 == true){
puntuacionUnoR = preguntas[158].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA158 = false;
}
}
var paseB158=true;
function funcionesB158(){
if (paseB158 == true){
puntuacionUnoR = preguntas[158].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB158 = false;
}
}
var paseC158=true;
function funcionesC158(){
if (paseC158 == true){
puntuacionUnoR = preguntas[158].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC158 = false;
}
}
var paseD158=true;
function funcionesD158(){
if (paseD158 == true){
puntuacionUnoR = preguntas[158].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD158 = false;
}
}
var paseE158=true;
function funcionesE158(){
if (paseE158 == true){
puntuacionUnoR = preguntas[158].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE158 = false;
}
}
//----------------------------------------------
function vidas158(){
if(conteoVidas == 0){
document.getElementById("vida158A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida158B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida158C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA159=true;
function funcionesA159(){
if (paseA159 == true){
puntuacionUnoR = preguntas[159].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA159 = false;
}
}
var paseB159=true;
function funcionesB159(){
if (paseB159 == true){
puntuacionUnoR = preguntas[159].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB159 = false;
}
}
var paseC159=true;
function funcionesC159(){
if (paseC159 == true){
puntuacionUnoR = preguntas[159].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC159 = false;
}
}
var paseD159=true;
function funcionesD159(){
if (paseD159 == true){
puntuacionUnoR = preguntas[159].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD159 = false;
}
}
var paseE159=true;
function funcionesE159(){
if (paseE159 == true){
puntuacionUnoR = preguntas[159].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE159 = false;
}
}
//----------------------------------------------
function vidas159(){
if(conteoVidas == 0){
document.getElementById("vida159A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida159B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida159C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA160=true;
function funcionesA160(){
if (paseA160 == true){
puntuacionUnoR = preguntas[160].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA160 = false;
}
}
var paseB160=true;
function funcionesB160(){
if (paseB160 == true){
puntuacionUnoR = preguntas[160].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB160 = false;
}
}
var paseC160=true;
function funcionesC160(){
if (paseC160 == true){
puntuacionUnoR = preguntas[160].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC160 = false;
}
}
var paseD160=true;
function funcionesD160(){
if (paseD160 == true){
puntuacionUnoR = preguntas[160].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD160 = false;
}
}
var paseE160=true;
function funcionesE160(){
if (paseE160 == true){
puntuacionUnoR = preguntas[160].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE160 = false;
}
}
//----------------------------------------------
function vidas160(){
if(conteoVidas == 0){
document.getElementById("vida160A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida160B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida160C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA161=true;
function funcionesA161(){
if (paseA161 == true){
puntuacionUnoR = preguntas[161].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA161 = false;
}
}
var paseB161=true;
function funcionesB161(){
if (paseB161 == true){
puntuacionUnoR = preguntas[161].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB161 = false;
}
}
var paseC161=true;
function funcionesC161(){
if (paseC161 == true){
puntuacionUnoR = preguntas[161].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC161 = false;
}
}
var paseD161=true;
function funcionesD161(){
if (paseD161 == true){
puntuacionUnoR = preguntas[161].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD161 = false;
}
}
var paseE161=true;
function funcionesE161(){
if (paseE161 == true){
puntuacionUnoR = preguntas[161].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE161 = false;
}
}
//----------------------------------------------
function vidas161(){
if(conteoVidas == 0){
document.getElementById("vida161A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida161B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida161C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA162=true;
function funcionesA162(){
if (paseA162 == true){
puntuacionUnoR = preguntas[162].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA162 = false;
}
}
var paseB162=true;
function funcionesB162(){
if (paseB162 == true){
puntuacionUnoR = preguntas[162].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB162 = false;
}
}
var paseC162=true;
function funcionesC162(){
if (paseC162 == true){
puntuacionUnoR = preguntas[162].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC162 = false;
}
}
var paseD162=true;
function funcionesD162(){
if (paseD162 == true){
puntuacionUnoR = preguntas[162].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD162 = false;
}
}
var paseE162=true;
function funcionesE162(){
if (paseE162 == true){
puntuacionUnoR = preguntas[162].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE162 = false;
}
}
//----------------------------------------------
function vidas162(){
if(conteoVidas == 0){
document.getElementById("vida162A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida162B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida162C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA163=true;
function funcionesA163(){
if (paseA163 == true){
puntuacionUnoR = preguntas[163].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA163 = false;
}
}
var paseB163=true;
function funcionesB163(){
if (paseB163 == true){
puntuacionUnoR = preguntas[163].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB163 = false;
}
}
var paseC163=true;
function funcionesC163(){
if (paseC163 == true){
puntuacionUnoR = preguntas[163].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC163 = false;
}
}
var paseD163=true;
function funcionesD163(){
if (paseD163 == true){
puntuacionUnoR = preguntas[163].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD163 = false;
}
}
var paseE163=true;
function funcionesE163(){
if (paseE163 == true){
puntuacionUnoR = preguntas[163].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE163 = false;
}
}
//----------------------------------------------
function vidas163(){
if(conteoVidas == 0){
document.getElementById("vida163A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida163B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida163C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA164=true;
function funcionesA164(){
if (paseA164 == true){
puntuacionUnoR = preguntas[164].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA164 = false;
}
}
var paseB164=true;
function funcionesB164(){
if (paseB164 == true){
puntuacionUnoR = preguntas[164].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB164 = false;
}
}
var paseC164=true;
function funcionesC164(){
if (paseC164 == true){
puntuacionUnoR = preguntas[164].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC164 = false;
}
}
var paseD164=true;
function funcionesD164(){
if (paseD164 == true){
puntuacionUnoR = preguntas[164].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD164 = false;
}
}
var paseE164=true;
function funcionesE164(){
if (paseE164 == true){
puntuacionUnoR = preguntas[164].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE164 = false;
}
}
//----------------------------------------------
function vidas164(){
if(conteoVidas == 0){
document.getElementById("vida164A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida164B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida164C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA165=true;
function funcionesA165(){
if (paseA165 == true){
puntuacionUnoR = preguntas[165].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA165 = false;
}
}
var paseB165=true;
function funcionesB165(){
if (paseB165 == true){
puntuacionUnoR = preguntas[165].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB165 = false;
}
}
var paseC165=true;
function funcionesC165(){
if (paseC165 == true){
puntuacionUnoR = preguntas[165].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC165 = false;
}
}
var paseD165=true;
function funcionesD165(){
if (paseD165 == true){
puntuacionUnoR = preguntas[165].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD165 = false;
}
}
var paseE165=true;
function funcionesE165(){
if (paseE165 == true){
puntuacionUnoR = preguntas[165].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE165 = false;
}
}
//----------------------------------------------
function vidas165(){
if(conteoVidas == 0){
document.getElementById("vida165A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida165B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida165C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA166=true;
function funcionesA166(){
if (paseA166 == true){
puntuacionUnoR = preguntas[166].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA166 = false;
}
}
var paseB166=true;
function funcionesB166(){
if (paseB166 == true){
puntuacionUnoR = preguntas[166].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB166 = false;
}
}
var paseC166=true;
function funcionesC166(){
if (paseC166 == true){
puntuacionUnoR = preguntas[166].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC166 = false;
}
}
var paseD166=true;
function funcionesD166(){
if (paseD166 == true){
puntuacionUnoR = preguntas[166].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD166 = false;
}
}
var paseE166=true;
function funcionesE166(){
if (paseE166 == true){
puntuacionUnoR = preguntas[166].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE166 = false;
}
}
//----------------------------------------------
function vidas166(){
if(conteoVidas == 0){
document.getElementById("vida166A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida166B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida166C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA167=true;
function funcionesA167(){
if (paseA167 == true){
puntuacionUnoR = preguntas[167].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA167 = false;
}
}
var paseB167=true;
function funcionesB167(){
if (paseB167 == true){
puntuacionUnoR = preguntas[167].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB167 = false;
}
}
var paseC167=true;
function funcionesC167(){
if (paseC167 == true){
puntuacionUnoR = preguntas[167].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC167 = false;
}
}
var paseD167=true;
function funcionesD167(){
if (paseD167 == true){
puntuacionUnoR = preguntas[167].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD167 = false;
}
}
var paseE167=true;
function funcionesE167(){
if (paseE167 == true){
puntuacionUnoR = preguntas[167].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE167 = false;
}
}
//----------------------------------------------
function vidas167(){
if(conteoVidas == 0){
document.getElementById("vida167A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida167B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida167C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA168=true;
function funcionesA168(){
if (paseA168 == true){
puntuacionUnoR = preguntas[168].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA168 = false;
}
}
var paseB168=true;
function funcionesB168(){
if (paseB168 == true){
puntuacionUnoR = preguntas[168].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB168 = false;
}
}
var paseC168=true;
function funcionesC168(){
if (paseC168 == true){
puntuacionUnoR = preguntas[168].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC168 = false;
}
}
var paseD168=true;
function funcionesD168(){
if (paseD168 == true){
puntuacionUnoR = preguntas[168].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD168 = false;
}
}
var paseE168=true;
function funcionesE168(){
if (paseE168 == true){
puntuacionUnoR = preguntas[168].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE168 = false;
}
}
//----------------------------------------------
function vidas168(){
if(conteoVidas == 0){
document.getElementById("vida168A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida168B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida168C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA169=true;
function funcionesA169(){
if (paseA169 == true){
puntuacionUnoR = preguntas[169].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA169 = false;
}
}
var paseB169=true;
function funcionesB169(){
if (paseB169 == true){
puntuacionUnoR = preguntas[169].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB169 = false;
}
}
var paseC169=true;
function funcionesC169(){
if (paseC169 == true){
puntuacionUnoR = preguntas[169].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC169 = false;
}
}
var paseD169=true;
function funcionesD169(){
if (paseD169 == true){
puntuacionUnoR = preguntas[169].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD169 = false;
}
}
var paseE169=true;
function funcionesE169(){
if (paseE169 == true){
puntuacionUnoR = preguntas[169].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE169 = false;
}
}
//----------------------------------------------
function vidas169(){
if(conteoVidas == 0){
document.getElementById("vida169A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida169B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida169C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA170=true;
function funcionesA170(){
if (paseA170 == true){
puntuacionUnoR = preguntas[170].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA170 = false;
}
}
var paseB170=true;
function funcionesB170(){
if (paseB170 == true){
puntuacionUnoR = preguntas[170].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB170 = false;
}
}
var paseC170=true;
function funcionesC170(){
if (paseC170 == true){
puntuacionUnoR = preguntas[170].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC170 = false;
}
}
var paseD170=true;
function funcionesD170(){
if (paseD170 == true){
puntuacionUnoR = preguntas[170].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD170 = false;
}
}
var paseE170=true;
function funcionesE170(){
if (paseE170 == true){
puntuacionUnoR = preguntas[170].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE170 = false;
}
}
//----------------------------------------------
function vidas170(){
if(conteoVidas == 0){
document.getElementById("vida170A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida170B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida170C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA171=true;
function funcionesA171(){
if (paseA171 == true){
puntuacionUnoR = preguntas[171].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA171 = false;
}
}
var paseB171=true;
function funcionesB171(){
if (paseB171 == true){
puntuacionUnoR = preguntas[171].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB171 = false;
}
}
var paseC171=true;
function funcionesC171(){
if (paseC171 == true){
puntuacionUnoR = preguntas[171].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC171 = false;
}
}
var paseD171=true;
function funcionesD171(){
if (paseD171 == true){
puntuacionUnoR = preguntas[171].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD171 = false;
}
}
var paseE171=true;
function funcionesE171(){
if (paseE171 == true){
puntuacionUnoR = preguntas[171].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE171 = false;
}
}
//----------------------------------------------
function vidas171(){
if(conteoVidas == 0){
document.getElementById("vida171A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida171B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida171C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA172=true;
function funcionesA172(){
if (paseA172 == true){
puntuacionUnoR = preguntas[172].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA172 = false;
}
}
var paseB172=true;
function funcionesB172(){
if (paseB172 == true){
puntuacionUnoR = preguntas[172].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB172 = false;
}
}
var paseC172=true;
function funcionesC172(){
if (paseC172 == true){
puntuacionUnoR = preguntas[172].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC172 = false;
}
}
var paseD172=true;
function funcionesD172(){
if (paseD172 == true){
puntuacionUnoR = preguntas[172].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD172 = false;
}
}
var paseE172=true;
function funcionesE172(){
if (paseE172 == true){
puntuacionUnoR = preguntas[172].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE172 = false;
}
}
//----------------------------------------------
function vidas172(){
if(conteoVidas == 0){
document.getElementById("vida172A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida172B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida172C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA173=true;
function funcionesA173(){
if (paseA173 == true){
puntuacionUnoR = preguntas[173].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA173 = false;
}
}
var paseB173=true;
function funcionesB173(){
if (paseB173 == true){
puntuacionUnoR = preguntas[173].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB173 = false;
}
}
var paseC173=true;
function funcionesC173(){
if (paseC173 == true){
puntuacionUnoR = preguntas[173].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC173 = false;
}
}
var paseD173=true;
function funcionesD173(){
if (paseD173 == true){
puntuacionUnoR = preguntas[173].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD173 = false;
}
}
var paseE173=true;
function funcionesE173(){
if (paseE173 == true){
puntuacionUnoR = preguntas[173].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE173 = false;
}
}
//----------------------------------------------
function vidas173(){
if(conteoVidas == 0){
document.getElementById("vida173A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida173B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida173C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA174=true;
function funcionesA174(){
if (paseA174 == true){
puntuacionUnoR = preguntas[174].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA174 = false;
}
}
var paseB174=true;
function funcionesB174(){
if (paseB174 == true){
puntuacionUnoR = preguntas[174].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB174 = false;
}
}
var paseC174=true;
function funcionesC174(){
if (paseC174 == true){
puntuacionUnoR = preguntas[174].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC174 = false;
}
}
var paseD174=true;
function funcionesD174(){
if (paseD174 == true){
puntuacionUnoR = preguntas[174].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD174 = false;
}
}
var paseE174=true;
function funcionesE174(){
if (paseE174 == true){
puntuacionUnoR = preguntas[174].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE174 = false;
}
}
//----------------------------------------------
function vidas174(){
if(conteoVidas == 0){
document.getElementById("vida174A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida174B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida174C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA175=true;
function funcionesA175(){
if (paseA175 == true){
puntuacionUnoR = preguntas[175].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA175 = false;
}
}
var paseB175=true;
function funcionesB175(){
if (paseB175 == true){
puntuacionUnoR = preguntas[175].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB175 = false;
}
}
var paseC175=true;
function funcionesC175(){
if (paseC175 == true){
puntuacionUnoR = preguntas[175].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC175 = false;
}
}
var paseD175=true;
function funcionesD175(){
if (paseD175 == true){
puntuacionUnoR = preguntas[175].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD175 = false;
}
}
var paseE175=true;
function funcionesE175(){
if (paseE175 == true){
puntuacionUnoR = preguntas[175].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE175 = false;
}
}
//----------------------------------------------
function vidas175(){
if(conteoVidas == 0){
document.getElementById("vida175A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida175B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida175C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA176=true;
function funcionesA176(){
if (paseA176 == true){
puntuacionUnoR = preguntas[176].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA176 = false;
}
}
var paseB176=true;
function funcionesB176(){
if (paseB176 == true){
puntuacionUnoR = preguntas[176].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB176 = false;
}
}
var paseC176=true;
function funcionesC176(){
if (paseC176 == true){
puntuacionUnoR = preguntas[176].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC176 = false;
}
}
var paseD176=true;
function funcionesD176(){
if (paseD176 == true){
puntuacionUnoR = preguntas[176].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD176 = false;
}
}
var paseE176=true;
function funcionesE176(){
if (paseE176 == true){
puntuacionUnoR = preguntas[176].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE176 = false;
}
}
//----------------------------------------------
function vidas176(){
if(conteoVidas == 0){
document.getElementById("vida176A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida176B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida176C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA177=true;
function funcionesA177(){
if (paseA177 == true){
puntuacionUnoR = preguntas[177].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA177 = false;
}
}
var paseB177=true;
function funcionesB177(){
if (paseB177 == true){
puntuacionUnoR = preguntas[177].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB177 = false;
}
}
var paseC177=true;
function funcionesC177(){
if (paseC177 == true){
puntuacionUnoR = preguntas[177].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC177 = false;
}
}
var paseD177=true;
function funcionesD177(){
if (paseD177 == true){
puntuacionUnoR = preguntas[177].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD177 = false;
}
}
var paseE177=true;
function funcionesE177(){
if (paseE177 == true){
puntuacionUnoR = preguntas[177].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE177 = false;
}
}
//----------------------------------------------
function vidas177(){
if(conteoVidas == 0){
document.getElementById("vida177A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida177B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida177C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA178=true;
function funcionesA178(){
if (paseA178 == true){
puntuacionUnoR = preguntas[178].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA178 = false;
}
}
var paseB178=true;
function funcionesB178(){
if (paseB178 == true){
puntuacionUnoR = preguntas[178].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB178 = false;
}
}
var paseC178=true;
function funcionesC178(){
if (paseC178 == true){
puntuacionUnoR = preguntas[178].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC178 = false;
}
}
var paseD178=true;
function funcionesD178(){
if (paseD178 == true){
puntuacionUnoR = preguntas[178].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD178 = false;
}
}
var paseE178=true;
function funcionesE178(){
if (paseE178 == true){
puntuacionUnoR = preguntas[178].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE178 = false;
}
}
//----------------------------------------------
function vidas178(){
if(conteoVidas == 0){
document.getElementById("vida178A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida178B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida178C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA179=true;
function funcionesA179(){
if (paseA179 == true){
puntuacionUnoR = preguntas[179].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA179 = false;
}
}
var paseB179=true;
function funcionesB179(){
if (paseB179 == true){
puntuacionUnoR = preguntas[179].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB179 = false;
}
}
var paseC179=true;
function funcionesC179(){
if (paseC179 == true){
puntuacionUnoR = preguntas[179].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC179 = false;
}
}
var paseD179=true;
function funcionesD179(){
if (paseD179 == true){
puntuacionUnoR = preguntas[179].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD179 = false;
}
}
var paseE179=true;
function funcionesE179(){
if (paseE179 == true){
puntuacionUnoR = preguntas[179].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE179 = false;
}
}
//----------------------------------------------
function vidas179(){
if(conteoVidas == 0){
document.getElementById("vida179A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida179B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida179C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA180=true;
function funcionesA180(){
if (paseA180 == true){
puntuacionUnoR = preguntas[180].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA180 = false;
}
}
var paseB180=true;
function funcionesB180(){
if (paseB180 == true){
puntuacionUnoR = preguntas[180].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB180 = false;
}
}
var paseC180=true;
function funcionesC180(){
if (paseC180 == true){
puntuacionUnoR = preguntas[180].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC180 = false;
}
}
var paseD180=true;
function funcionesD180(){
if (paseD180 == true){
puntuacionUnoR = preguntas[180].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD180 = false;
}
}
var paseE180=true;
function funcionesE180(){
if (paseE180 == true){
puntuacionUnoR = preguntas[180].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE180 = false;
}
}
//----------------------------------------------
function vidas180(){
if(conteoVidas == 0){
document.getElementById("vida180A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida180B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida180C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA181=true;
function funcionesA181(){
if (paseA181 == true){
puntuacionUnoR = preguntas[181].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA181 = false;
}
}
var paseB181=true;
function funcionesB181(){
if (paseB181 == true){
puntuacionUnoR = preguntas[181].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB181 = false;
}
}
var paseC181=true;
function funcionesC181(){
if (paseC181 == true){
puntuacionUnoR = preguntas[181].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC181 = false;
}
}
var paseD181=true;
function funcionesD181(){
if (paseD181 == true){
puntuacionUnoR = preguntas[181].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD181 = false;
}
}
var paseE181=true;
function funcionesE181(){
if (paseE181 == true){
puntuacionUnoR = preguntas[181].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE181 = false;
}
}
//----------------------------------------------
function vidas181(){
if(conteoVidas == 0){
document.getElementById("vida181A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida181B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida181C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA182=true;
function funcionesA182(){
if (paseA182 == true){
puntuacionUnoR = preguntas[182].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA182 = false;
}
}
var paseB182=true;
function funcionesB182(){
if (paseB182 == true){
puntuacionUnoR = preguntas[182].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB182 = false;
}
}
var paseC182=true;
function funcionesC182(){
if (paseC182 == true){
puntuacionUnoR = preguntas[182].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC182 = false;
}
}
var paseD182=true;
function funcionesD182(){
if (paseD182 == true){
puntuacionUnoR = preguntas[182].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD182 = false;
}
}
var paseE182=true;
function funcionesE182(){
if (paseE182 == true){
puntuacionUnoR = preguntas[182].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE182 = false;
}
}
//----------------------------------------------
function vidas182(){
if(conteoVidas == 0){
document.getElementById("vida182A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida182B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida182C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA183=true;
function funcionesA183(){
if (paseA183 == true){
puntuacionUnoR = preguntas[183].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA183 = false;
}
}
var paseB183=true;
function funcionesB183(){
if (paseB183 == true){
puntuacionUnoR = preguntas[183].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB183 = false;
}
}
var paseC183=true;
function funcionesC183(){
if (paseC183 == true){
puntuacionUnoR = preguntas[183].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC183 = false;
}
}
var paseD183=true;
function funcionesD183(){
if (paseD183 == true){
puntuacionUnoR = preguntas[183].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD183 = false;
}
}
var paseE183=true;
function funcionesE183(){
if (paseE183 == true){
puntuacionUnoR = preguntas[183].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE183 = false;
}
}
//----------------------------------------------
function vidas183(){
if(conteoVidas == 0){
document.getElementById("vida183A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida183B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida183C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA184=true;
function funcionesA184(){
if (paseA184 == true){
puntuacionUnoR = preguntas[184].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA184 = false;
}
}
var paseB184=true;
function funcionesB184(){
if (paseB184 == true){
puntuacionUnoR = preguntas[184].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB184 = false;
}
}
var paseC184=true;
function funcionesC184(){
if (paseC184 == true){
puntuacionUnoR = preguntas[184].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC184 = false;
}
}
var paseD184=true;
function funcionesD184(){
if (paseD184 == true){
puntuacionUnoR = preguntas[184].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD184 = false;
}
}
var paseE184=true;
function funcionesE184(){
if (paseE184 == true){
puntuacionUnoR = preguntas[184].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE184 = false;
}
}
//----------------------------------------------
function vidas184(){
if(conteoVidas == 0){
document.getElementById("vida184A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida184B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida184C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA185=true;
function funcionesA185(){
if (paseA185 == true){
puntuacionUnoR = preguntas[185].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA185 = false;
}
}
var paseB185=true;
function funcionesB185(){
if (paseB185 == true){
puntuacionUnoR = preguntas[185].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB185 = false;
}
}
var paseC185=true;
function funcionesC185(){
if (paseC185 == true){
puntuacionUnoR = preguntas[185].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC185 = false;
}
}
var paseD185=true;
function funcionesD185(){
if (paseD185 == true){
puntuacionUnoR = preguntas[185].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD185 = false;
}
}
var paseE185=true;
function funcionesE185(){
if (paseE185 == true){
puntuacionUnoR = preguntas[185].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE185 = false;
}
}
//----------------------------------------------
function vidas185(){
if(conteoVidas == 0){
document.getElementById("vida185A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida185B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida185C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA186=true;
function funcionesA186(){
if (paseA186 == true){
puntuacionUnoR = preguntas[186].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA186 = false;
}
}
var paseB186=true;
function funcionesB186(){
if (paseB186 == true){
puntuacionUnoR = preguntas[186].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB186 = false;
}
}
var paseC186=true;
function funcionesC186(){
if (paseC186 == true){
puntuacionUnoR = preguntas[186].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC186 = false;
}
}
var paseD186=true;
function funcionesD186(){
if (paseD186 == true){
puntuacionUnoR = preguntas[186].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD186 = false;
}
}
var paseE186=true;
function funcionesE186(){
if (paseE186 == true){
puntuacionUnoR = preguntas[186].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE186 = false;
}
}
//----------------------------------------------
function vidas186(){
if(conteoVidas == 0){
document.getElementById("vida186A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida186B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida186C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA187=true;
function funcionesA187(){
if (paseA187 == true){
puntuacionUnoR = preguntas[187].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA187 = false;
}
}
var paseB187=true;
function funcionesB187(){
if (paseB187 == true){
puntuacionUnoR = preguntas[187].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB187 = false;
}
}
var paseC187=true;
function funcionesC187(){
if (paseC187 == true){
puntuacionUnoR = preguntas[187].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC187 = false;
}
}
var paseD187=true;
function funcionesD187(){
if (paseD187 == true){
puntuacionUnoR = preguntas[187].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD187 = false;
}
}
var paseE187=true;
function funcionesE187(){
if (paseE187 == true){
puntuacionUnoR = preguntas[187].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE187 = false;
}
}
//----------------------------------------------
function vidas187(){
if(conteoVidas == 0){
document.getElementById("vida187A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida187B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida187C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA188=true;
function funcionesA188(){
if (paseA188 == true){
puntuacionUnoR = preguntas[188].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA188 = false;
}
}
var paseB188=true;
function funcionesB188(){
if (paseB188 == true){
puntuacionUnoR = preguntas[188].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB188 = false;
}
}
var paseC188=true;
function funcionesC188(){
if (paseC188 == true){
puntuacionUnoR = preguntas[188].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC188 = false;
}
}
var paseD188=true;
function funcionesD188(){
if (paseD188 == true){
puntuacionUnoR = preguntas[188].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD188 = false;
}
}
var paseE188=true;
function funcionesE188(){
if (paseE188 == true){
puntuacionUnoR = preguntas[188].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE188 = false;
}
}
//----------------------------------------------
function vidas188(){
if(conteoVidas == 0){
document.getElementById("vida188A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida188B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida188C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA189=true;
function funcionesA189(){
if (paseA189 == true){
puntuacionUnoR = preguntas[189].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA189 = false;
}
}
var paseB189=true;
function funcionesB189(){
if (paseB189 == true){
puntuacionUnoR = preguntas[189].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB189 = false;
}
}
var paseC189=true;
function funcionesC189(){
if (paseC189 == true){
puntuacionUnoR = preguntas[189].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC189 = false;
}
}
var paseD189=true;
function funcionesD189(){
if (paseD189 == true){
puntuacionUnoR = preguntas[189].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD189 = false;
}
}
var paseE189=true;
function funcionesE189(){
if (paseE189 == true){
puntuacionUnoR = preguntas[189].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE189 = false;
}
}
//----------------------------------------------
function vidas189(){
if(conteoVidas == 0){
document.getElementById("vida189A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida189B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida189C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA190=true;
function funcionesA190(){
if (paseA190 == true){
puntuacionUnoR = preguntas[190].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA190 = false;
}
}
var paseB190=true;
function funcionesB190(){
if (paseB190 == true){
puntuacionUnoR = preguntas[190].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB190 = false;
}
}
var paseC190=true;
function funcionesC190(){
if (paseC190 == true){
puntuacionUnoR = preguntas[190].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC190 = false;
}
}
var paseD190=true;
function funcionesD190(){
if (paseD190 == true){
puntuacionUnoR = preguntas[190].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD190 = false;
}
}
var paseE190=true;
function funcionesE190(){
if (paseE190 == true){
puntuacionUnoR = preguntas[190].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE190 = false;
}
}
//----------------------------------------------
function vidas190(){
if(conteoVidas == 0){
document.getElementById("vida190A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida190B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida190C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA191=true;
function funcionesA191(){
if (paseA191 == true){
puntuacionUnoR = preguntas[191].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA191 = false;
}
}
var paseB191=true;
function funcionesB191(){
if (paseB191 == true){
puntuacionUnoR = preguntas[191].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB191 = false;
}
}
var paseC191=true;
function funcionesC191(){
if (paseC191 == true){
puntuacionUnoR = preguntas[191].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC191 = false;
}
}
var paseD191=true;
function funcionesD191(){
if (paseD191 == true){
puntuacionUnoR = preguntas[191].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD191 = false;
}
}
var paseE191=true;
function funcionesE191(){
if (paseE191 == true){
puntuacionUnoR = preguntas[191].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE191 = false;
}
}
//----------------------------------------------
function vidas191(){
if(conteoVidas == 0){
document.getElementById("vida191A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida191B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida191C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA192=true;
function funcionesA192(){
if (paseA192 == true){
puntuacionUnoR = preguntas[192].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA192 = false;
}
}
var paseB192=true;
function funcionesB192(){
if (paseB192 == true){
puntuacionUnoR = preguntas[192].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB192 = false;
}
}
var paseC192=true;
function funcionesC192(){
if (paseC192 == true){
puntuacionUnoR = preguntas[192].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC192 = false;
}
}
var paseD192=true;
function funcionesD192(){
if (paseD192 == true){
puntuacionUnoR = preguntas[192].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD192 = false;
}
}
var paseE192=true;
function funcionesE192(){
if (paseE192 == true){
puntuacionUnoR = preguntas[192].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE192 = false;
}
}
//----------------------------------------------
function vidas192(){
if(conteoVidas == 0){
document.getElementById("vida192A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida192B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida192C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA193=true;
function funcionesA193(){
if (paseA193 == true){
puntuacionUnoR = preguntas[193].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA193 = false;
}
}
var paseB193=true;
function funcionesB193(){
if (paseB193 == true){
puntuacionUnoR = preguntas[193].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB193 = false;
}
}
var paseC193=true;
function funcionesC193(){
if (paseC193 == true){
puntuacionUnoR = preguntas[193].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC193 = false;
}
}
var paseD193=true;
function funcionesD193(){
if (paseD193 == true){
puntuacionUnoR = preguntas[193].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD193 = false;
}
}
var paseE193=true;
function funcionesE193(){
if (paseE193 == true){
puntuacionUnoR = preguntas[193].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE193 = false;
}
}
//----------------------------------------------
function vidas193(){
if(conteoVidas == 0){
document.getElementById("vida193A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida193B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida193C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA194=true;
function funcionesA194(){
if (paseA194 == true){
puntuacionUnoR = preguntas[194].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA194 = false;
}
}
var paseB194=true;
function funcionesB194(){
if (paseB194 == true){
puntuacionUnoR = preguntas[194].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB194 = false;
}
}
var paseC194=true;
function funcionesC194(){
if (paseC194 == true){
puntuacionUnoR = preguntas[194].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC194 = false;
}
}
var paseD194=true;
function funcionesD194(){
if (paseD194 == true){
puntuacionUnoR = preguntas[194].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD194 = false;
}
}
var paseE194=true;
function funcionesE194(){
if (paseE194 == true){
puntuacionUnoR = preguntas[194].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE194 = false;
}
}
//----------------------------------------------
function vidas194(){
if(conteoVidas == 0){
document.getElementById("vida194A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida194B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida194C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA195=true;
function funcionesA195(){
if (paseA195 == true){
puntuacionUnoR = preguntas[195].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA195 = false;
}
}
var paseB195=true;
function funcionesB195(){
if (paseB195 == true){
puntuacionUnoR = preguntas[195].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB195 = false;
}
}
var paseC195=true;
function funcionesC195(){
if (paseC195 == true){
puntuacionUnoR = preguntas[195].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC195 = false;
}
}
var paseD195=true;
function funcionesD195(){
if (paseD195 == true){
puntuacionUnoR = preguntas[195].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD195 = false;
}
}
var paseE195=true;
function funcionesE195(){
if (paseE195 == true){
puntuacionUnoR = preguntas[195].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE195 = false;
}
}
//----------------------------------------------
function vidas195(){
if(conteoVidas == 0){
document.getElementById("vida195A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida195B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida195C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA196=true;
function funcionesA196(){
if (paseA196 == true){
puntuacionUnoR = preguntas[196].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA196 = false;
}
}
var paseB196=true;
function funcionesB196(){
if (paseB196 == true){
puntuacionUnoR = preguntas[196].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB196 = false;
}
}
var paseC196=true;
function funcionesC196(){
if (paseC196 == true){
puntuacionUnoR = preguntas[196].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC196 = false;
}
}
var paseD196=true;
function funcionesD196(){
if (paseD196 == true){
puntuacionUnoR = preguntas[196].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD196 = false;
}
}
var paseE196=true;
function funcionesE196(){
if (paseE196 == true){
puntuacionUnoR = preguntas[196].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE196 = false;
}
}
//----------------------------------------------
function vidas196(){
if(conteoVidas == 0){
document.getElementById("vida196A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida196B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida196C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA197=true;
function funcionesA197(){
if (paseA197 == true){
puntuacionUnoR = preguntas[197].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA197 = false;
}
}
var paseB197=true;
function funcionesB197(){
if (paseB197 == true){
puntuacionUnoR = preguntas[197].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB197 = false;
}
}
var paseC197=true;
function funcionesC197(){
if (paseC197 == true){
puntuacionUnoR = preguntas[197].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC197 = false;
}
}
var paseD197=true;
function funcionesD197(){
if (paseD197 == true){
puntuacionUnoR = preguntas[197].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD197 = false;
}
}
var paseE197=true;
function funcionesE197(){
if (paseE197 == true){
puntuacionUnoR = preguntas[197].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE197 = false;
}
}
//----------------------------------------------
function vidas197(){
if(conteoVidas == 0){
document.getElementById("vida197A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida197B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida197C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA198=true;
function funcionesA198(){
if (paseA198 == true){
puntuacionUnoR = preguntas[198].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA198 = false;
}
}
var paseB198=true;
function funcionesB198(){
if (paseB198 == true){
puntuacionUnoR = preguntas[198].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB198 = false;
}
}
var paseC198=true;
function funcionesC198(){
if (paseC198 == true){
puntuacionUnoR = preguntas[198].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC198 = false;
}
}
var paseD198=true;
function funcionesD198(){
if (paseD198 == true){
puntuacionUnoR = preguntas[198].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD198 = false;
}
}
var paseE198=true;
function funcionesE198(){
if (paseE198 == true){
puntuacionUnoR = preguntas[198].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE198 = false;
}
}
//----------------------------------------------
function vidas198(){
if(conteoVidas == 0){
document.getElementById("vida198A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida198B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida198C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA199=true;
function funcionesA199(){
if (paseA199 == true){
puntuacionUnoR = preguntas[199].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA199 = false;
}
}
var paseB199=true;
function funcionesB199(){
if (paseB199 == true){
puntuacionUnoR = preguntas[199].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB199 = false;
}
}
var paseC199=true;
function funcionesC199(){
if (paseC199 == true){
puntuacionUnoR = preguntas[199].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC199 = false;
}
}
var paseD199=true;
function funcionesD199(){
if (paseD199 == true){
puntuacionUnoR = preguntas[199].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD199 = false;
}
}
var paseE199=true;
function funcionesE199(){
if (paseE199 == true){
puntuacionUnoR = preguntas[199].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE199 = false;
}
}
//----------------------------------------------
function vidas199(){
if(conteoVidas == 0){
document.getElementById("vida199A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida199B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida199C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA200=true;
function funcionesA200(){
if (paseA200 == true){
puntuacionUnoR = preguntas[200].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA200 = false;
}
}
var paseB200=true;
function funcionesB200(){
if (paseB200 == true){
puntuacionUnoR = preguntas[200].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB200 = false;
}
}
var paseC200=true;
function funcionesC200(){
if (paseC200 == true){
puntuacionUnoR = preguntas[200].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC200 = false;
}
}
var paseD200=true;
function funcionesD200(){
if (paseD200 == true){
puntuacionUnoR = preguntas[200].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD200 = false;
}
}
var paseE200=true;
function funcionesE200(){
if (paseE200 == true){
puntuacionUnoR = preguntas[200].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE200 = false;
}
}
//----------------------------------------------
function vidas200(){
if(conteoVidas == 0){
document.getElementById("vida200A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida200B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida200C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA201=true;
function funcionesA201(){
if (paseA201 == true){
puntuacionUnoR = preguntas[201].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA201 = false;
}
}
var paseB201=true;
function funcionesB201(){
if (paseB201 == true){
puntuacionUnoR = preguntas[201].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB201 = false;
}
}
var paseC201=true;
function funcionesC201(){
if (paseC201 == true){
puntuacionUnoR = preguntas[201].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC201 = false;
}
}
var paseD201=true;
function funcionesD201(){
if (paseD201 == true){
puntuacionUnoR = preguntas[201].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD201 = false;
}
}
var paseE201=true;
function funcionesE201(){
if (paseE201 == true){
puntuacionUnoR = preguntas[201].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE201 = false;
}
}
//----------------------------------------------
function vidas201(){
if(conteoVidas == 0){
document.getElementById("vida201A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida201B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida201C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA202=true;
function funcionesA202(){
if (paseA202 == true){
puntuacionUnoR = preguntas[202].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA202 = false;
}
}
var paseB202=true;
function funcionesB202(){
if (paseB202 == true){
puntuacionUnoR = preguntas[202].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB202 = false;
}
}
var paseC202=true;
function funcionesC202(){
if (paseC202 == true){
puntuacionUnoR = preguntas[202].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC202 = false;
}
}
var paseD202=true;
function funcionesD202(){
if (paseD202 == true){
puntuacionUnoR = preguntas[202].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD202 = false;
}
}
var paseE202=true;
function funcionesE202(){
if (paseE202 == true){
puntuacionUnoR = preguntas[202].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE202 = false;
}
}
//----------------------------------------------
function vidas202(){
if(conteoVidas == 0){
document.getElementById("vida202A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida202B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida202C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA203=true;
function funcionesA203(){
if (paseA203 == true){
puntuacionUnoR = preguntas[203].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA203 = false;
}
}
var paseB203=true;
function funcionesB203(){
if (paseB203 == true){
puntuacionUnoR = preguntas[203].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB203 = false;
}
}
var paseC203=true;
function funcionesC203(){
if (paseC203 == true){
puntuacionUnoR = preguntas[203].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC203 = false;
}
}
var paseD203=true;
function funcionesD203(){
if (paseD203 == true){
puntuacionUnoR = preguntas[203].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD203 = false;
}
}
var paseE203=true;
function funcionesE203(){
if (paseE203 == true){
puntuacionUnoR = preguntas[203].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE203 = false;
}
}
//----------------------------------------------
function vidas203(){
if(conteoVidas == 0){
document.getElementById("vida203A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida203B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida203C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA204=true;
function funcionesA204(){
if (paseA204 == true){
puntuacionUnoR = preguntas[204].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA204 = false;
}
}
var paseB204=true;
function funcionesB204(){
if (paseB204 == true){
puntuacionUnoR = preguntas[204].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB204 = false;
}
}
var paseC204=true;
function funcionesC204(){
if (paseC204 == true){
puntuacionUnoR = preguntas[204].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC204 = false;
}
}
var paseD204=true;
function funcionesD204(){
if (paseD204 == true){
puntuacionUnoR = preguntas[204].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD204 = false;
}
}
var paseE204=true;
function funcionesE204(){
if (paseE204 == true){
puntuacionUnoR = preguntas[204].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE204 = false;
}
}
//----------------------------------------------
function vidas204(){
if(conteoVidas == 0){
document.getElementById("vida204A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida204B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida204C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA205=true;
function funcionesA205(){
if (paseA205 == true){
puntuacionUnoR = preguntas[205].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA205 = false;
}
}
var paseB205=true;
function funcionesB205(){
if (paseB205 == true){
puntuacionUnoR = preguntas[205].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB205 = false;
}
}
var paseC205=true;
function funcionesC205(){
if (paseC205 == true){
puntuacionUnoR = preguntas[205].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC205 = false;
}
}
var paseD205=true;
function funcionesD205(){
if (paseD205 == true){
puntuacionUnoR = preguntas[205].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD205 = false;
}
}
var paseE205=true;
function funcionesE205(){
if (paseE205 == true){
puntuacionUnoR = preguntas[205].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE205 = false;
}
}
//----------------------------------------------
function vidas205(){
if(conteoVidas == 0){
document.getElementById("vida205A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida205B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida205C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA206=true;
function funcionesA206(){
if (paseA206 == true){
puntuacionUnoR = preguntas[206].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA206 = false;
}
}
var paseB206=true;
function funcionesB206(){
if (paseB206 == true){
puntuacionUnoR = preguntas[206].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB206 = false;
}
}
var paseC206=true;
function funcionesC206(){
if (paseC206 == true){
puntuacionUnoR = preguntas[206].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC206 = false;
}
}
var paseD206=true;
function funcionesD206(){
if (paseD206 == true){
puntuacionUnoR = preguntas[206].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD206 = false;
}
}
var paseE206=true;
function funcionesE206(){
if (paseE206 == true){
puntuacionUnoR = preguntas[206].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE206 = false;
}
}
//----------------------------------------------
function vidas206(){
if(conteoVidas == 0){
document.getElementById("vida206A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida206B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida206C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA207=true;
function funcionesA207(){
if (paseA207 == true){
puntuacionUnoR = preguntas[207].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA207 = false;
}
}
var paseB207=true;
function funcionesB207(){
if (paseB207 == true){
puntuacionUnoR = preguntas[207].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB207 = false;
}
}
var paseC207=true;
function funcionesC207(){
if (paseC207 == true){
puntuacionUnoR = preguntas[207].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC207 = false;
}
}
var paseD207=true;
function funcionesD207(){
if (paseD207 == true){
puntuacionUnoR = preguntas[207].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD207 = false;
}
}
var paseE207=true;
function funcionesE207(){
if (paseE207 == true){
puntuacionUnoR = preguntas[207].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE207 = false;
}
}
//----------------------------------------------
function vidas207(){
if(conteoVidas == 0){
document.getElementById("vida207A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida207B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida207C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA208=true;
function funcionesA208(){
if (paseA208 == true){
puntuacionUnoR = preguntas[208].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA208 = false;
}
}
var paseB208=true;
function funcionesB208(){
if (paseB208 == true){
puntuacionUnoR = preguntas[208].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB208 = false;
}
}
var paseC208=true;
function funcionesC208(){
if (paseC208 == true){
puntuacionUnoR = preguntas[208].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC208 = false;
}
}
var paseD208=true;
function funcionesD208(){
if (paseD208 == true){
puntuacionUnoR = preguntas[208].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD208 = false;
}
}
var paseE208=true;
function funcionesE208(){
if (paseE208 == true){
puntuacionUnoR = preguntas[208].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE208 = false;
}
}
//----------------------------------------------
function vidas208(){
if(conteoVidas == 0){
document.getElementById("vida208A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida208B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida208C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA209=true;
function funcionesA209(){
if (paseA209 == true){
puntuacionUnoR = preguntas[209].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA209 = false;
}
}
var paseB209=true;
function funcionesB209(){
if (paseB209 == true){
puntuacionUnoR = preguntas[209].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB209 = false;
}
}
var paseC209=true;
function funcionesC209(){
if (paseC209 == true){
puntuacionUnoR = preguntas[209].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC209 = false;
}
}
var paseD209=true;
function funcionesD209(){
if (paseD209 == true){
puntuacionUnoR = preguntas[209].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD209 = false;
}
}
var paseE209=true;
function funcionesE209(){
if (paseE209 == true){
puntuacionUnoR = preguntas[209].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE209 = false;
}
}
//----------------------------------------------
function vidas209(){
if(conteoVidas == 0){
document.getElementById("vida209A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida209B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida209C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA210=true;
function funcionesA210(){
if (paseA210 == true){
puntuacionUnoR = preguntas[210].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA210 = false;
}
}
var paseB210=true;
function funcionesB210(){
if (paseB210 == true){
puntuacionUnoR = preguntas[210].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB210 = false;
}
}
var paseC210=true;
function funcionesC210(){
if (paseC210 == true){
puntuacionUnoR = preguntas[210].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC210 = false;
}
}
var paseD210=true;
function funcionesD210(){
if (paseD210 == true){
puntuacionUnoR = preguntas[210].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD210 = false;
}
}
var paseE210=true;
function funcionesE210(){
if (paseE210 == true){
puntuacionUnoR = preguntas[210].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE210 = false;
}
}
//----------------------------------------------
function vidas210(){
if(conteoVidas == 0){
document.getElementById("vida210A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida210B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida210C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA211=true;
function funcionesA211(){
if (paseA211 == true){
puntuacionUnoR = preguntas[211].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA211 = false;
}
}
var paseB211=true;
function funcionesB211(){
if (paseB211 == true){
puntuacionUnoR = preguntas[211].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB211 = false;
}
}
var paseC211=true;
function funcionesC211(){
if (paseC211 == true){
puntuacionUnoR = preguntas[211].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC211 = false;
}
}
var paseD211=true;
function funcionesD211(){
if (paseD211 == true){
puntuacionUnoR = preguntas[211].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD211 = false;
}
}
var paseE211=true;
function funcionesE211(){
if (paseE211 == true){
puntuacionUnoR = preguntas[211].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE211 = false;
}
}
//----------------------------------------------
function vidas211(){
if(conteoVidas == 0){
document.getElementById("vida211A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida211B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida211C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA212=true;
function funcionesA212(){
if (paseA212 == true){
puntuacionUnoR = preguntas[212].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA212 = false;
}
}
var paseB212=true;
function funcionesB212(){
if (paseB212 == true){
puntuacionUnoR = preguntas[212].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB212 = false;
}
}
var paseC212=true;
function funcionesC212(){
if (paseC212 == true){
puntuacionUnoR = preguntas[212].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC212 = false;
}
}
var paseD212=true;
function funcionesD212(){
if (paseD212 == true){
puntuacionUnoR = preguntas[212].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD212 = false;
}
}
var paseE212=true;
function funcionesE212(){
if (paseE212 == true){
puntuacionUnoR = preguntas[212].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE212 = false;
}
}
//----------------------------------------------
function vidas212(){
if(conteoVidas == 0){
document.getElementById("vida212A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida212B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida212C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA213=true;
function funcionesA213(){
if (paseA213 == true){
puntuacionUnoR = preguntas[213].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA213 = false;
}
}
var paseB213=true;
function funcionesB213(){
if (paseB213 == true){
puntuacionUnoR = preguntas[213].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB213 = false;
}
}
var paseC213=true;
function funcionesC213(){
if (paseC213 == true){
puntuacionUnoR = preguntas[213].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC213 = false;
}
}
var paseD213=true;
function funcionesD213(){
if (paseD213 == true){
puntuacionUnoR = preguntas[213].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD213 = false;
}
}
var paseE213=true;
function funcionesE213(){
if (paseE213 == true){
puntuacionUnoR = preguntas[213].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE213 = false;
}
}
//----------------------------------------------
function vidas213(){
if(conteoVidas == 0){
document.getElementById("vida213A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida213B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida213C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA214=true;
function funcionesA214(){
if (paseA214 == true){
puntuacionUnoR = preguntas[214].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA214 = false;
}
}
var paseB214=true;
function funcionesB214(){
if (paseB214 == true){
puntuacionUnoR = preguntas[214].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB214 = false;
}
}
var paseC214=true;
function funcionesC214(){
if (paseC214 == true){
puntuacionUnoR = preguntas[214].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC214 = false;
}
}
var paseD214=true;
function funcionesD214(){
if (paseD214 == true){
puntuacionUnoR = preguntas[214].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD214 = false;
}
}
var paseE214=true;
function funcionesE214(){
if (paseE214 == true){
puntuacionUnoR = preguntas[214].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE214 = false;
}
}
//----------------------------------------------
function vidas214(){
if(conteoVidas == 0){
document.getElementById("vida214A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida214B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida214C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA215=true;
function funcionesA215(){
if (paseA215 == true){
puntuacionUnoR = preguntas[215].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA215 = false;
}
}
var paseB215=true;
function funcionesB215(){
if (paseB215 == true){
puntuacionUnoR = preguntas[215].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB215 = false;
}
}
var paseC215=true;
function funcionesC215(){
if (paseC215 == true){
puntuacionUnoR = preguntas[215].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC215 = false;
}
}
var paseD215=true;
function funcionesD215(){
if (paseD215 == true){
puntuacionUnoR = preguntas[215].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD215 = false;
}
}
var paseE215=true;
function funcionesE215(){
if (paseE215 == true){
puntuacionUnoR = preguntas[215].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE215 = false;
}
}
//----------------------------------------------
function vidas215(){
if(conteoVidas == 0){
document.getElementById("vida215A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida215B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida215C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA216=true;
function funcionesA216(){
if (paseA216 == true){
puntuacionUnoR = preguntas[216].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA216 = false;
}
}
var paseB216=true;
function funcionesB216(){
if (paseB216 == true){
puntuacionUnoR = preguntas[216].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB216 = false;
}
}
var paseC216=true;
function funcionesC216(){
if (paseC216 == true){
puntuacionUnoR = preguntas[216].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC216 = false;
}
}
var paseD216=true;
function funcionesD216(){
if (paseD216 == true){
puntuacionUnoR = preguntas[216].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD216 = false;
}
}
var paseE216=true;
function funcionesE216(){
if (paseE216 == true){
puntuacionUnoR = preguntas[216].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE216 = false;
}
}
//----------------------------------------------
function vidas216(){
if(conteoVidas == 0){
document.getElementById("vida216A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida216B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida216C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA217=true;
function funcionesA217(){
if (paseA217 == true){
puntuacionUnoR = preguntas[217].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA217 = false;
}
}
var paseB217=true;
function funcionesB217(){
if (paseB217 == true){
puntuacionUnoR = preguntas[217].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB217 = false;
}
}
var paseC217=true;
function funcionesC217(){
if (paseC217 == true){
puntuacionUnoR = preguntas[217].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC217 = false;
}
}
var paseD217=true;
function funcionesD217(){
if (paseD217 == true){
puntuacionUnoR = preguntas[217].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD217 = false;
}
}
var paseE217=true;
function funcionesE217(){
if (paseE217 == true){
puntuacionUnoR = preguntas[217].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE217 = false;
}
}
//----------------------------------------------
function vidas217(){
if(conteoVidas == 0){
document.getElementById("vida217A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida217B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida217C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA218=true;
function funcionesA218(){
if (paseA218 == true){
puntuacionUnoR = preguntas[218].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA218 = false;
}
}
var paseB218=true;
function funcionesB218(){
if (paseB218 == true){
puntuacionUnoR = preguntas[218].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB218 = false;
}
}
var paseC218=true;
function funcionesC218(){
if (paseC218 == true){
puntuacionUnoR = preguntas[218].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC218 = false;
}
}
var paseD218=true;
function funcionesD218(){
if (paseD218 == true){
puntuacionUnoR = preguntas[218].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD218 = false;
}
}
var paseE218=true;
function funcionesE218(){
if (paseE218 == true){
puntuacionUnoR = preguntas[218].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE218 = false;
}
}
//----------------------------------------------
function vidas218(){
if(conteoVidas == 0){
document.getElementById("vida218A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida218B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida218C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA219=true;
function funcionesA219(){
if (paseA219 == true){
puntuacionUnoR = preguntas[219].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA219 = false;
}
}
var paseB219=true;
function funcionesB219(){
if (paseB219 == true){
puntuacionUnoR = preguntas[219].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB219 = false;
}
}
var paseC219=true;
function funcionesC219(){
if (paseC219 == true){
puntuacionUnoR = preguntas[219].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC219 = false;
}
}
var paseD219=true;
function funcionesD219(){
if (paseD219 == true){
puntuacionUnoR = preguntas[219].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD219 = false;
}
}
var paseE219=true;
function funcionesE219(){
if (paseE219 == true){
puntuacionUnoR = preguntas[219].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE219 = false;
}
}
//----------------------------------------------
function vidas219(){
if(conteoVidas == 0){
document.getElementById("vida219A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida219B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida219C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA220=true;
function funcionesA220(){
if (paseA220 == true){
puntuacionUnoR = preguntas[220].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA220 = false;
}
}
var paseB220=true;
function funcionesB220(){
if (paseB220 == true){
puntuacionUnoR = preguntas[220].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB220 = false;
}
}
var paseC220=true;
function funcionesC220(){
if (paseC220 == true){
puntuacionUnoR = preguntas[220].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC220 = false;
}
}
var paseD220=true;
function funcionesD220(){
if (paseD220 == true){
puntuacionUnoR = preguntas[220].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD220 = false;
}
}
var paseE220=true;
function funcionesE220(){
if (paseE220 == true){
puntuacionUnoR = preguntas[220].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE220 = false;
}
}
//----------------------------------------------
function vidas220(){
if(conteoVidas == 0){
document.getElementById("vida220A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida220B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida220C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA221=true;
function funcionesA221(){
if (paseA221 == true){
puntuacionUnoR = preguntas[221].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA221 = false;
}
}
var paseB221=true;
function funcionesB221(){
if (paseB221 == true){
puntuacionUnoR = preguntas[221].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB221 = false;
}
}
var paseC221=true;
function funcionesC221(){
if (paseC221 == true){
puntuacionUnoR = preguntas[221].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC221 = false;
}
}
var paseD221=true;
function funcionesD221(){
if (paseD221 == true){
puntuacionUnoR = preguntas[221].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD221 = false;
}
}
var paseE221=true;
function funcionesE221(){
if (paseE221 == true){
puntuacionUnoR = preguntas[221].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE221 = false;
}
}
//----------------------------------------------
function vidas221(){
if(conteoVidas == 0){
document.getElementById("vida221A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida221B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida221C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA222=true;
function funcionesA222(){
if (paseA222 == true){
puntuacionUnoR = preguntas[222].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA222 = false;
}
}
var paseB222=true;
function funcionesB222(){
if (paseB222 == true){
puntuacionUnoR = preguntas[222].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB222 = false;
}
}
var paseC222=true;
function funcionesC222(){
if (paseC222 == true){
puntuacionUnoR = preguntas[222].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC222 = false;
}
}
var paseD222=true;
function funcionesD222(){
if (paseD222 == true){
puntuacionUnoR = preguntas[222].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD222 = false;
}
}
var paseE222=true;
function funcionesE222(){
if (paseE222 == true){
puntuacionUnoR = preguntas[222].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE222 = false;
}
}
//----------------------------------------------
function vidas222(){
if(conteoVidas == 0){
document.getElementById("vida222A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida222B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida222C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA223=true;
function funcionesA223(){
if (paseA223 == true){
puntuacionUnoR = preguntas[223].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA223 = false;
}
}
var paseB223=true;
function funcionesB223(){
if (paseB223 == true){
puntuacionUnoR = preguntas[223].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB223 = false;
}
}
var paseC223=true;
function funcionesC223(){
if (paseC223 == true){
puntuacionUnoR = preguntas[223].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC223 = false;
}
}
var paseD223=true;
function funcionesD223(){
if (paseD223 == true){
puntuacionUnoR = preguntas[223].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD223 = false;
}
}
var paseE223=true;
function funcionesE223(){
if (paseE223 == true){
puntuacionUnoR = preguntas[223].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE223 = false;
}
}
//----------------------------------------------
function vidas223(){
if(conteoVidas == 0){
document.getElementById("vida223A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida223B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida223C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA224=true;
function funcionesA224(){
if (paseA224 == true){
puntuacionUnoR = preguntas[224].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA224 = false;
}
}
var paseB224=true;
function funcionesB224(){
if (paseB224 == true){
puntuacionUnoR = preguntas[224].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB224 = false;
}
}
var paseC224=true;
function funcionesC224(){
if (paseC224 == true){
puntuacionUnoR = preguntas[224].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC224 = false;
}
}
var paseD224=true;
function funcionesD224(){
if (paseD224 == true){
puntuacionUnoR = preguntas[224].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD224 = false;
}
}
var paseE224=true;
function funcionesE224(){
if (paseE224 == true){
puntuacionUnoR = preguntas[224].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE224 = false;
}
}
//----------------------------------------------
function vidas224(){
if(conteoVidas == 0){
document.getElementById("vida224A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida224B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida224C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA225=true;
function funcionesA225(){
if (paseA225 == true){
puntuacionUnoR = preguntas[225].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA225 = false;
}
}
var paseB225=true;
function funcionesB225(){
if (paseB225 == true){
puntuacionUnoR = preguntas[225].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB225 = false;
}
}
var paseC225=true;
function funcionesC225(){
if (paseC225 == true){
puntuacionUnoR = preguntas[225].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC225 = false;
}
}
var paseD225=true;
function funcionesD225(){
if (paseD225 == true){
puntuacionUnoR = preguntas[225].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD225 = false;
}
}
var paseE225=true;
function funcionesE225(){
if (paseE225 == true){
puntuacionUnoR = preguntas[225].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE225 = false;
}
}
//----------------------------------------------
function vidas225(){
if(conteoVidas == 0){
document.getElementById("vida225A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida225B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida225C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA226=true;
function funcionesA226(){
if (paseA226 == true){
puntuacionUnoR = preguntas[226].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA226 = false;
}
}
var paseB226=true;
function funcionesB226(){
if (paseB226 == true){
puntuacionUnoR = preguntas[226].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB226 = false;
}
}
var paseC226=true;
function funcionesC226(){
if (paseC226 == true){
puntuacionUnoR = preguntas[226].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC226 = false;
}
}
var paseD226=true;
function funcionesD226(){
if (paseD226 == true){
puntuacionUnoR = preguntas[226].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD226 = false;
}
}
var paseE226=true;
function funcionesE226(){
if (paseE226 == true){
puntuacionUnoR = preguntas[226].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE226 = false;
}
}
//----------------------------------------------
function vidas226(){
if(conteoVidas == 0){
document.getElementById("vida226A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida226B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida226C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA227=true;
function funcionesA227(){
if (paseA227 == true){
puntuacionUnoR = preguntas[227].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA227 = false;
}
}
var paseB227=true;
function funcionesB227(){
if (paseB227 == true){
puntuacionUnoR = preguntas[227].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB227 = false;
}
}
var paseC227=true;
function funcionesC227(){
if (paseC227 == true){
puntuacionUnoR = preguntas[227].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC227 = false;
}
}
var paseD227=true;
function funcionesD227(){
if (paseD227 == true){
puntuacionUnoR = preguntas[227].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD227 = false;
}
}
var paseE227=true;
function funcionesE227(){
if (paseE227 == true){
puntuacionUnoR = preguntas[227].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE227 = false;
}
}
//----------------------------------------------
function vidas227(){
if(conteoVidas == 0){
document.getElementById("vida227A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida227B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida227C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA228=true;
function funcionesA228(){
if (paseA228 == true){
puntuacionUnoR = preguntas[228].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA228 = false;
}
}
var paseB228=true;
function funcionesB228(){
if (paseB228 == true){
puntuacionUnoR = preguntas[228].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB228 = false;
}
}
var paseC228=true;
function funcionesC228(){
if (paseC228 == true){
puntuacionUnoR = preguntas[228].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC228 = false;
}
}
var paseD228=true;
function funcionesD228(){
if (paseD228 == true){
puntuacionUnoR = preguntas[228].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD228 = false;
}
}
var paseE228=true;
function funcionesE228(){
if (paseE228 == true){
puntuacionUnoR = preguntas[228].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE228 = false;
}
}
//----------------------------------------------
function vidas228(){
if(conteoVidas == 0){
document.getElementById("vida228A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida228B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida228C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA229=true;
function funcionesA229(){
if (paseA229 == true){
puntuacionUnoR = preguntas[229].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA229 = false;
}
}
var paseB229=true;
function funcionesB229(){
if (paseB229 == true){
puntuacionUnoR = preguntas[229].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB229 = false;
}
}
var paseC229=true;
function funcionesC229(){
if (paseC229 == true){
puntuacionUnoR = preguntas[229].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC229 = false;
}
}
var paseD229=true;
function funcionesD229(){
if (paseD229 == true){
puntuacionUnoR = preguntas[229].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD229 = false;
}
}
var paseE229=true;
function funcionesE229(){
if (paseE229 == true){
puntuacionUnoR = preguntas[229].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE229 = false;
}
}
//----------------------------------------------
function vidas229(){
if(conteoVidas == 0){
document.getElementById("vida229A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida229B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida229C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA230=true;
function funcionesA230(){
if (paseA230 == true){
puntuacionUnoR = preguntas[230].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA230 = false;
}
}
var paseB230=true;
function funcionesB230(){
if (paseB230 == true){
puntuacionUnoR = preguntas[230].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB230 = false;
}
}
var paseC230=true;
function funcionesC230(){
if (paseC230 == true){
puntuacionUnoR = preguntas[230].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC230 = false;
}
}
var paseD230=true;
function funcionesD230(){
if (paseD230 == true){
puntuacionUnoR = preguntas[230].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD230 = false;
}
}
var paseE230=true;
function funcionesE230(){
if (paseE230 == true){
puntuacionUnoR = preguntas[230].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE230 = false;
}
}
//----------------------------------------------
function vidas230(){
if(conteoVidas == 0){
document.getElementById("vida230A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida230B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida230C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA231=true;
function funcionesA231(){
if (paseA231 == true){
puntuacionUnoR = preguntas[231].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA231 = false;
}
}
var paseB231=true;
function funcionesB231(){
if (paseB231 == true){
puntuacionUnoR = preguntas[231].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB231 = false;
}
}
var paseC231=true;
function funcionesC231(){
if (paseC231 == true){
puntuacionUnoR = preguntas[231].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC231 = false;
}
}
var paseD231=true;
function funcionesD231(){
if (paseD231 == true){
puntuacionUnoR = preguntas[231].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD231 = false;
}
}
var paseE231=true;
function funcionesE231(){
if (paseE231 == true){
puntuacionUnoR = preguntas[231].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE231 = false;
}
}
//----------------------------------------------
function vidas231(){
if(conteoVidas == 0){
document.getElementById("vida231A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida231B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida231C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA232=true;
function funcionesA232(){
if (paseA232 == true){
puntuacionUnoR = preguntas[232].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA232 = false;
}
}
var paseB232=true;
function funcionesB232(){
if (paseB232 == true){
puntuacionUnoR = preguntas[232].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB232 = false;
}
}
var paseC232=true;
function funcionesC232(){
if (paseC232 == true){
puntuacionUnoR = preguntas[232].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC232 = false;
}
}
var paseD232=true;
function funcionesD232(){
if (paseD232 == true){
puntuacionUnoR = preguntas[232].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD232 = false;
}
}
var paseE232=true;
function funcionesE232(){
if (paseE232 == true){
puntuacionUnoR = preguntas[232].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE232 = false;
}
}
//----------------------------------------------
function vidas232(){
if(conteoVidas == 0){
document.getElementById("vida232A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida232B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida232C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA233=true;
function funcionesA233(){
if (paseA233 == true){
puntuacionUnoR = preguntas[233].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA233 = false;
}
}
var paseB233=true;
function funcionesB233(){
if (paseB233 == true){
puntuacionUnoR = preguntas[233].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB233 = false;
}
}
var paseC233=true;
function funcionesC233(){
if (paseC233 == true){
puntuacionUnoR = preguntas[233].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC233 = false;
}
}
var paseD233=true;
function funcionesD233(){
if (paseD233 == true){
puntuacionUnoR = preguntas[233].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD233 = false;
}
}
var paseE233=true;
function funcionesE233(){
if (paseE233 == true){
puntuacionUnoR = preguntas[233].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE233 = false;
}
}
//----------------------------------------------
function vidas233(){
if(conteoVidas == 0){
document.getElementById("vida233A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida233B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida233C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA234=true;
function funcionesA234(){
if (paseA234 == true){
puntuacionUnoR = preguntas[234].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA234 = false;
}
}
var paseB234=true;
function funcionesB234(){
if (paseB234 == true){
puntuacionUnoR = preguntas[234].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB234 = false;
}
}
var paseC234=true;
function funcionesC234(){
if (paseC234 == true){
puntuacionUnoR = preguntas[234].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC234 = false;
}
}
var paseD234=true;
function funcionesD234(){
if (paseD234 == true){
puntuacionUnoR = preguntas[234].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD234 = false;
}
}
var paseE234=true;
function funcionesE234(){
if (paseE234 == true){
puntuacionUnoR = preguntas[234].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE234 = false;
}
}
//----------------------------------------------
function vidas234(){
if(conteoVidas == 0){
document.getElementById("vida234A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida234B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida234C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA235=true;
function funcionesA235(){
if (paseA235 == true){
puntuacionUnoR = preguntas[235].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA235 = false;
}
}
var paseB235=true;
function funcionesB235(){
if (paseB235 == true){
puntuacionUnoR = preguntas[235].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB235 = false;
}
}
var paseC235=true;
function funcionesC235(){
if (paseC235 == true){
puntuacionUnoR = preguntas[235].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC235 = false;
}
}
var paseD235=true;
function funcionesD235(){
if (paseD235 == true){
puntuacionUnoR = preguntas[235].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD235 = false;
}
}
var paseE235=true;
function funcionesE235(){
if (paseE235 == true){
puntuacionUnoR = preguntas[235].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE235 = false;
}
}
//----------------------------------------------
function vidas235(){
if(conteoVidas == 0){
document.getElementById("vida235A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida235B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida235C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA236=true;
function funcionesA236(){
if (paseA236 == true){
puntuacionUnoR = preguntas[236].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA236 = false;
}
}
var paseB236=true;
function funcionesB236(){
if (paseB236 == true){
puntuacionUnoR = preguntas[236].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB236 = false;
}
}
var paseC236=true;
function funcionesC236(){
if (paseC236 == true){
puntuacionUnoR = preguntas[236].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC236 = false;
}
}
var paseD236=true;
function funcionesD236(){
if (paseD236 == true){
puntuacionUnoR = preguntas[236].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD236 = false;
}
}
var paseE236=true;
function funcionesE236(){
if (paseE236 == true){
puntuacionUnoR = preguntas[236].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE236 = false;
}
}
//----------------------------------------------
function vidas236(){
if(conteoVidas == 0){
document.getElementById("vida236A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida236B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida236C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA237=true;
function funcionesA237(){
if (paseA237 == true){
puntuacionUnoR = preguntas[237].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA237 = false;
}
}
var paseB237=true;
function funcionesB237(){
if (paseB237 == true){
puntuacionUnoR = preguntas[237].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB237 = false;
}
}
var paseC237=true;
function funcionesC237(){
if (paseC237 == true){
puntuacionUnoR = preguntas[237].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC237 = false;
}
}
var paseD237=true;
function funcionesD237(){
if (paseD237 == true){
puntuacionUnoR = preguntas[237].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD237 = false;
}
}
var paseE237=true;
function funcionesE237(){
if (paseE237 == true){
puntuacionUnoR = preguntas[237].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE237 = false;
}
}
//----------------------------------------------
function vidas237(){
if(conteoVidas == 0){
document.getElementById("vida237A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida237B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida237C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA238=true;
function funcionesA238(){
if (paseA238 == true){
puntuacionUnoR = preguntas[238].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA238 = false;
}
}
var paseB238=true;
function funcionesB238(){
if (paseB238 == true){
puntuacionUnoR = preguntas[238].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB238 = false;
}
}
var paseC238=true;
function funcionesC238(){
if (paseC238 == true){
puntuacionUnoR = preguntas[238].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC238 = false;
}
}
var paseD238=true;
function funcionesD238(){
if (paseD238 == true){
puntuacionUnoR = preguntas[238].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD238 = false;
}
}
var paseE238=true;
function funcionesE238(){
if (paseE238 == true){
puntuacionUnoR = preguntas[238].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE238 = false;
}
}
//----------------------------------------------
function vidas238(){
if(conteoVidas == 0){
document.getElementById("vida238A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida238B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida238C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA239=true;
function funcionesA239(){
if (paseA239 == true){
puntuacionUnoR = preguntas[239].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA239 = false;
}
}
var paseB239=true;
function funcionesB239(){
if (paseB239 == true){
puntuacionUnoR = preguntas[239].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB239 = false;
}
}
var paseC239=true;
function funcionesC239(){
if (paseC239 == true){
puntuacionUnoR = preguntas[239].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC239 = false;
}
}
var paseD239=true;
function funcionesD239(){
if (paseD239 == true){
puntuacionUnoR = preguntas[239].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD239 = false;
}
}
var paseE239=true;
function funcionesE239(){
if (paseE239 == true){
puntuacionUnoR = preguntas[239].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE239 = false;
}
}
//----------------------------------------------
function vidas239(){
if(conteoVidas == 0){
document.getElementById("vida239A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida239B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida239C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA240=true;
function funcionesA240(){
if (paseA240 == true){
puntuacionUnoR = preguntas[240].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA240 = false;
}
}
var paseB240=true;
function funcionesB240(){
if (paseB240 == true){
puntuacionUnoR = preguntas[240].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB240 = false;
}
}
var paseC240=true;
function funcionesC240(){
if (paseC240 == true){
puntuacionUnoR = preguntas[240].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC240 = false;
}
}
var paseD240=true;
function funcionesD240(){
if (paseD240 == true){
puntuacionUnoR = preguntas[240].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD240 = false;
}
}
var paseE240=true;
function funcionesE240(){
if (paseE240 == true){
puntuacionUnoR = preguntas[240].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE240 = false;
}
}
//----------------------------------------------
function vidas240(){
if(conteoVidas == 0){
document.getElementById("vida240A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida240B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida240C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA241=true;
function funcionesA241(){
if (paseA241 == true){
puntuacionUnoR = preguntas[241].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA241 = false;
}
}
var paseB241=true;
function funcionesB241(){
if (paseB241 == true){
puntuacionUnoR = preguntas[241].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB241 = false;
}
}
var paseC241=true;
function funcionesC241(){
if (paseC241 == true){
puntuacionUnoR = preguntas[241].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC241 = false;
}
}
var paseD241=true;
function funcionesD241(){
if (paseD241 == true){
puntuacionUnoR = preguntas[241].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD241 = false;
}
}
var paseE241=true;
function funcionesE241(){
if (paseE241 == true){
puntuacionUnoR = preguntas[241].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE241 = false;
}
}
//----------------------------------------------
function vidas241(){
if(conteoVidas == 0){
document.getElementById("vida241A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida241B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida241C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA242=true;
function funcionesA242(){
if (paseA242 == true){
puntuacionUnoR = preguntas[242].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA242 = false;
}
}
var paseB242=true;
function funcionesB242(){
if (paseB242 == true){
puntuacionUnoR = preguntas[242].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB242 = false;
}
}
var paseC242=true;
function funcionesC242(){
if (paseC242 == true){
puntuacionUnoR = preguntas[242].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC242 = false;
}
}
var paseD242=true;
function funcionesD242(){
if (paseD242 == true){
puntuacionUnoR = preguntas[242].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD242 = false;
}
}
var paseE242=true;
function funcionesE242(){
if (paseE242 == true){
puntuacionUnoR = preguntas[242].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE242 = false;
}
}
//----------------------------------------------
function vidas242(){
if(conteoVidas == 0){
document.getElementById("vida242A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida242B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida242C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA243=true;
function funcionesA243(){
if (paseA243 == true){
puntuacionUnoR = preguntas[243].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA243 = false;
}
}
var paseB243=true;
function funcionesB243(){
if (paseB243 == true){
puntuacionUnoR = preguntas[243].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB243 = false;
}
}
var paseC243=true;
function funcionesC243(){
if (paseC243 == true){
puntuacionUnoR = preguntas[243].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC243 = false;
}
}
var paseD243=true;
function funcionesD243(){
if (paseD243 == true){
puntuacionUnoR = preguntas[243].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD243 = false;
}
}
var paseE243=true;
function funcionesE243(){
if (paseE243 == true){
puntuacionUnoR = preguntas[243].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE243 = false;
}
}
//----------------------------------------------
function vidas243(){
if(conteoVidas == 0){
document.getElementById("vida243A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida243B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida243C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA244=true;
function funcionesA244(){
if (paseA244 == true){
puntuacionUnoR = preguntas[244].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA244 = false;
}
}
var paseB244=true;
function funcionesB244(){
if (paseB244 == true){
puntuacionUnoR = preguntas[244].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB244 = false;
}
}
var paseC244=true;
function funcionesC244(){
if (paseC244 == true){
puntuacionUnoR = preguntas[244].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC244 = false;
}
}
var paseD244=true;
function funcionesD244(){
if (paseD244 == true){
puntuacionUnoR = preguntas[244].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD244 = false;
}
}
var paseE244=true;
function funcionesE244(){
if (paseE244 == true){
puntuacionUnoR = preguntas[244].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE244 = false;
}
}
//----------------------------------------------
function vidas244(){
if(conteoVidas == 0){
document.getElementById("vida244A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida244B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida244C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA245=true;
function funcionesA245(){
if (paseA245 == true){
puntuacionUnoR = preguntas[245].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA245 = false;
}
}
var paseB245=true;
function funcionesB245(){
if (paseB245 == true){
puntuacionUnoR = preguntas[245].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB245 = false;
}
}
var paseC245=true;
function funcionesC245(){
if (paseC245 == true){
puntuacionUnoR = preguntas[245].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC245 = false;
}
}
var paseD245=true;
function funcionesD245(){
if (paseD245 == true){
puntuacionUnoR = preguntas[245].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD245 = false;
}
}
var paseE245=true;
function funcionesE245(){
if (paseE245 == true){
puntuacionUnoR = preguntas[245].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE245 = false;
}
}
//----------------------------------------------
function vidas245(){
if(conteoVidas == 0){
document.getElementById("vida245A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida245B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida245C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA246=true;
function funcionesA246(){
if (paseA246 == true){
puntuacionUnoR = preguntas[246].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA246 = false;
}
}
var paseB246=true;
function funcionesB246(){
if (paseB246 == true){
puntuacionUnoR = preguntas[246].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB246 = false;
}
}
var paseC246=true;
function funcionesC246(){
if (paseC246 == true){
puntuacionUnoR = preguntas[246].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC246 = false;
}
}
var paseD246=true;
function funcionesD246(){
if (paseD246 == true){
puntuacionUnoR = preguntas[246].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD246 = false;
}
}
var paseE246=true;
function funcionesE246(){
if (paseE246 == true){
puntuacionUnoR = preguntas[246].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE246 = false;
}
}
//----------------------------------------------
function vidas246(){
if(conteoVidas == 0){
document.getElementById("vida246A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida246B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida246C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA247=true;
function funcionesA247(){
if (paseA247 == true){
puntuacionUnoR = preguntas[247].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA247 = false;
}
}
var paseB247=true;
function funcionesB247(){
if (paseB247 == true){
puntuacionUnoR = preguntas[247].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB247 = false;
}
}
var paseC247=true;
function funcionesC247(){
if (paseC247 == true){
puntuacionUnoR = preguntas[247].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC247 = false;
}
}
var paseD247=true;
function funcionesD247(){
if (paseD247 == true){
puntuacionUnoR = preguntas[247].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD247 = false;
}
}
var paseE247=true;
function funcionesE247(){
if (paseE247 == true){
puntuacionUnoR = preguntas[247].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE247 = false;
}
}
//----------------------------------------------
function vidas247(){
if(conteoVidas == 0){
document.getElementById("vida247A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida247B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida247C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA248=true;
function funcionesA248(){
if (paseA248 == true){
puntuacionUnoR = preguntas[248].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA248 = false;
}
}
var paseB248=true;
function funcionesB248(){
if (paseB248 == true){
puntuacionUnoR = preguntas[248].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB248 = false;
}
}
var paseC248=true;
function funcionesC248(){
if (paseC248 == true){
puntuacionUnoR = preguntas[248].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC248 = false;
}
}
var paseD248=true;
function funcionesD248(){
if (paseD248 == true){
puntuacionUnoR = preguntas[248].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD248 = false;
}
}
var paseE248=true;
function funcionesE248(){
if (paseE248 == true){
puntuacionUnoR = preguntas[248].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE248 = false;
}
}
//----------------------------------------------
function vidas248(){
if(conteoVidas == 0){
document.getElementById("vida248A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida248B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida248C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA249=true;
function funcionesA249(){
if (paseA249 == true){
puntuacionUnoR = preguntas[249].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA249 = false;
}
}
var paseB249=true;
function funcionesB249(){
if (paseB249 == true){
puntuacionUnoR = preguntas[249].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB249 = false;
}
}
var paseC249=true;
function funcionesC249(){
if (paseC249 == true){
puntuacionUnoR = preguntas[249].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC249 = false;
}
}
var paseD249=true;
function funcionesD249(){
if (paseD249 == true){
puntuacionUnoR = preguntas[249].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD249 = false;
}
}
var paseE249=true;
function funcionesE249(){
if (paseE249 == true){
puntuacionUnoR = preguntas[249].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE249 = false;
}
}
//----------------------------------------------
function vidas249(){
if(conteoVidas == 0){
document.getElementById("vida249A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida249B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida249C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA250=true;
function funcionesA250(){
if (paseA250 == true){
puntuacionUnoR = preguntas[250].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA250 = false;
}
}
var paseB250=true;
function funcionesB250(){
if (paseB250 == true){
puntuacionUnoR = preguntas[250].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB250 = false;
}
}
var paseC250=true;
function funcionesC250(){
if (paseC250 == true){
puntuacionUnoR = preguntas[250].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC250 = false;
}
}
var paseD250=true;
function funcionesD250(){
if (paseD250 == true){
puntuacionUnoR = preguntas[250].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD250 = false;
}
}
var paseE250=true;
function funcionesE250(){
if (paseE250 == true){
puntuacionUnoR = preguntas[250].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE250 = false;
}
}
//----------------------------------------------
function vidas250(){
if(conteoVidas == 0){
document.getElementById("vida250A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida250B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida250C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA251=true;
function funcionesA251(){
if (paseA251 == true){
puntuacionUnoR = preguntas[251].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA251 = false;
}
}
var paseB251=true;
function funcionesB251(){
if (paseB251 == true){
puntuacionUnoR = preguntas[251].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB251 = false;
}
}
var paseC251=true;
function funcionesC251(){
if (paseC251 == true){
puntuacionUnoR = preguntas[251].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC251 = false;
}
}
var paseD251=true;
function funcionesD251(){
if (paseD251 == true){
puntuacionUnoR = preguntas[251].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD251 = false;
}
}
var paseE251=true;
function funcionesE251(){
if (paseE251 == true){
puntuacionUnoR = preguntas[251].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE251 = false;
}
}
//----------------------------------------------
function vidas251(){
if(conteoVidas == 0){
document.getElementById("vida251A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida251B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida251C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA252=true;
function funcionesA252(){
if (paseA252 == true){
puntuacionUnoR = preguntas[252].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA252 = false;
}
}
var paseB252=true;
function funcionesB252(){
if (paseB252 == true){
puntuacionUnoR = preguntas[252].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB252 = false;
}
}
var paseC252=true;
function funcionesC252(){
if (paseC252 == true){
puntuacionUnoR = preguntas[252].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC252 = false;
}
}
var paseD252=true;
function funcionesD252(){
if (paseD252 == true){
puntuacionUnoR = preguntas[252].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD252 = false;
}
}
var paseE252=true;
function funcionesE252(){
if (paseE252 == true){
puntuacionUnoR = preguntas[252].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE252 = false;
}
}
//----------------------------------------------
function vidas252(){
if(conteoVidas == 0){
document.getElementById("vida252A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida252B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida252C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA253=true;
function funcionesA253(){
if (paseA253 == true){
puntuacionUnoR = preguntas[253].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA253 = false;
}
}
var paseB253=true;
function funcionesB253(){
if (paseB253 == true){
puntuacionUnoR = preguntas[253].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB253 = false;
}
}
var paseC253=true;
function funcionesC253(){
if (paseC253 == true){
puntuacionUnoR = preguntas[253].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC253 = false;
}
}
var paseD253=true;
function funcionesD253(){
if (paseD253 == true){
puntuacionUnoR = preguntas[253].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD253 = false;
}
}
var paseE253=true;
function funcionesE253(){
if (paseE253 == true){
puntuacionUnoR = preguntas[253].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE253 = false;
}
}
//----------------------------------------------
function vidas253(){
if(conteoVidas == 0){
document.getElementById("vida253A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida253B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida253C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA254=true;
function funcionesA254(){
if (paseA254 == true){
puntuacionUnoR = preguntas[254].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA254 = false;
}
}
var paseB254=true;
function funcionesB254(){
if (paseB254 == true){
puntuacionUnoR = preguntas[254].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB254 = false;
}
}
var paseC254=true;
function funcionesC254(){
if (paseC254 == true){
puntuacionUnoR = preguntas[254].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC254 = false;
}
}
var paseD254=true;
function funcionesD254(){
if (paseD254 == true){
puntuacionUnoR = preguntas[254].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD254 = false;
}
}
var paseE254=true;
function funcionesE254(){
if (paseE254 == true){
puntuacionUnoR = preguntas[254].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE254 = false;
}
}
//----------------------------------------------
function vidas254(){
if(conteoVidas == 0){
document.getElementById("vida254A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida254B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida254C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA255=true;
function funcionesA255(){
if (paseA255 == true){
puntuacionUnoR = preguntas[255].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA255 = false;
}
}
var paseB255=true;
function funcionesB255(){
if (paseB255 == true){
puntuacionUnoR = preguntas[255].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB255 = false;
}
}
var paseC255=true;
function funcionesC255(){
if (paseC255 == true){
puntuacionUnoR = preguntas[255].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC255 = false;
}
}
var paseD255=true;
function funcionesD255(){
if (paseD255 == true){
puntuacionUnoR = preguntas[255].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD255 = false;
}
}
var paseE255=true;
function funcionesE255(){
if (paseE255 == true){
puntuacionUnoR = preguntas[255].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE255 = false;
}
}
//----------------------------------------------
function vidas255(){
if(conteoVidas == 0){
document.getElementById("vida255A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida255B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida255C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA256=true;
function funcionesA256(){
if (paseA256 == true){
puntuacionUnoR = preguntas[256].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA256 = false;
}
}
var paseB256=true;
function funcionesB256(){
if (paseB256 == true){
puntuacionUnoR = preguntas[256].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB256 = false;
}
}
var paseC256=true;
function funcionesC256(){
if (paseC256 == true){
puntuacionUnoR = preguntas[256].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC256 = false;
}
}
var paseD256=true;
function funcionesD256(){
if (paseD256 == true){
puntuacionUnoR = preguntas[256].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD256 = false;
}
}
var paseE256=true;
function funcionesE256(){
if (paseE256 == true){
puntuacionUnoR = preguntas[256].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE256 = false;
}
}
//----------------------------------------------
function vidas256(){
if(conteoVidas == 0){
document.getElementById("vida256A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida256B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida256C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA257=true;
function funcionesA257(){
if (paseA257 == true){
puntuacionUnoR = preguntas[257].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA257 = false;
}
}
var paseB257=true;
function funcionesB257(){
if (paseB257 == true){
puntuacionUnoR = preguntas[257].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB257 = false;
}
}
var paseC257=true;
function funcionesC257(){
if (paseC257 == true){
puntuacionUnoR = preguntas[257].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC257 = false;
}
}
var paseD257=true;
function funcionesD257(){
if (paseD257 == true){
puntuacionUnoR = preguntas[257].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD257 = false;
}
}
var paseE257=true;
function funcionesE257(){
if (paseE257 == true){
puntuacionUnoR = preguntas[257].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE257 = false;
}
}
//----------------------------------------------
function vidas257(){
if(conteoVidas == 0){
document.getElementById("vida257A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida257B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida257C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA258=true;
function funcionesA258(){
if (paseA258 == true){
puntuacionUnoR = preguntas[258].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA258 = false;
}
}
var paseB258=true;
function funcionesB258(){
if (paseB258 == true){
puntuacionUnoR = preguntas[258].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB258 = false;
}
}
var paseC258=true;
function funcionesC258(){
if (paseC258 == true){
puntuacionUnoR = preguntas[258].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC258 = false;
}
}
var paseD258=true;
function funcionesD258(){
if (paseD258 == true){
puntuacionUnoR = preguntas[258].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD258 = false;
}
}
var paseE258=true;
function funcionesE258(){
if (paseE258 == true){
puntuacionUnoR = preguntas[258].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE258 = false;
}
}
//----------------------------------------------
function vidas258(){
if(conteoVidas == 0){
document.getElementById("vida258A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida258B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida258C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA259=true;
function funcionesA259(){
if (paseA259 == true){
puntuacionUnoR = preguntas[259].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA259 = false;
}
}
var paseB259=true;
function funcionesB259(){
if (paseB259 == true){
puntuacionUnoR = preguntas[259].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB259 = false;
}
}
var paseC259=true;
function funcionesC259(){
if (paseC259 == true){
puntuacionUnoR = preguntas[259].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC259 = false;
}
}
var paseD259=true;
function funcionesD259(){
if (paseD259 == true){
puntuacionUnoR = preguntas[259].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD259 = false;
}
}
var paseE259=true;
function funcionesE259(){
if (paseE259 == true){
puntuacionUnoR = preguntas[259].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE259 = false;
}
}
//----------------------------------------------
function vidas259(){
if(conteoVidas == 0){
document.getElementById("vida259A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida259B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida259C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA260=true;
function funcionesA260(){
if (paseA260 == true){
puntuacionUnoR = preguntas[260].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA260 = false;
}
}
var paseB260=true;
function funcionesB260(){
if (paseB260 == true){
puntuacionUnoR = preguntas[260].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB260 = false;
}
}
var paseC260=true;
function funcionesC260(){
if (paseC260 == true){
puntuacionUnoR = preguntas[260].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC260 = false;
}
}
var paseD260=true;
function funcionesD260(){
if (paseD260 == true){
puntuacionUnoR = preguntas[260].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD260 = false;
}
}
var paseE260=true;
function funcionesE260(){
if (paseE260 == true){
puntuacionUnoR = preguntas[260].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE260 = false;
}
}
//----------------------------------------------
function vidas260(){
if(conteoVidas == 0){
document.getElementById("vida260A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida260B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida260C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA261=true;
function funcionesA261(){
if (paseA261 == true){
puntuacionUnoR = preguntas[261].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA261 = false;
}
}
var paseB261=true;
function funcionesB261(){
if (paseB261 == true){
puntuacionUnoR = preguntas[261].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB261 = false;
}
}
var paseC261=true;
function funcionesC261(){
if (paseC261 == true){
puntuacionUnoR = preguntas[261].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC261 = false;
}
}
var paseD261=true;
function funcionesD261(){
if (paseD261 == true){
puntuacionUnoR = preguntas[261].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD261 = false;
}
}
var paseE261=true;
function funcionesE261(){
if (paseE261 == true){
puntuacionUnoR = preguntas[261].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE261 = false;
}
}
//----------------------------------------------
function vidas261(){
if(conteoVidas == 0){
document.getElementById("vida261A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida261B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida261C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA262=true;
function funcionesA262(){
if (paseA262 == true){
puntuacionUnoR = preguntas[262].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA262 = false;
}
}
var paseB262=true;
function funcionesB262(){
if (paseB262 == true){
puntuacionUnoR = preguntas[262].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB262 = false;
}
}
var paseC262=true;
function funcionesC262(){
if (paseC262 == true){
puntuacionUnoR = preguntas[262].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC262 = false;
}
}
var paseD262=true;
function funcionesD262(){
if (paseD262 == true){
puntuacionUnoR = preguntas[262].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD262 = false;
}
}
var paseE262=true;
function funcionesE262(){
if (paseE262 == true){
puntuacionUnoR = preguntas[262].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE262 = false;
}
}
//----------------------------------------------
function vidas262(){
if(conteoVidas == 0){
document.getElementById("vida262A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida262B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida262C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA263=true;
function funcionesA263(){
if (paseA263 == true){
puntuacionUnoR = preguntas[263].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA263 = false;
}
}
var paseB263=true;
function funcionesB263(){
if (paseB263 == true){
puntuacionUnoR = preguntas[263].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB263 = false;
}
}
var paseC263=true;
function funcionesC263(){
if (paseC263 == true){
puntuacionUnoR = preguntas[263].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC263 = false;
}
}
var paseD263=true;
function funcionesD263(){
if (paseD263 == true){
puntuacionUnoR = preguntas[263].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD263 = false;
}
}
var paseE263=true;
function funcionesE263(){
if (paseE263 == true){
puntuacionUnoR = preguntas[263].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE263 = false;
}
}
//----------------------------------------------
function vidas263(){
if(conteoVidas == 0){
document.getElementById("vida263A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida263B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida263C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA264=true;
function funcionesA264(){
if (paseA264 == true){
puntuacionUnoR = preguntas[264].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA264 = false;
}
}
var paseB264=true;
function funcionesB264(){
if (paseB264 == true){
puntuacionUnoR = preguntas[264].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB264 = false;
}
}
var paseC264=true;
function funcionesC264(){
if (paseC264 == true){
puntuacionUnoR = preguntas[264].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC264 = false;
}
}
var paseD264=true;
function funcionesD264(){
if (paseD264 == true){
puntuacionUnoR = preguntas[264].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD264 = false;
}
}
var paseE264=true;
function funcionesE264(){
if (paseE264 == true){
puntuacionUnoR = preguntas[264].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE264 = false;
}
}
//----------------------------------------------
function vidas264(){
if(conteoVidas == 0){
document.getElementById("vida264A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida264B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida264C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA265=true;
function funcionesA265(){
if (paseA265 == true){
puntuacionUnoR = preguntas[265].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA265 = false;
}
}
var paseB265=true;
function funcionesB265(){
if (paseB265 == true){
puntuacionUnoR = preguntas[265].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB265 = false;
}
}
var paseC265=true;
function funcionesC265(){
if (paseC265 == true){
puntuacionUnoR = preguntas[265].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC265 = false;
}
}
var paseD265=true;
function funcionesD265(){
if (paseD265 == true){
puntuacionUnoR = preguntas[265].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD265 = false;
}
}
var paseE265=true;
function funcionesE265(){
if (paseE265 == true){
puntuacionUnoR = preguntas[265].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE265 = false;
}
}
//----------------------------------------------
function vidas265(){
if(conteoVidas == 0){
document.getElementById("vida265A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida265B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida265C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA266=true;
function funcionesA266(){
if (paseA266 == true){
puntuacionUnoR = preguntas[266].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA266 = false;
}
}
var paseB266=true;
function funcionesB266(){
if (paseB266 == true){
puntuacionUnoR = preguntas[266].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB266 = false;
}
}
var paseC266=true;
function funcionesC266(){
if (paseC266 == true){
puntuacionUnoR = preguntas[266].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC266 = false;
}
}
var paseD266=true;
function funcionesD266(){
if (paseD266 == true){
puntuacionUnoR = preguntas[266].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD266 = false;
}
}
var paseE266=true;
function funcionesE266(){
if (paseE266 == true){
puntuacionUnoR = preguntas[266].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE266 = false;
}
}
//----------------------------------------------
function vidas266(){
if(conteoVidas == 0){
document.getElementById("vida266A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida266B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida266C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA267=true;
function funcionesA267(){
if (paseA267 == true){
puntuacionUnoR = preguntas[267].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA267 = false;
}
}
var paseB267=true;
function funcionesB267(){
if (paseB267 == true){
puntuacionUnoR = preguntas[267].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB267 = false;
}
}
var paseC267=true;
function funcionesC267(){
if (paseC267 == true){
puntuacionUnoR = preguntas[267].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC267 = false;
}
}
var paseD267=true;
function funcionesD267(){
if (paseD267 == true){
puntuacionUnoR = preguntas[267].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD267 = false;
}
}
var paseE267=true;
function funcionesE267(){
if (paseE267 == true){
puntuacionUnoR = preguntas[267].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE267 = false;
}
}
//----------------------------------------------
function vidas267(){
if(conteoVidas == 0){
document.getElementById("vida267A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida267B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida267C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA268=true;
function funcionesA268(){
if (paseA268 == true){
puntuacionUnoR = preguntas[268].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA268 = false;
}
}
var paseB268=true;
function funcionesB268(){
if (paseB268 == true){
puntuacionUnoR = preguntas[268].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB268 = false;
}
}
var paseC268=true;
function funcionesC268(){
if (paseC268 == true){
puntuacionUnoR = preguntas[268].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC268 = false;
}
}
var paseD268=true;
function funcionesD268(){
if (paseD268 == true){
puntuacionUnoR = preguntas[268].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD268 = false;
}
}
var paseE268=true;
function funcionesE268(){
if (paseE268 == true){
puntuacionUnoR = preguntas[268].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE268 = false;
}
}
//----------------------------------------------
function vidas268(){
if(conteoVidas == 0){
document.getElementById("vida268A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida268B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida268C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA269=true;
function funcionesA269(){
if (paseA269 == true){
puntuacionUnoR = preguntas[269].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA269 = false;
}
}
var paseB269=true;
function funcionesB269(){
if (paseB269 == true){
puntuacionUnoR = preguntas[269].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB269 = false;
}
}
var paseC269=true;
function funcionesC269(){
if (paseC269 == true){
puntuacionUnoR = preguntas[269].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC269 = false;
}
}
var paseD269=true;
function funcionesD269(){
if (paseD269 == true){
puntuacionUnoR = preguntas[269].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD269 = false;
}
}
var paseE269=true;
function funcionesE269(){
if (paseE269 == true){
puntuacionUnoR = preguntas[269].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE269 = false;
}
}
//----------------------------------------------
function vidas269(){
if(conteoVidas == 0){
document.getElementById("vida269A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida269B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida269C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA270=true;
function funcionesA270(){
if (paseA270 == true){
puntuacionUnoR = preguntas[270].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA270 = false;
}
}
var paseB270=true;
function funcionesB270(){
if (paseB270 == true){
puntuacionUnoR = preguntas[270].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB270 = false;
}
}
var paseC270=true;
function funcionesC270(){
if (paseC270 == true){
puntuacionUnoR = preguntas[270].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC270 = false;
}
}
var paseD270=true;
function funcionesD270(){
if (paseD270 == true){
puntuacionUnoR = preguntas[270].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD270 = false;
}
}
var paseE270=true;
function funcionesE270(){
if (paseE270 == true){
puntuacionUnoR = preguntas[270].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE270 = false;
}
}
//----------------------------------------------
function vidas270(){
if(conteoVidas == 0){
document.getElementById("vida270A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida270B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida270C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA271=true;
function funcionesA271(){
if (paseA271 == true){
puntuacionUnoR = preguntas[271].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA271 = false;
}
}
var paseB271=true;
function funcionesB271(){
if (paseB271 == true){
puntuacionUnoR = preguntas[271].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB271 = false;
}
}
var paseC271=true;
function funcionesC271(){
if (paseC271 == true){
puntuacionUnoR = preguntas[271].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC271 = false;
}
}
var paseD271=true;
function funcionesD271(){
if (paseD271 == true){
puntuacionUnoR = preguntas[271].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD271 = false;
}
}
var paseE271=true;
function funcionesE271(){
if (paseE271 == true){
puntuacionUnoR = preguntas[271].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE271 = false;
}
}
//----------------------------------------------
function vidas271(){
if(conteoVidas == 0){
document.getElementById("vida271A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida271B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida271C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA272=true;
function funcionesA272(){
if (paseA272 == true){
puntuacionUnoR = preguntas[272].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA272 = false;
}
}
var paseB272=true;
function funcionesB272(){
if (paseB272 == true){
puntuacionUnoR = preguntas[272].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB272 = false;
}
}
var paseC272=true;
function funcionesC272(){
if (paseC272 == true){
puntuacionUnoR = preguntas[272].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC272 = false;
}
}
var paseD272=true;
function funcionesD272(){
if (paseD272 == true){
puntuacionUnoR = preguntas[272].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD272 = false;
}
}
var paseE272=true;
function funcionesE272(){
if (paseE272 == true){
puntuacionUnoR = preguntas[272].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE272 = false;
}
}
//----------------------------------------------
function vidas272(){
if(conteoVidas == 0){
document.getElementById("vida272A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida272B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida272C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA273=true;
function funcionesA273(){
if (paseA273 == true){
puntuacionUnoR = preguntas[273].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA273 = false;
}
}
var paseB273=true;
function funcionesB273(){
if (paseB273 == true){
puntuacionUnoR = preguntas[273].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB273 = false;
}
}
var paseC273=true;
function funcionesC273(){
if (paseC273 == true){
puntuacionUnoR = preguntas[273].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC273 = false;
}
}
var paseD273=true;
function funcionesD273(){
if (paseD273 == true){
puntuacionUnoR = preguntas[273].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD273 = false;
}
}
var paseE273=true;
function funcionesE273(){
if (paseE273 == true){
puntuacionUnoR = preguntas[273].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE273 = false;
}
}
//----------------------------------------------
function vidas273(){
if(conteoVidas == 0){
document.getElementById("vida273A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida273B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida273C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA274=true;
function funcionesA274(){
if (paseA274 == true){
puntuacionUnoR = preguntas[274].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA274 = false;
}
}
var paseB274=true;
function funcionesB274(){
if (paseB274 == true){
puntuacionUnoR = preguntas[274].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB274 = false;
}
}
var paseC274=true;
function funcionesC274(){
if (paseC274 == true){
puntuacionUnoR = preguntas[274].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC274 = false;
}
}
var paseD274=true;
function funcionesD274(){
if (paseD274 == true){
puntuacionUnoR = preguntas[274].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD274 = false;
}
}
var paseE274=true;
function funcionesE274(){
if (paseE274 == true){
puntuacionUnoR = preguntas[274].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE274 = false;
}
}
//----------------------------------------------
function vidas274(){
if(conteoVidas == 0){
document.getElementById("vida274A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida274B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida274C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA275=true;
function funcionesA275(){
if (paseA275 == true){
puntuacionUnoR = preguntas[275].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA275 = false;
}
}
var paseB275=true;
function funcionesB275(){
if (paseB275 == true){
puntuacionUnoR = preguntas[275].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB275 = false;
}
}
var paseC275=true;
function funcionesC275(){
if (paseC275 == true){
puntuacionUnoR = preguntas[275].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC275 = false;
}
}
var paseD275=true;
function funcionesD275(){
if (paseD275 == true){
puntuacionUnoR = preguntas[275].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD275 = false;
}
}
var paseE275=true;
function funcionesE275(){
if (paseE275 == true){
puntuacionUnoR = preguntas[275].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE275 = false;
}
}
//----------------------------------------------
function vidas275(){
if(conteoVidas == 0){
document.getElementById("vida275A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida275B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida275C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA276=true;
function funcionesA276(){
if (paseA276 == true){
puntuacionUnoR = preguntas[276].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA276 = false;
}
}
var paseB276=true;
function funcionesB276(){
if (paseB276 == true){
puntuacionUnoR = preguntas[276].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB276 = false;
}
}
var paseC276=true;
function funcionesC276(){
if (paseC276 == true){
puntuacionUnoR = preguntas[276].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC276 = false;
}
}
var paseD276=true;
function funcionesD276(){
if (paseD276 == true){
puntuacionUnoR = preguntas[276].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD276 = false;
}
}
var paseE276=true;
function funcionesE276(){
if (paseE276 == true){
puntuacionUnoR = preguntas[276].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE276 = false;
}
}
//----------------------------------------------
function vidas276(){
if(conteoVidas == 0){
document.getElementById("vida276A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida276B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida276C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA277=true;
function funcionesA277(){
if (paseA277 == true){
puntuacionUnoR = preguntas[277].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA277 = false;
}
}
var paseB277=true;
function funcionesB277(){
if (paseB277 == true){
puntuacionUnoR = preguntas[277].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB277 = false;
}
}
var paseC277=true;
function funcionesC277(){
if (paseC277 == true){
puntuacionUnoR = preguntas[277].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC277 = false;
}
}
var paseD277=true;
function funcionesD277(){
if (paseD277 == true){
puntuacionUnoR = preguntas[277].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD277 = false;
}
}
var paseE277=true;
function funcionesE277(){
if (paseE277 == true){
puntuacionUnoR = preguntas[277].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE277 = false;
}
}
//----------------------------------------------
function vidas277(){
if(conteoVidas == 0){
document.getElementById("vida277A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida277B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida277C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA278=true;
function funcionesA278(){
if (paseA278 == true){
puntuacionUnoR = preguntas[278].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA278 = false;
}
}
var paseB278=true;
function funcionesB278(){
if (paseB278 == true){
puntuacionUnoR = preguntas[278].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB278 = false;
}
}
var paseC278=true;
function funcionesC278(){
if (paseC278 == true){
puntuacionUnoR = preguntas[278].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC278 = false;
}
}
var paseD278=true;
function funcionesD278(){
if (paseD278 == true){
puntuacionUnoR = preguntas[278].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD278 = false;
}
}
var paseE278=true;
function funcionesE278(){
if (paseE278 == true){
puntuacionUnoR = preguntas[278].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE278 = false;
}
}
//----------------------------------------------
function vidas278(){
if(conteoVidas == 0){
document.getElementById("vida278A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida278B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida278C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA279=true;
function funcionesA279(){
if (paseA279 == true){
puntuacionUnoR = preguntas[279].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA279 = false;
}
}
var paseB279=true;
function funcionesB279(){
if (paseB279 == true){
puntuacionUnoR = preguntas[279].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB279 = false;
}
}
var paseC279=true;
function funcionesC279(){
if (paseC279 == true){
puntuacionUnoR = preguntas[279].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC279 = false;
}
}
var paseD279=true;
function funcionesD279(){
if (paseD279 == true){
puntuacionUnoR = preguntas[279].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD279 = false;
}
}
var paseE279=true;
function funcionesE279(){
if (paseE279 == true){
puntuacionUnoR = preguntas[279].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE279 = false;
}
}
//----------------------------------------------
function vidas279(){
if(conteoVidas == 0){
document.getElementById("vida279A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida279B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida279C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA280=true;
function funcionesA280(){
if (paseA280 == true){
puntuacionUnoR = preguntas[280].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA280 = false;
}
}
var paseB280=true;
function funcionesB280(){
if (paseB280 == true){
puntuacionUnoR = preguntas[280].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB280 = false;
}
}
var paseC280=true;
function funcionesC280(){
if (paseC280 == true){
puntuacionUnoR = preguntas[280].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC280 = false;
}
}
var paseD280=true;
function funcionesD280(){
if (paseD280 == true){
puntuacionUnoR = preguntas[280].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD280 = false;
}
}
var paseE280=true;
function funcionesE280(){
if (paseE280 == true){
puntuacionUnoR = preguntas[280].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE280 = false;
}
}
//----------------------------------------------
function vidas280(){
if(conteoVidas == 0){
document.getElementById("vida280A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida280B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida280C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA281=true;
function funcionesA281(){
if (paseA281 == true){
puntuacionUnoR = preguntas[281].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA281 = false;
}
}
var paseB281=true;
function funcionesB281(){
if (paseB281 == true){
puntuacionUnoR = preguntas[281].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB281 = false;
}
}
var paseC281=true;
function funcionesC281(){
if (paseC281 == true){
puntuacionUnoR = preguntas[281].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC281 = false;
}
}
var paseD281=true;
function funcionesD281(){
if (paseD281 == true){
puntuacionUnoR = preguntas[281].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD281 = false;
}
}
var paseE281=true;
function funcionesE281(){
if (paseE281 == true){
puntuacionUnoR = preguntas[281].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE281 = false;
}
}
//----------------------------------------------
function vidas281(){
if(conteoVidas == 0){
document.getElementById("vida281A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida281B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida281C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA282=true;
function funcionesA282(){
if (paseA282 == true){
puntuacionUnoR = preguntas[282].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA282 = false;
}
}
var paseB282=true;
function funcionesB282(){
if (paseB282 == true){
puntuacionUnoR = preguntas[282].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB282 = false;
}
}
var paseC282=true;
function funcionesC282(){
if (paseC282 == true){
puntuacionUnoR = preguntas[282].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC282 = false;
}
}
var paseD282=true;
function funcionesD282(){
if (paseD282 == true){
puntuacionUnoR = preguntas[282].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD282 = false;
}
}
var paseE282=true;
function funcionesE282(){
if (paseE282 == true){
puntuacionUnoR = preguntas[282].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE282 = false;
}
}
//----------------------------------------------
function vidas282(){
if(conteoVidas == 0){
document.getElementById("vida282A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida282B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida282C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA283=true;
function funcionesA283(){
if (paseA283 == true){
puntuacionUnoR = preguntas[283].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA283 = false;
}
}
var paseB283=true;
function funcionesB283(){
if (paseB283 == true){
puntuacionUnoR = preguntas[283].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB283 = false;
}
}
var paseC283=true;
function funcionesC283(){
if (paseC283 == true){
puntuacionUnoR = preguntas[283].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC283 = false;
}
}
var paseD283=true;
function funcionesD283(){
if (paseD283 == true){
puntuacionUnoR = preguntas[283].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD283 = false;
}
}
var paseE283=true;
function funcionesE283(){
if (paseE283 == true){
puntuacionUnoR = preguntas[283].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE283 = false;
}
}
//----------------------------------------------
function vidas283(){
if(conteoVidas == 0){
document.getElementById("vida283A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida283B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida283C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA284=true;
function funcionesA284(){
if (paseA284 == true){
puntuacionUnoR = preguntas[284].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA284 = false;
}
}
var paseB284=true;
function funcionesB284(){
if (paseB284 == true){
puntuacionUnoR = preguntas[284].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB284 = false;
}
}
var paseC284=true;
function funcionesC284(){
if (paseC284 == true){
puntuacionUnoR = preguntas[284].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC284 = false;
}
}
var paseD284=true;
function funcionesD284(){
if (paseD284 == true){
puntuacionUnoR = preguntas[284].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD284 = false;
}
}
var paseE284=true;
function funcionesE284(){
if (paseE284 == true){
puntuacionUnoR = preguntas[284].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE284 = false;
}
}
//----------------------------------------------
function vidas284(){
if(conteoVidas == 0){
document.getElementById("vida284A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida284B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida284C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA285=true;
function funcionesA285(){
if (paseA285 == true){
puntuacionUnoR = preguntas[285].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA285 = false;
}
}
var paseB285=true;
function funcionesB285(){
if (paseB285 == true){
puntuacionUnoR = preguntas[285].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB285 = false;
}
}
var paseC285=true;
function funcionesC285(){
if (paseC285 == true){
puntuacionUnoR = preguntas[285].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC285 = false;
}
}
var paseD285=true;
function funcionesD285(){
if (paseD285 == true){
puntuacionUnoR = preguntas[285].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD285 = false;
}
}
var paseE285=true;
function funcionesE285(){
if (paseE285 == true){
puntuacionUnoR = preguntas[285].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE285 = false;
}
}
//----------------------------------------------
function vidas285(){
if(conteoVidas == 0){
document.getElementById("vida285A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida285B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida285C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA286=true;
function funcionesA286(){
if (paseA286 == true){
puntuacionUnoR = preguntas[286].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA286 = false;
}
}
var paseB286=true;
function funcionesB286(){
if (paseB286 == true){
puntuacionUnoR = preguntas[286].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB286 = false;
}
}
var paseC286=true;
function funcionesC286(){
if (paseC286 == true){
puntuacionUnoR = preguntas[286].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC286 = false;
}
}
var paseD286=true;
function funcionesD286(){
if (paseD286 == true){
puntuacionUnoR = preguntas[286].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD286 = false;
}
}
var paseE286=true;
function funcionesE286(){
if (paseE286 == true){
puntuacionUnoR = preguntas[286].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE286 = false;
}
}
//----------------------------------------------
function vidas286(){
if(conteoVidas == 0){
document.getElementById("vida286A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida286B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida286C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA287=true;
function funcionesA287(){
if (paseA287 == true){
puntuacionUnoR = preguntas[287].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA287 = false;
}
}
var paseB287=true;
function funcionesB287(){
if (paseB287 == true){
puntuacionUnoR = preguntas[287].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB287 = false;
}
}
var paseC287=true;
function funcionesC287(){
if (paseC287 == true){
puntuacionUnoR = preguntas[287].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC287 = false;
}
}
var paseD287=true;
function funcionesD287(){
if (paseD287 == true){
puntuacionUnoR = preguntas[287].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD287 = false;
}
}
var paseE287=true;
function funcionesE287(){
if (paseE287 == true){
puntuacionUnoR = preguntas[287].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE287 = false;
}
}
//----------------------------------------------
function vidas287(){
if(conteoVidas == 0){
document.getElementById("vida287A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida287B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida287C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA288=true;
function funcionesA288(){
if (paseA288 == true){
puntuacionUnoR = preguntas[288].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA288 = false;
}
}
var paseB288=true;
function funcionesB288(){
if (paseB288 == true){
puntuacionUnoR = preguntas[288].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB288 = false;
}
}
var paseC288=true;
function funcionesC288(){
if (paseC288 == true){
puntuacionUnoR = preguntas[288].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC288 = false;
}
}
var paseD288=true;
function funcionesD288(){
if (paseD288 == true){
puntuacionUnoR = preguntas[288].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD288 = false;
}
}
var paseE288=true;
function funcionesE288(){
if (paseE288 == true){
puntuacionUnoR = preguntas[288].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE288 = false;
}
}
//----------------------------------------------
function vidas288(){
if(conteoVidas == 0){
document.getElementById("vida288A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida288B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida288C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA289=true;
function funcionesA289(){
if (paseA289 == true){
puntuacionUnoR = preguntas[289].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA289 = false;
}
}
var paseB289=true;
function funcionesB289(){
if (paseB289 == true){
puntuacionUnoR = preguntas[289].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB289 = false;
}
}
var paseC289=true;
function funcionesC289(){
if (paseC289 == true){
puntuacionUnoR = preguntas[289].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC289 = false;
}
}
var paseD289=true;
function funcionesD289(){
if (paseD289 == true){
puntuacionUnoR = preguntas[289].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD289 = false;
}
}
var paseE289=true;
function funcionesE289(){
if (paseE289 == true){
puntuacionUnoR = preguntas[289].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE289 = false;
}
}
//----------------------------------------------
function vidas289(){
if(conteoVidas == 0){
document.getElementById("vida289A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida289B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida289C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA290=true;
function funcionesA290(){
if (paseA290 == true){
puntuacionUnoR = preguntas[290].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA290 = false;
}
}
var paseB290=true;
function funcionesB290(){
if (paseB290 == true){
puntuacionUnoR = preguntas[290].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB290 = false;
}
}
var paseC290=true;
function funcionesC290(){
if (paseC290 == true){
puntuacionUnoR = preguntas[290].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC290 = false;
}
}
var paseD290=true;
function funcionesD290(){
if (paseD290 == true){
puntuacionUnoR = preguntas[290].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD290 = false;
}
}
var paseE290=true;
function funcionesE290(){
if (paseE290 == true){
puntuacionUnoR = preguntas[290].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE290 = false;
}
}
//----------------------------------------------
function vidas290(){
if(conteoVidas == 0){
document.getElementById("vida290A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida290B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida290C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA291=true;
function funcionesA291(){
if (paseA291 == true){
puntuacionUnoR = preguntas[291].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA291 = false;
}
}
var paseB291=true;
function funcionesB291(){
if (paseB291 == true){
puntuacionUnoR = preguntas[291].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB291 = false;
}
}
var paseC291=true;
function funcionesC291(){
if (paseC291 == true){
puntuacionUnoR = preguntas[291].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC291 = false;
}
}
var paseD291=true;
function funcionesD291(){
if (paseD291 == true){
puntuacionUnoR = preguntas[291].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD291 = false;
}
}
var paseE291=true;
function funcionesE291(){
if (paseE291 == true){
puntuacionUnoR = preguntas[291].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE291 = false;
}
}
//----------------------------------------------
function vidas291(){
if(conteoVidas == 0){
document.getElementById("vida291A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida291B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida291C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA292=true;
function funcionesA292(){
if (paseA292 == true){
puntuacionUnoR = preguntas[292].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA292 = false;
}
}
var paseB292=true;
function funcionesB292(){
if (paseB292 == true){
puntuacionUnoR = preguntas[292].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB292 = false;
}
}
var paseC292=true;
function funcionesC292(){
if (paseC292 == true){
puntuacionUnoR = preguntas[292].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC292 = false;
}
}
var paseD292=true;
function funcionesD292(){
if (paseD292 == true){
puntuacionUnoR = preguntas[292].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD292 = false;
}
}
var paseE292=true;
function funcionesE292(){
if (paseE292 == true){
puntuacionUnoR = preguntas[292].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE292 = false;
}
}
//----------------------------------------------
function vidas292(){
if(conteoVidas == 0){
document.getElementById("vida292A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida292B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida292C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA293=true;
function funcionesA293(){
if (paseA293 == true){
puntuacionUnoR = preguntas[293].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA293 = false;
}
}
var paseB293=true;
function funcionesB293(){
if (paseB293 == true){
puntuacionUnoR = preguntas[293].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB293 = false;
}
}
var paseC293=true;
function funcionesC293(){
if (paseC293 == true){
puntuacionUnoR = preguntas[293].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC293 = false;
}
}
var paseD293=true;
function funcionesD293(){
if (paseD293 == true){
puntuacionUnoR = preguntas[293].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD293 = false;
}
}
var paseE293=true;
function funcionesE293(){
if (paseE293 == true){
puntuacionUnoR = preguntas[293].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE293 = false;
}
}
//----------------------------------------------
function vidas293(){
if(conteoVidas == 0){
document.getElementById("vida293A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida293B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida293C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA294=true;
function funcionesA294(){
if (paseA294 == true){
puntuacionUnoR = preguntas[294].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA294 = false;
}
}
var paseB294=true;
function funcionesB294(){
if (paseB294 == true){
puntuacionUnoR = preguntas[294].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB294 = false;
}
}
var paseC294=true;
function funcionesC294(){
if (paseC294 == true){
puntuacionUnoR = preguntas[294].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC294 = false;
}
}
var paseD294=true;
function funcionesD294(){
if (paseD294 == true){
puntuacionUnoR = preguntas[294].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD294 = false;
}
}
var paseE294=true;
function funcionesE294(){
if (paseE294 == true){
puntuacionUnoR = preguntas[294].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE294 = false;
}
}
//----------------------------------------------
function vidas294(){
if(conteoVidas == 0){
document.getElementById("vida294A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida294B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida294C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA295=true;
function funcionesA295(){
if (paseA295 == true){
puntuacionUnoR = preguntas[295].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA295 = false;
}
}
var paseB295=true;
function funcionesB295(){
if (paseB295 == true){
puntuacionUnoR = preguntas[295].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB295 = false;
}
}
var paseC295=true;
function funcionesC295(){
if (paseC295 == true){
puntuacionUnoR = preguntas[295].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC295 = false;
}
}
var paseD295=true;
function funcionesD295(){
if (paseD295 == true){
puntuacionUnoR = preguntas[295].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD295 = false;
}
}
var paseE295=true;
function funcionesE295(){
if (paseE295 == true){
puntuacionUnoR = preguntas[295].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE295 = false;
}
}
//----------------------------------------------
function vidas295(){
if(conteoVidas == 0){
document.getElementById("vida295A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida295B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida295C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA296=true;
function funcionesA296(){
if (paseA296 == true){
puntuacionUnoR = preguntas[296].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA296 = false;
}
}
var paseB296=true;
function funcionesB296(){
if (paseB296 == true){
puntuacionUnoR = preguntas[296].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB296 = false;
}
}
var paseC296=true;
function funcionesC296(){
if (paseC296 == true){
puntuacionUnoR = preguntas[296].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC296 = false;
}
}
var paseD296=true;
function funcionesD296(){
if (paseD296 == true){
puntuacionUnoR = preguntas[296].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD296 = false;
}
}
var paseE296=true;
function funcionesE296(){
if (paseE296 == true){
puntuacionUnoR = preguntas[296].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE296 = false;
}
}
//----------------------------------------------
function vidas296(){
if(conteoVidas == 0){
document.getElementById("vida296A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida296B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida296C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA297=true;
function funcionesA297(){
if (paseA297 == true){
puntuacionUnoR = preguntas[297].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA297 = false;
}
}
var paseB297=true;
function funcionesB297(){
if (paseB297 == true){
puntuacionUnoR = preguntas[297].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB297 = false;
}
}
var paseC297=true;
function funcionesC297(){
if (paseC297 == true){
puntuacionUnoR = preguntas[297].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC297 = false;
}
}
var paseD297=true;
function funcionesD297(){
if (paseD297 == true){
puntuacionUnoR = preguntas[297].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD297 = false;
}
}
var paseE297=true;
function funcionesE297(){
if (paseE297 == true){
puntuacionUnoR = preguntas[297].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE297 = false;
}
}
//----------------------------------------------
function vidas297(){
if(conteoVidas == 0){
document.getElementById("vida297A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida297B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida297C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA298=true;
function funcionesA298(){
if (paseA298 == true){
puntuacionUnoR = preguntas[298].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA298 = false;
}
}
var paseB298=true;
function funcionesB298(){
if (paseB298 == true){
puntuacionUnoR = preguntas[298].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB298 = false;
}
}
var paseC298=true;
function funcionesC298(){
if (paseC298 == true){
puntuacionUnoR = preguntas[298].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC298 = false;
}
}
var paseD298=true;
function funcionesD298(){
if (paseD298 == true){
puntuacionUnoR = preguntas[298].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD298 = false;
}
}
var paseE298=true;
function funcionesE298(){
if (paseE298 == true){
puntuacionUnoR = preguntas[298].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE298 = false;
}
}
//----------------------------------------------
function vidas298(){
if(conteoVidas == 0){
document.getElementById("vida298A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida298B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida298C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA299=true;
function funcionesA299(){
if (paseA299 == true){
puntuacionUnoR = preguntas[299].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA299 = false;
}
}
var paseB299=true;
function funcionesB299(){
if (paseB299 == true){
puntuacionUnoR = preguntas[299].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB299 = false;
}
}
var paseC299=true;
function funcionesC299(){
if (paseC299 == true){
puntuacionUnoR = preguntas[299].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC299 = false;
}
}
var paseD299=true;
function funcionesD299(){
if (paseD299 == true){
puntuacionUnoR = preguntas[299].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD299 = false;
}
}
var paseE299=true;
function funcionesE299(){
if (paseE299 == true){
puntuacionUnoR = preguntas[299].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE299 = false;
}
}
//----------------------------------------------
function vidas299(){
if(conteoVidas == 0){
document.getElementById("vida299A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida299B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida299C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA300=true;
function funcionesA300(){
if (paseA300 == true){
puntuacionUnoR = preguntas[300].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA300 = false;
}
}
var paseB300=true;
function funcionesB300(){
if (paseB300 == true){
puntuacionUnoR = preguntas[300].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB300 = false;
}
}
var paseC300=true;
function funcionesC300(){
if (paseC300 == true){
puntuacionUnoR = preguntas[300].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC300 = false;
}
}
var paseD300=true;
function funcionesD300(){
if (paseD300 == true){
puntuacionUnoR = preguntas[300].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD300 = false;
}
}
var paseE300=true;
function funcionesE300(){
if (paseE300 == true){
puntuacionUnoR = preguntas[300].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE300 = false;
}
}
//----------------------------------------------
function vidas300(){
if(conteoVidas == 0){
document.getElementById("vida300A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida300B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida300C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA301=true;
function funcionesA301(){
if (paseA301 == true){
puntuacionUnoR = preguntas[301].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA301 = false;
}
}
var paseB301=true;
function funcionesB301(){
if (paseB301 == true){
puntuacionUnoR = preguntas[301].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB301 = false;
}
}
var paseC301=true;
function funcionesC301(){
if (paseC301 == true){
puntuacionUnoR = preguntas[301].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC301 = false;
}
}
var paseD301=true;
function funcionesD301(){
if (paseD301 == true){
puntuacionUnoR = preguntas[301].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD301 = false;
}
}
var paseE301=true;
function funcionesE301(){
if (paseE301 == true){
puntuacionUnoR = preguntas[301].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE301 = false;
}
}
//----------------------------------------------
function vidas301(){
if(conteoVidas == 0){
document.getElementById("vida301A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida301B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida301C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA302=true;
function funcionesA302(){
if (paseA302 == true){
puntuacionUnoR = preguntas[302].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA302 = false;
}
}
var paseB302=true;
function funcionesB302(){
if (paseB302 == true){
puntuacionUnoR = preguntas[302].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB302 = false;
}
}
var paseC302=true;
function funcionesC302(){
if (paseC302 == true){
puntuacionUnoR = preguntas[302].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC302 = false;
}
}
var paseD302=true;
function funcionesD302(){
if (paseD302 == true){
puntuacionUnoR = preguntas[302].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD302 = false;
}
}
var paseE302=true;
function funcionesE302(){
if (paseE302 == true){
puntuacionUnoR = preguntas[302].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE302 = false;
}
}
//----------------------------------------------
function vidas302(){
if(conteoVidas == 0){
document.getElementById("vida302A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida302B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida302C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA303=true;
function funcionesA303(){
if (paseA303 == true){
puntuacionUnoR = preguntas[303].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA303 = false;
}
}
var paseB303=true;
function funcionesB303(){
if (paseB303 == true){
puntuacionUnoR = preguntas[303].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB303 = false;
}
}
var paseC303=true;
function funcionesC303(){
if (paseC303 == true){
puntuacionUnoR = preguntas[303].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC303 = false;
}
}
var paseD303=true;
function funcionesD303(){
if (paseD303 == true){
puntuacionUnoR = preguntas[303].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD303 = false;
}
}
var paseE303=true;
function funcionesE303(){
if (paseE303 == true){
puntuacionUnoR = preguntas[303].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE303 = false;
}
}
//----------------------------------------------
function vidas303(){
if(conteoVidas == 0){
document.getElementById("vida303A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida303B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida303C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA304=true;
function funcionesA304(){
if (paseA304 == true){
puntuacionUnoR = preguntas[304].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA304 = false;
}
}
var paseB304=true;
function funcionesB304(){
if (paseB304 == true){
puntuacionUnoR = preguntas[304].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB304 = false;
}
}
var paseC304=true;
function funcionesC304(){
if (paseC304 == true){
puntuacionUnoR = preguntas[304].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC304 = false;
}
}
var paseD304=true;
function funcionesD304(){
if (paseD304 == true){
puntuacionUnoR = preguntas[304].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD304 = false;
}
}
var paseE304=true;
function funcionesE304(){
if (paseE304 == true){
puntuacionUnoR = preguntas[304].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE304 = false;
}
}
//----------------------------------------------
function vidas304(){
if(conteoVidas == 0){
document.getElementById("vida304A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida304B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida304C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA305=true;
function funcionesA305(){
if (paseA305 == true){
puntuacionUnoR = preguntas[305].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA305 = false;
}
}
var paseB305=true;
function funcionesB305(){
if (paseB305 == true){
puntuacionUnoR = preguntas[305].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB305 = false;
}
}
var paseC305=true;
function funcionesC305(){
if (paseC305 == true){
puntuacionUnoR = preguntas[305].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC305 = false;
}
}
var paseD305=true;
function funcionesD305(){
if (paseD305 == true){
puntuacionUnoR = preguntas[305].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD305 = false;
}
}
var paseE305=true;
function funcionesE305(){
if (paseE305 == true){
puntuacionUnoR = preguntas[305].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE305 = false;
}
}
//----------------------------------------------
function vidas305(){
if(conteoVidas == 0){
document.getElementById("vida305A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida305B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida305C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA306=true;
function funcionesA306(){
if (paseA306 == true){
puntuacionUnoR = preguntas[306].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA306 = false;
}
}
var paseB306=true;
function funcionesB306(){
if (paseB306 == true){
puntuacionUnoR = preguntas[306].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB306 = false;
}
}
var paseC306=true;
function funcionesC306(){
if (paseC306 == true){
puntuacionUnoR = preguntas[306].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC306 = false;
}
}
var paseD306=true;
function funcionesD306(){
if (paseD306 == true){
puntuacionUnoR = preguntas[306].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD306 = false;
}
}
var paseE306=true;
function funcionesE306(){
if (paseE306 == true){
puntuacionUnoR = preguntas[306].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE306 = false;
}
}
//----------------------------------------------
function vidas306(){
if(conteoVidas == 0){
document.getElementById("vida306A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida306B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida306C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA307=true;
function funcionesA307(){
if (paseA307 == true){
puntuacionUnoR = preguntas[307].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA307 = false;
}
}
var paseB307=true;
function funcionesB307(){
if (paseB307 == true){
puntuacionUnoR = preguntas[307].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB307 = false;
}
}
var paseC307=true;
function funcionesC307(){
if (paseC307 == true){
puntuacionUnoR = preguntas[307].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC307 = false;
}
}
var paseD307=true;
function funcionesD307(){
if (paseD307 == true){
puntuacionUnoR = preguntas[307].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD307 = false;
}
}
var paseE307=true;
function funcionesE307(){
if (paseE307 == true){
puntuacionUnoR = preguntas[307].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE307 = false;
}
}
//----------------------------------------------
function vidas307(){
if(conteoVidas == 0){
document.getElementById("vida307A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida307B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida307C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA308=true;
function funcionesA308(){
if (paseA308 == true){
puntuacionUnoR = preguntas[308].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA308 = false;
}
}
var paseB308=true;
function funcionesB308(){
if (paseB308 == true){
puntuacionUnoR = preguntas[308].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB308 = false;
}
}
var paseC308=true;
function funcionesC308(){
if (paseC308 == true){
puntuacionUnoR = preguntas[308].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC308 = false;
}
}
var paseD308=true;
function funcionesD308(){
if (paseD308 == true){
puntuacionUnoR = preguntas[308].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD308 = false;
}
}
var paseE308=true;
function funcionesE308(){
if (paseE308 == true){
puntuacionUnoR = preguntas[308].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE308 = false;
}
}
//----------------------------------------------
function vidas308(){
if(conteoVidas == 0){
document.getElementById("vida308A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida308B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida308C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA309=true;
function funcionesA309(){
if (paseA309 == true){
puntuacionUnoR = preguntas[309].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA309 = false;
}
}
var paseB309=true;
function funcionesB309(){
if (paseB309 == true){
puntuacionUnoR = preguntas[309].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB309 = false;
}
}
var paseC309=true;
function funcionesC309(){
if (paseC309 == true){
puntuacionUnoR = preguntas[309].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC309 = false;
}
}
var paseD309=true;
function funcionesD309(){
if (paseD309 == true){
puntuacionUnoR = preguntas[309].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD309 = false;
}
}
var paseE309=true;
function funcionesE309(){
if (paseE309 == true){
puntuacionUnoR = preguntas[309].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE309 = false;
}
}
//----------------------------------------------
function vidas309(){
if(conteoVidas == 0){
document.getElementById("vida309A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida309B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida309C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA310=true;
function funcionesA310(){
if (paseA310 == true){
puntuacionUnoR = preguntas[310].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA310 = false;
}
}
var paseB310=true;
function funcionesB310(){
if (paseB310 == true){
puntuacionUnoR = preguntas[310].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB310 = false;
}
}
var paseC310=true;
function funcionesC310(){
if (paseC310 == true){
puntuacionUnoR = preguntas[310].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC310 = false;
}
}
var paseD310=true;
function funcionesD310(){
if (paseD310 == true){
puntuacionUnoR = preguntas[310].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD310 = false;
}
}
var paseE310=true;
function funcionesE310(){
if (paseE310 == true){
puntuacionUnoR = preguntas[310].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE310 = false;
}
}
//----------------------------------------------
function vidas310(){
if(conteoVidas == 0){
document.getElementById("vida310A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida310B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida310C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA311=true;
function funcionesA311(){
if (paseA311 == true){
puntuacionUnoR = preguntas[311].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA311 = false;
}
}
var paseB311=true;
function funcionesB311(){
if (paseB311 == true){
puntuacionUnoR = preguntas[311].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB311 = false;
}
}
var paseC311=true;
function funcionesC311(){
if (paseC311 == true){
puntuacionUnoR = preguntas[311].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC311 = false;
}
}
var paseD311=true;
function funcionesD311(){
if (paseD311 == true){
puntuacionUnoR = preguntas[311].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD311 = false;
}
}
var paseE311=true;
function funcionesE311(){
if (paseE311 == true){
puntuacionUnoR = preguntas[311].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE311 = false;
}
}
//----------------------------------------------
function vidas311(){
if(conteoVidas == 0){
document.getElementById("vida311A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida311B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida311C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA312=true;
function funcionesA312(){
if (paseA312 == true){
puntuacionUnoR = preguntas[312].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA312 = false;
}
}
var paseB312=true;
function funcionesB312(){
if (paseB312 == true){
puntuacionUnoR = preguntas[312].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB312 = false;
}
}
var paseC312=true;
function funcionesC312(){
if (paseC312 == true){
puntuacionUnoR = preguntas[312].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC312 = false;
}
}
var paseD312=true;
function funcionesD312(){
if (paseD312 == true){
puntuacionUnoR = preguntas[312].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD312 = false;
}
}
var paseE312=true;
function funcionesE312(){
if (paseE312 == true){
puntuacionUnoR = preguntas[312].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE312 = false;
}
}
//----------------------------------------------
function vidas312(){
if(conteoVidas == 0){
document.getElementById("vida312A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida312B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida312C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA313=true;
function funcionesA313(){
if (paseA313 == true){
puntuacionUnoR = preguntas[313].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA313 = false;
}
}
var paseB313=true;
function funcionesB313(){
if (paseB313 == true){
puntuacionUnoR = preguntas[313].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB313 = false;
}
}
var paseC313=true;
function funcionesC313(){
if (paseC313 == true){
puntuacionUnoR = preguntas[313].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC313 = false;
}
}
var paseD313=true;
function funcionesD313(){
if (paseD313 == true){
puntuacionUnoR = preguntas[313].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD313 = false;
}
}
var paseE313=true;
function funcionesE313(){
if (paseE313 == true){
puntuacionUnoR = preguntas[313].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE313 = false;
}
}
//----------------------------------------------
function vidas313(){
if(conteoVidas == 0){
document.getElementById("vida313A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida313B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida313C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA314=true;
function funcionesA314(){
if (paseA314 == true){
puntuacionUnoR = preguntas[314].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA314 = false;
}
}
var paseB314=true;
function funcionesB314(){
if (paseB314 == true){
puntuacionUnoR = preguntas[314].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB314 = false;
}
}
var paseC314=true;
function funcionesC314(){
if (paseC314 == true){
puntuacionUnoR = preguntas[314].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC314 = false;
}
}
var paseD314=true;
function funcionesD314(){
if (paseD314 == true){
puntuacionUnoR = preguntas[314].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD314 = false;
}
}
var paseE314=true;
function funcionesE314(){
if (paseE314 == true){
puntuacionUnoR = preguntas[314].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE314 = false;
}
}
//----------------------------------------------
function vidas314(){
if(conteoVidas == 0){
document.getElementById("vida314A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida314B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida314C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA315=true;
function funcionesA315(){
if (paseA315 == true){
puntuacionUnoR = preguntas[315].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA315 = false;
}
}
var paseB315=true;
function funcionesB315(){
if (paseB315 == true){
puntuacionUnoR = preguntas[315].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB315 = false;
}
}
var paseC315=true;
function funcionesC315(){
if (paseC315 == true){
puntuacionUnoR = preguntas[315].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC315 = false;
}
}
var paseD315=true;
function funcionesD315(){
if (paseD315 == true){
puntuacionUnoR = preguntas[315].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD315 = false;
}
}
var paseE315=true;
function funcionesE315(){
if (paseE315 == true){
puntuacionUnoR = preguntas[315].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE315 = false;
}
}
//----------------------------------------------
function vidas315(){
if(conteoVidas == 0){
document.getElementById("vida315A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida315B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida315C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA316=true;
function funcionesA316(){
if (paseA316 == true){
puntuacionUnoR = preguntas[316].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA316 = false;
}
}
var paseB316=true;
function funcionesB316(){
if (paseB316 == true){
puntuacionUnoR = preguntas[316].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB316 = false;
}
}
var paseC316=true;
function funcionesC316(){
if (paseC316 == true){
puntuacionUnoR = preguntas[316].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC316 = false;
}
}
var paseD316=true;
function funcionesD316(){
if (paseD316 == true){
puntuacionUnoR = preguntas[316].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD316 = false;
}
}
var paseE316=true;
function funcionesE316(){
if (paseE316 == true){
puntuacionUnoR = preguntas[316].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE316 = false;
}
}
//----------------------------------------------
function vidas316(){
if(conteoVidas == 0){
document.getElementById("vida316A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida316B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida316C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA317=true;
function funcionesA317(){
if (paseA317 == true){
puntuacionUnoR = preguntas[317].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA317 = false;
}
}
var paseB317=true;
function funcionesB317(){
if (paseB317 == true){
puntuacionUnoR = preguntas[317].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB317 = false;
}
}
var paseC317=true;
function funcionesC317(){
if (paseC317 == true){
puntuacionUnoR = preguntas[317].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC317 = false;
}
}
var paseD317=true;
function funcionesD317(){
if (paseD317 == true){
puntuacionUnoR = preguntas[317].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD317 = false;
}
}
var paseE317=true;
function funcionesE317(){
if (paseE317 == true){
puntuacionUnoR = preguntas[317].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE317 = false;
}
}
//----------------------------------------------
function vidas317(){
if(conteoVidas == 0){
document.getElementById("vida317A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida317B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida317C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA318=true;
function funcionesA318(){
if (paseA318 == true){
puntuacionUnoR = preguntas[318].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA318 = false;
}
}
var paseB318=true;
function funcionesB318(){
if (paseB318 == true){
puntuacionUnoR = preguntas[318].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB318 = false;
}
}
var paseC318=true;
function funcionesC318(){
if (paseC318 == true){
puntuacionUnoR = preguntas[318].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC318 = false;
}
}
var paseD318=true;
function funcionesD318(){
if (paseD318 == true){
puntuacionUnoR = preguntas[318].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD318 = false;
}
}
var paseE318=true;
function funcionesE318(){
if (paseE318 == true){
puntuacionUnoR = preguntas[318].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE318 = false;
}
}
//----------------------------------------------
function vidas318(){
if(conteoVidas == 0){
document.getElementById("vida318A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida318B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida318C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA319=true;
function funcionesA319(){
if (paseA319 == true){
puntuacionUnoR = preguntas[319].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA319 = false;
}
}
var paseB319=true;
function funcionesB319(){
if (paseB319 == true){
puntuacionUnoR = preguntas[319].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB319 = false;
}
}
var paseC319=true;
function funcionesC319(){
if (paseC319 == true){
puntuacionUnoR = preguntas[319].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC319 = false;
}
}
var paseD319=true;
function funcionesD319(){
if (paseD319 == true){
puntuacionUnoR = preguntas[319].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD319 = false;
}
}
var paseE319=true;
function funcionesE319(){
if (paseE319 == true){
puntuacionUnoR = preguntas[319].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE319 = false;
}
}
//----------------------------------------------
function vidas319(){
if(conteoVidas == 0){
document.getElementById("vida319A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida319B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida319C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA320=true;
function funcionesA320(){
if (paseA320 == true){
puntuacionUnoR = preguntas[320].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA320 = false;
}
}
var paseB320=true;
function funcionesB320(){
if (paseB320 == true){
puntuacionUnoR = preguntas[320].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB320 = false;
}
}
var paseC320=true;
function funcionesC320(){
if (paseC320 == true){
puntuacionUnoR = preguntas[320].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC320 = false;
}
}
var paseD320=true;
function funcionesD320(){
if (paseD320 == true){
puntuacionUnoR = preguntas[320].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD320 = false;
}
}
var paseE320=true;
function funcionesE320(){
if (paseE320 == true){
puntuacionUnoR = preguntas[320].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE320 = false;
}
}
//----------------------------------------------
function vidas320(){
if(conteoVidas == 0){
document.getElementById("vida320A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida320B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida320C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA321=true;
function funcionesA321(){
if (paseA321 == true){
puntuacionUnoR = preguntas[321].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA321 = false;
}
}
var paseB321=true;
function funcionesB321(){
if (paseB321 == true){
puntuacionUnoR = preguntas[321].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB321 = false;
}
}
var paseC321=true;
function funcionesC321(){
if (paseC321 == true){
puntuacionUnoR = preguntas[321].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC321 = false;
}
}
var paseD321=true;
function funcionesD321(){
if (paseD321 == true){
puntuacionUnoR = preguntas[321].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD321 = false;
}
}
var paseE321=true;
function funcionesE321(){
if (paseE321 == true){
puntuacionUnoR = preguntas[321].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE321 = false;
}
}
//----------------------------------------------
function vidas321(){
if(conteoVidas == 0){
document.getElementById("vida321A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida321B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida321C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA322=true;
function funcionesA322(){
if (paseA322 == true){
puntuacionUnoR = preguntas[322].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA322 = false;
}
}
var paseB322=true;
function funcionesB322(){
if (paseB322 == true){
puntuacionUnoR = preguntas[322].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB322 = false;
}
}
var paseC322=true;
function funcionesC322(){
if (paseC322 == true){
puntuacionUnoR = preguntas[322].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC322 = false;
}
}
var paseD322=true;
function funcionesD322(){
if (paseD322 == true){
puntuacionUnoR = preguntas[322].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD322 = false;
}
}
var paseE322=true;
function funcionesE322(){
if (paseE322 == true){
puntuacionUnoR = preguntas[322].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE322 = false;
}
}
//----------------------------------------------
function vidas322(){
if(conteoVidas == 0){
document.getElementById("vida322A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida322B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida322C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA323=true;
function funcionesA323(){
if (paseA323 == true){
puntuacionUnoR = preguntas[323].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA323 = false;
}
}
var paseB323=true;
function funcionesB323(){
if (paseB323 == true){
puntuacionUnoR = preguntas[323].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB323 = false;
}
}
var paseC323=true;
function funcionesC323(){
if (paseC323 == true){
puntuacionUnoR = preguntas[323].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC323 = false;
}
}
var paseD323=true;
function funcionesD323(){
if (paseD323 == true){
puntuacionUnoR = preguntas[323].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD323 = false;
}
}
var paseE323=true;
function funcionesE323(){
if (paseE323 == true){
puntuacionUnoR = preguntas[323].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE323 = false;
}
}
//----------------------------------------------
function vidas323(){
if(conteoVidas == 0){
document.getElementById("vida323A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida323B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida323C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA324=true;
function funcionesA324(){
if (paseA324 == true){
puntuacionUnoR = preguntas[324].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA324 = false;
}
}
var paseB324=true;
function funcionesB324(){
if (paseB324 == true){
puntuacionUnoR = preguntas[324].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB324 = false;
}
}
var paseC324=true;
function funcionesC324(){
if (paseC324 == true){
puntuacionUnoR = preguntas[324].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC324 = false;
}
}
var paseD324=true;
function funcionesD324(){
if (paseD324 == true){
puntuacionUnoR = preguntas[324].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD324 = false;
}
}
var paseE324=true;
function funcionesE324(){
if (paseE324 == true){
puntuacionUnoR = preguntas[324].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE324 = false;
}
}
//----------------------------------------------
function vidas324(){
if(conteoVidas == 0){
document.getElementById("vida324A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida324B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida324C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA325=true;
function funcionesA325(){
if (paseA325 == true){
puntuacionUnoR = preguntas[325].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA325 = false;
}
}
var paseB325=true;
function funcionesB325(){
if (paseB325 == true){
puntuacionUnoR = preguntas[325].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB325 = false;
}
}
var paseC325=true;
function funcionesC325(){
if (paseC325 == true){
puntuacionUnoR = preguntas[325].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC325 = false;
}
}
var paseD325=true;
function funcionesD325(){
if (paseD325 == true){
puntuacionUnoR = preguntas[325].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD325 = false;
}
}
var paseE325=true;
function funcionesE325(){
if (paseE325 == true){
puntuacionUnoR = preguntas[325].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE325 = false;
}
}
//----------------------------------------------
function vidas325(){
if(conteoVidas == 0){
document.getElementById("vida325A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida325B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida325C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA326=true;
function funcionesA326(){
if (paseA326 == true){
puntuacionUnoR = preguntas[326].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA326 = false;
}
}
var paseB326=true;
function funcionesB326(){
if (paseB326 == true){
puntuacionUnoR = preguntas[326].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB326 = false;
}
}
var paseC326=true;
function funcionesC326(){
if (paseC326 == true){
puntuacionUnoR = preguntas[326].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC326 = false;
}
}
var paseD326=true;
function funcionesD326(){
if (paseD326 == true){
puntuacionUnoR = preguntas[326].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD326 = false;
}
}
var paseE326=true;
function funcionesE326(){
if (paseE326 == true){
puntuacionUnoR = preguntas[326].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE326 = false;
}
}
//----------------------------------------------
function vidas326(){
if(conteoVidas == 0){
document.getElementById("vida326A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida326B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida326C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA327=true;
function funcionesA327(){
if (paseA327 == true){
puntuacionUnoR = preguntas[327].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA327 = false;
}
}
var paseB327=true;
function funcionesB327(){
if (paseB327 == true){
puntuacionUnoR = preguntas[327].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB327 = false;
}
}
var paseC327=true;
function funcionesC327(){
if (paseC327 == true){
puntuacionUnoR = preguntas[327].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC327 = false;
}
}
var paseD327=true;
function funcionesD327(){
if (paseD327 == true){
puntuacionUnoR = preguntas[327].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD327 = false;
}
}
var paseE327=true;
function funcionesE327(){
if (paseE327 == true){
puntuacionUnoR = preguntas[327].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE327 = false;
}
}
//----------------------------------------------
function vidas327(){
if(conteoVidas == 0){
document.getElementById("vida327A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida327B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida327C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA328=true;
function funcionesA328(){
if (paseA328 == true){
puntuacionUnoR = preguntas[328].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA328 = false;
}
}
var paseB328=true;
function funcionesB328(){
if (paseB328 == true){
puntuacionUnoR = preguntas[328].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB328 = false;
}
}
var paseC328=true;
function funcionesC328(){
if (paseC328 == true){
puntuacionUnoR = preguntas[328].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC328 = false;
}
}
var paseD328=true;
function funcionesD328(){
if (paseD328 == true){
puntuacionUnoR = preguntas[328].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD328 = false;
}
}
var paseE328=true;
function funcionesE328(){
if (paseE328 == true){
puntuacionUnoR = preguntas[328].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE328 = false;
}
}
//----------------------------------------------
function vidas328(){
if(conteoVidas == 0){
document.getElementById("vida328A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida328B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida328C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA329=true;
function funcionesA329(){
if (paseA329 == true){
puntuacionUnoR = preguntas[329].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA329 = false;
}
}
var paseB329=true;
function funcionesB329(){
if (paseB329 == true){
puntuacionUnoR = preguntas[329].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB329 = false;
}
}
var paseC329=true;
function funcionesC329(){
if (paseC329 == true){
puntuacionUnoR = preguntas[329].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC329 = false;
}
}
var paseD329=true;
function funcionesD329(){
if (paseD329 == true){
puntuacionUnoR = preguntas[329].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD329 = false;
}
}
var paseE329=true;
function funcionesE329(){
if (paseE329 == true){
puntuacionUnoR = preguntas[329].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE329 = false;
}
}
//----------------------------------------------
function vidas329(){
if(conteoVidas == 0){
document.getElementById("vida329A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida329B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida329C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA330=true;
function funcionesA330(){
if (paseA330 == true){
puntuacionUnoR = preguntas[330].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA330 = false;
}
}
var paseB330=true;
function funcionesB330(){
if (paseB330 == true){
puntuacionUnoR = preguntas[330].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB330 = false;
}
}
var paseC330=true;
function funcionesC330(){
if (paseC330 == true){
puntuacionUnoR = preguntas[330].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC330 = false;
}
}
var paseD330=true;
function funcionesD330(){
if (paseD330 == true){
puntuacionUnoR = preguntas[330].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD330 = false;
}
}
var paseE330=true;
function funcionesE330(){
if (paseE330 == true){
puntuacionUnoR = preguntas[330].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE330 = false;
}
}
//----------------------------------------------
function vidas330(){
if(conteoVidas == 0){
document.getElementById("vida330A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida330B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida330C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA331=true;
function funcionesA331(){
if (paseA331 == true){
puntuacionUnoR = preguntas[331].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA331 = false;
}
}
var paseB331=true;
function funcionesB331(){
if (paseB331 == true){
puntuacionUnoR = preguntas[331].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB331 = false;
}
}
var paseC331=true;
function funcionesC331(){
if (paseC331 == true){
puntuacionUnoR = preguntas[331].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC331 = false;
}
}
var paseD331=true;
function funcionesD331(){
if (paseD331 == true){
puntuacionUnoR = preguntas[331].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD331 = false;
}
}
var paseE331=true;
function funcionesE331(){
if (paseE331 == true){
puntuacionUnoR = preguntas[331].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE331 = false;
}
}
//----------------------------------------------
function vidas331(){
if(conteoVidas == 0){
document.getElementById("vida331A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida331B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida331C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA332=true;
function funcionesA332(){
if (paseA332 == true){
puntuacionUnoR = preguntas[332].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA332 = false;
}
}
var paseB332=true;
function funcionesB332(){
if (paseB332 == true){
puntuacionUnoR = preguntas[332].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB332 = false;
}
}
var paseC332=true;
function funcionesC332(){
if (paseC332 == true){
puntuacionUnoR = preguntas[332].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC332 = false;
}
}
var paseD332=true;
function funcionesD332(){
if (paseD332 == true){
puntuacionUnoR = preguntas[332].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD332 = false;
}
}
var paseE332=true;
function funcionesE332(){
if (paseE332 == true){
puntuacionUnoR = preguntas[332].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE332 = false;
}
}
//----------------------------------------------
function vidas332(){
if(conteoVidas == 0){
document.getElementById("vida332A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida332B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida332C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA333=true;
function funcionesA333(){
if (paseA333 == true){
puntuacionUnoR = preguntas[333].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA333 = false;
}
}
var paseB333=true;
function funcionesB333(){
if (paseB333 == true){
puntuacionUnoR = preguntas[333].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB333 = false;
}
}
var paseC333=true;
function funcionesC333(){
if (paseC333 == true){
puntuacionUnoR = preguntas[333].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC333 = false;
}
}
var paseD333=true;
function funcionesD333(){
if (paseD333 == true){
puntuacionUnoR = preguntas[333].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD333 = false;
}
}
var paseE333=true;
function funcionesE333(){
if (paseE333 == true){
puntuacionUnoR = preguntas[333].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE333 = false;
}
}
//----------------------------------------------
function vidas333(){
if(conteoVidas == 0){
document.getElementById("vida333A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida333B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida333C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA334=true;
function funcionesA334(){
if (paseA334 == true){
puntuacionUnoR = preguntas[334].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA334 = false;
}
}
var paseB334=true;
function funcionesB334(){
if (paseB334 == true){
puntuacionUnoR = preguntas[334].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB334 = false;
}
}
var paseC334=true;
function funcionesC334(){
if (paseC334 == true){
puntuacionUnoR = preguntas[334].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC334 = false;
}
}
var paseD334=true;
function funcionesD334(){
if (paseD334 == true){
puntuacionUnoR = preguntas[334].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD334 = false;
}
}
var paseE334=true;
function funcionesE334(){
if (paseE334 == true){
puntuacionUnoR = preguntas[334].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE334 = false;
}
}
//----------------------------------------------
function vidas334(){
if(conteoVidas == 0){
document.getElementById("vida334A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida334B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida334C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA335=true;
function funcionesA335(){
if (paseA335 == true){
puntuacionUnoR = preguntas[335].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA335 = false;
}
}
var paseB335=true;
function funcionesB335(){
if (paseB335 == true){
puntuacionUnoR = preguntas[335].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB335 = false;
}
}
var paseC335=true;
function funcionesC335(){
if (paseC335 == true){
puntuacionUnoR = preguntas[335].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC335 = false;
}
}
var paseD335=true;
function funcionesD335(){
if (paseD335 == true){
puntuacionUnoR = preguntas[335].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD335 = false;
}
}
var paseE335=true;
function funcionesE335(){
if (paseE335 == true){
puntuacionUnoR = preguntas[335].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE335 = false;
}
}
//----------------------------------------------
function vidas335(){
if(conteoVidas == 0){
document.getElementById("vida335A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida335B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida335C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA336=true;
function funcionesA336(){
if (paseA336 == true){
puntuacionUnoR = preguntas[336].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA336 = false;
}
}
var paseB336=true;
function funcionesB336(){
if (paseB336 == true){
puntuacionUnoR = preguntas[336].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB336 = false;
}
}
var paseC336=true;
function funcionesC336(){
if (paseC336 == true){
puntuacionUnoR = preguntas[336].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC336 = false;
}
}
var paseD336=true;
function funcionesD336(){
if (paseD336 == true){
puntuacionUnoR = preguntas[336].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD336 = false;
}
}
var paseE336=true;
function funcionesE336(){
if (paseE336 == true){
puntuacionUnoR = preguntas[336].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE336 = false;
}
}
//----------------------------------------------
function vidas336(){
if(conteoVidas == 0){
document.getElementById("vida336A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida336B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida336C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA337=true;
function funcionesA337(){
if (paseA337 == true){
puntuacionUnoR = preguntas[337].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA337 = false;
}
}
var paseB337=true;
function funcionesB337(){
if (paseB337 == true){
puntuacionUnoR = preguntas[337].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB337 = false;
}
}
var paseC337=true;
function funcionesC337(){
if (paseC337 == true){
puntuacionUnoR = preguntas[337].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC337 = false;
}
}
var paseD337=true;
function funcionesD337(){
if (paseD337 == true){
puntuacionUnoR = preguntas[337].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD337 = false;
}
}
var paseE337=true;
function funcionesE337(){
if (paseE337 == true){
puntuacionUnoR = preguntas[337].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE337 = false;
}
}
//----------------------------------------------
function vidas337(){
if(conteoVidas == 0){
document.getElementById("vida337A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida337B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida337C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA338=true;
function funcionesA338(){
if (paseA338 == true){
puntuacionUnoR = preguntas[338].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA338 = false;
}
}
var paseB338=true;
function funcionesB338(){
if (paseB338 == true){
puntuacionUnoR = preguntas[338].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB338 = false;
}
}
var paseC338=true;
function funcionesC338(){
if (paseC338 == true){
puntuacionUnoR = preguntas[338].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC338 = false;
}
}
var paseD338=true;
function funcionesD338(){
if (paseD338 == true){
puntuacionUnoR = preguntas[338].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD338 = false;
}
}
var paseE338=true;
function funcionesE338(){
if (paseE338 == true){
puntuacionUnoR = preguntas[338].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE338 = false;
}
}
//----------------------------------------------
function vidas338(){
if(conteoVidas == 0){
document.getElementById("vida338A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida338B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida338C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA339=true;
function funcionesA339(){
if (paseA339 == true){
puntuacionUnoR = preguntas[339].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA339 = false;
}
}
var paseB339=true;
function funcionesB339(){
if (paseB339 == true){
puntuacionUnoR = preguntas[339].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB339 = false;
}
}
var paseC339=true;
function funcionesC339(){
if (paseC339 == true){
puntuacionUnoR = preguntas[339].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC339 = false;
}
}
var paseD339=true;
function funcionesD339(){
if (paseD339 == true){
puntuacionUnoR = preguntas[339].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD339 = false;
}
}
var paseE339=true;
function funcionesE339(){
if (paseE339 == true){
puntuacionUnoR = preguntas[339].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE339 = false;
}
}
//----------------------------------------------
function vidas339(){
if(conteoVidas == 0){
document.getElementById("vida339A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida339B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida339C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA340=true;
function funcionesA340(){
if (paseA340 == true){
puntuacionUnoR = preguntas[340].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA340 = false;
}
}
var paseB340=true;
function funcionesB340(){
if (paseB340 == true){
puntuacionUnoR = preguntas[340].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB340 = false;
}
}
var paseC340=true;
function funcionesC340(){
if (paseC340 == true){
puntuacionUnoR = preguntas[340].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC340 = false;
}
}
var paseD340=true;
function funcionesD340(){
if (paseD340 == true){
puntuacionUnoR = preguntas[340].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD340 = false;
}
}
var paseE340=true;
function funcionesE340(){
if (paseE340 == true){
puntuacionUnoR = preguntas[340].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE340 = false;
}
}
//----------------------------------------------
function vidas340(){
if(conteoVidas == 0){
document.getElementById("vida340A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida340B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida340C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA341=true;
function funcionesA341(){
if (paseA341 == true){
puntuacionUnoR = preguntas[341].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA341 = false;
}
}
var paseB341=true;
function funcionesB341(){
if (paseB341 == true){
puntuacionUnoR = preguntas[341].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB341 = false;
}
}
var paseC341=true;
function funcionesC341(){
if (paseC341 == true){
puntuacionUnoR = preguntas[341].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC341 = false;
}
}
var paseD341=true;
function funcionesD341(){
if (paseD341 == true){
puntuacionUnoR = preguntas[341].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD341 = false;
}
}
var paseE341=true;
function funcionesE341(){
if (paseE341 == true){
puntuacionUnoR = preguntas[341].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE341 = false;
}
}
//----------------------------------------------
function vidas341(){
if(conteoVidas == 0){
document.getElementById("vida341A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida341B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida341C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA342=true;
function funcionesA342(){
if (paseA342 == true){
puntuacionUnoR = preguntas[342].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA342 = false;
}
}
var paseB342=true;
function funcionesB342(){
if (paseB342 == true){
puntuacionUnoR = preguntas[342].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB342 = false;
}
}
var paseC342=true;
function funcionesC342(){
if (paseC342 == true){
puntuacionUnoR = preguntas[342].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC342 = false;
}
}
var paseD342=true;
function funcionesD342(){
if (paseD342 == true){
puntuacionUnoR = preguntas[342].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD342 = false;
}
}
var paseE342=true;
function funcionesE342(){
if (paseE342 == true){
puntuacionUnoR = preguntas[342].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE342 = false;
}
}
//----------------------------------------------
function vidas342(){
if(conteoVidas == 0){
document.getElementById("vida342A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida342B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida342C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA343=true;
function funcionesA343(){
if (paseA343 == true){
puntuacionUnoR = preguntas[343].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA343 = false;
}
}
var paseB343=true;
function funcionesB343(){
if (paseB343 == true){
puntuacionUnoR = preguntas[343].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB343 = false;
}
}
var paseC343=true;
function funcionesC343(){
if (paseC343 == true){
puntuacionUnoR = preguntas[343].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC343 = false;
}
}
var paseD343=true;
function funcionesD343(){
if (paseD343 == true){
puntuacionUnoR = preguntas[343].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD343 = false;
}
}
var paseE343=true;
function funcionesE343(){
if (paseE343 == true){
puntuacionUnoR = preguntas[343].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE343 = false;
}
}
//----------------------------------------------
function vidas343(){
if(conteoVidas == 0){
document.getElementById("vida343A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida343B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida343C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA344=true;
function funcionesA344(){
if (paseA344 == true){
puntuacionUnoR = preguntas[344].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA344 = false;
}
}
var paseB344=true;
function funcionesB344(){
if (paseB344 == true){
puntuacionUnoR = preguntas[344].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB344 = false;
}
}
var paseC344=true;
function funcionesC344(){
if (paseC344 == true){
puntuacionUnoR = preguntas[344].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC344 = false;
}
}
var paseD344=true;
function funcionesD344(){
if (paseD344 == true){
puntuacionUnoR = preguntas[344].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD344 = false;
}
}
var paseE344=true;
function funcionesE344(){
if (paseE344 == true){
puntuacionUnoR = preguntas[344].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE344 = false;
}
}
//----------------------------------------------
function vidas344(){
if(conteoVidas == 0){
document.getElementById("vida344A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida344B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida344C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA345=true;
function funcionesA345(){
if (paseA345 == true){
puntuacionUnoR = preguntas[345].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA345 = false;
}
}
var paseB345=true;
function funcionesB345(){
if (paseB345 == true){
puntuacionUnoR = preguntas[345].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB345 = false;
}
}
var paseC345=true;
function funcionesC345(){
if (paseC345 == true){
puntuacionUnoR = preguntas[345].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC345 = false;
}
}
var paseD345=true;
function funcionesD345(){
if (paseD345 == true){
puntuacionUnoR = preguntas[345].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD345 = false;
}
}
var paseE345=true;
function funcionesE345(){
if (paseE345 == true){
puntuacionUnoR = preguntas[345].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE345 = false;
}
}
//----------------------------------------------
function vidas345(){
if(conteoVidas == 0){
document.getElementById("vida345A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida345B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida345C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA346=true;
function funcionesA346(){
if (paseA346 == true){
puntuacionUnoR = preguntas[346].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA346 = false;
}
}
var paseB346=true;
function funcionesB346(){
if (paseB346 == true){
puntuacionUnoR = preguntas[346].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB346 = false;
}
}
var paseC346=true;
function funcionesC346(){
if (paseC346 == true){
puntuacionUnoR = preguntas[346].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC346 = false;
}
}
var paseD346=true;
function funcionesD346(){
if (paseD346 == true){
puntuacionUnoR = preguntas[346].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD346 = false;
}
}
var paseE346=true;
function funcionesE346(){
if (paseE346 == true){
puntuacionUnoR = preguntas[346].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE346 = false;
}
}
//----------------------------------------------
function vidas346(){
if(conteoVidas == 0){
document.getElementById("vida346A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida346B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida346C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA347=true;
function funcionesA347(){
if (paseA347 == true){
puntuacionUnoR = preguntas[347].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA347 = false;
}
}
var paseB347=true;
function funcionesB347(){
if (paseB347 == true){
puntuacionUnoR = preguntas[347].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB347 = false;
}
}
var paseC347=true;
function funcionesC347(){
if (paseC347 == true){
puntuacionUnoR = preguntas[347].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC347 = false;
}
}
var paseD347=true;
function funcionesD347(){
if (paseD347 == true){
puntuacionUnoR = preguntas[347].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD347 = false;
}
}
var paseE347=true;
function funcionesE347(){
if (paseE347 == true){
puntuacionUnoR = preguntas[347].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE347 = false;
}
}
//----------------------------------------------
function vidas347(){
if(conteoVidas == 0){
document.getElementById("vida347A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida347B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida347C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA348=true;
function funcionesA348(){
if (paseA348 == true){
puntuacionUnoR = preguntas[348].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA348 = false;
}
}
var paseB348=true;
function funcionesB348(){
if (paseB348 == true){
puntuacionUnoR = preguntas[348].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB348 = false;
}
}
var paseC348=true;
function funcionesC348(){
if (paseC348 == true){
puntuacionUnoR = preguntas[348].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC348 = false;
}
}
var paseD348=true;
function funcionesD348(){
if (paseD348 == true){
puntuacionUnoR = preguntas[348].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD348 = false;
}
}
var paseE348=true;
function funcionesE348(){
if (paseE348 == true){
puntuacionUnoR = preguntas[348].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE348 = false;
}
}
//----------------------------------------------
function vidas348(){
if(conteoVidas == 0){
document.getElementById("vida348A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida348B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida348C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA349=true;
function funcionesA349(){
if (paseA349 == true){
puntuacionUnoR = preguntas[349].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA349 = false;
}
}
var paseB349=true;
function funcionesB349(){
if (paseB349 == true){
puntuacionUnoR = preguntas[349].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB349 = false;
}
}
var paseC349=true;
function funcionesC349(){
if (paseC349 == true){
puntuacionUnoR = preguntas[349].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC349 = false;
}
}
var paseD349=true;
function funcionesD349(){
if (paseD349 == true){
puntuacionUnoR = preguntas[349].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD349 = false;
}
}
var paseE349=true;
function funcionesE349(){
if (paseE349 == true){
puntuacionUnoR = preguntas[349].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE349 = false;
}
}
//----------------------------------------------
function vidas349(){
if(conteoVidas == 0){
document.getElementById("vida349A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida349B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida349C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA350=true;
function funcionesA350(){
if (paseA350 == true){
puntuacionUnoR = preguntas[350].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA350 = false;
}
}
var paseB350=true;
function funcionesB350(){
if (paseB350 == true){
puntuacionUnoR = preguntas[350].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB350 = false;
}
}
var paseC350=true;
function funcionesC350(){
if (paseC350 == true){
puntuacionUnoR = preguntas[350].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC350 = false;
}
}
var paseD350=true;
function funcionesD350(){
if (paseD350 == true){
puntuacionUnoR = preguntas[350].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD350 = false;
}
}
var paseE350=true;
function funcionesE350(){
if (paseE350 == true){
puntuacionUnoR = preguntas[350].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE350 = false;
}
}
//----------------------------------------------
function vidas350(){
if(conteoVidas == 0){
document.getElementById("vida350A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida350B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida350C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA351=true;
function funcionesA351(){
if (paseA351 == true){
puntuacionUnoR = preguntas[351].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA351 = false;
}
}
var paseB351=true;
function funcionesB351(){
if (paseB351 == true){
puntuacionUnoR = preguntas[351].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB351 = false;
}
}
var paseC351=true;
function funcionesC351(){
if (paseC351 == true){
puntuacionUnoR = preguntas[351].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC351 = false;
}
}
var paseD351=true;
function funcionesD351(){
if (paseD351 == true){
puntuacionUnoR = preguntas[351].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD351 = false;
}
}
var paseE351=true;
function funcionesE351(){
if (paseE351 == true){
puntuacionUnoR = preguntas[351].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE351 = false;
}
}
//----------------------------------------------
function vidas351(){
if(conteoVidas == 0){
document.getElementById("vida351A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida351B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida351C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA352=true;
function funcionesA352(){
if (paseA352 == true){
puntuacionUnoR = preguntas[352].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA352 = false;
}
}
var paseB352=true;
function funcionesB352(){
if (paseB352 == true){
puntuacionUnoR = preguntas[352].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB352 = false;
}
}
var paseC352=true;
function funcionesC352(){
if (paseC352 == true){
puntuacionUnoR = preguntas[352].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC352 = false;
}
}
var paseD352=true;
function funcionesD352(){
if (paseD352 == true){
puntuacionUnoR = preguntas[352].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD352 = false;
}
}
var paseE352=true;
function funcionesE352(){
if (paseE352 == true){
puntuacionUnoR = preguntas[352].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE352 = false;
}
}
//----------------------------------------------
function vidas352(){
if(conteoVidas == 0){
document.getElementById("vida352A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida352B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida352C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA353=true;
function funcionesA353(){
if (paseA353 == true){
puntuacionUnoR = preguntas[353].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA353 = false;
}
}
var paseB353=true;
function funcionesB353(){
if (paseB353 == true){
puntuacionUnoR = preguntas[353].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB353 = false;
}
}
var paseC353=true;
function funcionesC353(){
if (paseC353 == true){
puntuacionUnoR = preguntas[353].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC353 = false;
}
}
var paseD353=true;
function funcionesD353(){
if (paseD353 == true){
puntuacionUnoR = preguntas[353].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD353 = false;
}
}
var paseE353=true;
function funcionesE353(){
if (paseE353 == true){
puntuacionUnoR = preguntas[353].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE353 = false;
}
}
//----------------------------------------------
function vidas353(){
if(conteoVidas == 0){
document.getElementById("vida353A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida353B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida353C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA354=true;
function funcionesA354(){
if (paseA354 == true){
puntuacionUnoR = preguntas[354].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA354 = false;
}
}
var paseB354=true;
function funcionesB354(){
if (paseB354 == true){
puntuacionUnoR = preguntas[354].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB354 = false;
}
}
var paseC354=true;
function funcionesC354(){
if (paseC354 == true){
puntuacionUnoR = preguntas[354].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC354 = false;
}
}
var paseD354=true;
function funcionesD354(){
if (paseD354 == true){
puntuacionUnoR = preguntas[354].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD354 = false;
}
}
var paseE354=true;
function funcionesE354(){
if (paseE354 == true){
puntuacionUnoR = preguntas[354].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE354 = false;
}
}
//----------------------------------------------
function vidas354(){
if(conteoVidas == 0){
document.getElementById("vida354A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida354B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida354C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA355=true;
function funcionesA355(){
if (paseA355 == true){
puntuacionUnoR = preguntas[355].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA355 = false;
}
}
var paseB355=true;
function funcionesB355(){
if (paseB355 == true){
puntuacionUnoR = preguntas[355].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB355 = false;
}
}
var paseC355=true;
function funcionesC355(){
if (paseC355 == true){
puntuacionUnoR = preguntas[355].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC355 = false;
}
}
var paseD355=true;
function funcionesD355(){
if (paseD355 == true){
puntuacionUnoR = preguntas[355].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD355 = false;
}
}
var paseE355=true;
function funcionesE355(){
if (paseE355 == true){
puntuacionUnoR = preguntas[355].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE355 = false;
}
}
//----------------------------------------------
function vidas355(){
if(conteoVidas == 0){
document.getElementById("vida355A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida355B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida355C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA356=true;
function funcionesA356(){
if (paseA356 == true){
puntuacionUnoR = preguntas[356].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA356 = false;
}
}
var paseB356=true;
function funcionesB356(){
if (paseB356 == true){
puntuacionUnoR = preguntas[356].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB356 = false;
}
}
var paseC356=true;
function funcionesC356(){
if (paseC356 == true){
puntuacionUnoR = preguntas[356].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC356 = false;
}
}
var paseD356=true;
function funcionesD356(){
if (paseD356 == true){
puntuacionUnoR = preguntas[356].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD356 = false;
}
}
var paseE356=true;
function funcionesE356(){
if (paseE356 == true){
puntuacionUnoR = preguntas[356].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE356 = false;
}
}
//----------------------------------------------
function vidas356(){
if(conteoVidas == 0){
document.getElementById("vida356A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida356B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida356C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA357=true;
function funcionesA357(){
if (paseA357 == true){
puntuacionUnoR = preguntas[357].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA357 = false;
}
}
var paseB357=true;
function funcionesB357(){
if (paseB357 == true){
puntuacionUnoR = preguntas[357].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB357 = false;
}
}
var paseC357=true;
function funcionesC357(){
if (paseC357 == true){
puntuacionUnoR = preguntas[357].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC357 = false;
}
}
var paseD357=true;
function funcionesD357(){
if (paseD357 == true){
puntuacionUnoR = preguntas[357].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD357 = false;
}
}
var paseE357=true;
function funcionesE357(){
if (paseE357 == true){
puntuacionUnoR = preguntas[357].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE357 = false;
}
}
//----------------------------------------------
function vidas357(){
if(conteoVidas == 0){
document.getElementById("vida357A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida357B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida357C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA358=true;
function funcionesA358(){
if (paseA358 == true){
puntuacionUnoR = preguntas[358].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA358 = false;
}
}
var paseB358=true;
function funcionesB358(){
if (paseB358 == true){
puntuacionUnoR = preguntas[358].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB358 = false;
}
}
var paseC358=true;
function funcionesC358(){
if (paseC358 == true){
puntuacionUnoR = preguntas[358].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC358 = false;
}
}
var paseD358=true;
function funcionesD358(){
if (paseD358 == true){
puntuacionUnoR = preguntas[358].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD358 = false;
}
}
var paseE358=true;
function funcionesE358(){
if (paseE358 == true){
puntuacionUnoR = preguntas[358].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE358 = false;
}
}
//----------------------------------------------
function vidas358(){
if(conteoVidas == 0){
document.getElementById("vida358A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida358B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida358C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA359=true;
function funcionesA359(){
if (paseA359 == true){
puntuacionUnoR = preguntas[359].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA359 = false;
}
}
var paseB359=true;
function funcionesB359(){
if (paseB359 == true){
puntuacionUnoR = preguntas[359].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB359 = false;
}
}
var paseC359=true;
function funcionesC359(){
if (paseC359 == true){
puntuacionUnoR = preguntas[359].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC359 = false;
}
}
var paseD359=true;
function funcionesD359(){
if (paseD359 == true){
puntuacionUnoR = preguntas[359].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD359 = false;
}
}
var paseE359=true;
function funcionesE359(){
if (paseE359 == true){
puntuacionUnoR = preguntas[359].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE359 = false;
}
}
//----------------------------------------------
function vidas359(){
if(conteoVidas == 0){
document.getElementById("vida359A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida359B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida359C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA360=true;
function funcionesA360(){
if (paseA360 == true){
puntuacionUnoR = preguntas[360].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA360 = false;
}
}
var paseB360=true;
function funcionesB360(){
if (paseB360 == true){
puntuacionUnoR = preguntas[360].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB360 = false;
}
}
var paseC360=true;
function funcionesC360(){
if (paseC360 == true){
puntuacionUnoR = preguntas[360].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC360 = false;
}
}
var paseD360=true;
function funcionesD360(){
if (paseD360 == true){
puntuacionUnoR = preguntas[360].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD360 = false;
}
}
var paseE360=true;
function funcionesE360(){
if (paseE360 == true){
puntuacionUnoR = preguntas[360].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE360 = false;
}
}
//----------------------------------------------
function vidas360(){
if(conteoVidas == 0){
document.getElementById("vida360A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida360B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida360C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA361=true;
function funcionesA361(){
if (paseA361 == true){
puntuacionUnoR = preguntas[361].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA361 = false;
}
}
var paseB361=true;
function funcionesB361(){
if (paseB361 == true){
puntuacionUnoR = preguntas[361].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB361 = false;
}
}
var paseC361=true;
function funcionesC361(){
if (paseC361 == true){
puntuacionUnoR = preguntas[361].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC361 = false;
}
}
var paseD361=true;
function funcionesD361(){
if (paseD361 == true){
puntuacionUnoR = preguntas[361].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD361 = false;
}
}
var paseE361=true;
function funcionesE361(){
if (paseE361 == true){
puntuacionUnoR = preguntas[361].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE361 = false;
}
}
//----------------------------------------------
function vidas361(){
if(conteoVidas == 0){
document.getElementById("vida361A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida361B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida361C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA362=true;
function funcionesA362(){
if (paseA362 == true){
puntuacionUnoR = preguntas[362].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA362 = false;
}
}
var paseB362=true;
function funcionesB362(){
if (paseB362 == true){
puntuacionUnoR = preguntas[362].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB362 = false;
}
}
var paseC362=true;
function funcionesC362(){
if (paseC362 == true){
puntuacionUnoR = preguntas[362].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC362 = false;
}
}
var paseD362=true;
function funcionesD362(){
if (paseD362 == true){
puntuacionUnoR = preguntas[362].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD362 = false;
}
}
var paseE362=true;
function funcionesE362(){
if (paseE362 == true){
puntuacionUnoR = preguntas[362].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE362 = false;
}
}
//----------------------------------------------
function vidas362(){
if(conteoVidas == 0){
document.getElementById("vida362A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida362B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida362C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA363=true;
function funcionesA363(){
if (paseA363 == true){
puntuacionUnoR = preguntas[363].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA363 = false;
}
}
var paseB363=true;
function funcionesB363(){
if (paseB363 == true){
puntuacionUnoR = preguntas[363].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB363 = false;
}
}
var paseC363=true;
function funcionesC363(){
if (paseC363 == true){
puntuacionUnoR = preguntas[363].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC363 = false;
}
}
var paseD363=true;
function funcionesD363(){
if (paseD363 == true){
puntuacionUnoR = preguntas[363].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD363 = false;
}
}
var paseE363=true;
function funcionesE363(){
if (paseE363 == true){
puntuacionUnoR = preguntas[363].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE363 = false;
}
}
//----------------------------------------------
function vidas363(){
if(conteoVidas == 0){
document.getElementById("vida363A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida363B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida363C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA364=true;
function funcionesA364(){
if (paseA364 == true){
puntuacionUnoR = preguntas[364].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA364 = false;
}
}
var paseB364=true;
function funcionesB364(){
if (paseB364 == true){
puntuacionUnoR = preguntas[364].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB364 = false;
}
}
var paseC364=true;
function funcionesC364(){
if (paseC364 == true){
puntuacionUnoR = preguntas[364].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC364 = false;
}
}
var paseD364=true;
function funcionesD364(){
if (paseD364 == true){
puntuacionUnoR = preguntas[364].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD364 = false;
}
}
var paseE364=true;
function funcionesE364(){
if (paseE364 == true){
puntuacionUnoR = preguntas[364].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE364 = false;
}
}
//----------------------------------------------
function vidas364(){
if(conteoVidas == 0){
document.getElementById("vida364A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida364B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida364C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA365=true;
function funcionesA365(){
if (paseA365 == true){
puntuacionUnoR = preguntas[365].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA365 = false;
}
}
var paseB365=true;
function funcionesB365(){
if (paseB365 == true){
puntuacionUnoR = preguntas[365].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB365 = false;
}
}
var paseC365=true;
function funcionesC365(){
if (paseC365 == true){
puntuacionUnoR = preguntas[365].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC365 = false;
}
}
var paseD365=true;
function funcionesD365(){
if (paseD365 == true){
puntuacionUnoR = preguntas[365].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD365 = false;
}
}
var paseE365=true;
function funcionesE365(){
if (paseE365 == true){
puntuacionUnoR = preguntas[365].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE365 = false;
}
}
//----------------------------------------------
function vidas365(){
if(conteoVidas == 0){
document.getElementById("vida365A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida365B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida365C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA366=true;
function funcionesA366(){
if (paseA366 == true){
puntuacionUnoR = preguntas[366].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA366 = false;
}
}
var paseB366=true;
function funcionesB366(){
if (paseB366 == true){
puntuacionUnoR = preguntas[366].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB366 = false;
}
}
var paseC366=true;
function funcionesC366(){
if (paseC366 == true){
puntuacionUnoR = preguntas[366].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC366 = false;
}
}
var paseD366=true;
function funcionesD366(){
if (paseD366 == true){
puntuacionUnoR = preguntas[366].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD366 = false;
}
}
var paseE366=true;
function funcionesE366(){
if (paseE366 == true){
puntuacionUnoR = preguntas[366].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE366 = false;
}
}
//----------------------------------------------
function vidas366(){
if(conteoVidas == 0){
document.getElementById("vida366A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida366B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida366C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA367=true;
function funcionesA367(){
if (paseA367 == true){
puntuacionUnoR = preguntas[367].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA367 = false;
}
}
var paseB367=true;
function funcionesB367(){
if (paseB367 == true){
puntuacionUnoR = preguntas[367].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB367 = false;
}
}
var paseC367=true;
function funcionesC367(){
if (paseC367 == true){
puntuacionUnoR = preguntas[367].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC367 = false;
}
}
var paseD367=true;
function funcionesD367(){
if (paseD367 == true){
puntuacionUnoR = preguntas[367].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD367 = false;
}
}
var paseE367=true;
function funcionesE367(){
if (paseE367 == true){
puntuacionUnoR = preguntas[367].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE367 = false;
}
}
//----------------------------------------------
function vidas367(){
if(conteoVidas == 0){
document.getElementById("vida367A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida367B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida367C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA368=true;
function funcionesA368(){
if (paseA368 == true){
puntuacionUnoR = preguntas[368].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA368 = false;
}
}
var paseB368=true;
function funcionesB368(){
if (paseB368 == true){
puntuacionUnoR = preguntas[368].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB368 = false;
}
}
var paseC368=true;
function funcionesC368(){
if (paseC368 == true){
puntuacionUnoR = preguntas[368].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC368 = false;
}
}
var paseD368=true;
function funcionesD368(){
if (paseD368 == true){
puntuacionUnoR = preguntas[368].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD368 = false;
}
}
var paseE368=true;
function funcionesE368(){
if (paseE368 == true){
puntuacionUnoR = preguntas[368].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE368 = false;
}
}
//----------------------------------------------
function vidas368(){
if(conteoVidas == 0){
document.getElementById("vida368A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida368B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida368C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA369=true;
function funcionesA369(){
if (paseA369 == true){
puntuacionUnoR = preguntas[369].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA369 = false;
}
}
var paseB369=true;
function funcionesB369(){
if (paseB369 == true){
puntuacionUnoR = preguntas[369].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB369 = false;
}
}
var paseC369=true;
function funcionesC369(){
if (paseC369 == true){
puntuacionUnoR = preguntas[369].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC369 = false;
}
}
var paseD369=true;
function funcionesD369(){
if (paseD369 == true){
puntuacionUnoR = preguntas[369].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD369 = false;
}
}
var paseE369=true;
function funcionesE369(){
if (paseE369 == true){
puntuacionUnoR = preguntas[369].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE369 = false;
}
}
//----------------------------------------------
function vidas369(){
if(conteoVidas == 0){
document.getElementById("vida369A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida369B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida369C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA370=true;
function funcionesA370(){
if (paseA370 == true){
puntuacionUnoR = preguntas[370].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA370 = false;
}
}
var paseB370=true;
function funcionesB370(){
if (paseB370 == true){
puntuacionUnoR = preguntas[370].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB370 = false;
}
}
var paseC370=true;
function funcionesC370(){
if (paseC370 == true){
puntuacionUnoR = preguntas[370].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC370 = false;
}
}
var paseD370=true;
function funcionesD370(){
if (paseD370 == true){
puntuacionUnoR = preguntas[370].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD370 = false;
}
}
var paseE370=true;
function funcionesE370(){
if (paseE370 == true){
puntuacionUnoR = preguntas[370].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE370 = false;
}
}
//----------------------------------------------
function vidas370(){
if(conteoVidas == 0){
document.getElementById("vida370A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida370B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida370C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA371=true;
function funcionesA371(){
if (paseA371 == true){
puntuacionUnoR = preguntas[371].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA371 = false;
}
}
var paseB371=true;
function funcionesB371(){
if (paseB371 == true){
puntuacionUnoR = preguntas[371].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB371 = false;
}
}
var paseC371=true;
function funcionesC371(){
if (paseC371 == true){
puntuacionUnoR = preguntas[371].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC371 = false;
}
}
var paseD371=true;
function funcionesD371(){
if (paseD371 == true){
puntuacionUnoR = preguntas[371].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD371 = false;
}
}
var paseE371=true;
function funcionesE371(){
if (paseE371 == true){
puntuacionUnoR = preguntas[371].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE371 = false;
}
}
//----------------------------------------------
function vidas371(){
if(conteoVidas == 0){
document.getElementById("vida371A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida371B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida371C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA372=true;
function funcionesA372(){
if (paseA372 == true){
puntuacionUnoR = preguntas[372].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA372 = false;
}
}
var paseB372=true;
function funcionesB372(){
if (paseB372 == true){
puntuacionUnoR = preguntas[372].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB372 = false;
}
}
var paseC372=true;
function funcionesC372(){
if (paseC372 == true){
puntuacionUnoR = preguntas[372].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC372 = false;
}
}
var paseD372=true;
function funcionesD372(){
if (paseD372 == true){
puntuacionUnoR = preguntas[372].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD372 = false;
}
}
var paseE372=true;
function funcionesE372(){
if (paseE372 == true){
puntuacionUnoR = preguntas[372].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE372 = false;
}
}
//----------------------------------------------
function vidas372(){
if(conteoVidas == 0){
document.getElementById("vida372A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida372B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida372C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA373=true;
function funcionesA373(){
if (paseA373 == true){
puntuacionUnoR = preguntas[373].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA373 = false;
}
}
var paseB373=true;
function funcionesB373(){
if (paseB373 == true){
puntuacionUnoR = preguntas[373].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB373 = false;
}
}
var paseC373=true;
function funcionesC373(){
if (paseC373 == true){
puntuacionUnoR = preguntas[373].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC373 = false;
}
}
var paseD373=true;
function funcionesD373(){
if (paseD373 == true){
puntuacionUnoR = preguntas[373].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD373 = false;
}
}
var paseE373=true;
function funcionesE373(){
if (paseE373 == true){
puntuacionUnoR = preguntas[373].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE373 = false;
}
}
//----------------------------------------------
function vidas373(){
if(conteoVidas == 0){
document.getElementById("vida373A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida373B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida373C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA374=true;
function funcionesA374(){
if (paseA374 == true){
puntuacionUnoR = preguntas[374].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA374 = false;
}
}
var paseB374=true;
function funcionesB374(){
if (paseB374 == true){
puntuacionUnoR = preguntas[374].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB374 = false;
}
}
var paseC374=true;
function funcionesC374(){
if (paseC374 == true){
puntuacionUnoR = preguntas[374].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC374 = false;
}
}
var paseD374=true;
function funcionesD374(){
if (paseD374 == true){
puntuacionUnoR = preguntas[374].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD374 = false;
}
}
var paseE374=true;
function funcionesE374(){
if (paseE374 == true){
puntuacionUnoR = preguntas[374].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE374 = false;
}
}
//----------------------------------------------
function vidas374(){
if(conteoVidas == 0){
document.getElementById("vida374A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida374B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida374C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA375=true;
function funcionesA375(){
if (paseA375 == true){
puntuacionUnoR = preguntas[375].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA375 = false;
}
}
var paseB375=true;
function funcionesB375(){
if (paseB375 == true){
puntuacionUnoR = preguntas[375].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB375 = false;
}
}
var paseC375=true;
function funcionesC375(){
if (paseC375 == true){
puntuacionUnoR = preguntas[375].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC375 = false;
}
}
var paseD375=true;
function funcionesD375(){
if (paseD375 == true){
puntuacionUnoR = preguntas[375].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD375 = false;
}
}
var paseE375=true;
function funcionesE375(){
if (paseE375 == true){
puntuacionUnoR = preguntas[375].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE375 = false;
}
}
//----------------------------------------------
function vidas375(){
if(conteoVidas == 0){
document.getElementById("vida375A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida375B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida375C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA376=true;
function funcionesA376(){
if (paseA376 == true){
puntuacionUnoR = preguntas[376].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA376 = false;
}
}
var paseB376=true;
function funcionesB376(){
if (paseB376 == true){
puntuacionUnoR = preguntas[376].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB376 = false;
}
}
var paseC376=true;
function funcionesC376(){
if (paseC376 == true){
puntuacionUnoR = preguntas[376].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC376 = false;
}
}
var paseD376=true;
function funcionesD376(){
if (paseD376 == true){
puntuacionUnoR = preguntas[376].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD376 = false;
}
}
var paseE376=true;
function funcionesE376(){
if (paseE376 == true){
puntuacionUnoR = preguntas[376].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE376 = false;
}
}
//----------------------------------------------
function vidas376(){
if(conteoVidas == 0){
document.getElementById("vida376A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida376B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida376C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA377=true;
function funcionesA377(){
if (paseA377 == true){
puntuacionUnoR = preguntas[377].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA377 = false;
}
}
var paseB377=true;
function funcionesB377(){
if (paseB377 == true){
puntuacionUnoR = preguntas[377].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB377 = false;
}
}
var paseC377=true;
function funcionesC377(){
if (paseC377 == true){
puntuacionUnoR = preguntas[377].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC377 = false;
}
}
var paseD377=true;
function funcionesD377(){
if (paseD377 == true){
puntuacionUnoR = preguntas[377].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD377 = false;
}
}
var paseE377=true;
function funcionesE377(){
if (paseE377 == true){
puntuacionUnoR = preguntas[377].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE377 = false;
}
}
//----------------------------------------------
function vidas377(){
if(conteoVidas == 0){
document.getElementById("vida377A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida377B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida377C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA378=true;
function funcionesA378(){
if (paseA378 == true){
puntuacionUnoR = preguntas[378].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA378 = false;
}
}
var paseB378=true;
function funcionesB378(){
if (paseB378 == true){
puntuacionUnoR = preguntas[378].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB378 = false;
}
}
var paseC378=true;
function funcionesC378(){
if (paseC378 == true){
puntuacionUnoR = preguntas[378].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC378 = false;
}
}
var paseD378=true;
function funcionesD378(){
if (paseD378 == true){
puntuacionUnoR = preguntas[378].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD378 = false;
}
}
var paseE378=true;
function funcionesE378(){
if (paseE378 == true){
puntuacionUnoR = preguntas[378].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE378 = false;
}
}
//----------------------------------------------
function vidas378(){
if(conteoVidas == 0){
document.getElementById("vida378A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida378B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida378C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA379=true;
function funcionesA379(){
if (paseA379 == true){
puntuacionUnoR = preguntas[379].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA379 = false;
}
}
var paseB379=true;
function funcionesB379(){
if (paseB379 == true){
puntuacionUnoR = preguntas[379].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB379 = false;
}
}
var paseC379=true;
function funcionesC379(){
if (paseC379 == true){
puntuacionUnoR = preguntas[379].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC379 = false;
}
}
var paseD379=true;
function funcionesD379(){
if (paseD379 == true){
puntuacionUnoR = preguntas[379].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD379 = false;
}
}
var paseE379=true;
function funcionesE379(){
if (paseE379 == true){
puntuacionUnoR = preguntas[379].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE379 = false;
}
}
//----------------------------------------------
function vidas379(){
if(conteoVidas == 0){
document.getElementById("vida379A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida379B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida379C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA380=true;
function funcionesA380(){
if (paseA380 == true){
puntuacionUnoR = preguntas[380].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA380 = false;
}
}
var paseB380=true;
function funcionesB380(){
if (paseB380 == true){
puntuacionUnoR = preguntas[380].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB380 = false;
}
}
var paseC380=true;
function funcionesC380(){
if (paseC380 == true){
puntuacionUnoR = preguntas[380].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC380 = false;
}
}
var paseD380=true;
function funcionesD380(){
if (paseD380 == true){
puntuacionUnoR = preguntas[380].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD380 = false;
}
}
var paseE380=true;
function funcionesE380(){
if (paseE380 == true){
puntuacionUnoR = preguntas[380].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE380 = false;
}
}
//----------------------------------------------
function vidas380(){
if(conteoVidas == 0){
document.getElementById("vida380A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida380B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida380C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA381=true;
function funcionesA381(){
if (paseA381 == true){
puntuacionUnoR = preguntas[381].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA381 = false;
}
}
var paseB381=true;
function funcionesB381(){
if (paseB381 == true){
puntuacionUnoR = preguntas[381].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB381 = false;
}
}
var paseC381=true;
function funcionesC381(){
if (paseC381 == true){
puntuacionUnoR = preguntas[381].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC381 = false;
}
}
var paseD381=true;
function funcionesD381(){
if (paseD381 == true){
puntuacionUnoR = preguntas[381].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD381 = false;
}
}
var paseE381=true;
function funcionesE381(){
if (paseE381 == true){
puntuacionUnoR = preguntas[381].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE381 = false;
}
}
//----------------------------------------------
function vidas381(){
if(conteoVidas == 0){
document.getElementById("vida381A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida381B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida381C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA382=true;
function funcionesA382(){
if (paseA382 == true){
puntuacionUnoR = preguntas[382].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA382 = false;
}
}
var paseB382=true;
function funcionesB382(){
if (paseB382 == true){
puntuacionUnoR = preguntas[382].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB382 = false;
}
}
var paseC382=true;
function funcionesC382(){
if (paseC382 == true){
puntuacionUnoR = preguntas[382].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC382 = false;
}
}
var paseD382=true;
function funcionesD382(){
if (paseD382 == true){
puntuacionUnoR = preguntas[382].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD382 = false;
}
}
var paseE382=true;
function funcionesE382(){
if (paseE382 == true){
puntuacionUnoR = preguntas[382].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE382 = false;
}
}
//----------------------------------------------
function vidas382(){
if(conteoVidas == 0){
document.getElementById("vida382A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida382B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida382C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA383=true;
function funcionesA383(){
if (paseA383 == true){
puntuacionUnoR = preguntas[383].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA383 = false;
}
}
var paseB383=true;
function funcionesB383(){
if (paseB383 == true){
puntuacionUnoR = preguntas[383].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB383 = false;
}
}
var paseC383=true;
function funcionesC383(){
if (paseC383 == true){
puntuacionUnoR = preguntas[383].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC383 = false;
}
}
var paseD383=true;
function funcionesD383(){
if (paseD383 == true){
puntuacionUnoR = preguntas[383].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD383 = false;
}
}
var paseE383=true;
function funcionesE383(){
if (paseE383 == true){
puntuacionUnoR = preguntas[383].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE383 = false;
}
}
//----------------------------------------------
function vidas383(){
if(conteoVidas == 0){
document.getElementById("vida383A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida383B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida383C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA384=true;
function funcionesA384(){
if (paseA384 == true){
puntuacionUnoR = preguntas[384].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA384 = false;
}
}
var paseB384=true;
function funcionesB384(){
if (paseB384 == true){
puntuacionUnoR = preguntas[384].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB384 = false;
}
}
var paseC384=true;
function funcionesC384(){
if (paseC384 == true){
puntuacionUnoR = preguntas[384].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC384 = false;
}
}
var paseD384=true;
function funcionesD384(){
if (paseD384 == true){
puntuacionUnoR = preguntas[384].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD384 = false;
}
}
var paseE384=true;
function funcionesE384(){
if (paseE384 == true){
puntuacionUnoR = preguntas[384].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE384 = false;
}
}
//----------------------------------------------
function vidas384(){
if(conteoVidas == 0){
document.getElementById("vida384A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida384B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida384C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA385=true;
function funcionesA385(){
if (paseA385 == true){
puntuacionUnoR = preguntas[385].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA385 = false;
}
}
var paseB385=true;
function funcionesB385(){
if (paseB385 == true){
puntuacionUnoR = preguntas[385].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB385 = false;
}
}
var paseC385=true;
function funcionesC385(){
if (paseC385 == true){
puntuacionUnoR = preguntas[385].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC385 = false;
}
}
var paseD385=true;
function funcionesD385(){
if (paseD385 == true){
puntuacionUnoR = preguntas[385].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD385 = false;
}
}
var paseE385=true;
function funcionesE385(){
if (paseE385 == true){
puntuacionUnoR = preguntas[385].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE385 = false;
}
}
//----------------------------------------------
function vidas385(){
if(conteoVidas == 0){
document.getElementById("vida385A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida385B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida385C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA386=true;
function funcionesA386(){
if (paseA386 == true){
puntuacionUnoR = preguntas[386].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA386 = false;
}
}
var paseB386=true;
function funcionesB386(){
if (paseB386 == true){
puntuacionUnoR = preguntas[386].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB386 = false;
}
}
var paseC386=true;
function funcionesC386(){
if (paseC386 == true){
puntuacionUnoR = preguntas[386].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC386 = false;
}
}
var paseD386=true;
function funcionesD386(){
if (paseD386 == true){
puntuacionUnoR = preguntas[386].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD386 = false;
}
}
var paseE386=true;
function funcionesE386(){
if (paseE386 == true){
puntuacionUnoR = preguntas[386].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE386 = false;
}
}
//----------------------------------------------
function vidas386(){
if(conteoVidas == 0){
document.getElementById("vida386A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida386B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida386C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA387=true;
function funcionesA387(){
if (paseA387 == true){
puntuacionUnoR = preguntas[387].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA387 = false;
}
}
var paseB387=true;
function funcionesB387(){
if (paseB387 == true){
puntuacionUnoR = preguntas[387].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB387 = false;
}
}
var paseC387=true;
function funcionesC387(){
if (paseC387 == true){
puntuacionUnoR = preguntas[387].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC387 = false;
}
}
var paseD387=true;
function funcionesD387(){
if (paseD387 == true){
puntuacionUnoR = preguntas[387].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD387 = false;
}
}
var paseE387=true;
function funcionesE387(){
if (paseE387 == true){
puntuacionUnoR = preguntas[387].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE387 = false;
}
}
//----------------------------------------------
function vidas387(){
if(conteoVidas == 0){
document.getElementById("vida387A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida387B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida387C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA388=true;
function funcionesA388(){
if (paseA388 == true){
puntuacionUnoR = preguntas[388].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA388 = false;
}
}
var paseB388=true;
function funcionesB388(){
if (paseB388 == true){
puntuacionUnoR = preguntas[388].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB388 = false;
}
}
var paseC388=true;
function funcionesC388(){
if (paseC388 == true){
puntuacionUnoR = preguntas[388].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC388 = false;
}
}
var paseD388=true;
function funcionesD388(){
if (paseD388 == true){
puntuacionUnoR = preguntas[388].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD388 = false;
}
}
var paseE388=true;
function funcionesE388(){
if (paseE388 == true){
puntuacionUnoR = preguntas[388].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE388 = false;
}
}
//----------------------------------------------
function vidas388(){
if(conteoVidas == 0){
document.getElementById("vida388A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida388B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida388C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA389=true;
function funcionesA389(){
if (paseA389 == true){
puntuacionUnoR = preguntas[389].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA389 = false;
}
}
var paseB389=true;
function funcionesB389(){
if (paseB389 == true){
puntuacionUnoR = preguntas[389].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB389 = false;
}
}
var paseC389=true;
function funcionesC389(){
if (paseC389 == true){
puntuacionUnoR = preguntas[389].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC389 = false;
}
}
var paseD389=true;
function funcionesD389(){
if (paseD389 == true){
puntuacionUnoR = preguntas[389].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD389 = false;
}
}
var paseE389=true;
function funcionesE389(){
if (paseE389 == true){
puntuacionUnoR = preguntas[389].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE389 = false;
}
}
//----------------------------------------------
function vidas389(){
if(conteoVidas == 0){
document.getElementById("vida389A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida389B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida389C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA390=true;
function funcionesA390(){
if (paseA390 == true){
puntuacionUnoR = preguntas[390].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA390 = false;
}
}
var paseB390=true;
function funcionesB390(){
if (paseB390 == true){
puntuacionUnoR = preguntas[390].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB390 = false;
}
}
var paseC390=true;
function funcionesC390(){
if (paseC390 == true){
puntuacionUnoR = preguntas[390].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC390 = false;
}
}
var paseD390=true;
function funcionesD390(){
if (paseD390 == true){
puntuacionUnoR = preguntas[390].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD390 = false;
}
}
var paseE390=true;
function funcionesE390(){
if (paseE390 == true){
puntuacionUnoR = preguntas[390].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE390 = false;
}
}
//----------------------------------------------
function vidas390(){
if(conteoVidas == 0){
document.getElementById("vida390A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida390B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida390C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA391=true;
function funcionesA391(){
if (paseA391 == true){
puntuacionUnoR = preguntas[391].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA391 = false;
}
}
var paseB391=true;
function funcionesB391(){
if (paseB391 == true){
puntuacionUnoR = preguntas[391].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB391 = false;
}
}
var paseC391=true;
function funcionesC391(){
if (paseC391 == true){
puntuacionUnoR = preguntas[391].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC391 = false;
}
}
var paseD391=true;
function funcionesD391(){
if (paseD391 == true){
puntuacionUnoR = preguntas[391].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD391 = false;
}
}
var paseE391=true;
function funcionesE391(){
if (paseE391 == true){
puntuacionUnoR = preguntas[391].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE391 = false;
}
}
//----------------------------------------------
function vidas391(){
if(conteoVidas == 0){
document.getElementById("vida391A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida391B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida391C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA392=true;
function funcionesA392(){
if (paseA392 == true){
puntuacionUnoR = preguntas[392].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA392 = false;
}
}
var paseB392=true;
function funcionesB392(){
if (paseB392 == true){
puntuacionUnoR = preguntas[392].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB392 = false;
}
}
var paseC392=true;
function funcionesC392(){
if (paseC392 == true){
puntuacionUnoR = preguntas[392].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC392 = false;
}
}
var paseD392=true;
function funcionesD392(){
if (paseD392 == true){
puntuacionUnoR = preguntas[392].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD392 = false;
}
}
var paseE392=true;
function funcionesE392(){
if (paseE392 == true){
puntuacionUnoR = preguntas[392].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE392 = false;
}
}
//----------------------------------------------
function vidas392(){
if(conteoVidas == 0){
document.getElementById("vida392A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida392B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida392C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA393=true;
function funcionesA393(){
if (paseA393 == true){
puntuacionUnoR = preguntas[393].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA393 = false;
}
}
var paseB393=true;
function funcionesB393(){
if (paseB393 == true){
puntuacionUnoR = preguntas[393].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB393 = false;
}
}
var paseC393=true;
function funcionesC393(){
if (paseC393 == true){
puntuacionUnoR = preguntas[393].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC393 = false;
}
}
var paseD393=true;
function funcionesD393(){
if (paseD393 == true){
puntuacionUnoR = preguntas[393].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD393 = false;
}
}
var paseE393=true;
function funcionesE393(){
if (paseE393 == true){
puntuacionUnoR = preguntas[393].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE393 = false;
}
}
//----------------------------------------------
function vidas393(){
if(conteoVidas == 0){
document.getElementById("vida393A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida393B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida393C").innerHTML = vidasCambio;
}
}
//----------------------------------------------
var paseA394=true;
function funcionesA394(){
if (paseA394 == true){
puntuacionUnoR = preguntas[394].respuestas[0].puntuacionUno;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseA394 = false;
}
}
var paseB394=true;
function funcionesB394(){
if (paseB394 == true){
puntuacionUnoR = preguntas[394].respuestas[1].puntuacionDos;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseB394 = false;
}
}
var paseC394=true;
function funcionesC394(){
if (paseC394 == true){
puntuacionUnoR = preguntas[394].respuestas[2].puntuacionTres;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseC394 = false;
}
}
var paseD394=true;
function funcionesD394(){
if (paseD394 == true){
puntuacionUnoR = preguntas[394].respuestas[3].puntuacionCuatro;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseD394 = false;
}
}
var paseE394=true;
function funcionesE394(){
if (paseE394 == true){
puntuacionUnoR = preguntas[394].respuestas[4].puntuacionCinco;
puntuacionPorRonda = puntuacionPorRonda + puntuacionUnoR;
for (var e = 0; e < cantidadPreguntas; e++){
var divPuntuacionPorRonda = textoRonda + e;
document.getElementById(divPuntuacionPorRonda).innerHTML = puntuacionPorRonda;
}
paseE394 = false;
}
}
//----------------------------------------------
function vidas394(){
if(conteoVidas == 0){
document.getElementById("vida394A").innerHTML = vidasCambio;
conteoVidas++;
}else if(conteoVidas == 1){
document.getElementById("vida394B").innerHTML = vidasCambio;
conteoVidas++;
}
else if(conteoVidas == 2){
document.getElementById("vida394C").innerHTML = vidasCambio;
}
}
//----------------------------------------------