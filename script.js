let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let nx = 4;
let ny = 3;
let sqside = 50;
let herox = 2;
let heroy = 1;
let heroimg = new Image();
heroimg.src = "snimka.png";
canvas.width = nx * sqside;
canvas.hight = ny * sqside;
function drawMap() {
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
	for ( let i = 0; i < nx; i++){
		for ( let j = 0; j < ny; j++){
			context.strokeRect(i * sqside, j * sqside, sqside, sqside);
		}
	}
}


drawMap();
canvas.onclick = function(e) {
	let x = e.x	- canvas.offsetLeft;
	let y = e.y - canvas.offsetTop;
	herox = Math.floor (x / sqside);
	heroy = Math.floor(y / sqside);
	console.log(herox, heroy);
	drawMap();
	}
