var bubble = {
  x:300,
  y:200,
  xspeed:10,
  yspeed:8,
  
  move: function(){
    this.x+=this.xspeed
    this.y+=this.yspeed
  }
  ,
 bounce:function(){
    if(this.x>width || this.x< 0){
    this.xspeed=this.xspeed*-1
  }
  if(this.y>height || this.y< 0){
    this.yspeed=this.yspeed*-1
  }
  }
  
,
 display:function(){
  stroke(255)
  strokeWeight(1)
  fill(map(this.x,0,width,0,255),map(this.y,0,height,0,255),0)
  ellipse(this.x,this.y,30,30)
  
}

}

function setup() {
  createCanvas(400,500)  
    background(0)
}

function draw() {
  frameRate(150)



  bubble.move()
  bubble.bounce()
  bubble.display()


  print(bubble)
}

