function setup() {
  
  c = createCanvas(600, 600);
  background(255);
  console.log('hello');
  a = new Agent();

  f = createVector(50,50)
  frameRate(20);
  // console.log(a.velocity);
  // console.log(a.acceleration);

  // c.mousePressed(a.addForce(5));


  l1 = createVector(75,25);
  l2 = createVector(100,100);

}

function draw() {
	background(255);
	// a.printLocation();
	a.update();
	a.display();

	// line(0,0,mouseX,mouseY);
	// line(l1.x,l1.y,mouseX,mouseY);

}

function mousePressed() {
	ellipse(mouseX, mouseY, 50, 50);
	// prevent default
	console.log('mouse pressed');

	// a.addForce(f);

	mouseLocation = createVector(mouseX,mouseY);

	// console.log('mouse loc' + mouseLocation);


	v2 = mouseLocation.copy();

	mouseLocation.sub(a.location);

	// console.log('mouse loc2' + v2);  

	// v2.normalize();
	// v2.mult(50);
	console.log('Force: ' + mouseLocation);  

	line(a.location.x,a.location.y,mouseX,mouseY);


	a.addForce(mouseLocation)




  // calculate vector from a.location to mouse.x,mouse.y



}