let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let words = vhod.split(" ");
let masiv = ["qewr", 3, ["r"]];
let obekt = {
	ime: "Boci",
	familiq: "Genadiev",
	vazrast: 5
}
console.log(obekt) 
let nx = 9;
let ny = 9;
let sqside = 50;
let herox = 0;
let heroy = 0;
let meteorx=Math.floor(Math.random()*8)+1;
let meteory=Math.floor(Math.random()*8)+1;
let meteor1x=Math.floor(Math.random()*8)+1;
let meteor1y=Math.floor(Math.random()*8)+1;
let meteor2x=Math.floor(Math.random()*8)+1;
let meteor2y=Math.floor(Math.random()*8)+1;
let heroimg = new Image();
heroimg.src = "snimka.png";
let fireimg = new Image();
fireimg.src = "snim.png";
canvas.width = nx * sqside;
canvas.height = ny * sqside;
function drawMap() {
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor1x * sqside, meteor1y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor2x * sqside, meteor2y * sqside, sqside, sqside);
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
}
function validate(){	
			if((herox==meteorx && heroy==meteory) || (herox==meteor1x && heroy==meteor1y) || (herox==meteor2x && heroy==meteor2y)){
				window.location.reload();
			}
			if(herox==9 && heroy==9){
				alert("you win");
			}
}
function moveLeft(){
		herox--;
		if(herox<0){
			herox=herox+1;
		}
		drawMap();
		validate();
}
function moveDown(){
		heroy++;
		if(heroy>=ny){
			heroy=heroy-1;
		}
		drawMap();
		validate();
}
function moveRight(){
		herox++;
		if(herox>=nx){
			herox=herox-1;
		}
		drawMap();
		validate();
}
function moveUp(){
		heroy--;
		if(heroy<0){
			heroy=heroy+1;
		}
		drawMap();
		validate();
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
