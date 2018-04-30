// Collection is an array with some extra methods to manage entities
ENGINE.Collection = function(parent, args) {
	// The object that manages the collection
	this.parent = parent;

	// Unique ID is given to every entity
	this.index = 0;

	// Mark entities for removal if needed
	this.dirty = false;

	_.extend(this, args);
}

// Copy array prototype
ENGINE.Collection.prototype = new Array;
_.extend(ENGINE.Collection.prototype, {
	// Create new entity (based on the entity's constructor) in collection with given args
	add: function(constructor, args) {
		var entity = new constructor(_.extend({
			collection: this,
			index: this.index++
		}, args));

		// Push the new entity onto the Collection (i.e. array) of entities
		this.push(entity);
		return entity;
	},

	// Remove unused entities to conserve CPU
	clean: function() {
		for (var i = 0, len = this.length; i < len; i++) {
			// If entity marked for removal, then remove it from array
			if (this[i]._remove) {
				this.splice(i--, 1);
				len--;
			}
		}
	},

	//Remove all entities
	wipe: function() {
		for (var i = 0, len = this.length; i < len; i++) {
			this.splice(i--, 1);
			len--;
		}
	},

	// Keep track on collection's garbage
	step: function(delta) {
		// Check if a removal needs to be applied
		if (this.dirty) {
			this.dirty = false; 	
			this.clean();

			// Lastly, sort the entities by the zIndex
			// Array's builtin sort function takes the compare function and sorts by the sign of the return value
			this.sort(function(a, b) {
				return (a.zIndex | 0) - (b.zIndex | 0);
			})
		}
	},

	// Calls a method for every entity in the collection
	call: function(method) {
		// args isn't an array with slice method, so we need another way to get rid of the first arg,
		// which is a method name
		var args = Array.prototype.slice.call(arguments, 1);
		// Initialize length to prevent any unintended behavior in case collection changes size mid-loop
    	for (var i = 0, len = this.length; i < len; i++) {
   			if(this[i][method]) this[i][method].apply(this[i], args);
   		}
   	},

	// Call, but with a parameter that takes in an array instead of a list of arguments
	apply: function(method, args) {
		for (var i = 0, len = this.length; i < len; i++) {
      		if (this[i][method]) this[i][method].apply(this[i], args);
   		}
	}

});