function setup() {
	createCanvas(800, 500);
	//setInterval(() => squares = [], time);
}

let x = 30;
let y = 30;
let oldx = 0;
let oldy = 0;
let width = 10;
let height = 10;
let time = 400;
let speed = 8;
let squares = [];

let w = 87;
let s = 83;
let a = 65;
let d = 68;
let space = 32;

function draw() {
	background(55, 62, 64);
	fill(240, 225, 218);
	noStroke();
	rect(x, y, width, height);
	if(x != oldx && y != oldy)
	{
		squares.push([x, y]);
	}
	squares.forEach(square => {
		rect(square[0], square[1], width, height);
	});
	if(keyIsDown(w)) {
		oldy = y;
		y -= speed;
	}
	if(keyIsDown(s)) {
		oldy = y;
		y += speed;
	}
	if(keyIsDown(a)) {
		oldx = x;
		x -= speed;
	}
	if(keyIsDown(d)) {
		oldx = x;
		x += speed;
	}
	if(keyIsDown(space))
	{
		squares = [];
	}
}
