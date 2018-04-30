// Note objects for the game
ENGINE.Note = function(args) {
	_.extend(this, {
		x: 0,
		y: app.height * 0.28,
		direction: 2 * Math.PI * 0.75,
		speed: 0,
		image: app.assets.image("sprites"),
		spriteKey: null,
		size: null,
		pressedState: "moving",
        scored: false,
		paused: false,
		opacity: 1,
		score: null,  // Scoring object
        barHeight: 0
	}, args);
};

ENGINE.Note.prototype = {
	// Move the note in the specified direction
	step: function(delta) {
		if (!this.paused) {
			this.y -= Math.sin(this.direction) * this.speed * delta / 1000;
			if (this.y > this.barHeight + app.height * 0.35 || this.pressedState != "moving") {
				this.opacity -= 0.025;
				if (this.opacity <= 0.025) {
					this.remove();
				}

				if (!this.scored) {
                    if (this.pressedState != "moving") {
                        this.speed = 0;
                        if (this.pressedState == "good" || this.pressedState == "bad") {
                            this.score.resetCombo();
                        } else {
                            this.score.incCombo();
                        }
                    } else {
                        // If note is missed, reset combo
                        this.speed = 10;
                        this.pressedState = "miss";
                        this.score.resetCombo();
                    }

                    this.score.updateScore(this.pressedState);
                    this.scored = true;
                }
			}
		}
	},

	// Draw the note
	render: function(delta) {
		var note = app.assets.data.sprites[this.spriteKey];
		var currFrame = note.frame;
		app.layer.save()
		         .globalAlpha(this.opacity)
		  		 .drawImage(this.image, currFrame.x, currFrame.y, currFrame.w, currFrame.h,
		  		   	this.x, this.y, this.size, this.size)
		  		 .restore();
	},

	// Stop note movement
	pause: function() {
		this.paused = true;
	},

	// Resume note movement
	play: function() {
		this.paused = false;
	},

    // Mark current note for removal
	remove: function() {
		this._remove = true;
		this.collection.dirty = true;
	}
};