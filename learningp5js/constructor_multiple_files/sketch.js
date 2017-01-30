var bubbles = [];


function setup() {
  createCanvas(400, 400);
  background(255);
   for (var i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(random(0, width),random(0, height))
 }
print(bubbles)
}

// function mouseDragged(){
//   bubbles.push(new Bubble(mouseX,mouseY))
// }

function mousePressed(){
  for (var i = 0; i < bubbles.length; i++) {
    var d = dist(mouseX,mouseY, bubbles[i].x,bubbles[i].y)
    print(d)
    if (d<bubbles[i].size/2){
      bubbles[i].clicked();
    }
  }
}

function draw() {
  frameRate(10)
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  if(bubbles.length >50){
    bubbles.splice(0,1)
  }
  
}
