var point1 = {
  x:100,
  y:50
}

var col = {
  r:255,
  g:0,
  b:0
}
function setup() {
  createCanvas(400,400)
  background(0)
}

function draw() {
  point1.x=random(0,width)
  point1.y=random(0,height)
  fill(col.r,col.g,col.b,50)
  ellipse(point1.x,point1.y, 50)
}