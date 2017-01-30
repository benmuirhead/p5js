


function setup() {
  createCanvas(400,400)
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(1)
  frameRate(1)
  var x = 20
  var y = 0
  // while(x<width){
  //   ellipse(x,y,10,10)
  //   x = x+20
  //   y = y+10
  // }
  for (var x = 10; x <width; x = x+50){
    for (var y=10; y<height; y += 50){
  fill(random(255),0,random(255))
  ellipse(x,y,10,10)}
  }
}