// Main javascript to initialize the application that controls scenes
// See application.js for all variables included
var app = new ENGINE.Application({
	playing: true,
	set_volume: 0.5,
	song: undefined,

	// Load all assets on creation
	oncreate: function() {
		//Load assets
		this.assets.addAudio("Rain.mp3");
		this.assets.addAudio("Fairytale.mp3");
		this.assets.addImage("Skylake.png");
		this.assets.addSprites("sprites.png", this.sprites.fetch('notes'));
		this.assets.addSprites("KCCS_barsv1-03.png", this.sprites.fetch('bars'));
		console.log(this);
	},

	// When assets are loaded, select the game screen
	onready: function() {
		this.selectScene(this.game);
	}
});