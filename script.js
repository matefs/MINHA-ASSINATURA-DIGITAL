		// Obtenha o elemento do canvas
var canvas = document.getElementById("myCanvas");

// Obtenha o contexto 2D do canvas
var ctx = canvas.getContext("2d");

function addContextAndEvents() {

	canvas.lengh < 1 && ctx.length < 1 ?  ( ) => {
	
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	 } : ''

		// Defina a cor de desenho padrão
		ctx.strokeStyle = "black";

		// Defina a largura da linha padrão
		ctx.lineWidth = 4.3;

		// Variáveis para armazenar a posição anterior do mouse
		var lastX, lastY;

		// Flag para indicar se o mouse está pressionado
		var isMouseDown = false;

		// Event listener para quando o mouse é pressionado
		canvas.addEventListener("mousedown", function(e) {
			// Obtenha as coordenadas do mouse
			lastX = e.clientX - canvas.offsetLeft;
			lastY = e.clientY - canvas.offsetTop;

			// Comece um novo caminho	// Defina que o mouse está pressionado
		isMouseDown = true;
	});

	// Event listener para quando o mouse é movido
	canvas.addEventListener("mousemove", function(e) {
		// Verifique se o mouse está pressionado
		if (isMouseDown) {
			// Obtenha as coordenadas do mouse
			var x = e.clientX - canvas.offsetLeft;
			var y = e.clientY - canvas.offsetTop;

			// Desenhe uma linha do ponto anterior para o ponto atual
			ctx.moveTo(lastX, lastY);
			ctx.lineTo(x, y);
      		ctx.lineCap = "round";
			ctx.stroke();

			// Armazene as novas coordenadas do mouse
			lastX = x;
			lastY = y;
		}
	});

	// Event listener para quando o mouse é solto
	canvas.addEventListener("mouseup", function() {
		// Defina que o mouse não está pressionado
		isMouseDown = false;
	});

	// Event listener para quando o mouse sai do canvas
	canvas.addEventListener("mouseout", function() {
		// Defina que o mouse não está pressionado
		isMouseDown = false;
	}); 
}

addContextAndEvents()

const limparDesenhoCanvas = () => {

  canvas = document.getElementById("myCanvas");

  // Get a reference to the parent element of the canvas
  const parent = canvas.parentNode;

  // Remove the canvas element from the parent
  parent.removeChild(canvas);

  // Create a new canvas element
  const newCanvas = document.createElement('canvas');
  newCanvas.id = 'myCanvas'
  // Set the width and height of the new canvas element
  newCanvas.width = canvas.width;
  newCanvas.height = canvas.height;

  // Append the new canvas element to the parent
  parent.appendChild(newCanvas);

  // Get a new context object from the new canvas element
  const newContext = newCanvas.getContext('2d');
  ctx = newContext;
  canvas = newCanvas;
  // Return the new canvas and context objects
  addContextAndEvents()
  return [canvas, ctx];
}




function sendConvertedImageToEndpoint(){
var dataURL = canvas.toDataURL();
 
var assinaturaCompleta = {
	imagem: dataURL
}


var myInput = document.getElementById('myInput');

if ( myInput.value.toString().length < 1 ) {

fetch('https://mateus.requestcatcher.com/', {
  method: 'POST',
  body: JSON.stringify(assinaturaCompleta),
  headers: {}
}).then(response => {
	console.log(response)
  })
 
}else if( myInput.value.toString().length > 1){
  
  fetch(myInput.value, {
  method: 'POST',
  body: JSON.stringify(assinaturaCompleta),
  headers: {}
}).then(response => {
	console.log(response)
  })
} 

}


