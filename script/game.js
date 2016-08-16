// Main game scene
app.game = new ENGINE.Scene({
	playing: true,
	stopped: false,
	fade_delay: 0.0000025,  // Audio fade speed
	bar: null,
	note_speed: app.height / 4,
	beatmap: null,  // Current beatmap playing
	bar_keys: "asdjkl",
	note_num: 0,  // Timing purposes
	note_size: app.width * 0.03,

	oncreate: function() {
		// Create new collection
		this.entities = new ENGINE.Collection(this);
		this.notes = new ENGINE.Collection(this);
	},

	onenter: function() {
		// Load in the current beatmap
		this.beatmap = this.chainsmokers_map;

		// Load in the current song
		app.song = app.assets.audio(this.beatmap.song_name);

		var curr_song = app.song;
		// Avoid Promise Error when repeatedly pausing and playing
		setTimeout(function() {
			curr_song.play();
			curr_song.volume = app.set_volume;
			//curr_song.currentTime = 8;
		}, 1000);

		app.song.loop = false;

		this.bar = app.assets.data.sprites[this.beatmap.bar_style];
	},

	onrender: function(delta) {
		app.layer.clear("rgb(0, 0, 0)");  // Set screen background to black

		// Load in the background assets
		var bg = app.assets.image(this.beatmap.bg);
		var sprite = app.assets.image("sprites");
		var bars = app.assets.image("KCCS_barsv1-03");
		var glow = app.assets.image("KCCS_set3-05");

		// Draw the background
		// We can edit this to be dynamic later
		app.layer.drawImage(bg,	0, 0, app.width, app.height);

		// Draw the UI
		var title_bar = app.assets.data.sprites["song-title-bar"];
		var t_frame = title_bar.frame;
		// Title bar
		app.layer.drawImage(glow, t_frame.x, t_frame.y, t_frame.w, t_frame.h,
			0, app.height * 0.15, app.width * 0.39, app.height * 0.055);
		// Song title
		app.layer.fillStyle("rgba(255, 255, 255, 1)")
				 .font("bold " + Math.round(app.height * 0.030) + 
				 	"px 'Lucida Sans Unicode', 'Lucida Grande, sans-serif")
				 .fillText(this.beatmap.song_title, this.beatmap.title_offset,
				 	app.height * 0.188);
		// Artist name
		app.layer.fillStyle("rgba(255, 255, 255, 1)")
				 .font("lighter " + Math.round(app.height * 0.018) + 
				 	"px 'Lucida Sans Unicode', 'Lucida Grande, sans-serif")
				 .fillText(this.beatmap.artist_name, this.beatmap.artist_offset,
				 	app.height * 0.233);
		// Difficulty rating
		for (var i = 0; i < 5; i++) {
			if (i < this.beatmap.difficulty) {
				var star = app.assets.data.sprites["star-filled"];
				app.layer.drawImage(glow, star.frame.x, star.frame.y, star.frame.w, 
					star.frame.h, app.width * (0.3 + 0.015 * i), app.height * 0.215, 
					app.height * 0.018, app.height * 0.018);
			} else {
				var no_star = app.assets.data.sprites["star-empty"];
				app.layer.drawImage(glow, no_star.frame.x, no_star.frame.y, no_star.frame.w, 
					no_star.frame.h, app.width * (0.3 + 0.015 * i), app.height * 0.215, 
					app.height * 0.018, app.height * 0.018);
			}
		}


		// Draw the keyboard
		var curr_frame = this.bar.frame;
		var bar_bot = app.assets.data.sprites["darkest-bottom"];
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
				app.width * (0.125 + 0.05 * i) - app.width * 0.0323 / 2, 
				app.height * 0.8 - bot_frame.h / 2, app.width * 0.03, bot_frame.h);
			
			// Draw the letters
			var bar_key = "bar-" + i;
			var letter = app.assets.data.sprites[bar_key];
			var l_frame = letter.frame;
			app.layer.drawImage(bars, l_frame.x, l_frame.y, l_frame.w, l_frame.h,
				app.width * (0.125 + 0.05 * i) - l_frame.w / 2,
				app.height * 0.82, l_frame.w, l_frame.h);
		}

		/*
		var _note = app.assets.data.sprites["white-fill-glow"];
		var _frame = _note.frame;
		app.layer.drawImage(glow, _frame.x, _frame.y, _frame.w, _frame.h,
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
		if (app.game.playing && x < app.width/2) {
			this.fade_out();
			this.stopped = true;
		}
		if (!app.game.playing && x > app.width/2) {
			this.fade_in();
			this.stopped = false;
		}
	},

	onkeydown: function(key) {
		// Check if one of the control keys was pressed
		if (key == 'p') {
			if (this.playing) {
				this.fade_out();
				this.stopped = true;
			} else {
				this.fade_in();
				this.stopped = false;
			}
			return;
		}

		var pressed_bar = this.bar_keys.indexOf(key);
		if (pressed_bar > -1 && this.notes.length > 0 && this.playing) {
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
		console.log(key, " ", (app.song.currentTime - this.beatmap.offset));
	},

	onleave: function() {
		this.entities.wipe();
		this.notes.wipe();
		app.song.pause();
	},

	// Create a note if the notes in the map haven't all been exhausted
	create_note: function() {
		if (this.playing) {
			var beat = this.beatmap.get_beat();
			// Trigger note creation when the song position is reached
			var note_delay = app.height * 0.5 / this.note_speed;
			if (app.song.currentTime - (this.beatmap.offset - note_delay) >= beat.song_pos) {
				this.note_num ++;
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
		}
	},

	fade_out: function() {
		/*
		// Only run fade_out if the song is playing
		if (this.playing) {

			var curr_song = app.song;
			while(curr_song.volume > 0) {
				if (curr_song.volume - this.fade_delay * app.set_volume < 0) {
					curr_song.volume = 0;
				} else {
					curr_song.volume -= this.fade_delay * app.set_volume;
				}
			}
			this.notes.call("pause");
			curr_song.pause();
			this.playing = false;
		}*/
		var curr_song = app.song;
		this.notes.call("pause");
		curr_song.pause();
		this.playing = false;
	},

	fade_in: function() {
		/*
		// Only run fade_in if song isn't playing
		if (!this.playing) {
			var curr_song = app.song;
			curr_song.play();
			this.notes.call("play");

			while(curr_song.volume < app.set_volume) {
				if (curr_song.volume + this.fade_delay * app.set_volume > app.set_volume) {
					curr_song.volume = app.set_volume;
				} else {
					curr_song.volume += this.fade_delay * app.set_volume;
				}
			}
			this.playing = true;
		}
		*/
		var curr_song = app.song;
		curr_song.play();
		this.notes.call("play");
		this.playing = true;
	}
});