var url = 'http://api.open-notify.org/iss-now.json'
var x = 0
var seed = 4
var spaceData

var issX
var issY

function setup() {
  createCanvas(300, 300)

  setInterval(askIss, 1000)
  
}

function askIss(){
  loadJSON(url, gotData);
}

function draw() {
  background(0)
  stroke(255)
  line(x, 0, x, height)
  x = x + 4
  if (x > width) {
    x = 0
  }
  fill(255)
  if (spaceData) {
  ellipse(issX, issY + 150, 20, 20)
    }
}

function gotData(data) {
  print(data)
  spaceData=data
  var lat = data.iss_position.latitude
  var long = data.iss_position.longitude
  issX = map(lat, -180, 180, 0, width)
  issY = map(long, -180, 180, 0, height)
  print(issX)
  print(issY)
}