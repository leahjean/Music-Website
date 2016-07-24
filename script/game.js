// Main game scene
app.game = new ENGINE.Scene({
	song: undefined,
	playing: true,
	stopped: false,
	fade_delay: 0.0000025,

	oncreate: function() {
		// Create new collection
		this.entities = new ENGINE.Collection(this);
	},

	onenter: function() {
		// Load in the music
		this.song = app.assets.audio("Fairytale");
		var curr_song = this.song;
		// Avoid Promise Error when repeatedly pausing and playing
		setTimeout(function() {
			curr_song.play();
			curr_song.volume = app.set_volume;
		}, 1500);
		this.song.loop = true;
	},

	onrender: function(delta) {
		var curr_song = this.song;
		app.layer.clear("rgb(0, 0, 0)");  // Set screen background to black

		// Load in the background assets
		bg = app.assets.image("Skylake");
		keyboard = app.assets.image("keyboard");
		sprite = app.assets.image("sprites");

		// Draw the background
		// We can edit this to be dynamic later
		app.layer.drawImage(bg,	0, 0, app.width, app.height);

		// Center the keyboard and stretch vertically
		app.layer.drawImage(keyboard, app.width / 2 - keyboard.width / 2, 
			app.height / 2 - keyboard.height * 1.5 / 2, keyboard.width, keyboard.height * 1.5);
		this.entities.call("render", delta);  // Render all entities

		// Note testing
		var curr_sprite = app.assets.data.sprites["blue"];
		var curr_frame = curr_sprite.frame;
		app.layer.drawImage(sprite, curr_frame.x, curr_frame.y, curr_frame.w, curr_frame.h,
			120, 150, curr_frame.w, curr_frame.h);
		curr_sprite = app.assets.data.sprites["sky-blue"];
		curr_frame = curr_sprite.frame;
		app.layer.drawImage(sprite, curr_frame.x, curr_frame.y, curr_frame.w, curr_frame.h,
			240, 150, curr_frame.w, curr_frame.h);

		// Looping song early for testing
		if (curr_song.currentTime > 100) {
			curr_song.load();
			curr_song.play();
		}
	},

	onstep: function(delta) {
		var curr_song = this.song;
		window.addEventListener("blur", function() {
			app.game.fade_out();
		}, false);
		window.addEventListener("focus", function() {
			if(!app.game.stopped){
				app.game.fade_in();
			}
		}, false);
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

	onleave: function() {
		this.entities.wipe();
		this.song.pause();
	},

	fade_out: function() {
		// Only run fade_out if the song is playing
		if(app.game.playing) {
			var curr_song = this.song;
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
		if(!app.game.playing) {
			app.loader.foo(1500);
			var curr_song = this.song;
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