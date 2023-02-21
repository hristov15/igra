let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let nx = 8;
let ny = 8;
let sqside = 50;
let herox = 2;
let heroy = 1;
let heroimg = new Image();
heroimg.src = "snimka.png";
canvas.width = nx * sqside;
canvas.height = ny * sqside;
function drawMap() {
	context.clearRect(0,0,canvas.width,canvas.height);
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
function moveLeft(){
		herox--;
		if(herox<0){
			herox=herox+1;
		}
		drawMap();
}
function moveDown(){
		heroy++;
		if(heroy>=ny){
			heroy=heroy-1;
		}
		drawMap();
}
function moveRight(){
		herox++;
		if(herox>=nx){
			herox=herox-1;
		}
		drawMap();
}
function moveUp(){
		heroy--;
		if(heroy<0){
			heroy=heroy+1;
		}
		drawMap();
}
document.onkeypress = function(e) {
	let key = e.key;
	switch(key) {
		case "a": moveLeft(); break;
		case "s": moveDown(); break;
		case "d": moveRight(); break;
		case "w": moveUp(); break;
	}
}
