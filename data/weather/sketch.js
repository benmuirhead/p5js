var weather

var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var city = 'London'
var units = '&units=imperial'
var apiKey = '&APPID=3a628dc4e50ee4ac60a6ec1c32629adf'

var input

function setup() {
  createCanvas(300, 300)


  var button = select("#submit")
  button.mousePressed(weatherAsk)
  
  input = select("#city")

}


function weatherAsk() {
  
  var url = api + input.value() + units + apiKey
  loadJSON(url, gotData);
}

function draw() {
  background(255)
    // stroke(255)
    // line(x, 0, x, height)
    // x = x + 5
    //   randomSeed(seed)
    // if (x > width) {
    //   x = 0
    //   seed = floor(random(0,10))
    //   randomSeed(seed)
    // }

  if (weather) {
    background(0)
    temp = weather.main.temp
    humidity = weather.main.humidity
    ellipse(50, 100, temp, temp)
    ellipse(200, 100, humidity, humidity)

  }
}

function gotData(data) {
  print(data)
  weather = data

}