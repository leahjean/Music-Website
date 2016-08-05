// Loader
ENGINE.Loader = function(layer) {
	this.total = 0;  // Number of items to load
	this.count = 0;  // Items in queue
	this.progress = 0;  // Progress from 0 to 1
	this.callbacks = []  // All callbacks that should be fired when loading is over
	this.loading = false;
	this.layer = layer;
};

// Specify base object features
ENGINE.Loader.prototype = {
	// Tell the loader we're adding an item
	add: function() {
		this.loading = true;
		this.count++;
		this.total++;
		// this.layer.clear();
    	// this.layer.fillStyle("rgba(255, 255, 255, 1)").font("bold 42px Arial").fillText("Loading: "+(this.total - this.count) / this.total+" %", 315, 330);
	},

	// Load image
	image: function(image) {
		var loader = this;

		// Listen to when image is ready
		image.addEventListener("load", function() {
			loader.onItemReady();
		});

		// Call error handler if image can't be loaded
		image.addEventListener("error", function(){
			loader.onItemError(this.src);
		});

		this.add();  // Increase item count
	},

	// Load audio
	audio: function(audio) {
		var loader = this;

		// Listen to when audio is ready
		audio.addEventListener('canplaythrough', function() {
			loader.onItemReady();
		});

		// Call error handler if audio can't be loaded
		audio.addEventListener('error', function() {
			loader.onItemError(this.src);
		});

		this.add();  // Increase item count
	},

	// Simulate that an asset is being loaded for "duration" milliseconds
	foo: function(duration) {
		var loader = this;

		this.add();  // Increase item count		

		// Simulate loading using timeout
		setTimeout(function() {
			loader.onItemReady();
		}, duration);
	},

	// What happens when the loading is done
	ready: function(callback) {
		if (!this.loading) {
			callback();  // Fire callback if nothing to load
		} else {
			this.callbacks.push(callback);  // If loading, add callback for later execution
		}
	},

	// Called when one item finishes loading
	onItemReady: function() {
		this.count--;  // Decrease the count of items in queue
		this.progress = (this.total - this.count) / this.total;  // Update progress

		// If no more items in queue, execute all callbacks and reset loader
		if (this.count <= 0) {
			this.loading = false;

			// Run all callbacks
			for (var i = 0; i < this.callbacks.length; i++) {
				this.callbacks[i]();
			}
			
			// Remove callbacks so they won't be fired on next loading
			this.callbacks = [];
			this.total = 0;
			this.count = 0;
		}
	},

	// Catch errors
	onItemError: function(source) {
		// Output source to the console
		console.log("Unable to load ", source);
	}
};
