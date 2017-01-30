var r = 0
var b = 255

function setup() {
  createCanvas(600,600)
}

function draw() {

  r = map(mouseX,0,600,0,255);
  b = map(mouseY,0,600,0,255);
  background(r,0,b)
  
}