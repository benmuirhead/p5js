var cities = []
var totalCities = 7;


var order = [];

var totalPermutations;
var count = 0;

var recordDistance;

var bestEver = []

function setup() {
  createCanvas(400,600)
  for (var i=0; i<totalCities; i++) {
    var v = createVector(random(width), random(height/2))
    cities[i] = v
    order[i] = i;
  }
  
  var d = calcDistance(cities, order);
  recordDistance = d
  print(recordDistance)
  
  bestEver = order.slice()

  totalPermutations = factorial(totalCities)
}

function draw() {
  // frameRate(3);

  
  // Draw cities
  background(0) 
  fill(255);
  for (var i=0; i< cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 12, 12)
  }
  
    // Draw Best Route
  stroke(255,0,255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i=0; i< order.length; i++) {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y)
  }
  endShape();


  // Draw Current route
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i=0; i< order.length; i++) {
    var n = order[i];
    vertex(cities[n].x, cities[n].y)
  }
  endShape();
  

  
  // Check if new record distance
  var d = calcDistance(cities, order);
  if (d < recordDistance){
    recordDistance = d;
    print(round(recordDistance,1));
    bestEver = order.slice()
  }
  
  
  

  // var s = '';
  // for (var i = 0; i<order.length; i++){
  //   s += order[i];
  // }

  // text(s,20,height-50);
  


  nextOrder(); 
  textSize(32);
  fill(255)
  var percent = (100 * (count / totalPermutations));
  text (nf(percent,0,2) + "% completed", 20, height -50);
}

function swap(a, i, j){
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}


function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length-1; i++){
    var cityAIndex = order[i]
    var cityA = points[cityAIndex];
    var cityBIndex = order[i+1]
    var cityB = points[cityBIndex];
    var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    sum += d;
  }
  return sum;
  
}




function nextOrder() {
  count++;
  var largestI = -1;
  for ( var i = 0; i < order.length - 1; i++){
    if (order[i] < order[i+1]) {
      largestI = i;

    }
  }
  
  // console.log(largestI)
  if(largestI == -1){
    noLoop();
    console.log('finished');
  }
  
  var largeastJ = -1;
  for ( var j = 0; j < order.length; j++){
    if (order[largestI] < order[j]) {
      largestJ = j

    }
  }
  
  // console.log(largestJ)

  

  

  swap(order,largestI,largestJ)


  var endArray = order.splice(largestI + 1);
  endArray.reverse();
  order = order.concat(endArray);
}


function factorial(n){
  if( n == 1){
    return 1
  } else {
  return (n * factorial(n-1))
  }
}