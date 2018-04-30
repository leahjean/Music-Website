ENGINE.Assets = function(loader) {
	this.loader = loader;  // Make use of loader we already have

	// Lookup directories so we don't have to provide full paths
	this.paths = {
		images: "assets/images/",
		audio: "assets/audio/"
	};

	// Hold raw assets
	this.data = {
		images: [],
		sprites: [],
		audio: []
	};
};

ENGINE.Assets.prototype = {
	// Get image by key
	image: function(key) {
		return this.data.images[key];
	},

	// Get audio by key
	audio: function(key) {
		return this.data.audio[key];
	},

	// Get sprite by key
	sprite: function(key) {
		return this.data.sprites[key]
	},

	// Add images
	addImages: function(filenames) {
		for (var i = 0; i < filenames.length; i++) {
			this.addImage(filenames[i]);
		}
	},

	// Add spritesheet
	addSprites: function(sprite_file, locations) {
		this.addImage(sprite_file);  // Add spritesheet to assets

		// Add sprites from the spritesheet according to the location of the sprites of interest
		for (var i = 0; i < locations.length; i++) {
			this.addSprite(sprite_file, locations[i]);
		}
	},

	// Add one image
	addImage: function(filename) {
		var image = new Image;
		this.loader.image(image);  // Pass the image to the loader
		var key = filename.match(/(.*)\..*/)[1];  // Remove the image extension (e.g. .jpg)
		this.data.images[key] = image;  // Add image to the assets
		image.src = this.paths.images + filename;  // Search for image in defined path
	},

	// Add one sprite
	addSprite: function(sprite_file, location) {
		var data = {};  // Data object holding sprite information
		var key = location.key;  // Key for the sprite
		data.frame = location.frame;  // Location in spritesheet
		data.rotated = location.rotated;  // Image rotated or not
		data.trimmed = location.trimmed;  // Image trimmed or not
		this.data.sprites[key] = data;  // Store the data object for the sprite
	},

	// Add audio
	addAudio: function(filename) {
		var audio = new Audio;
		this.loader.audio(audio);  // Pass audio to the loader
		var key = filename.match(/(.*)\..*/)[1];  // Remove the audio extension (e.g. .mp3)
		this.data.audio[key] = audio;  // Add audio to the assets
		audio.src = this.paths.audio + filename;  // Search for audio in defined path
	},
};