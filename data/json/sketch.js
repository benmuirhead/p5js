var spaceData
var x = 0
var seed = 4
function setup() {
  createCanvas(300, 300)
  loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp');

}



function draw() {
  background(0)
  stroke(255)
  line(x, 0, x, height)
  x = x + 5
    randomSeed(seed)
  if (x > width) {
    x = 0
    seed = floor(random(0,10))
    randomSeed(seed)
  }

  if (spaceData) {
    for (var i = 0; i < spaceData.number; i++) {
      ellipse(random(width), random(height), 20, 20)
    }
  }
}

function gotData(data) {
  // print(data)
  spaceData = data

}