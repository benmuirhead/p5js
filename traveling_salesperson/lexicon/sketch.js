var vals = [0,1,2,3,4,5];

function setup() {
  createCanvas(400,300)
  // noLoop();
}


function draw() {
  background(0) 
  console.log(vals)
  
  var largestI = -1;
  for ( var i = 0; i < vals.length - 1; i++){
    if (vals[i] < vals[i+1]) {
      largestI = i;

    }
  }
  
  console.log(largestI)
  if(largestI == -1){
    noLoop();
    console.log('finished');
  }
  
  var largeastJ = -1;
  for ( var j = 0; j < vals.length; j++){
    if (vals[largestI] < vals[j]) {
      largestJ = j

    }
  }
  
  console.log(largestJ)

  

  
  textSize(64);
  var s = '';
  for (var i = 0; i<vals.length; i++){
    s += vals[i];
  }
  fill(255)
  text(s,20,height/2);
  
  swap(vals,largestI,largestJ)


  var endArray = vals.splice(largestI + 1);
  endArray.reverse();
  vals = vals.concat(endArray);
  
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


