// Stores all game sprites
ENGINE.Sprites = function() {
	this.sprites = {
		data: []
	},
	this.sprites.data['notes'] = [
{
	key: "dark-orange",
	frame: {x: 130, y: 99, w: 77, h: 77},
	//rotated: false,
	//trimmed: false,
	//"spriteSourceSize": {"x":0,"y":0,"w":26,"h":256},
	//"sourceSize": {"w":26,"h":256}
},
{
	key: "orange",
	frame: {x: 232, y: 99, w: 77, h: 77},
},
{
	key: "yellow-orange",
	frame: {x: 334, y: 101, w: 85, h: 85},
},
{
	key: "mellow-yellow",
	frame: {x: 434, y: 101, w: 85, h: 85},
},
{
	key: "yellow",
	frame: {x: 535, y: 101, w: 85, h: 85},
},
{
	key: "green",
	frame: {x: 640, y: 99, w: 85, h: 85},
},
{
	key: "teal",
	frame: {x: 747, y: 101, w: 77, h: 77},
},
{
	key: "light-blue",
	frame: {x: 849, y: 101, w: 77, h: 77},
},
{
	key: "sky-blue",
	frame: {x: 945, y: 101, w: 85, h: 85},
},
{
	key: "blue",
	frame: {x: 1048, y: 101, w: 85, h: 85},
},
{
	key: "outlined-royal-blue",
	frame: {x: 128, y: 273, w: 77, h: 77},
},
{
	key: "outlined-navy-blue",
	frame: {x: 233, y: 273, w: 77, h: 77},
},
{
	key: "outlined-dark-teal",
	frame: {x: 336, y: 273, w: 77, h: 77},
},
{
	key: "outlined-teal",
	frame: {x: 440, y: 273, w: 77, h: 77},
},
{
	key: "outlined-light-teal",
	frame: {x: 544, y: 273, w: 77, h: 77},
},
{
	key: "outlined-lavendar",
	frame: {x: 959, y: 273, w: 77, h: 77},
},
{
	key: "outlined-purple",
	frame: {x: 1056, y: 273, w: 77, h: 77},
},
{
	key: "outlined-green",
	frame: {x: 1146, y: 273, w: 77, h: 77},
},
],

	this.sprites.data['ui'] = [
{
	key: "thin-dark",
	frame: {x: 172, y: 72, w: 4, h: 500},
},
{
	key: "thick",
	frame: {x: 252, y: 72, w: 20, h: 500},
},
{
	key: "thin-uneven",
	frame: {x: 340, y: 72, w: 13, h: 500},
},
{
	key: "medium",
	frame: {x: 429, y: 72, w: 10, h: 500},
},
{
	key: "darkest-bottom",
	frame: {x: 150, y: 461, w: 50, h: 8},
},
{
	key: "dark-bottom",
	frame: {x: 247, y: 461, w: 50, h: 8},
},
{
	key: "dark-bottom",
	frame: {x: 247, y: 461, w: 50, h: 8},
},
{
	key: "song-title-bar",
	frame: {x: 373, y: 369, w: 476, h: 43},
},
{
	key: "star-filled",
	frame: {x: 934, y: 380, w: 16, h: 16},
},
{
	key: "star-empty",
	frame: {x: 954, y: 380, w: 16, h: 16},
},
{
	key: "bar-0",
	frame: {x: 535, y: 77, w: 13, h: 15},
},
{
	key: "bar-1",
	frame: {x: 599, y: 77, w: 11, h: 15},
},
{
	key: "bar-2",
	frame: {x: 665, y: 77, w: 12, h: 15},
},
{
	key: "bar-3",
	frame: {x: 728, y: 77, w: 9, h: 15},
},
{
	key: "bar-4",
	frame: {x: 792, y: 77, w: 11, h: 15},
},
{
	key: "bar-5",
	frame: {x: 856, y: 77, w: 10, h: 15},
}],

	this.sprites.data['glow'] = [
{
	key: "white-fill",
	frame: {x: 73, y: 353, w: 77, h: 77},
},
{
	key: "grey-fill",
	frame: {x: 216, y: 219, w: 77, h: 77},
},
{
	key: "color-fill-glow",
	frame: {x: 216, y: 353, w: 77, h: 77},
},
{
	key: "gray-glow",
	frame: {x: 726, y: 141, w: 42, h: 42},
},
{
	key: "white-glow",
	frame: {x: 1092, y: 349, w: 42, h: 42},
},
{
	key: "white-fill-glow",
	frame: {x: 69, y: 219, w: 77, h: 77}
},
]};

// Fetch a set of locations for the specified group
ENGINE.Sprites.prototype = {
	fetch: function(key) {
		return this.sprites.data[key];
	}
};