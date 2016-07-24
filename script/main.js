// Main javascript to initialize the application that controls scenes
// See application.js for all variables included
var app = new ENGINE.Application({
	// Get width and height of window
	width: window.innerWidth,
	height: window.innerHeight,
	playing: true,
	set_volume: 0.5,

	// Load all assets on creation
	oncreate: function() {
		//Load assets
		this.assets.addAudio("Fairytale.mp3");
		this.assets.addImage("Skylake.png");
		this.assets.addImage("keyboard.png");
		this.assets.addSprites("sprites.png", this.sprites.fetch('notes'));
		console.log(this);
	},

	// When assets are loaded, select the game screen
	onready: function() {
		this.selectScene(this.game);
	}
});