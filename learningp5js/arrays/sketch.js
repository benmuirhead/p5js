var nums = [100,25,46,72]

function setup() {
  createCanvas(400,400)
}

function draw() {
  background(0)
  
  for (var i =0; i< nums.length; i++){
    ellipse(50+i*100, 100, nums[i])
  }
  
}