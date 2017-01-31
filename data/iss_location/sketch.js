var url = 'http://api.open-notify.org/iss-now.json'
var x = 0
var seed = 4
var spaceData

var issX
var issY

function setup() {
  createCanvas(500, 400)

  setInterval(askIss, 2000)

}

function askIss() {
  loadJSON(url, gotData);
}

function draw() {
  background(0)
  stroke(255)
  line(x, 0, x, height)
  x = x + 2
  if (x > width) {
    x = 0
  }
  fill(255)
  if (spaceData) {
    ellipse(issX, issY, 10, 10)
  }
}

function gotData(data) {
  print(data)
  spaceData = data
  var lat = data.iss_position.latitude
  var long = data.iss_position.longitude //* -1
  print(lat)
  print(long)
  lowX = (round(lat/10, -1)*10 - 10)
  highX = (round(lat/10, -1)*10 + 10)
  lowY = (round(long/10, -1)*10 - 10)
  highY = (round(long/10, -1)*10 + 10)
  print(lowX)
  print(highX)
  print(lowY)
  print(highY)
  issX = map(lat, lowX, highX, 0, width)
  issY = map(long, lowY, highY, 0, height)

  // issX = map(lat, -180, 180, 0, width)
  // issY = map(long, -180, 180, 0, height)
  print(issX)
  print(issY)
}