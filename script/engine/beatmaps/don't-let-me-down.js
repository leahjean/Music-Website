app.beatmap_list["chainsmokers_dlmd_map"] = new ENGINE.Beatmap({
    bpm: 160,  // Beats per minute
    crotchet: 60 / this.bpm,  // Time duration of a beat, calculated from the bpm
    offset: 5.0,  // Song delay until start of notes
    bar_style: "medium",  // Bar-style
    bg: "Skylake",  // Background image
    mp3_name: "Chainsmokers (Daya)",
    song_title: "DON'T LET ME DOWN",
    artist_name: "Chainsmokers ft. Daya",
    title_offset: app.width * 0.08,
    artist_offset: app.width * 0.085,
    song_speed_multiplier: 1, 
    difficulty: 3,
    note_style: ["blue", "light-blue", "teal", "sky-blue", "green", "blue"],
    max_note: 14,
    note_speed: app.height / 4,
    notes: [  // Array of notes

    {song_pos: 0.56, beats: "010010"},
    {song_pos: 1.125, beats: "010010"},
    {song_pos: 1.61, beats: "001000"},
    {song_pos: 2.083, beats: "010010"},
    {song_pos: 2.63, beats: "010010"},
    {song_pos: 3.15, beats: "000001"},
    {song_pos: 3.563, beats: "010010"},
    {song_pos: 4.13, beats: "010010"},
    {song_pos: 4.66, beats: "100000"},
    {song_pos: 5.01, beats: "001000"},
    {song_pos: 5.17, beats: "000100"},
    {song_pos: 5.605, beats: "000100"},
    {song_pos: 6.14, beats: "010000"},
    {song_pos: 6.6, beats: "010010"},
    {song_pos: 7.10, beats: "010010"},
    {song_pos: 7.63, beats: "000100"},
    {song_pos: 8.063, beats: "010010"},
    {song_pos: 8.60, beats: "010010"},
    {song_pos: 9.14, beats: "000001"},
    {song_pos: 9.53, beats: "010010"},
    {song_pos: 10.08, beats: "010010"},
    {song_pos: 10.64, beats: "100000"},
    {song_pos: 11.00, beats: "000010"},
    {song_pos: 11.12, beats: "000100"},
    {song_pos: 11.57, beats: "000010"},
    {song_pos: 12.1, beats: "001000"},
    {song_pos: 12.53, beats: "100100"},
    {song_pos: 13.39, beats: "001001"},
    {song_pos: 14.33, beats: "100000"},
    {song_pos: 14.47, beats: "100000"},
    {song_pos: 14.83, beats: "001001"},
    {song_pos: 15.55, beats: "010010"},
    {song_pos: 16.30, beats: "001001"},
    {song_pos: 17.32, beats: "010000"},
    {song_pos: 17.455, beats: "010000"},
    {song_pos: 17.82, beats: "001001"},
    {song_pos: 18.563, beats: "100100"},
    {song_pos: 19.26, beats: "001001"},
    {song_pos: 20.25, beats: "001000"},
    {song_pos: 20.438, beats: "001000"},
    {song_pos: 20.813, beats: "001001"},
    {song_pos: 21.563, beats: "010010"},
    {song_pos: 22.35, beats: "001001"},
    {song_pos: 23.25, beats: "001000"},
    {song_pos: 23.438, beats: "001000"},
    {song_pos: 23.813, beats: "001001"},
    {song_pos: 24.0, beats: "000010"},
    {song_pos: 24.563, beats: "100010"},
    {song_pos: 25.3, beats: "001010"},
    {song_pos: 25.69, beats: "000100"},
    {song_pos: 26.06, beats: "000001"},
    {song_pos: 26.25, beats: "100000"},
    {song_pos: 26.438, beats: "100000"},
    {song_pos: 26.6, beats: "000001"},
    {song_pos: 26.813, beats: "001000"},
    {song_pos: 27.14, beats: "000001"},
    {song_pos: 27.563, beats: "100010"},
    {song_pos: 28.1, beats: "000010"},
    {song_pos: 28.313, beats: "001000"},
    {song_pos: 28.685, beats: "000010"},
    {song_pos: 29.04, beats: "000010"},
    {song_pos: 29.25, beats: "100001"},
    {song_pos: 29.438, beats: "100000"},
    {song_pos: 29.62, beats: "000001"},
    {song_pos: 29.813, beats: "001000"},    
    {song_pos: 30.22, beats: "000010"},
    {song_pos: 30.563, beats: "100100"},
    {song_pos: 31.17, beats: "000100"},
    {song_pos: 31.779, beats: "000100"},
    {song_pos: 32.168, beats: "000001"},
    {song_pos: 32.25, beats: "100000"},
    {song_pos: 32.438, beats: "100000"},
    {song_pos: 32.62, beats: "000001"},
    {song_pos: 32.813, beats: "001000"},
    {song_pos: 33.17, beats: "000001"},
    {song_pos: 33.563, beats: "100010"},
    {song_pos: 34.12, beats: "000010"},
    {song_pos: 34.3, beats: "001000"},
    {song_pos: 34.667, beats: "000010"},
    {song_pos: 35.02, beats: "000010"},
    {song_pos: 35.25, beats: "100001"},
    {song_pos: 35.438, beats: "100000"},
    {song_pos: 35.62, beats: "000001"},
    {song_pos: 35.813, beats: "001000"},
    {song_pos: 36.0, beats: "010000"},
    // I need you, I need you, ...
    {song_pos: 36.4, beats: "010000"},
    {song_pos: 36.57, beats: "010000"},
    {song_pos: 36.83, beats: "000010"},
    {song_pos: 37.138, beats: "001000"},
    {song_pos: 37.35, beats: "100000"},
    {song_pos: 37.6, beats: "000001"},
    {song_pos: 37.83, beats: "000100"},
    {song_pos: 38.02, beats: "010000"},
    {song_pos: 38.26, beats: "000010"},
    {song_pos: 38.635, beats: "001000"},
    {song_pos: 39.0, beats: "100000"},
    // Yeah I need you right now
    {song_pos: 40.15, beats: "100100"},
    {song_pos: 40.36, beats: "001001"},
    {song_pos: 40.51, beats: "001001"},
    {song_pos: 40.69, beats: "001001"},
    {song_pos: 40.91, beats: "001001"},
    {song_pos: 41.25, beats: "010010"},

    /*
    {song_pos: 41.813, beats: "000001"},
    {song_pos: 42.0, beats: "010000"},
    {song_pos: 42.25, beats: "010000"},
    {song_pos: 42.5, beats: "100000"},
    {song_pos: 42.563, beats: "010000"},
    {song_pos: 42.75, beats: "000001"},
    {song_pos: 43.0, beats: "000100"},
    {song_pos: 43.125, beats: "010000"},
    {song_pos: 43.25, beats: "010000"},
    */
    {song_pos: 43.5, beats: "100000"},
    {song_pos: 43.75, beats: "000100"},
    {song_pos: 44.0, beats: "000010"},
    {song_pos: 44.063, beats: "010000"},
    {song_pos: 44.25, beats: "000010"},
    {song_pos: 44.625, beats: "000010"},
    {song_pos: 45.0, beats: "000100"},
    {song_pos: 45.188, beats: "001000"},
    {song_pos: 45.375, beats: "100000"},
    {song_pos: 45.563, beats: "000010"},
    {song_pos: 45.75, beats: "001000"},
    {song_pos: 45.938, beats: "000001"},
    {song_pos: 46.125, beats: "010000"},
    {song_pos: 46.313, beats: "000001"},
    {song_pos: 46.5, beats: "000010"},
    {song_pos: 46.688, beats: "000001"},
    {song_pos: 47.063, beats: "100000"},
    {song_pos: 47.25, beats: "000010"},
    {song_pos: 47.5, beats: "010000"},
    {song_pos: 47.625, beats: "010000"},
    {song_pos: 47.75, beats: "010000"},
    {song_pos: 48.0, beats: "010000"},
    {song_pos: 48.375, beats: "100000"},
    {song_pos: 48.563, beats: "010000"},
    {song_pos: 48.75, beats: "000100"},
    {song_pos: 49.0, beats: "100000"},
    {song_pos: 49.125, beats: "000010"},
    {song_pos: 49.25, beats: "000001"},
    {song_pos: 49.5, beats: "001000"},
    {song_pos: 49.875, beats: "001000"},
    {song_pos: 50.063, beats: "001000"},
    {song_pos: 50.25, beats: "010000"},
    {song_pos: 50.5, beats: "000001"},
    {song_pos: 50.625, beats: "010000"},
    {song_pos: 50.75, beats: "000001"},
    {song_pos: 51.0, beats: "100000"},
    {song_pos: 51.375, beats: "100000"},
    {song_pos: 51.563, beats: "000010"},
    {song_pos: 51.75, beats: "000010"},
    {song_pos: 52.0, beats: "010000"},
    {song_pos: 52.125, beats: "001000"},
    {song_pos: 52.25, beats: "100000"},
    {song_pos: 52.5, beats: "000100"},
    {song_pos: 52.688, beats: "001000"},
    {song_pos: 52.875, beats: "100000"},
    {song_pos: 53.063, beats: "100000"},
    {song_pos: 53.25, beats: "010000"},
    {song_pos: 53.625, beats: "100000"},
    {song_pos: 54.0, beats: "010000"},
    {song_pos: 54.25, beats: "010000"},
    {song_pos: 54.375, beats: "010000"},
    {song_pos: 54.5, beats: "000100"},
    {song_pos: 54.75, beats: "000010"},
    {song_pos: 55.0, beats: "001000"},
    {song_pos: 55.125, beats: "000001"},
    {song_pos: 55.25, beats: "001000"},
    {song_pos: 55.5, beats: "100000"},
    {song_pos: 55.75, beats: "100000"},
    {song_pos: 55.875, beats: "000010"},
    {song_pos: 56.0, beats: "000100"},
    {song_pos: 56.25, beats: "010000"},
    {song_pos: 56.625, beats: "000010"},
    {song_pos: 57.0, beats: "000001"},
    {song_pos: 57.188, beats: "100000"},
    {song_pos: 57.375, beats: "100000"},
    {song_pos: 57.563, beats: "100000"},
    {song_pos: 57.75, beats: "100000"},
    {song_pos: 57.938, beats: "000100"},
    {song_pos: 58.0, beats: "100000"},
    {song_pos: 58.125, beats: "001000"},
    {song_pos: 58.25, beats: "000100"},
    {song_pos: 58.313, beats: "000001"},
    {song_pos: 58.5, beats: "100000"},
    {song_pos: 58.688, beats: "000010"},
    {song_pos: 59.25, beats: "010000"},
    {song_pos: 59.5, beats: "010000"},
    {song_pos: 59.625, beats: "001000"},
    {song_pos: 59.75, beats: "000001"},
    {song_pos: 60.0, beats: "010000"},
    {song_pos: 60.065, beats: "100000"},
    {song_pos: 60.375, beats: "000010"},
    {song_pos: 60.75, beats: "000001"},
    {song_pos: 61.125, beats: "000100"},
    {song_pos: 61.5, beats: "010000"},
    {song_pos: 61.565, beats: "100000"},
    {song_pos: 61.688, beats: "001000"},
    {song_pos: 61.875, beats: "000001"},
    {song_pos: 62.063, beats: "000001"},
    {song_pos: 62.438, beats: "010000"},
    {song_pos: 62.625, beats: "000100"},
    {song_pos: 63.0, beats: "000100"},
    {song_pos: 63.065, beats: "100000"},
    {song_pos: 63.375, beats: "000001"},
    {song_pos: 63.563, beats: "000001"},
    {song_pos: 63.75, beats: "000001"},
    {song_pos: 63.815, beats: "100000"},
    {song_pos: 64.0, beats: "100000"},
    {song_pos: 64.125, beats: "000100"},
    {song_pos: 64.25, beats: "001000"},
    {song_pos: 64.313, beats: "000001"},
    {song_pos: 64.5, beats: "001000"},
    {song_pos: 64.565, beats: "100000"},
    {song_pos: 64.688, beats: "000100"},
    {song_pos: 64.875, beats: "000100"},
    {song_pos: 65.0, beats: "001000"},
    {song_pos: 65.063, beats: "000001"},
    {song_pos: 65.438, beats: "000001"},
    {song_pos: 65.5, beats: "001000"},
    {song_pos: 65.625, beats: "000001"},
    {song_pos: 66.0, beats: "001000"},
    {song_pos: 66.065, beats: "000100"},
    {song_pos: 66.375, beats: "001000"},
    {song_pos: 66.75, beats: "010000"},
    {song_pos: 67.125, beats: "000001"},
    {song_pos: 67.5, beats: "000001"},
    {song_pos: 67.565, beats: "100000"},
    {song_pos: 67.688, beats: "001000"},
    {song_pos: 67.875, beats: "000001"},
    {song_pos: 68.063, beats: "100000"},
    {song_pos: 68.25, beats: "000001"},
    {song_pos: 68.438, beats: "000100"},
    {song_pos: 68.5, beats: "010000"},
    {song_pos: 68.625, beats: "000100"},
    {song_pos: 68.75, beats: "000010"},
    {song_pos: 69.0, beats: "000100"},
    {song_pos: 69.065, beats: "001000"},
    {song_pos: 69.375, beats: "010000"},
    {song_pos: 69.563, beats: "000100"},
    {song_pos: 69.75, beats: "001000"},
    {song_pos: 69.815, beats: "010000"},
    {song_pos: 70.0, beats: "000001"},
    {song_pos: 70.125, beats: "000001"},
    {song_pos: 70.25, beats: "010000"},
    {song_pos: 70.313, beats: "000001"},
    {song_pos: 70.5, beats: "000100"},
    {song_pos: 70.565, beats: "010000"},
    {song_pos: 70.688, beats: "000100"},
    {song_pos: 70.875, beats: "000100"},
    {song_pos: 71.0, beats: "000001"},
    {song_pos: 71.5, beats: "000100"},
    {song_pos: 71.625, beats: "000100"},
    {song_pos: 72.0, beats: "000100"},
    {song_pos: 72.375, beats: "000100"},
    {song_pos: 72.563, beats: "010000"},
    {song_pos: 72.75, beats: "000010"},
    {song_pos: 73.125, beats: "000001"},
    {song_pos: 73.5, beats: "010000"},
    {song_pos: 74.063, beats: "000100"},
    {song_pos: 74.25, beats: "100000"},
    {song_pos: 74.438, beats: "001000"},
    {song_pos: 74.625, beats: "010000"},
    {song_pos: 74.813, beats: "000001"},
    {song_pos: 75.0, beats: "000100"},
    {song_pos: 75.563, beats: "001000"},
    {song_pos: 75.938, beats: "100000"},
    {song_pos: 76.125, beats: "001000"},
    {song_pos: 76.313, beats: "000100"},
    {song_pos: 76.5, beats: "010000"},
    {song_pos: 76.688, beats: "000001"},
    {song_pos: 76.875, beats: "100000"},
    {song_pos: 77.063, beats: "010000"},
    {song_pos: 77.25, beats: "000100"},
    {song_pos: 77.438, beats: "000001"},
    {song_pos: 77.625, beats: "000001"},
    {song_pos: 77.813, beats: "000001"},
    {song_pos: 78.0, beats: "100000"},
    {song_pos: 78.563, beats: "100000"},
    {song_pos: 78.938, beats: "000010"},
    {song_pos: 79.125, beats: "000010"},
    {song_pos: 79.313, beats: "000001"},
    {song_pos: 79.5, beats: "100000"},
    {song_pos: 79.875, beats: "000001"},
    {song_pos: 80.063, beats: "010000"},
    {song_pos: 80.25, beats: "100000"},
    {song_pos: 80.438, beats: "000100"},
    {song_pos: 80.625, beats: "000001"},
    {song_pos: 80.813, beats: "000001"},
    {song_pos: 81.0, beats: "010000"},
    {song_pos: 81.563, beats: "000001"},
    {song_pos: 82.125, beats: "010000"},
    {song_pos: 82.5, beats: "000010"},
    {song_pos: 82.688, beats: "000001"},
    {song_pos: 83.063, beats: "100000"},
    {song_pos: 83.625, beats: "000001"},
    {song_pos: 83.813, beats: "010000"},
    {song_pos: 84.0, beats: "010000"},
    {song_pos: 84.25, beats: "000010"},
    {song_pos: 84.5, beats: "000010"},
    {song_pos: 84.563, beats: "100000"},
    {song_pos: 84.75, beats: "000010"},
    {song_pos: 85.0, beats: "100000"},
    {song_pos: 85.125, beats: "001000"},
    {song_pos: 85.25, beats: "001000"},
    {song_pos: 85.5, beats: "010000"},
    {song_pos: 85.75, beats: "000001"},
    {song_pos: 86.0, beats: "000001"},
    {song_pos: 86.063, beats: "001000"},
    {song_pos: 86.25, beats: "000010"},
    {song_pos: 86.625, beats: "010000"},
    {song_pos: 87.0, beats: "000010"},
    {song_pos: 87.563, beats: "001000"},
    {song_pos: 87.75, beats: "001000"},
    {song_pos: 87.938, beats: "000100"},
    {song_pos: 88.125, beats: "100000"},
    {song_pos: 88.313, beats: "001000"},
    {song_pos: 88.5, beats: "001000"},
    {song_pos: 88.688, beats: "000001"},
    {song_pos: 89.063, beats: "001000"},
    {song_pos: 89.625, beats: "000010"},
    {song_pos: 89.813, beats: "000010"},
    {song_pos: 90.0, beats: "100000"},
    {song_pos: 90.25, beats: "001000"},
    {song_pos: 90.5, beats: "000100"},
    {song_pos: 90.563, beats: "000010"},
    {song_pos: 90.75, beats: "001000"},
    {song_pos: 91.0, beats: "001000"},
    {song_pos: 91.125, beats: "000001"},
    {song_pos: 91.25, beats: "000100"},
    {song_pos: 91.5, beats: "000001"},
    {song_pos: 91.75, beats: "000100"},
    {song_pos: 92.0, beats: "010000"},
    {song_pos: 92.063, beats: "000010"},
    {song_pos: 92.25, beats: "000010"},
    {song_pos: 92.625, beats: "010000"},
    {song_pos: 93.0, beats: "000001"},
    {song_pos: 93.188, beats: "100000"},
    {song_pos: 93.375, beats: "000100"},
    {song_pos: 93.563, beats: "000100"},
    {song_pos: 93.75, beats: "010000"},
    {song_pos: 93.938, beats: "001000"},
    {song_pos: 94.125, beats: "001000"},
    {song_pos: 94.313, beats: "100000"},
    {song_pos: 94.5, beats: "000100"},
    {song_pos: 94.688, beats: "000001"},
    {song_pos: 95.063, beats: "010000"},
    {song_pos: 95.25, beats: "100000"},
    {song_pos: 95.5, beats: "001000"},
    {song_pos: 95.625, beats: "010000"},
    {song_pos: 95.75, beats: "000001"},
    {song_pos: 96.0, beats: "000001"},
    {song_pos: 96.375, beats: "000010"},
    {song_pos: 96.563, beats: "000001"},
    {song_pos: 96.75, beats: "000001"},
    {song_pos: 97.0, beats: "000010"},
    {song_pos: 97.125, beats: "000010"},
    {song_pos: 97.25, beats: "010000"},
    {song_pos: 97.5, beats: "000001"},
    {song_pos: 97.875, beats: "000100"},
    {song_pos: 98.063, beats: "000001"},
    {song_pos: 98.25, beats: "100000"},
    {song_pos: 98.5, beats: "000001"},
    {song_pos: 98.625, beats: "001000"},
    {song_pos: 98.75, beats: "000001"},
    {song_pos: 99.0, beats: "100000"},
    {song_pos: 99.375, beats: "000001"},
    {song_pos: 99.563, beats: "001000"},
    {song_pos: 99.75, beats: "000100"},
    {song_pos: 100.0, beats: "100000"},
    {song_pos: 100.125, beats: "000100"},
    {song_pos: 100.25, beats: "010000"},
    {song_pos: 100.5, beats: "010000"},
    {song_pos: 100.688, beats: "000001"},
    {song_pos: 100.875, beats: "100000"},
    {song_pos: 101.063, beats: "100000"},
    {song_pos: 101.25, beats: "000100"},
    {song_pos: 101.625, beats: "000100"},
    {song_pos: 102.0, beats: "100000"},
    {song_pos: 102.25, beats: "000001"},
    {song_pos: 102.375, beats: "000010"},
    {song_pos: 102.5, beats: "100000"},
    {song_pos: 102.75, beats: "000001"},
    {song_pos: 103.0, beats: "010000"},
    {song_pos: 103.125, beats: "010000"},
    {song_pos: 103.25, beats: "001000"},
    {song_pos: 103.5, beats: "000010"},
    {song_pos: 103.75, beats: "010000"},
    {song_pos: 103.875, beats: "010000"},
    {song_pos: 104.0, beats: "100000"},
    {song_pos: 104.25, beats: "001000"},
    {song_pos: 104.625, beats: "000100"},
    {song_pos: 105.0, beats: "000001"},
    {song_pos: 105.188, beats: "100000"},
    {song_pos: 105.375, beats: "001000"},
    {song_pos: 105.563, beats: "000001"},
    {song_pos: 105.75, beats: "000100"},
    {song_pos: 105.938, beats: "000010"},
    {song_pos: 106.0, beats: "000010"},
    {song_pos: 106.125, beats: "000100"},
    {song_pos: 106.25, beats: "001000"},
    {song_pos: 106.313, beats: "000010"},
    {song_pos: 106.5, beats: "000001"},
    {song_pos: 106.688, beats: "000100"},
    {song_pos: 107.25, beats: "001000"},
    {song_pos: 107.5, beats: "010000"},
    {song_pos: 107.625, beats: "010000"},
    {song_pos: 107.75, beats: "010000"},
    {song_pos: 108.0, beats: "010000"},
    {song_pos: 108.065, beats: "001000"},
    {song_pos: 108.375, beats: "000010"},
    {song_pos: 108.75, beats: "100000"},
    {song_pos: 109.125, beats: "000001"},
    {song_pos: 109.5, beats: "010000"},
    {song_pos: 109.565, beats: "010000"},
    {song_pos: 109.688, beats: "000010"},
    {song_pos: 109.875, beats: "100000"},
    {song_pos: 110.063, beats: "010000"},
    {song_pos: 110.438, beats: "000100"},
    {song_pos: 110.625, beats: "001000"},
    {song_pos: 111.0, beats: "000010"},
    {song_pos: 111.065, beats: "001000"},
    {song_pos: 111.375, beats: "001000"},
    {song_pos: 111.563, beats: "000001"},
    {song_pos: 111.75, beats: "010000"},
    {song_pos: 111.815, beats: "100000"},
    {song_pos: 112.0, beats: "001000"},
    {song_pos: 112.125, beats: "010000"},
    {song_pos: 112.25, beats: "100000"},
    {song_pos: 112.313, beats: "010000"},
    {song_pos: 112.5, beats: "000001"},
    {song_pos: 112.565, beats: "000010"},
    {song_pos: 112.688, beats: "000001"},
    {song_pos: 112.875, beats: "000100"},
    {song_pos: 113.0, beats: "100000"},
    {song_pos: 113.063, beats: "000100"},
    {song_pos: 113.438, beats: "000100"},
    {song_pos: 113.5, beats: "001000"},
    {song_pos: 113.625, beats: "000001"},
    {song_pos: 114.0, beats: "000100"},
    {song_pos: 114.065, beats: "001000"},
    {song_pos: 114.375, beats: "001000"},
    {song_pos: 114.75, beats: "000010"},
    {song_pos: 115.125, beats: "000001"},
    {song_pos: 115.5, beats: "000100"},
    {song_pos: 115.565, beats: "000010"},
    {song_pos: 115.688, beats: "001000"},
    {song_pos: 115.875, beats: "001000"},
    {song_pos: 116.063, beats: "000100"},
    {song_pos: 116.25, beats: "001000"},
    {song_pos: 116.438, beats: "010000"},
    {song_pos: 116.5, beats: "001000"},
    {song_pos: 116.625, beats: "001000"},
    {song_pos: 116.75, beats: "100000"},
    {song_pos: 117.0, beats: "000010"},
    {song_pos: 117.065, beats: "100000"},
    {song_pos: 117.375, beats: "000001"},
    {song_pos: 117.563, beats: "000001"},
    {song_pos: 117.75, beats: "000010"},
    {song_pos: 117.815, beats: "100000"},
    {song_pos: 118.0, beats: "100000"},
    {song_pos: 118.125, beats: "100000"},
    {song_pos: 118.25, beats: "010000"},
    {song_pos: 118.313, beats: "000100"},
    {song_pos: 118.5, beats: "000010"},
    {song_pos: 118.565, beats: "100000"},
    {song_pos: 118.688, beats: "100000"},
    {song_pos: 118.875, beats: "000001"},
    {song_pos: 119.0, beats: "010000"},
    {song_pos: 119.5, beats: "000001"},
    {song_pos: 119.625, beats: "000010"},
    {song_pos: 120.0, beats: "010000"},
    {song_pos: 120.375, beats: "100000"},
    {song_pos: 120.75, beats: "000100"},
    {song_pos: 121.125, beats: "000100"},
    {song_pos: 121.5, beats: "010000"},
    {song_pos: 121.688, beats: "100000"},
    {song_pos: 121.875, beats: "100000"},
    {song_pos: 122.063, beats: "001000"},
    {song_pos: 122.25, beats: "000100"},
    {song_pos: 122.438, beats: "000001"},
    {song_pos: 122.625, beats: "000001"},
    {song_pos: 122.813, beats: "000100"},
    {song_pos: 123.0, beats: "010000"},
    {song_pos: 123.188, beats: "100000"},
    {song_pos: 123.375, beats: "000010"},
    {song_pos: 123.563, beats: "000100"},
    {song_pos: 123.75, beats: "100000"},
    {song_pos: 123.938, beats: "000001"},
    {song_pos: 124.125, beats: "000100"},
    {song_pos: 124.313, beats: "010000"},
    {song_pos: 124.5, beats: "001000"},
    {song_pos: 124.688, beats: "000010"},
    {song_pos: 124.875, beats: "000010"},
    {song_pos: 125.063, beats: "010000"},
    {song_pos: 125.25, beats: "000100"},
    {song_pos: 125.438, beats: "000010"},
    {song_pos: 125.625, beats: "100000"},
    {song_pos: 126.0, beats: "000001"},
    {song_pos: 126.375, beats: "100000"},
    {song_pos: 126.75, beats: "000001"},
    {song_pos: 127.125, beats: "000010"},
    {song_pos: 127.313, beats: "000001"},
    {song_pos: 127.5, beats: "001000"},
    {song_pos: 127.688, beats: "000001"},
    {song_pos: 127.875, beats: "000001"},
    {song_pos: 128.063, beats: "100000"},
    {song_pos: 128.25, beats: "100000"},
    {song_pos: 128.438, beats: "000001"},
    {song_pos: 128.625, beats: "001000"},
    {song_pos: 128.813, beats: "000100"},
    {song_pos: 129.0, beats: "000001"},
    {song_pos: 129.188, beats: "001000"},
    {song_pos: 129.375, beats: "000001"},
    {song_pos: 129.563, beats: "000100"},
    {song_pos: 129.75, beats: "010000"},
    {song_pos: 129.938, beats: "100000"},
    {song_pos: 130.125, beats: "100000"},
    {song_pos: 130.313, beats: "000001"},
    {song_pos: 130.5, beats: "000001"},
    {song_pos: 130.688, beats: "000100"},
    {song_pos: 130.875, beats: "000010"},
    {song_pos: 131.063, beats: "100000"},
    {song_pos: 131.25, beats: "001000"},
    {song_pos: 131.438, beats: "001000"},
    {song_pos: 131.625, beats: "010000"},
    {song_pos: 131.813, beats: "000010"},
    {song_pos: 132.0, beats: "001000"},
    {song_pos: 132.25, beats: "100000"},
    {song_pos: 132.5, beats: "000001"},
    {song_pos: 132.75, beats: "000010"},
    {song_pos: 133.0, beats: "000100"},
    {song_pos: 133.25, beats: "000100"},
    {song_pos: 133.5, beats: "001000"},
    {song_pos: 133.75, beats: "001000"},
    {song_pos: 134.0, beats: "001000"},
    {song_pos: 134.438, beats: "000001"},
    {song_pos: 135.0, beats: "100000"},
    {song_pos: 135.563, beats: "000001"},
    {song_pos: 135.75, beats: "000100"},
    {song_pos: 135.938, beats: "000001"},
    {song_pos: 136.125, beats: "001000"},
    {song_pos: 136.313, beats: "000100"},
    {song_pos: 136.5, beats: "100000"},
    {song_pos: 136.688, beats: "000001"},
    {song_pos: 137.063, beats: "010000"},
    {song_pos: 137.25, beats: "100000"},
    {song_pos: 137.438, beats: "100000"},
    {song_pos: 137.813, beats: "000100"},
    {song_pos: 138.0, beats: "000100"},
    {song_pos: 138.25, beats: "000100"},
    {song_pos: 138.5, beats: "000001"},
    {song_pos: 138.75, beats: "001000"},
    {song_pos: 139.0, beats: "010000"},
    {song_pos: 139.25, beats: "010000"},
    {song_pos: 139.5, beats: "010000"},
    {song_pos: 139.75, beats: "000010"},
    {song_pos: 140.0, beats: "000010"},
    {song_pos: 140.25, beats: "010000"},
    {song_pos: 141.0, beats: "001000"},
    {song_pos: 141.188, beats: "010000"},
    {song_pos: 141.375, beats: "001000"},
    {song_pos: 141.563, beats: "000100"},
    {song_pos: 141.75, beats: "100000"},
    {song_pos: 141.938, beats: "000010"},
    {song_pos: 142.125, beats: "000100"},
    {song_pos: 142.313, beats: "000010"},
    {song_pos: 142.5, beats: "001000"},
    {song_pos: 142.688, beats: "000001"},
    {song_pos: 143.25, beats: "000010"},
    {song_pos: 143.5, beats: "000010"},
    {song_pos: 143.75, beats: "000100"},
    {song_pos: 144.0, beats: "010000"},
    {song_pos: 144.375, beats: "100000"},
    {song_pos: 144.75, beats: "010000"},
    {song_pos: 145.0, beats: "000010"},
    {song_pos: 145.125, beats: "000001"},
    {song_pos: 145.25, beats: "010000"},
    {song_pos: 145.5, beats: "000001"},
    {song_pos: 145.875, beats: "000001"},
    {song_pos: 146.25, beats: "010000"},
    {song_pos: 146.5, beats: "010000"},
    {song_pos: 146.625, beats: "001000"},
    {song_pos: 146.75, beats: "010000"},
    {song_pos: 147.0, beats: "000001"},
    {song_pos: 147.375, beats: "000010"},
    {song_pos: 147.563, beats: "000010"},
    {song_pos: 147.75, beats: "010000"},
    {song_pos: 148.0, beats: "100000"},
    {song_pos: 148.125, beats: "001000"},
    {song_pos: 148.25, beats: "100000"},
    {song_pos: 148.5, beats: "000100"},
    {song_pos: 148.688, beats: "100000"},
    {song_pos: 148.875, beats: "100000"},
    {song_pos: 149.25, beats: "010000"},
    {song_pos: 149.625, beats: "001000"},
    {song_pos: 150.0, beats: "000100"},
    {song_pos: 150.25, beats: "100000"},
    {song_pos: 150.375, beats: "100000"},
    {song_pos: 150.5, beats: "000010"},
    {song_pos: 150.75, beats: "010000"},
    {song_pos: 151.0, beats: "010000"},
    {song_pos: 151.125, beats: "001000"},
    {song_pos: 151.25, beats: "100000"},
    {song_pos: 151.5, beats: "010000"},
    {song_pos: 151.75, beats: "000100"},
    {song_pos: 151.875, beats: "000100"},
    {song_pos: 152.0, beats: "001000"},
    {song_pos: 152.25, beats: "001000"},
    {song_pos: 152.625, beats: "100000"},
    {song_pos: 153.0, beats: "000100"},
    {song_pos: 153.188, beats: "001000"},
    {song_pos: 153.375, beats: "001000"},
    {song_pos: 153.563, beats: "000010"},
    {song_pos: 153.75, beats: "000010"},
    {song_pos: 153.938, beats: "000001"},
    {song_pos: 154.0, beats: "001000"},
    {song_pos: 154.125, beats: "000100"},
    {song_pos: 154.25, beats: "000010"},
    {song_pos: 154.313, beats: "001000"},
    {song_pos: 154.5, beats: "010000"},
    {song_pos: 154.688, beats: "000100"},
    {song_pos: 154.875, beats: "000010"},
    {song_pos: 155.063, beats: "010000"},
    {song_pos: 155.25, beats: "100000"},
    {song_pos: 155.438, beats: "000001"},
    {song_pos: 155.625, beats: "000100"},
    {song_pos: 156.0, beats: "010000"},
    {song_pos: 157.125, beats: "000010"},
    {song_pos: 157.5, beats: "000100"},
    {song_pos: 157.688, beats: "000100"},
    {song_pos: 157.875, beats: "000100"},
    {song_pos: 158.063, beats: "000100"},
    {song_pos: 158.25, beats: "000010"},
    {song_pos: 158.438, beats: "000010"},
    {song_pos: 158.625, beats: "000001"},
    {song_pos: 158.906, beats: "010000"},
    {song_pos: 159.0, beats: "000010"},
    {song_pos: 159.188, beats: "010000"},
    {song_pos: 159.375, beats: "000010"},
    {song_pos: 159.563, beats: "000010"},
    {song_pos: 159.75, beats: "000100"},
    {song_pos: 159.938, beats: "100000"},
    {song_pos: 160.0, beats: "000001"},
    {song_pos: 160.125, beats: "000100"},
    {song_pos: 160.25, beats: "010000"},
    {song_pos: 160.5, beats: "000010"},
    {song_pos: 160.688, beats: "000100"},
    {song_pos: 160.875, beats: "000100"},
    {song_pos: 161.063, beats: "100000"},
    {song_pos: 161.25, beats: "000001"},
    {song_pos: 161.438, beats: "001000"},
    {song_pos: 161.625, beats: "000100"},
    {song_pos: 161.813, beats: "001000"},
    {song_pos: 162.0, beats: "000010"},
    {song_pos: 163.125, beats: "001000"},
    {song_pos: 163.5, beats: "000001"},
    {song_pos: 163.688, beats: "000010"},
    {song_pos: 163.875, beats: "000001"},
    {song_pos: 164.063, beats: "000001"},
    {song_pos: 164.25, beats: "000001"},
    {song_pos: 164.438, beats: "000001"},
    {song_pos: 164.625, beats: "001000"},
    {song_pos: 164.906, beats: "001000"},
    {song_pos: 165.0, beats: "100000"},
    {song_pos: 165.188, beats: "010000"},
    {song_pos: 165.375, beats: "010000"},
    {song_pos: 165.563, beats: "100000"},
    {song_pos: 165.75, beats: "000010"},
    {song_pos: 165.938, beats: "000100"},
    {song_pos: 166.0, beats: "000001"},
    {song_pos: 166.125, beats: "001000"},
    {song_pos: 166.25, beats: "000100"},
    {song_pos: 166.5, beats: "001000"},
    {song_pos: 166.688, beats: "000001"},
    {song_pos: 166.875, beats: "000100"},
    {song_pos: 167.063, beats: "000010"},
    {song_pos: 167.25, beats: "000100"},
    {song_pos: 167.438, beats: "010000"},
    {song_pos: 167.625, beats: "100000"},
    {song_pos: 167.813, beats: "001000"},
    {song_pos: 168.0, beats: "100000"},
    {song_pos: 169.125, beats: "001000"},
    {song_pos: 169.5, beats: "010000"},
    {song_pos: 169.688, beats: "000100"},
    {song_pos: 169.875, beats: "000001"},
    {song_pos: 170.063, beats: "000100"},
    {song_pos: 170.25, beats: "000001"},
    {song_pos: 170.438, beats: "000100"},
    {song_pos: 171.0, beats: "001000"},
    {song_pos: 171.188, beats: "000010"},
    {song_pos: 171.375, beats: "000010"},
    {song_pos: 171.563, beats: "010000"},
    {song_pos: 171.75, beats: "001000"},
    {song_pos: 171.938, beats: "000100"},
    {song_pos: 172.0, beats: "000100"},
    {song_pos: 172.125, beats: "000010"},
    {song_pos: 172.25, beats: "000100"},
    {song_pos: 172.5, beats: "000001"},
    {song_pos: 172.688, beats: "001000"},
    {song_pos: 172.875, beats: "000010"},
    {song_pos: 173.063, beats: "000100"},
    {song_pos: 173.25, beats: "010000"},
    {song_pos: 173.438, beats: "000010"},
    {song_pos: 173.813, beats: "000100"},
    {song_pos: 174.0, beats: "000100"},
    {song_pos: 174.188, beats: "001000"},
    {song_pos: 175.125, beats: "000010"},
    {song_pos: 175.5, beats: "000001"},
    {song_pos: 175.688, beats: "000010"},
    {song_pos: 175.875, beats: "100000"},
    {song_pos: 176.063, beats: "000100"},
    {song_pos: 176.25, beats: "000100"},
    {song_pos: 176.438, beats: "100000"},
    {song_pos: 176.5, beats: "100000"},
    {song_pos: 176.75, beats: "010000"},
    {song_pos: 177.0, beats: "100000"},
    {song_pos: 177.188, beats: "010000"},
    {song_pos: 177.375, beats: "010000"},
    {song_pos: 177.563, beats: "001000"},
    {song_pos: 177.75, beats: "000010"},
    {song_pos: 177.938, beats: "100000"},
    {song_pos: 178.0, beats: "001000"},
    {song_pos: 178.125, beats: "010000"},
    {song_pos: 178.25, beats: "000001"},
    {song_pos: 178.5, beats: "001000"},
    {song_pos: 178.688, beats: "001000"},
    {song_pos: 178.875, beats: "010000"},
    {song_pos: 179.063, beats: "000010"},
    {song_pos: 179.25, beats: "001000"},
    {song_pos: 179.438, beats: "000100"},
    {song_pos: 179.5, beats: "010000"},
    {song_pos: 179.75, beats: "001000"},
    {song_pos: 179.813, beats: "000100"},
    {song_pos: 180.0, beats: "000010"},
    {song_pos: 180.563, beats: "000100"},
    {song_pos: 180.75, beats: "010000"},
    {song_pos: 181.125, beats: "001000"},
    {song_pos: 181.5, beats: "001000"},
    {song_pos: 181.688, beats: "100000"},
    {song_pos: 181.875, beats: "000001"},
    {song_pos: 182.063, beats: "000100"},
    {song_pos: 182.25, beats: "000001"},
    {song_pos: 182.438, beats: "100000"},
    {song_pos: 182.625, beats: "000010"},
    {song_pos: 183.0, beats: "100000"},
    {song_pos: 183.188, beats: "001000"},
    {song_pos: 183.375, beats: "000001"},
    {song_pos: 183.563, beats: "000010"},
    {song_pos: 183.75, beats: "010000"},
    {song_pos: 183.938, beats: "001000"},
    {song_pos: 184.0, beats: "000100"},
    {song_pos: 184.125, beats: "000010"},
    {song_pos: 184.25, beats: "000010"},
    {song_pos: 184.5, beats: "010000"},
    {song_pos: 184.688, beats: "000010"},
    {song_pos: 184.875, beats: "000100"},
    {song_pos: 185.063, beats: "100000"},
    {song_pos: 185.25, beats: "000001"},
    {song_pos: 185.438, beats: "010000"},
    {song_pos: 185.625, beats: "000010"},
    {song_pos: 185.813, beats: "000010"},
    {song_pos: 186.0, beats: "000001"},
    {song_pos: 186.375, beats: "000001"},
    {song_pos: 186.563, beats: "010000"},
    {song_pos: 187.125, beats: "100000"},
    {song_pos: 187.5, beats: "010000"},
    {song_pos: 187.688, beats: "000010"},
    {song_pos: 187.875, beats: "100000"},
    {song_pos: 188.063, beats: "000001"},
    {song_pos: 188.25, beats: "000100"},
    {song_pos: 188.438, beats: "000001"},
    {song_pos: 188.625, beats: "010000"},
    {song_pos: 189.0, beats: "001000"},
    {song_pos: 189.188, beats: "010000"},
    {song_pos: 189.375, beats: "100000"},
    {song_pos: 189.563, beats: "010000"},
    {song_pos: 189.75, beats: "001000"},
    {song_pos: 189.938, beats: "100000"},
    {song_pos: 190.125, beats: "000010"},
    {song_pos: 190.5, beats: "000100"},
    {song_pos: 191.063, beats: "010000"},
    {song_pos: 191.625, beats: "001000"},
    ]
})
