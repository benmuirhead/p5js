var bubbles = [];
var flowers = [];

function preload(){
  for (var i = 0; i<3; i++){
    flowers[i] = loadImage('images/flower'+i+'.jpg')
  }
  // flowers[0] = loadImage('images/flower0.jpg')
  // flowers[1] = loadImage('images/flower1.jpg')
  // flowers[2] = loadImage('images/flower2.jpg')
}


function setup() {
  createCanvas(900, 900);
  background(0);

  for (var i = 0; i < 1; i++) {
    bubbles[i] = new Bubble(random(0, width), random(0, height), flowers[0] )
  }
}

function mousePressed(){
  var c = floor(random(0,3))
  bubbles.push(new Bubble(mouseX,mouseY, flowers[c]))
}

// function mousePressed(){
//   for (var i = 0; i < bubbles.length; i++) {
//     var d = dist(mouseX,mouseY, bubbles[i].x,bubbles[i].y)
//     if (d<bubbles[i].size/2){
//       bubbles[i].clicked();
//     }
//   }
// }

function draw() {
  //frameRate(3)



  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move()
    bubbles[i].display()
    for (var j = i + 1; j < bubbles.length; j++) {
      if (bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor()
        bubbles[j].changeColor()
      }
    }

    // for (var i = 0; i < bubbles.length; i++) {
    //   bubbles[i].move();
    //   bubbles[i].display();
    // }
    // if(bubbles.length >50){
    //   bubbles.splice(0,1)
    // }

  }
}