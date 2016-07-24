// Adding a scene method to the engine object
ENGINE.Scene = function(args) {
	_.extend(this, args)
	if (this.oncreate) this.oncreate();
};

// Specify what functions all scene objects share
ENGINE.Scene.prototype = {
	onenter: function() {/* Insert function here */},
	onleave: function() {/* Insert function here */},
	onrender: function() {/* Insert function here */},
	onstep: function() {/* Insert function here */}
};