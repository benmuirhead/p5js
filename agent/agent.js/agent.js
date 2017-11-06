

function Agent() {
	
	// this.location = createVector(random(width), random(height/2));
	this.location = createVector(width/2, height/2);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);

	this.display = function() {
		ellipse(this.location.x, this.location.y,20,20)
		// console.log();
	}

	this.addForce = function(force){
		console.log(force.mag() + ' added')
		this.acceleration.add(force);
	}

	this.update = function() {
		// Limit accelaration
		this.acceleration = this.constrainVectorLength(this.acceleration,5);

		this.velocity.add(this.acceleration);
		// Limit top speed
		this.velocity = this.constrainVectorLength(this.velocity,10);

		
		// this.velocity = constrain(this.velocity,-5,-5);
		this.location.add(this.velocity);

		// deminish acceleration and velocity
		this.acceleration.mult(.9);
		this.velocity.mult(.99);

		// bounce
		if(this.location.x>width){
			this.velocity.mult(-1);
			this.location.x = width;
			console.log('x > width');
		} else if(this.location.x<0){
			this.velocity.mult(-1);
			this.location.x = 0;
			console.log('x < 0');
		} else if(this.location.y>height){
			this.velocity.mult(-1);
			this.location.y = height;
			console.log('x > height');
		} else if(this.location.y<0){
			this.velocity.mult(-1);
			this.location.y = 0;
			console.log('y < 0');
		}
	}

	this.printLocation = function(){
		console.log(this.location);
		console.log(this.velocity);
		console.log(this.acceleration);
		
	}


	this.constrainVectorLength = function(v, length){
		vector = v.copy()
		if(vector.mag()>length){
			vector.normalize();
			vector.mult(length);
			// console.log('vector constrained to '+ vector.x + ',' + vector.y);
		} else {
			// console.log('not constrained');
		}
		return vector;
	}


}