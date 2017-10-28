var cities = []
var totalCities = 20;

var popSize = 1000;
var population = [];
var fitness = [];

var recordDistance = Infinity;
var bestEver = [];
var currentBest = [];



function setup() {
  createCanvas(600,600)

  var order = []

  // Create Cities
  for (var i=0; i<totalCities; i++) {
    var v = createVector(random(width), random(height/2))
    cities[i] = v
    order[i] = i;
  }
  


  for (var i = 0; i < popSize; i++){
    population[i] = shuffle(order.slice());
    // shuffle(population[i],10)
    
  }
  // calculateFitness();
  for (var i = 0; i <population.length; i++){
    var d = pow(calcDistance(cities, population[i]),2);
    fitness[i] = d;
    if (d < recordDistance){
      recordDistance = d;
      console.log(frameCount + " - " + round(sqrt(d),1));
      bestEver = population[i];
    }
  }


}

function draw() {
  frameRate(0);
  background(0);
  // noLoop();

  // GA
  calculateFitness();
  normalizeFitness();

  nextGeneration();
  // print(round(recordDistance,1));

  

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
  for (var i=0; i< bestEver.length; i++) {
    var n = bestEver[i];
    vertex(cities[n].x, cities[n].y)
  }
  endShape();

  translate(0,height/2)
  // Draw Current route
  stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i=0; i< currentBest.length; i++) {
    var n = currentBest[i];
    vertex(cities[n].x, cities[n].y)
  }
  endShape();
  

  
  // Check if new record distance
  // var d = calcDistance(cities, order);
  // if (d < recordDistance){
  //   recordDistance = d;
  //   print(round(recordDistance,1));
  //   bestEver = order.slice()
  // }
  
  


}

function swap(a, i, j){
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

// function shuffle(a, num){
//   for (var i = 0; i<num; i++){
//     var indexA = floor(random(a.length));
//     var indexB = floor(random(a.length));
//     swap(a,indexA, indexB);
//   }
// }








function factorial(n){
  if( n == 1){
    return 1
  } else {
  return (n * factorial(n-1))
  }
}