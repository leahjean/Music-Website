app.game.rain_map = new ENGINE.Beatmap({
	bpm: 76,  // Beats per minute
	crotchet: 60 / this.bpm,  // Time duration of a beat, calculated from the bpm
	offset: 0,  // Song delay until start of notes
	bar_style: "medium",  // Bar-style
	bg: "Skylake",  // Background image
	song_name: "Rain",
	note_style: ["blue", "light-blue", "teal", "sky-blue", "green", "blue"],
	notes: [  // Array of notes
	// Opening sequence
	{song_pos: 0.6, beats: "100000"},
	{song_pos: 0.65, beats: "010000"},
	{song_pos: 0.7, beats: "001000"},
	{song_pos: 1.8, beats: "000001"},
	{song_pos: 2.6, beats: "100001"},
	{song_pos: 3.0, beats: "010010"},
	{song_pos: 3.4, beats: "001100"},
	{song_pos: 3.8, beats: "010000"},
	{song_pos: 3.85, beats: "001000"},
	{song_pos: 3.9, beats: "000100"},
	{song_pos: 4.3, beats: "000001"},
	{song_pos: 4.4, beats: "000010"},
	{song_pos: 4.9, beats: "001000"},
	{song_pos: 4.95, beats: "000100"},
	{song_pos: 5.0, beats: "000010"},
	{song_pos: 6.8, beats: "100000"},
	{song_pos: 6.85, beats: "010000"},
	{song_pos: 6.9, beats: "001000"},
	{song_pos: 8.2, beats: "000001"},
	{song_pos: 8.9, beats: "100001"},
	{song_pos: 9.225, beats: "010010"},
	{song_pos: 9.55, beats: "001100"},
	{song_pos: 9.95, beats: "100000"},
	{song_pos: 10.0, beats: "001000"},
	{song_pos: 10.05, beats: "000010"},
	{song_pos: 10.6, beats: "001001"},
	{song_pos: 11.2, beats: "010000"},
	{song_pos: 11.25, beats: "000100"},
	{song_pos: 11.3, beats: "000001"},

	// "Mmmmm"
	{song_pos: 12.05, beats: "100100"},
	{song_pos: 12.4, beats: "010010"},


	]
})
