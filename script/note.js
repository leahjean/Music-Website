ENGINE.Note = function(args) {
	_.extend(this, {
		direction: 2 * Math.PI * 0.75,  // Initialize note direction to down (i.e. 270 degrees)
		speed: 6,  // Pixels per second
	}, args);
};

ENGINE.Note.prototype = {
	// Specify one step for the note
	step: function(delta) {
		
	}
}