// Application decides which scene is the current scene and passes events to it
ENGINE.Application = function(args) {
	var app = this;
	_.extend(this, args);

	// Create 16:9 canvas wrapper and add to document
	var dims = this.window_dim(1882 / 1240);
	this.layer = cq(dims[0], dims[1]);
	this.layer.appendTo("body");

	// Specify width and height of the game
	this.width = dims[0];
	this.height = dims[1];

	// Bind events to the application using the eveline library
	eveline(this);

	// Create loader and asset managers
	this.loader = new ENGINE.Loader(this.layer);
	this.sprites = new ENGINE.Sprites();
	this.assets = new ENGINE.Assets(this.loader);

	// Run a callback provided by the end-developer
	this.oncreate();

	// Fire loader
	this.loader.ready(function() {
		app.onready();
	})
}

ENGINE.Application.prototype = {
	// Calls the method in the current scene with the given arguments
	// e.g. this.dispatch("onmousemove", 32, 64); will trigger the onmousemove method 
	dispatch: function(method) {
		if (this.scene  && this.scene[arguments[0]]){
			this.scene[arguments[0]].apply(this.scene, Array.prototype.slice.call(arguments, 1));
		}
	},
	selectScene: function(scene) {
		// Tell the current scene to close
		this.dispatch("onleave");

		// Swap to current scene
		this.scene = scene;
		this.dispatch("onenter");
	},

	// Pass events from eveline to current scene

	// Game logic step (setInterval)
	onstep: function(delta) {
		this.dispatch("onstep", delta);
	},

	// Rendering loop (requestAnimationFrame)
	onrender: function(delta) {
		this.dispatch("onrender", delta);
	},

	// Key press gets translated to a string
	onkeydown: function(key) {
		this.dispatch("onkeydown", key);
	},

	// Key release gets translated to a string
	onkeyup: function(key) {
		this.dispatch("onkeyup", key);
	},

	// Mouse gets translated to a position
	onmousedown: function(x, y) {
		this.dispatch("onmousedown", x, y);
	},

	// Creates window dimensions that fit the input aspect ratio
	window_dim: function(ratio) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		if (height * ratio > width) {
			height = width / ratio;
		} else {
			width = height * ratio;
		}
		return [width, height];
	}
}