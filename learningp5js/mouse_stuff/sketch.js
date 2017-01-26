var x = 1
function setup() {
  createCanvas(600,600)
    background(250,250,0)

}

function draw() {

  x= x+1
  // for (i=1, i<10, i++)
  ellipse(x,50,50,50)
  //fill(200,200,200)
  //ellipse(mouseX, mouseY,100,100)
}

function mousePressed(){
  background(random(255),random(255),random(255))
  fill(random(255),random(255),random(255))
}