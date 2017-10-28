var cities = []
var totalCities = 20

var recordDistance;

var bestEver = []

function setup() {
  createCanvas(400,300)
  for (var i=0; i<totalCities; i++) {
    var v = createVector(random(width), random(height))
    cities[i] = v
  }
  
  var d = calcDistance(cities);
  recordDistance = d
  print(recordDistance)
  
  bestEver = cities.slice()
}

function draw() {
  var i = floor(random(cities.length));
  var j = floor(random(cities.length));
  swap(cities, i,j )
  
  // if(random()<.5){
  //   cities = bestEver.slice()
  // }
  
  background(0) 
  fill(255);
  for (var i=0; i< cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 12, 12)
  }
  
  
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i=0; i< cities.length; i++) {
    vertex(cities[i].x, cities[i].y)
  }
  endShape();
  
  stroke(255,0,255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i=0; i< bestEver.length; i++) {
    vertex(bestEver[i].x, bestEver[i].y)
  }
  endShape();
  
  var d = calcDistance(cities);
  if (d < recordDistance){
    recordDistance = d;
    print(round(recordDistance,1));
    bestEver = cities.slice()
  }
  
}

function swap(a, i, j){
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}


function calcDistance(points) {
  var sum = 0;
  for (var i = 0; i < points.length-1; i++){
    var d = dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    sum += d;
  }
  return sum;
  
}

