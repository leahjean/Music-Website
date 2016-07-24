ENGINE.Sprites = function() {
	this.sprites = {
		data: []
	}
	this.sprites.data['notes'] = [

{
	key: "dark-orange",
	frame: {x: 128, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
	//"spriteSourceSize": {"x":0,"y":0,"w":26,"h":256},
	//"sourceSize": {"w":26,"h":256}
},
{
	key: "orange",
	frame: {x: 231, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "yellow-orange",
	frame: {x: 334, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "mellow-yellow",
	frame: {x: 434, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "yellow",
	frame: {x: 535, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "green",
	frame: {x: 638, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "teal",
	frame: {x: 739, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "light-blue",
	frame: {x: 842, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "sky-blue",
	frame: {x: 945, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "blue",
	frame: {x: 1048, y: 101, w: 85, h: 85},
	rotated: false,
	trimmed: false,
}]

}

// Fetch a set of locations for the specified group
ENGINE.Sprites.prototype = {
	fetch: function(key) {
		return this.sprites.data[key];
	}
}