// Main game scene
app.game = new ENGINE.Scene({
	playing: true,
	stopped: false,
	fade_delay: 0.0000025,  // Audio fade speed
	note_speed: 0,  // Speed obtained from beatmap
	beatmap: null,  // Current beatmap playing
	bar: null,  // Bar sprite to be used
	bar_keys: "asdjkl",  // Which keys correspond to the bars
	bar_pressed: [],   // Which bars are currently pressed
	bar_length: [],  // How wide each background bar is (from 0 to 1)
	note_num: 0,  // Timing purposes
	note_size: app.width * 0.03,
	score: null,  // Object to track score

	oncreate: function() {
		// Create new collection
		this.entities = new ENGINE.Collection(this);
		this.notes = new ENGINE.Collection(this);

		// Initialize back bar width and press status
		for (var i = 0; i < this.bar_keys.length; i++) {
			this.bar_pressed.push(false);
			this.bar_length.push(0.0);
		}
	},

	onenter: function() {
		// Load in the current beatmap
		this.beatmap = app.active_map;

		// Load the note speed
		this.note_speed = this.beatmap.note_speed;

		// Load in the current song
		app.song = app.assets.audio(this.beatmap.mp3_name);

		var curr_song = app.song;
		
		// Avoid Promise Error when repeatedly pausing and playing
		setTimeout(function() {
			curr_song.play();
			curr_song.volume = app.set_volume;
		}, 1000);
		//curr_song.currentTime = this.beatmap.offset / 2;
		console.log(curr_song.volume);

		app.song.loop = false;

		// Create score object
		this.score = this.entities.add(ENGINE.Score, {
			num_notes: this.beatmap.notes.length,
		})

		// Select bar asset according to the beatmap
		this.bar = app.assets.data.sprites[this.beatmap.bar_style];
	},

	onrender: function(delta) {
		// Set screen background to black
		app.layer.clear("rgb(0, 0, 0)");  

		// Load in the background assets
		var bg = app.assets.image(this.beatmap.bg);
		var sprite = app.assets.image("sprites");
		var bars = app.assets.image("KCCS_barsv1-03");
		var glow = app.assets.image("KCCS_set3-05");

		// Draw the background
		app.layer.drawImage(bg,	0, 0, app.width, app.height);

		/** Draw the UI **/
		// Title bar
		var title_bar = app.assets.data.sprites["song-title-bar"];
		var t_frame = title_bar.frame;
		app.layer.drawImage(glow, t_frame.x, t_frame.y, t_frame.w, t_frame.h,
			0, app.height * 0.15, app.width * 0.39, app.height * 0.055);

		// Song title
		app.layer.save()
		         .fillStyle("rgba(255, 255, 255, 1)")
				 .font(Math.round(app.height * 0.030) + 
				 	"px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif")
				 .textAlign("start")
				 .fillText(this.beatmap.song_title, this.beatmap.title_offset,
				 	app.height * 0.188)
				 .restore();

		// Artist name
		app.layer.save()
		         .fillStyle("rgba(233, 233, 233, 1)")
				 .font(Math.round(app.height * 0.02) + 
				 	"px 'Neutra Text Light', 'Lucida Sans Unicode', sans-serif")
				 .textAlign("start")
				 .fillText(this.beatmap.artist_name, this.beatmap.artist_offset,
				 	app.height * 0.233)
				 .restore();

		// Difficulty rating
		for (var i = 0; i < 5; i++) {
			if (i < this.beatmap.difficulty) {
				var star = app.assets.data.sprites["star-filled"];
				app.layer.drawImage(glow, star.frame.x, star.frame.y, star.frame.w, 
					star.frame.h, app.width * (0.3 + 0.015 * i), app.height * 0.218, 
					app.height * 0.018, app.height * 0.018);
			} else {
				var no_star = app.assets.data.sprites["star-empty"];
				app.layer.drawImage(glow, no_star.frame.x, no_star.frame.y, no_star.frame.w, 
					no_star.frame.h, app.width * (0.3 + 0.015 * i), app.height * 0.218, 
					app.height * 0.018, app.height * 0.018);
			}
		}

		// The bars
		var curr_frame = this.bar.frame;  // Main bar style
		var bar_bot = app.assets.data.sprites["darkest-bottom"];  // Bottom of bar style
		var bot_frame = bar_bot.frame;
		var back_bar = app.assets.data.sprites["thick"];  // Back bar style
		var back_frame = back_bar.frame;
		for (var i = 0; i < 6; i++) {
			var bar_len = this.bar_length[i];
			app.layer.drawImage(bars, back_frame.x, back_frame.y, back_frame.w, back_frame.h,
				app.width * (0.125 + 0.05 * i) - bar_len * app.width * 0.0275 / 2, 
				app.height * 0.297, bar_len * app.width * 0.025, app.height * 0.505);
			app.layer.drawImage(bars, curr_frame.x, curr_frame.y, curr_frame.w, curr_frame.h,
				app.width * (0.125 + 0.05 * i) - app.width * 0.01 / 2,
				app.height * 0.3, app.width * 0.01, app.height * 0.5);
			app.layer.drawImage(sprite, bot_frame.x, bot_frame.y, bot_frame.w, bot_frame.h,
				app.width * (0.125 + 0.05 * i) - app.width * 0.0323 / 2, 
				app.height * 0.8 - bot_frame.h / 2, app.width * 0.03, app.height * 0.01);
			
			// The letters
			var bar_key = this.bar_keys.charAt(i).toUpperCase();
			app.layer.save()
			         .fillStyle("rgba(0, 0, 0, 1")
			         .font(Math.round(app.height * 0.025) + 
				 	     "px 'Neutra Text', 'Lucida Sans Unicode', sans-serif")
			         .textAlign("center")
			         .fillText(bar_key, app.width * (0.124 + 0.05 * i), app.height * 0.84)
			         .restore();
		}

		/*
		// Draw a note for testing position
		var _note = app.assets.data.sprites["white-fill-glow"];
		var _frame = _note.frame;
		app.layer.drawImage(glow, _frame.x, _frame.y, _frame.w, _frame.h,
			app.width * 0.225 - app.width * 0.03 / 2, 
			app.height * 0.8 - app.width * 0.03, app.width * 0.03, app.width * 0.03);
		*/

		// Render all entities
		this.entities.call("render", delta);
		this.notes.call("render", delta);  
	},

	onstep: function(delta) {
		var curr_song = app.song;
		if (this.beatmap.curr_beat < this.beatmap.notes.length) {
			this.create_note();
		}

		if (this.playing) {
			// Animate the bars when pressed or released
			for (var i = 0; i < this.bar_pressed.length; i++) {
				var len = this.bar_length[i];
				var bar_speed = 0.4;
				if (this.bar_pressed[i]) {  // 
					if (len < 1.0) {
						len = Math.min(1.0, len + bar_speed);
					}
				} else {
					if (len > 0.0) {
						len = Math.max(0.0, len - bar_speed * 0.3);
					}
				}
				this.bar_length[i] = len;
			}
		}

		window.addEventListener("blur", function() {
			app.game.fade_out();
		}, false);
		window.addEventListener("focus", function() {
			if (!app.game.stopped) {
				app.game.fade_in();
			}
		}, false);

		// Call step functions for all entities
		this.entities.step(delta);
		this.entities.call("step", delta);
		this.notes.step(delta);
		this.notes.call("step", delta);
	},

	onmousedown: function(x, y, button) {
		/**
		if (this.playing && x < app.width/2) {
			this.fade_out();
			this.stopped = true;
		}
		if (!this.playing && x > app.width/2) {
			this.fade_in();
			this.stopped = false;
		}**/
	},

	onkeydown: function(key) {
		// Pause the game
		if (key == "p") {
			if (this.playing) {
				this.fade_out();
				this.stopped = true;
			} else {
				this.fade_in();
				this.stopped = false;
			}
			return;
		}

		// Exit the game
		if (key == "escape") {
			app.selectScene(app.song_select);
		}

		// Check if key corresponds to one of the bars
		var pressed_bar = this.bar_keys.indexOf(key);
		if (pressed_bar > -1) {
			// Flag for bar expansion animation
			this.bar_pressed[pressed_bar] = true;

			// Remove note if key pressed on note
			if (this.notes.length > 0 && this.playing) {
				for (var i = 0; i < (Math.min(this.beatmap.max_note, this.notes.length)); i++) {
					var curr_note = this.notes[i];
					var up_bound = app.height * 0.8;
					var low_bound = app.height * 0.8 - app.width * 0.03;
					if ((curr_note.bar_number == pressed_bar) && (curr_note.y > low_bound) &&
					    (curr_note.y < up_bound)) {
						curr_note.pressed = true;
						curr_note.key = "white-fill-glow";
						curr_note.image = app.assets.image("KCCS_set3-05");
					}
				}
			}
		}
		console.log(key, " ", (app.song.currentTime - this.beatmap.offset) /
			this.beatmap.song_speed_multiplier) + 0.08;
	},

	onkeyup: function(key) {
		// Check if key corresponds to one of the bars
		var pressed_bar = this.bar_keys.indexOf(key);
		if (pressed_bar > -1) {
			// Flag for bar release animation
			this.bar_pressed[pressed_bar] = false;
		}
		
	},

	onleave: function() {
		// Clear notes and score
		this.entities.wipe();
		this.notes.wipe();

		// Reset the beatmap's beat tracker
		this.beatmap.curr_beat = 0;	

		// Set playing back to true in case exited while paused
		this.playing = true;

		// 
		app.song.load();
	},

	// Create a note if the notes in the map haven't all been exhausted
	create_note: function() {
		if (this.playing) {
			var beat = this.beatmap.get_beat();
			// Trigger note creation when the song position is reached
			var note_delay = app.height * 0.5 / this.note_speed;
			if (app.song.currentTime - (this.beatmap.offset - note_delay) >= 
				beat.song_pos * this.beatmap.song_speed_multiplier) {
				this.note_num ++;
				var keys = beat.beats.split("");
				for(var i = 0; i < keys.length; i++) {
					if (keys[i] == 1) {
						this.notes.add(ENGINE.Note, {
							key: this.beatmap.get_color(i),
							x: app.width * (0.1241 + i * 0.05) - this.note_size / 2,
							speed: this.note_speed,
							bar_number: i,
							score: this.score,
						})
					}
				}
				this.beatmap.next_beat();
			}
		}
	},

	fade_out: function() {
		var curr_song = app.song;
		this.notes.call("pause");
		curr_song.pause();
		this.playing = false;
	},

	fade_in: function() {
		var curr_song = app.song;
		curr_song.play();
		this.notes.call("play");
		this.playing = true;
	},

	// Convert song time to minutes:seconds display
	conv_time: function(currentTime) {
		var whole = Math.round(currentTime);
		var minute = parseInt(whole / 60);
		var second = whole % 60;
		if (second < 10) {
			second = "0" + second
		}
		return minute + ":" + second;
	}
});