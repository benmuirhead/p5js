function setup() {
  createCanvas(600,600)
}

function draw() {
  ellipse(circle.x,circle.y,circle.diameter)
}



var circle = {
  x:100,
  y:100,
  diameter:50
};