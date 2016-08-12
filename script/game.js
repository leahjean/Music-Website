// Main game scene
app.game = new ENGINE.Scene({
	playing: true,
	stopped: false,
	fade_delay: 0.0000025,  // Audio fade speed
	bar: null,
	note_speed: app.height / 4,
	beatmap: null,  // Current beatmap playing
	bar_keys: "asdjkl",

	oncreate: function() {
		// Create new collection
		this.entities = new ENGINE.Collection(this);
		this.notes = new ENGINE.Collection(this);
	},

	onenter: function() {
		// Load in the current beatmap
		this.beatmap = this.rain_map;

		// Load in the current song
		app.song = app.assets.audio(this.beatmap.song_name);

		var curr_song = app.song;
		// Avoid Promise Error when repeatedly pausing and playing
		setTimeout(function() {
			curr_song.play();
			curr_song.volume = app.set_volume;
			//curr_song.currentTime = 8;
		}, this.beatmap.offset);
		app.song.loop = true;
		
		this.bar = app.assets.data.sprites[this.beatmap.bar_style];
	},

	onrender: function(delta) {
		app.layer.clear("rgb(0, 0, 0)");  // Set screen background to black

		// Load in the background assets
		var bg = app.assets.image(this.beatmap.bg);
		var sprite = app.assets.image("sprites");
		var bars = app.assets.image("KCCS_barsv1-03");

		// Draw the background
		// We can edit this to be dynamic later
		app.layer.drawImage(bg,	0, 0, app.width, app.height);

		// Center the keyboard and stretch vertically
		var curr_bar = this.bar;
		var curr_frame = curr_bar.frame;
		var bar_bot = app.assets.data.sprites["darkest-bottom"];  // Temp bottom
		var bot_frame = bar_bot.frame;
		var back_bar = app.assets.data.sprites["thick"];
		var back_frame = back_bar.frame;

		for (var i = 0; i < 6; i++) {
			app.layer.drawImage(bars, back_frame.x, back_frame.y, back_frame.w, back_frame.h,
				app.width * (0.125 + 0.05 * i) - back_frame.w / 2 - app.width / 1000, 
				app.height * 0.297, back_frame.w, app.height * 0.505);
			app.layer.drawImage(bars, curr_frame.x, curr_frame.y, curr_frame.w, curr_frame.h,
				app.width * (0.125 + 0.05 * i) - curr_frame.w / 2,
				app.height * 0.3, curr_frame.w, app.height * 0.5);
			app.layer.drawImage(sprite, bot_frame.x, bot_frame.y, bot_frame.w, bot_frame.h,
				app.width * (0.125 + 0.05 * i) - bot_frame.w * 0.9 / 2 - app.width / 1000, 
				app.height * 0.8 - bot_frame.h / 2, bot_frame.w * 0.9, bot_frame.h);
		}

		// Creates a note for testing if there are no notes
		if (this.notes.length == 0) {
			this.notes.add(ENGINE.Note, {
				key: "blue",
				x: app.width * 0.175 - app.width * 0.03 / 2,
				speed: app.height / 4,
				bar_number: 1
			})
		}

		/*  Testing notes
		var _note = app.assets.data.sprites["orange"];
		var _frame = _note.frame;
		app.layer.drawImage(sprite, _frame.x, _frame.y, _frame.w, _frame.h,
			app.width * 0.225 - app.width * 0.03 / 2, 
			app.height * 0.8 - app.width * 0.03, app.width * 0.03, app.width * 0.03);
		*/

		this.notes.call("render", delta);  // Render all entities
	},

	onstep: function(delta) {
		var curr_song = app.song;
		if (this.beatmap.curr_beat < this.beatmap.notes.length) {
			this.create_note();
		}
		/*
		window.addEventListener("blur", function() {
			app.game.fade_out();
		}, false);
		window.addEventListener("focus", function() {
			if(!app.game.stopped){
				app.game.fade_in();
			}
		}, false);
		*/
		this.entities.step(delta);
		this.entities.call("step", delta);
		this.notes.step(delta);
		this.notes.call("step", delta);
	},

	onmousedown: function(x, y, button) {
		if (app.game.playing && x < app.width/2) {
			app.game.fade_out();
			app.game.stopped = true;
		}
		if (!app.game.playing && x > app.width/2) {
			app.game.fade_in();
			app.game.stopped = false;
		}
	},

	onkeydown: function(key) {
		/* Timing stuff
		var time = app.song.currentTime - 5;
		console.log(key + " " + time); */
		// Check if one of the control keys was pressed
		var pressed_bar = this.bar_keys.indexOf(key);
		if (pressed_bar > -1 && this.notes.length > 0) {
			for (var i = 0; i < (Math.min(6, this.notes.length)); i++) {
				var curr_note = this.notes[i];
				var up_bound = app.height * 0.8;
				var low_bound = app.height * 0.8 - app.width * 0.03;
				if ((curr_note.bar_number == pressed_bar) && (curr_note.y > low_bound) &&
				    (curr_note.y < up_bound)) {
					curr_note.pressed = true;
				console.log(key + " score: +1");
				}
			}
		}
	},

	onleave: function() {
		this.entities.wipe();
		this.notes.wipe();
		app.song.pause();
		this.song.currentTime = 0;
	},

	// Create a note if the notes in the map haven't all been exhausted
	create_note: function() {
		var beat = this.beatmap.get_beat();
		// Trigger note creation when the song position is reached
		var note_delay = app.height * 0.5 / this.note_speed;
		if (app.song.currentTime - (5 - note_delay) >= beat.song_pos) {
			var keys = beat.beats.split("");
			for(var i = 0; i < keys.length; i++) {
				if (keys[i] == 1) {
					this.notes.add(ENGINE.Note, {
						key: this.beatmap.get_color(i),
						x: app.width * (0.125 + i * 0.05) - app.width * 0.03 / 2,
						speed: this.note_speed,
						bar_number: i
					})
				}
			}
			this.beatmap.next_beat();
		}
	},

	fade_out: function() {
		// Only run fade_out if the song is playing
		if (app.game.playing) {
			var curr_song = app.song;
			while(curr_song.volume > 0) {
				if (curr_song.volume - this.fade_delay * app.set_volume < 0) {
					curr_song.volume = 0;
				} else {
					curr_song.volume -= this.fade_delay * app.set_volume;
				}
			}
			curr_song.pause();
			app.game.playing = false;
		}
	},

	fade_in: function() {
		// Only run fade_in if song isn't playing
		if (!app.game.playing) {
			var curr_song = app.song;
			curr_song.play();
			while(curr_song.volume < app.set_volume) {
				if (curr_song.volume + this.fade_delay * app.set_volume > app.set_volume) {
					curr_song.volume = app.set_volume;
				} else {
					curr_song.volume += this.fade_delay * app.set_volume;
				}
			}
			app.game.playing = true;
		}
	}
});