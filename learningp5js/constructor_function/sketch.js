var bubbles = [];


function setup() {
  createCanvas(1000, 1000);
  background(255);
  // for (var i = 0; i < 1000; i++) {
  //   bubbles[i] = new Bubble()
  // }

}

function mouseDragged(){
  bubbles.push(new Bubble(mouseX,mouseY))
}


function draw() {
  
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  if(bubbles.length >50){
    bubbles.splice(0,1)
  }
  
}

function Bubble(x,y) {
  this.x = x, //random(0, width),
  this.y = y, //random(0, height),
  this.fcolor= [random(255),random(255),random(255)]
  this.display= function() {
        stroke(this.fcolor)
        strokeWeight(4)
        //noFill();
        point(this.x, this.y, 24, 24);
      },
  this.move= function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }