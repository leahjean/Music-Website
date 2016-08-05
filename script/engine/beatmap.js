ENGINE.Beatmap = function(args) {
	_.extend(this, {
		bpm: 0,  // Beats per minute
		crotchet: 0,  // Time duration of a beat, calculated from the bpm
		song_time: 0,  // Current song time
		offset: 0,  // Song offset
		note_delay: 0,  // Time for note to travel
		notes: null,  // Array of notes
		note_style: null,  // Array of note-styles for each bar
		curr_beat: 0,  // Current beat in the song
		bar_style: null,  // Bar-style for a beat map
		bg: null,  // Background for a beat map
		song_name: null  // Song key
	}, args);
};

ENGINE.Beatmap.prototype = {
	next_beat: function() {
		this.curr_beat++;
	},

	get_beat: function() {
		return this.notes[this.curr_beat];
	},

	get_color: function(bar) {
		return this.note_style[bar];
	},

	reset: function() {
		this.curr_beat = 0;
		notes = null;
	}
}