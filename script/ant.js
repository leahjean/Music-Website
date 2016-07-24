	// Example entity to represent square as an ant
ENGINE.Ant = function(args) {
	// Extend istance with defauls and overwrite with user provided data
	_.extend(this, {
		direction: 0,  // Direction ant is facing in radians
		speed: 6,  // Pixels per second
		brainDelta: 0  // Brain cooldown - AI called at random points
	}, args);
};

ENGINE.Ant.prototype = {
	step: function(delta) {
		this.brainDelta -= delta;

		// If cooldown below 0, then force ant to think
		if (this.brainDelta < 0) {
			this.direction = Math.random() * Math.PI * 2;  // Randomize direction
			this.brainDelta = Math.random() * 2000;  // Randomize cooldown
		}

		// Accelerate speed with the age just to increase the probability for going out of screen
		this.speed += 8 * delta / 1000;

		// Move ant
		this.x += Math.cos(this.direction) * this.speed * delta / 1000;
		this.y += Math.sin(this.direction) * this.speed * delta / 1000;

		// If ant is out of screen, remove and replace it
		if (this.x < 0 || this.y < 0 || this.x > app.width || this.y > app.height) {
			this.remove();
			app.game.spawnAnt();
		}
	},

	render: function(delta) {
		app.layer
		    .fillStyle("#ff0000")
		    .fillRect(
		    	5 * (this.x / 5 | 0),
		    	5 * (this.y / 5 | 0),
		    	2, 2);
	},

	remove: function() {
		// Mark for removal
		this._remove = true;
		this.collection.dirty = true;
	}
};