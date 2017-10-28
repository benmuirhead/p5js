
function calcDistance(points, order) {
  var sum = 0;
  for (var i = 0; i < order.length-1; i++){
    var cityAIndex = order[i]
    var cityA = points[cityAIndex];
    var cityBIndex = order[i+1]
    var cityB = points[cityBIndex];
    // var d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
    var d = pow((cityB.x - cityA.x),2) + pow((cityB.y - cityA.y),2)
    sum += d;
  }
  return sum;
  
}

function calculateFitness(){
  var currentRecord = Infinity;
  for (var i = 0; i <population.length; i++){
    var d = pow(calcDistance(cities, population[i]),2);
    fitness[i] = d;
    if (d < recordDistance){
      recordDistance = d;
      console.log(frameCount + " - " + round(sqrt(d),1));
      // print(round(recordDistance,1));
      bestEver = population[i]
    }
    if (d < currentRecord){
      currentRecord = d;
      currentBest = population[i]
    }
    fitness[i] = 1 / (d+1);

  }
  var total = 0;
  for(var i = 0; i < fitness.length; i++) {
    total += fitness[i];
  }
  // Average Fitness
  // console.log((total / fitness.length).toFixed(6));
  // Max fitness
  // console.log(max(fitness).toFixed(6));
}



function normalizeFitness(){

  var sum = 0;
  for (var i = 0; i <fitness.length; i++){
    sum += fitness[i];
  }
  for (var i = 0; i <fitness.length; i++){
    fitness[i] = fitness[i]/sum;
  }
}



function nextGeneration(){ 
  var newPopulation = [];
  for (var i =0; i < population.length; i++){
    var orderA = pickOne(population,fitness);
    var orderB = pickOne(population,fitness);
    var order = crossOver(orderA, orderB)
    mutate(order,.1);
    newPopulation[i] = order;
  }
  population = newPopulation;
}


function pickOne(list, prob) {
  var index = 0;
  var r = random(1);

  while (r>0){
    r = r - prob[index];
    index++;
  }
  index--;
  return list[index].slice();
}

function crossOver(orderA, orderB){
  var start = floor(random(orderA.length));
  var e = floor(random(start + 1, orderA.length));
  // var e = start + 1
  var newOrder = orderA.slice(start,e);

  var left = totalCities - newOrder.length;

  for (i = 0; i< orderB.length; i++){
    var city = orderB[i];
    if (!newOrder.includes(city)){
      newOrder.push(city)
    }
  }
  return newOrder
}

function mutate(order, mutationRate){
  for (i = 0; i < totalCities; i++){
    if (random(1) < mutationRate){
        var indexA = floor(random(order.length));
        var indexB = (indexA+1) % totalCities;

        // var indexB = floor(random(order.length));
        swap(order,indexA, indexB);
      }
  }
}