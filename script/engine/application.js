// Application decides which scene is the current scene and passes events to it
ENGINE.Application = function(args) {
	var app = this;
	_.extend(this, args);

	// Create full-screen canvas wrapper and add to document
	this.layer = cq();
	this.layer.appendTo("body");

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

	// Key gets translated to a string
	onkeydown: function(key) {
		this.dispatch("onkeydown", key);
	},

	// Mouse gets translated to a position
	onmousedown: function(x, y) {
		this.dispatch("onmousedown", x, y);
	}
}