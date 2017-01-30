var url1 = 'http://api.wordnik.com/v4/word.json/'
var word = "rainbow"
var url2 = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'

var link;

function setup() {
  //createCanvas(300, 300)
  noCanvas()
  link = createA('#', word)
  link.mousePressed(askWordnik)

}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function draw() {
  //background(0)
  //stroke(255)

}

function gotData(data) {
  var index1 = floor(random(0,data.length))
  var index2 = floor(random(0,data[index1].length))
  link.html(data[index1].words[index2])
  word = data[index1].words[index2]
  print(data)

}