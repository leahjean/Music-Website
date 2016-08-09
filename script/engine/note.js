ENGINE.Note = function(args) {
	_.extend(this, {
		x: 0,  // Track note x and y position
		y: app.height * 0.28,
		direction: 2 * Math.PI * 0.75,  // Initialize note direction to down (i.e. 270 degrees)
		speed: 0,  // Pixels per second
		image: app.assets.image("sprites"),
		key: null,
		note_size: app.width * 0.03,
		bar_number: null,  // Which bar the note is spawned on
		pressed: false,  // Flag to indicate the note was cleared
		opacity: 1
	}, args);
};

ENGINE.Note.prototype = {
	// Move the note in the specified direction
	step: function(delta) {
		this.y -= Math.sin(this.direction) * this.speed * delta / 1000;
		if (this.y > app.height * 0.8 || this.pressed) {
			this.opacity -= 0.025;
			if (this.opacity <= 0.025) {
				this.remove();
			}
			if(this.pressed) {
				this.speed = 0;
			} else {
				this.speed = 10;
			}
		}
	},

	// Draw the note
	render: function(delta) {
		var note = app.assets.data.sprites[this.key];
		var curr_frame = note.frame;
		app.layer
		  .save()
		  .globalAlpha(this.opacity)
		  .drawImage(this.image, curr_frame.x, curr_frame.y, curr_frame.w, curr_frame.h,
		  	this.x, this.y, this.note_size, this.note_size)
		  .restore();
	},

	remove: function() {
		// Mark for removal
		this._remove = true;
		this.collection.dirty = true;
	}
}