ENGINE.Sprites = function() {
	this.sprites = {
		data: []
	}
	this.sprites.data['notes'] = [
{
	key: "dark-orange",
	frame: {x: 130, y: 99, w: 77, h: 77},
	rotated: false,
	trimmed: false,
	//"spriteSourceSize": {"x":0,"y":0,"w":26,"h":256},
	//"sourceSize": {"w":26,"h":256}
},
{
	key: "orange",
	frame: {x: 232, y: 99, w: 77, h: 77},
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
	frame: {x: 640, y: 99, w: 85, h: 85},
	rotated: false,
	trimmed: false,
},
{
	key: "teal",
	frame: {x: 747, y: 101, w: 77, h: 77},
	rotated: false,
	trimmed: false,
},
{
	key: "light-blue",
	frame: {x: 849, y: 101, w: 77, h: 77},
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
}];

	this.sprites.data['bars'] = [
{
	key: "thin-dark",
	frame: {x: 172, y: 72, w: 4, h: 500},
	rotated: false,
	trimmed: false,
},
{
	key: "thick",
	frame: {x: 252, y: 72, w: 20, h: 500},
	rotated: false,
	trimmed: false,
},
{
	key: "thin-uneven",
	frame: {x: 340, y: 72, w: 13, h: 500},
	rotated: false,
	trimmed: false,
},
{
	key: "medium",
	frame: {x: 429, y: 72, w: 10, h: 500},
	rotated: false,
	trimmed: false,
},
{
	key: "darkest-bottom",
	frame: {x: 150, y: 461, w: 50, h: 8},
	rotated: false,
	trimmed: false,
},
{
	key: "dark-bottom",
	frame: {x: 247, y: 461, w: 50, h: 8},
	rotated: false,
	trimmed: false,
},
]

}

// Fetch a set of locations for the specified group
ENGINE.Sprites.prototype = {
	fetch: function(key) {
		return this.sprites.data[key];
	}
}