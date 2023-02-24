let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let vhod = document.getElementById("vhod").value;
let words = vhod.split(" ");
let masiv = ["qewr", 3, ["r"]];
let hero = {
	x:0,
	y:0
}
console.log(hero) 
let nx = 9;
let ny = 9;
let sqside = 50;
//let herox = 0;
//let heroy = 0;
let meteorx=Math.floor(Math.random()*8)+1;
let meteory=Math.floor(Math.random()*8)+1;
let meteor1x=Math.floor(Math.random()*8)+1;
let meteor1y=Math.floor(Math.random()*8)+1;
let meteor2x=Math.floor(Math.random()*8)+1;
let meteor2y=Math.floor(Math.random()*8)+1;
let meteor3x=Math.floor(Math.random()*8)+1;
let meteor3y=Math.floor(Math.random()*8)+1;
let meteor4x=Math.floor(Math.random()*8)+1;
let meteor4y=Math.floor(Math.random()*8)+1;
let meteor5x=Math.floor(Math.random()*8)+1;
let meteor5y=Math.floor(Math.random()*8)+1;
let meteor6x=Math.floor(Math.random()*8)+1;
let meteor6y=Math.floor(Math.random()*8)+1;
let heroimg = new Image();
heroimg.src = "snimka.png";
let fireimg = new Image();
fireimg.src = "snim.png";
canvas.width = nx * sqside;
canvas.height = ny * sqside;
function drawMap() {
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(heroimg, hero.x * sqside, hero.y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor1x * sqside, meteor1y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor2x * sqside, meteor2y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteorx * sqside, meteory * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor3x * sqside, meteor3y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor4x * sqside, meteor4y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor5x * sqside, meteor5y * sqside, sqside, sqside);
	context.drawImage(fireimg, meteor6x * sqside, meteor6y * sqside, sqside, sqside);
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
	hero.x = Math.floor (x / sqside);
	hero.y = Math.floor(y / sqside);
	console.log(hero.x, hero.y);
	drawMap();
			}

function validate(){	
			if((hero.x==meteorx && hero.y==meteory) || (hero.x==meteor1x && hero.y==meteor1y) || (hero.x==meteor2x && hero.y==meteor2y) || (hero.x==meteor3x && hero.y==meteor3y) || (hero.x==meteor4x && hero.y==meteor4y) || (hero.x==meteor5x && hero.y==meteor5y) || (hero.x==meteor6x && hero.y==meteor6y)){
				window.location.reload();
			}
			if(hero.x==8 && hero.y==8){
				alert("you win");
			}
}
function moveLeft(){
		hero.x--;
		if(hero.x<0){
			hero.x=hero.x+1;
		}
		drawMap();
		validate();
}
function moveDown(){
		hero.y++;
		if(hero.y>=ny){
			hero.y=hero.y-1;
		}
		drawMap();
		validate();
}
function moveRight(){
		hero.x++;
		if(hero.x>=nx){
			hero.x=hero.x-1;
		}
		drawMap();
		validate();
}
function moveUp(){
		hero.y--;
		if(hero.y<0){
			hero.y=hero.y+1;
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
