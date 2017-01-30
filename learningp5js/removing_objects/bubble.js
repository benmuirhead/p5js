function Bubble(x,y) {
  this.x = x, //random(0, width),
  this.y = y, //random(0, height),
  this.size = 25
  this.lifespan = 255
  this.fcolor= [random(255),random(255),random(255)]
  this.display= function() {
        //fill(this.fcolor,this.lifespan)
        fill(255,this.lifespan)
        // noStroke()
        strokeWeight(1)
        //noFill();
        ellipse(this.x, this.y, this.size,this.size);
      },
  this.move= function() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
        this.lifespan--
      },
      
  this.clicked = function() {
    this.fcolor = [random(255),random(255),random(255)]
  }
  
  this.isFinished = function(){
    if(this.lifespan<0){
      return true
    } else {
      return false
    }
  }
    }