// Main javascript to initialize the application that controls scenes
// See application.js for all variables included
var app = new ENGINE.Application({
	playing: true,
	set_volume: 0.5,
	song: null,  // Mp3 object to be controlled
	song_name: null,  // Current song to be played
	active_map: null,  // Current beatmap to play
	beatmap_list: {},  // Dictionary of beatmap objects

	// Load all assets on creation
	oncreate: function() {
		// Load assets
		this.assets.addAudio("Chainsmokers (Daya).mp3");
		this.assets.addAudio("Stay the Night.mp3");
		this.assets.addAudio("Love Song.mp3");
		this.assets.addAudio("Rain (Taeyeon).mp3");

		this.assets.addImage("Skylake.png");
		this.assets.addImage("KCCS_galaxy2.png");

		this.assets.addSprites("sprites.png", this.sprites.fetch('notes'));
		this.assets.addSprites("KCCS_barsv1-03.png", this.sprites.fetch('ui'));
		this.assets.addSprites("KCCS_set3-05.png", this.sprites.fetch('glow'));
		console.log(this);
	},

	// When assets are loaded, select the game screen
	onready: function() {
		this.selectScene(this.song_select);
	}
});