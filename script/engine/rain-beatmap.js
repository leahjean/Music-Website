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
	{song_pos: 0.51, beats: "100000"},
	{song_pos: 0.56, beats: "010000"},
	{song_pos: 0.61, beats: "001000"},
	{song_pos: 1.68, beats: "000001"},
	{song_pos: 2.47, beats: "100001"},
	{song_pos: 2.86, beats: "010010"},
	{song_pos: 3.27, beats: "001100"},
	{song_pos: 3.67, beats: "010000"},
	{song_pos: 3.72, beats: "001000"},
	{song_pos: 3.78, beats: "000100"},
	{song_pos: 4.2, beats: "000001"},
	{song_pos: 4.4, beats: "000010"},
	{song_pos: 4.76, beats: "001000"},
	{song_pos: 4.85, beats: "000100"},
	{song_pos: 4.94, beats: "000010"},
	{song_pos: 6.75, beats: "100000"},
	{song_pos: 6.80, beats: "010000"},
	{song_pos: 6.85, beats: "001000"},
	{song_pos: 8.1, beats: "000001"},
	{song_pos: 8.8, beats: "100001"},
	{song_pos: 9.15, beats: "010010"},
	{song_pos: 9.5, beats: "001100"},
	{song_pos: 9.90, beats: "100000"},
	{song_pos: 9.95, beats: "001000"},
	{song_pos: 10.0, beats: "000010"},
	{song_pos: 10.6, beats: "001001"},
	{song_pos: 11.2, beats: "010000"},
	{song_pos: 11.25, beats: "000100"},
	{song_pos: 11.3, beats: "000001"},

	// "Mmmmm"
	{song_pos: 11.95, beats: "100100"},
	{song_pos: 12.35, beats: "010010"},


	]
})
