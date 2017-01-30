var x = 1
var y=1
var speed=4
var yspeed= 4
var on = false

function setup() {
  createCanvas(400,300)
}

function draw() {
  frameRate(30)
  background(0)
  if (on){
    background(random(255),random(255),random(255))
  }
  stroke(255)
  strokeWeight(4)
  noFill()
  
  if (x>width/2){
    fill(255,0,200)
    ellipse(x,y,100,100)
  } else {
    ellipse(x,y,100,100)
  }
  


  x = x+speed
  y = y+ yspeed
  
  if (x< 0){
   speed = 4
  }
  if (x >width){
   speed = -4
  }
  if (y< 0){
   yspeed = 4
  }
  if (y >height){
   yspeed = -4
  }
}

function mousePressed(){
    on = !on
}