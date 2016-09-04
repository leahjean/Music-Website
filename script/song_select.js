app.song_select = new ENGINE.Scene({
	song_id: 0,  // Index of the song in the beatmap list
	disp_num: 7,  // Number of song titles to display
	beatmap_names: [],  // Sorted beatmaps
	sort: "alphabetic",  // Sort by name by default
	initial: true,  // Flag for first load in
	onenter: function() {
		if (this.initial) {
			// Add in the beatmap names/difficulties to the name array
			for (var beatmap_id in app.beatmap_list) {
				// Check that object has its own property not from prototype
				if (app.beatmap_list.hasOwnProperty(beatmap_id)) {
					this.beatmap_names.push({
						id: beatmap_id, 
						name: app.beatmap_list[beatmap_id].song_title,
						difficulty: app.beatmap_list[beatmap_id].difficulty,
						artist: app.beatmap_list[beatmap_id].artist_name
					});
				}
			}
			this.initial = false;
		}

		// Sort the beatmap names by name by default
		this.sort_names(this.sort);
	},
	onrender: function() {
		// Trigger song preview
		var curr_map = app.beatmap_list[this.beatmap_names[this.song_id].id];
		app.song = app.assets.audio(curr_map.mp3_name);
		app.song.play();

		// Set screen background to black
		app.layer.clear("rgb(0, 0, 0)");  

		// Load in the background assets
		var bg = app.assets.image("KCCS_galaxy2");

		// Draw background
		app.layer.drawImage(bg, 0, 0, 2000, 2000 / app.aspect_ratio,
			0, 0, app.width, app.height);

		// Determine song indices to display
		var up_lim = Math.min(this.beatmap_names.length - 1, 
			Math.floor(this.song_id + this.disp_num / 2));
		var bot_lim = Math.max(0, up_lim - this.disp_num + 1);

		// Draw the song names
		for (var i = bot_lim; i <= up_lim; i++) {
			var dist = (i - this.song_id);  // Distance from the center
			var curr_name = this.beatmap_names[i].name;
			var font_size = (1 - Math.abs(dist / (this.disp_num))) *
				Math.round(app.height * 0.05);
			var font_height = app.height * (0.5 + 0.12 * dist);
			var font_color = "rgba(125, 125, 125, 1)";
			if (i == this.song_id) {
				font_size = Math.round(app.height * 0.07);
				font_color = "rgba(255, 255, 255, 1)";
			}
			app.layer.save()
			         .fillStyle(font_color)
			         .font(font_size + 
			         	"px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif")
			         .textAlign("center")
			         .fillText(curr_name, app.width * 0.5, 
			         	  font_height + font_size / 2)
			         .restore();
		}
	},
	onstep: function() {

	},
	onmousedown: function(x, y, button) {

	},
	onkeydown: function(key) {
		if (key == "down" || key == "s") {
			if (this.song_id < this.beatmap_names.length - 1) {
				this.song_id++;
				this.end_song();
			}
		}
		if (key == "up" || key == "w") {
			if (this.song_id > 0) {
				this.song_id--;
				this.end_song();
			}
		}
		if (key == "enter") {
			var beatmap_id = this.beatmap_names[this.song_id].id;
			app.active_map = app.beatmap_list[beatmap_id];
			app.selectScene(app.game);
		}
	},
	onleave: function() {
		app.song.load();
	},

	end_song: function() {
		app.song.load();
	},

	sort_names: function(sort) {
		// Sort alphabetically
		if (sort == "alphabetic") {
			this.beatmap_names.sort(function (a, b) {
				if (a.name > b.name) {
					return 1;
				} else if (a.name < b.name) {
					return -1;
				} else {
					// If same song name, order by artist name
					if (a.artist > b.artist) {
						return 1;
					} else {
						return -1;
					}
				}
			});
			return;
		} 
		// Sort by difficulty
		if (sort == "difficulty") {
			this.beatmap_names.sort(function (a, b) {
				if (a.difficulty > b.difficulty) {
					return 1;
				} else if (a.difficulty < b.difficulty) {
					return -1;
				} else {
					// If same difficulty, order by song name
					if (a.name > b.name) {
						return 1;
					} else if (a.name < b.name) {
						return -1;
					} else {
						// If same song name, order by artist name
						if (a.artist > b.artist) {
							return 1;
						} else {
							return -1;
						}
					}	
				}
			});
			return;
		}
	}
});