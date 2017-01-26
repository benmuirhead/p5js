
function setup() {
  createCanvas(600, 400);  
}


function draw() {
  //background(255);
  background(150, 150, 200);
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  // Body
  fill(255, 0, 0);
  rect(240, 145, 20, 100);
  
  // Head 
  fill(0, 0, 255,80);
  ellipse(240, 115, 60, 60);
  
  // Eyes
  fill(0, 255, 0);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);
  
  // Legs
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}