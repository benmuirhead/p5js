
function setup() {
  createCanvas(500,500)
}

function draw() {
  background(0)
  
  stroke(255)
  strokeWeight(4)
  noFill()
  
  if (mouseX>300){
    fill(255,0,200)
  }
  
  ellipse(300,200,100,100)
}