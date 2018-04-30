ENGINE.Beatmap = function(args) {
	_.extend(this, {
		bpm: 0,  // Beats per minute
		crotchet: 0,  // Time duration of a beat, calculated from the bpm
		songTime: 0,  // Current song time
		songStart: 0,  // Song offset
		noteDelay: 0,  // Time for note to travel
		notes: null,  // Array of notes
		noteSprites: null,  // Array of note-styles for each bar
		noteSpeed: 0, // falling speed of notes
		currBeat: 0,  // Current beat in the song
		barSprite: null,  // Bar-style for a beat map
		bg: null,  // Background for a beat map
		maxNotes: 0,  // Number of notes to check each time button is pressed
		mp3Name: null,  // Mp3 filename
		titleOffset: 0,  // x-coordinate to place song name
		artistOffset: 0,  // x-coordinate to place artist name
		difficulty: 0,  // Difficulty rating of the beatmap
		speedMultiplier: 1,  // Accounts for timing differences between midi and mp3
	}, args);
};

ENGINE.Beatmap.prototype = {
	updateBeat: function() {
		this.currBeat++;
	},

	getBeat: function() {
		return this.notes[this.currBeat];
	},

	// Get the note sprite for the given bar
	getNoteSprite: function(barNum) {
		return this.noteSprites[barNum];
	},

	reset: function() {
		this.currBeat = 0;
		notes = null;
	}
};