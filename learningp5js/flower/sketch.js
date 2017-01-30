

function setup() {
  createCanvas(400,500)  
}

function draw() {
  frameRate(3)
  background(0)


  // move()
  // bounce()
  // display()
flower(100,100,5)


}

function flower(x,y,petals){
  fill(255,0,0)
  rect(x-5,y,10,100)
  fill(0,255,0)
  ellipse(x,y,20,20)

  for(var i =0; i <petals; i++){
    ellipse(x+random(-30,30),y+random(-30,30),10,10)
  }
  
}

