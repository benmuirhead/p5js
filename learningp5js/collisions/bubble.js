function Bubble(x,y) {
  this.x = x, //random(0, width),
  this.y = y, //random(0, height),
  this.r = 20
  this.lifespan = 255
  this.fcolor= [random(255),random(255),random(255)]
  this.display= function() {
        fill(this.fcolor)
        //fill(255,this.lifespan)
        strokeWeight(1)
        //noFill();
        ellipse(this.x, this.y, this.r*2,this.r*2);
      },
  this.move= function() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
        this.lifespan--
      },
      
  this.changeColor = function() {
    this.fcolor = [random(255),random(255),random(255)]
  }
  
  this.intersects = function (other){
    var d = dist(this.x,this.y,other.x,other.y)
    if ( d < this.r + other.r){
      return true
    } else {
      return false
    }
  }
    }