app.beatmaps["stay_the_night_map"] = new ENGINE.Beatmap({
    bpm: 126,  // Beats per minute
    crotchet: 60 / this.bpm,  // Time duration of a beat, calculated from the bpm
    songStart: 5.87,  // Song delay until start of notes
    barSprite: "medium",  // Bar-style
    bg: "Skylake",  // Background image
    mp3Name: "Stay the Night",
    songTitle: "STAY THE NIGHT",
    artistName: "Zedd ft. Hayley Williams",
    titleOffset: app.width * 0.12,
    artistOffset: app.width * 0.125,
    speedMultiplier: 214.213 / 217.6,
    difficulty: 2,
    noteSprites: ["outlined-royal-blue", 
                  "outlined-light-teal", 
                  "outlined-teal", 
                  "outlined-purple", 
                  "outlined-green", 
                  "outlined-royal-blue"],
    maxNotes: 14,
    noteSpeed: app.height / 4,
    notes: [  // Array of notes

    {song_pos: 0.019, beats: "001000"},
    {song_pos: 0.241, beats: "100000"},
    {song_pos: 0.712, beats: "000010"},
    {song_pos: 0.94, beats: "000010"},
    {song_pos: 1.45, beats: "100000"},
    {song_pos: 1.684, beats: "000001"},
    {song_pos: 2.175, beats: "000001"},
    {song_pos: 2.385, beats: "000010"},
    {song_pos: 3.812, beats: "100000"},
    {song_pos: 4.049, beats: "100000"},
    {song_pos: 4.54, beats: "001000"},
    {song_pos: 4.784, beats: "001000"},
    {song_pos: 5.262, beats: "000100"},
    {song_pos: 5.494, beats: "000100"},
    {song_pos: 5.98, beats: "000010"},
    {song_pos: 6.212, beats: "001000"},
    {song_pos: 7.65, beats: "000010"},
    {song_pos: 7.863, beats: "010000"},
    {song_pos: 8.345, beats: "000010"},
    {song_pos: 8.587, beats: "100000"},
    {song_pos: 9.057, beats: "100000"},
    {song_pos: 9.298, beats: "000001"},
    {song_pos: 9.791, beats: "000001"},
    {song_pos: 10.01, beats: "010000"},
    {song_pos: 10.464, beats: "100000"},
    {song_pos: 10.94, beats: "000010"},
    {song_pos: 11.429, beats: "000010"},
    {song_pos: 12.164, beats: "000010"},
    {song_pos: 12.902, beats: "010000"},
    {song_pos: 13.585, beats: "001000"},
    {song_pos: 14.304, beats: "010000"},
    {song_pos: 15.224, beats: "000100"},
    {song_pos: 15.487, beats: "100000"},
    {song_pos: 15.964, beats: "010000"},
    {song_pos: 16.203, beats: "010000"},
    {song_pos: 16.648, beats: "100000"},
    {song_pos: 16.921, beats: "001000"},
    {song_pos: 17.407, beats: "010000"},
    {song_pos: 17.626, beats: "010000"},
    {song_pos: 19.052, beats: "100000"},
    {song_pos: 19.303, beats: "000010"},
    {song_pos: 19.785, beats: "001000"},
    {song_pos: 20.008, beats: "010000"},
    {song_pos: 20.489, beats: "000001"},
    {song_pos: 20.715, beats: "000001"},
    {song_pos: 21.43, beats: "000001"},
    {song_pos: 21.658, beats: "010000"},
    {song_pos: 22.867, beats: "001000"},
    {song_pos: 23.114, beats: "000100"},
    {song_pos: 23.59, beats: "001000"},
    {song_pos: 23.836, beats: "001000"},
    {song_pos: 24.278, beats: "000100"},
    {song_pos: 24.519, beats: "001000"},
    {song_pos: 24.99, beats: "100000"},
    {song_pos: 25.229, beats: "000100"},
    {song_pos: 25.729, beats: "000100"},
    {song_pos: 26.189, beats: "000100"},
    {song_pos: 26.666, beats: "000010"},
    {song_pos: 27.404, beats: "000010"},
    {song_pos: 28.106, beats: "010000"},
    {song_pos: 28.843, beats: "000100"},
    {song_pos: 29.533, beats: "000001"},
    {song_pos: 30.479, beats: "000010"},
    {song_pos: 30.937, beats: "100000"},
    {song_pos: 31.179, beats: "000100"},
    {song_pos: 31.651, beats: "010000"},
    {song_pos: 32.158, beats: "001000"},
    {song_pos: 32.833, beats: "000100"},
    {song_pos: 33.088, beats: "000010"},
    {song_pos: 34.279, beats: "100000"},
    {song_pos: 34.776, beats: "100000"},
    {song_pos: 35.004, beats: "100000"},
    {song_pos: 35.497, beats: "100000"},
    {song_pos: 35.963, beats: "001000"},
    {song_pos: 36.648, beats: "010000"},
    {song_pos: 36.893, beats: "000100"},
    {song_pos: 38.107, beats: "000100"},
    {song_pos: 38.331, beats: "001000"},
    {song_pos: 38.838, beats: "100000"},
    {song_pos: 39.069, beats: "000001"},
    {song_pos: 39.522, beats: "001000"},
    {song_pos: 39.768, beats: "000010"},
    {song_pos: 40.236, beats: "000100"},
    {song_pos: 40.485, beats: "000010"},
    {song_pos: 40.952, beats: "000010"},
    {song_pos: 41.452, beats: "000001"},
    {song_pos: 41.905, beats: "010000"},
    {song_pos: 42.625, beats: "010000"},
    {song_pos: 43.341, beats: "001000"},
    {song_pos: 43.604, beats: "000010"},
    {song_pos: 45.714, beats: "100000"},
    {song_pos: 46.173, beats: "000001"},
    {song_pos: 46.414, beats: "000010"},
    {song_pos: 46.887, beats: "000100"},
    {song_pos: 47.393, beats: "100000"},
    {song_pos: 48.069, beats: "000010"},
    {song_pos: 48.324, beats: "100000"},
    {song_pos: 49.514, beats: "000100"},
    {song_pos: 50.011, beats: "000010"},
    {song_pos: 50.24, beats: "000001"},
    {song_pos: 50.733, beats: "000001"},
    {song_pos: 51.198, beats: "010000"},
    {song_pos: 51.884, beats: "100000"},
    {song_pos: 52.128, beats: "100000"},
    {song_pos: 53.343, beats: "000010"},
    {song_pos: 53.567, beats: "010000"},
    {song_pos: 54.073, beats: "000010"},
    {song_pos: 54.305, beats: "100000"},
    {song_pos: 54.757, beats: "000100"},
    {song_pos: 55.004, beats: "000001"},
    {song_pos: 55.472, beats: "010000"},
    {song_pos: 55.72, beats: "100000"},
    {song_pos: 56.188, beats: "001000"},
    {song_pos: 56.688, beats: "010000"},
    {song_pos: 57.14, beats: "001000"},
    {song_pos: 57.861, beats: "010000"},
    {song_pos: 58.576, beats: "100000"},
    {song_pos: 58.839, beats: "000100"},
    {song_pos: 59.31, beats: "000001"},
    {song_pos: 59.752, beats: "010000"},
    {song_pos: 59.989, beats: "000001"},
    {song_pos: 60.955, beats: "000100"},
    {song_pos: 61.192, beats: "001000"},
    {song_pos: 61.419, beats: "001000"},
    {song_pos: 61.664, beats: "000001"},
    {song_pos: 61.892, beats: "010000"},
    {song_pos: 62.136, beats: "000100"},
    {song_pos: 62.379, beats: "010000"},
    {song_pos: 62.609, beats: "000010"},
    {song_pos: 62.862, beats: "000100"},
    {song_pos: 63.102, beats: "000010"},
    {song_pos: 63.346, beats: "000001"},
    {song_pos: 63.599, beats: "000010"},
    {song_pos: 63.844, beats: "000100"},
    {song_pos: 64.065, beats: "001000"},
    {song_pos: 64.285, beats: "000010"},
    {song_pos: 64.524, beats: "000001"},
    {song_pos: 64.737, beats: "100000"},
    {song_pos: 64.97, beats: "000010"},
    {song_pos: 65.203, beats: "000010"},
    {song_pos: 65.47, beats: "000001"},
    {song_pos: 65.691, beats: "100000"},
    {song_pos: 65.948, beats: "000010"},
    {song_pos: 66.17, beats: "001000"},
    {song_pos: 66.422, beats: "000010"},
    {song_pos: 66.666, beats: "001000"},
    {song_pos: 66.888, beats: "001000"},
    {song_pos: 67.136, beats: "100000"},
    {song_pos: 67.363, beats: "010000"},
    {song_pos: 67.599, beats: "000001"},
    {song_pos: 67.859, beats: "010000"},
    {song_pos: 68.079, beats: "000001"},
    {song_pos: 68.323, beats: "000001"},
    {song_pos: 68.561, beats: "000001"},
    {song_pos: 68.815, beats: "100000"},
    {song_pos: 69.039, beats: "001000"},
    {song_pos: 69.291, beats: "100000"},
    {song_pos: 69.517, beats: "010000"},
    {song_pos: 69.784, beats: "000001"},
    {song_pos: 70.012, beats: "000010"},
    {song_pos: 70.235, beats: "001000"},
    {song_pos: 70.494, beats: "000010"},
    {song_pos: 70.717, beats: "100000"},
    {song_pos: 70.958, beats: "010000"},
    {song_pos: 71.195, beats: "001000"},
    {song_pos: 71.44, beats: "000100"},
    {song_pos: 71.686, beats: "010000"},
    {song_pos: 71.922, beats: "010000"},
    {song_pos: 72.144, beats: "000001"},
    {song_pos: 72.362, beats: "100000"},
    {song_pos: 72.616, beats: "000100"},
    {song_pos: 72.861, beats: "001000"},
    {song_pos: 73.129, beats: "100000"},
    {song_pos: 73.362, beats: "001000"},
    {song_pos: 73.576, beats: "100000"},
    {song_pos: 73.82, beats: "000001"},
    {song_pos: 74.048, beats: "000010"},
    {song_pos: 74.286, beats: "001000"},
    {song_pos: 74.52, beats: "100000"},
    {song_pos: 74.75, beats: "000001"},
    {song_pos: 75.001, beats: "000001"},
    {song_pos: 75.219, beats: "000100"},
    {song_pos: 75.482, beats: "001000"},
    {song_pos: 75.719, beats: "100000"},
    {song_pos: 75.957, beats: "000010"},
    {song_pos: 76.19, beats: "000100"},
    {song_pos: 76.649, beats: "000100"},
    {song_pos: 76.89, beats: "001000"},
    {song_pos: 77.363, beats: "100000"},
    {song_pos: 77.87, beats: "001000"},
    {song_pos: 78.545, beats: "100000"},
    {song_pos: 78.8, beats: "010000"},
    {song_pos: 79.991, beats: "100000"},
    {song_pos: 80.488, beats: "000100"},
    {song_pos: 80.716, beats: "000001"},
    {song_pos: 81.209, beats: "000100"},
    {song_pos: 81.675, beats: "100000"},
    {song_pos: 82.36, beats: "000001"},
    {song_pos: 82.605, beats: "000100"},
    {song_pos: 83.819, beats: "000100"},
    {song_pos: 84.043, beats: "010000"},
    {song_pos: 84.55, beats: "001000"},
    {song_pos: 84.781, beats: "000001"},
    {song_pos: 85.234, beats: "000001"},
    {song_pos: 85.48, beats: "100000"},
    {song_pos: 85.948, beats: "001000"},
    {song_pos: 86.196, beats: "000010"},
    {song_pos: 86.664, beats: "010000"},
    {song_pos: 87.164, beats: "000100"},
    {song_pos: 87.617, beats: "100000"},
    {song_pos: 88.337, beats: "001000"},
    {song_pos: 89.053, beats: "010000"},
    {song_pos: 89.315, beats: "001000"},
    {song_pos: 89.786, beats: "000100"},
    {song_pos: 90.229, beats: "000100"},
    {song_pos: 90.465, beats: "001000"},
    {song_pos: 93.333, beats: "000010"},
    {song_pos: 93.555, beats: "010000"},
    {song_pos: 94.027, beats: "100000"},
    {song_pos: 94.255, beats: "100000"},
    {song_pos: 94.765, beats: "010000"},
    {song_pos: 94.998, beats: "000010"},
    {song_pos: 95.49, beats: "010000"},
    {song_pos: 95.7, beats: "000001"},
    {song_pos: 97.126, beats: "010000"},
    {song_pos: 97.364, beats: "001000"},
    {song_pos: 97.854, beats: "000100"},
    {song_pos: 98.098, beats: "001000"},
    {song_pos: 98.577, beats: "000001"},
    {song_pos: 98.809, beats: "000010"},
    {song_pos: 99.294, beats: "100000"},
    {song_pos: 99.527, beats: "000001"},
    {song_pos: 100.965, beats: "000100"},
    {song_pos: 101.177, beats: "000001"},
    {song_pos: 101.659, beats: "000001"},
    {song_pos: 101.902, beats: "010000"},
    {song_pos: 102.372, beats: "010000"},
    {song_pos: 102.612, beats: "010000"},
    {song_pos: 103.106, beats: "100000"},
    {song_pos: 103.325, beats: "000100"},
    {song_pos: 103.779, beats: "000100"},
    {song_pos: 104.254, beats: "000100"},
    {song_pos: 104.743, beats: "000001"},
    {song_pos: 105.478, beats: "000010"},
    {song_pos: 106.216, beats: "001000"},
    {song_pos: 106.9, beats: "000010"},
    {song_pos: 107.618, beats: "001000"},
    {song_pos: 108.538, beats: "000001"},
    {song_pos: 108.801, beats: "001000"},
    {song_pos: 109.278, beats: "000001"},
    {song_pos: 109.518, beats: "000100"},
    {song_pos: 109.963, beats: "010000"},
    {song_pos: 110.235, beats: "000010"},
    {song_pos: 110.722, beats: "000100"},
    {song_pos: 110.941, beats: "000001"},
    {song_pos: 112.367, beats: "001000"},
    {song_pos: 112.617, beats: "001000"},
    {song_pos: 113.099, beats: "010000"},
    {song_pos: 113.323, beats: "010000"},
    {song_pos: 113.804, beats: "001000"},
    {song_pos: 114.029, beats: "000100"},
    {song_pos: 114.745, beats: "010000"},
    {song_pos: 114.972, beats: "000001"},
    {song_pos: 116.181, beats: "000001"},
    {song_pos: 116.429, beats: "000010"},
    {song_pos: 116.905, beats: "000010"},
    {song_pos: 117.15, beats: "000100"},
    {song_pos: 117.592, beats: "000100"},
    {song_pos: 117.833, beats: "000010"},
    {song_pos: 118.305, beats: "000001"},
    {song_pos: 118.544, beats: "000010"},
    {song_pos: 119.044, beats: "000010"},
    {song_pos: 119.504, beats: "010000"},
    {song_pos: 119.98, beats: "010000"},
    {song_pos: 120.718, beats: "000010"},
    {song_pos: 121.42, beats: "001000"},
    {song_pos: 122.157, beats: "001000"},
    {song_pos: 122.848, beats: "000100"},
    {song_pos: 123.812, beats: "000100"},
    {song_pos: 124.27, beats: "000010"},
    {song_pos: 124.512, beats: "000001"},
    {song_pos: 124.985, beats: "001000"},
    {song_pos: 125.491, beats: "100000"},
    {song_pos: 126.167, beats: "000010"},
    {song_pos: 126.422, beats: "000010"},
    {song_pos: 127.612, beats: "100000"},
    {song_pos: 128.109, beats: "001000"},
    {song_pos: 128.338, beats: "010000"},
    {song_pos: 128.83, beats: "000010"},
    {song_pos: 129.296, beats: "010000"},
    {song_pos: 129.982, beats: "000100"},
    {song_pos: 130.226, beats: "000001"},
    {song_pos: 131.44, beats: "001000"},
    {song_pos: 131.665, beats: "000001"},
    {song_pos: 132.171, beats: "001000"},
    {song_pos: 132.403, beats: "001000"},
    {song_pos: 132.855, beats: "000100"},
    {song_pos: 133.102, beats: "100000"},
    {song_pos: 133.569, beats: "001000"},
    {song_pos: 133.818, beats: "000001"},
    {song_pos: 134.286, beats: "001000"},
    {song_pos: 134.786, beats: "000001"},
    {song_pos: 135.238, beats: "000010"},
    {song_pos: 135.959, beats: "000100"},
    {song_pos: 136.674, beats: "000001"},
    {song_pos: 136.937, beats: "010000"},
    {song_pos: 137.407, beats: "000010"},
    {song_pos: 137.85, beats: "000100"},
    {song_pos: 138.086, beats: "000100"},
    {song_pos: 139.048, beats: "000001"},
    {song_pos: 139.504, beats: "100000"},
    {song_pos: 139.746, beats: "001000"},
    {song_pos: 140.228, beats: "000010"},
    {song_pos: 140.7, beats: "001000"},
    {song_pos: 141.444, beats: "000010"},
    {song_pos: 141.677, beats: "000010"},
    {song_pos: 142.847, beats: "010000"},
    {song_pos: 143.327, beats: "000001"},
    {song_pos: 143.59, beats: "100000"},
    {song_pos: 144.073, beats: "010000"},
    {song_pos: 144.521, beats: "010000"},
    {song_pos: 145.237, beats: "001000"},
    {song_pos: 145.471, beats: "100000"},
    {song_pos: 146.684, beats: "100000"},
    {song_pos: 146.902, beats: "010000"},
    {song_pos: 147.375, beats: "100000"},
    {song_pos: 147.617, beats: "000010"},
    {song_pos: 148.114, beats: "000001"},
    {song_pos: 148.353, beats: "000001"},
    {song_pos: 148.812, beats: "000010"},
    {song_pos: 149.097, beats: "000001"},
    {song_pos: 149.545, beats: "000001"},
    {song_pos: 149.991, beats: "010000"},
    {song_pos: 150.497, beats: "000100"},
    {song_pos: 151.192, beats: "000100"},
    {song_pos: 151.898, beats: "010000"},
    {song_pos: 152.142, beats: "100000"},
    {song_pos: 152.616, beats: "010000"},
    {song_pos: 153.083, beats: "000010"},
    {song_pos: 153.307, beats: "000010"},
    {song_pos: 153.784, beats: "000100"},
    {song_pos: 154.27, beats: "010000"},
    {song_pos: 154.749, beats: "100000"},
    {song_pos: 155.246, beats: "001000"},
    {song_pos: 155.745, beats: "010000"},
    {song_pos: 155.957, beats: "000100"},
    {song_pos: 156.428, beats: "001000"},
    {song_pos: 156.901, beats: "001000"},
    {song_pos: 157.386, beats: "000100"},
    {song_pos: 157.867, beats: "100000"},
    {song_pos: 158.091, beats: "100000"},
    {song_pos: 158.572, beats: "100000"},
    {song_pos: 159.058, beats: "000001"},
    {song_pos: 159.547, beats: "000001"},
    {song_pos: 159.792, beats: "100000"},
    {song_pos: 160.256, beats: "000001"},
    {song_pos: 160.689, beats: "000010"},
    {song_pos: 161.198, beats: "000100"},
    {song_pos: 161.661, beats: "100000"},
    {song_pos: 161.913, beats: "000100"},
    {song_pos: 162.375, beats: "100000"},
    {song_pos: 162.87, beats: "000001"},
    {song_pos: 163.341, beats: "000010"},
    {song_pos: 163.567, beats: "000010"},
    {song_pos: 164.032, beats: "000010"},
    {song_pos: 164.52, beats: "010000"},
    {song_pos: 164.77, beats: "100000"},
    {song_pos: 165.223, beats: "010000"},
    {song_pos: 165.724, beats: "010000"},
    {song_pos: 166.428, beats: "001000"},
    {song_pos: 167.101, beats: "000010"},
    {song_pos: 167.379, beats: "100000"},
    {song_pos: 167.831, beats: "010000"},
    {song_pos: 168.317, beats: "001000"},
    {song_pos: 168.548, beats: "100000"},
    {song_pos: 169.524, beats: "100000"},
    {song_pos: 169.761, beats: "100000"},
    {song_pos: 169.988, beats: "001000"},
    {song_pos: 170.233, beats: "100000"},
    {song_pos: 170.461, beats: "000010"},
    {song_pos: 170.705, beats: "000001"},
    {song_pos: 170.948, beats: "000010"},
    {song_pos: 171.178, beats: "000100"},
    {song_pos: 171.431, beats: "000010"},
    {song_pos: 171.671, beats: "000100"},
    {song_pos: 171.915, beats: "000100"},
    {song_pos: 172.168, beats: "010000"},
    {song_pos: 172.413, beats: "000100"},
    {song_pos: 172.634, beats: "000100"},
    {song_pos: 172.854, beats: "000010"},
    {song_pos: 173.093, beats: "001000"},
    {song_pos: 173.306, beats: "000010"},
    {song_pos: 173.539, beats: "001000"},
    {song_pos: 173.772, beats: "100000"},
    {song_pos: 174.039, beats: "010000"},
    {song_pos: 174.26, beats: "010000"},
    {song_pos: 174.517, beats: "000001"},
    {song_pos: 174.739, beats: "100000"},
    {song_pos: 174.991, beats: "000010"},
    {song_pos: 175.235, beats: "000010"},
    {song_pos: 175.457, beats: "010000"},
    {song_pos: 175.705, beats: "010000"},
    {song_pos: 175.932, beats: "000001"},
    {song_pos: 176.168, beats: "010000"},
    {song_pos: 176.428, beats: "001000"},
    {song_pos: 176.648, beats: "000001"},
    {song_pos: 176.892, beats: "000100"},
    {song_pos: 177.129, beats: "000100"},
    {song_pos: 177.384, beats: "000001"},
    {song_pos: 177.608, beats: "100000"},
    {song_pos: 177.86, beats: "000100"},
    {song_pos: 178.086, beats: "000010"},
    {song_pos: 178.353, beats: "000001"},
    {song_pos: 178.581, beats: "100000"},
    {song_pos: 178.804, beats: "010000"},
    {song_pos: 179.063, beats: "000010"},
    {song_pos: 179.286, beats: "010000"},
    {song_pos: 179.527, beats: "001000"},
    {song_pos: 179.764, beats: "000010"},
    {song_pos: 180.009, beats: "010000"},
    {song_pos: 180.254, beats: "001000"},
    {song_pos: 180.491, beats: "000100"},
    {song_pos: 180.713, beats: "000010"},
    {song_pos: 180.931, beats: "100000"},
    {song_pos: 181.185, beats: "000001"},
    {song_pos: 181.43, beats: "000100"},
    {song_pos: 181.698, beats: "010000"},
    {song_pos: 181.931, beats: "001000"},
    {song_pos: 182.145, beats: "010000"},
    {song_pos: 182.389, beats: "001000"},
    {song_pos: 182.617, beats: "001000"},
    {song_pos: 182.855, beats: "000010"},
    {song_pos: 183.089, beats: "100000"},
    {song_pos: 183.318, beats: "000100"},
    {song_pos: 183.57, beats: "100000"},
    {song_pos: 183.788, beats: "001000"},
    {song_pos: 184.051, beats: "000001"},
    {song_pos: 184.288, beats: "000100"},
    {song_pos: 184.526, beats: "010000"},
    {song_pos: 184.762, beats: "000010"},
    {song_pos: 185.22, beats: "000010"},
    {song_pos: 185.462, beats: "000010"},
    {song_pos: 185.935, beats: "100000"},
    {song_pos: 186.441, beats: "000010"},
    {song_pos: 187.117, beats: "000001"},
    {song_pos: 187.372, beats: "000010"},
    {song_pos: 188.562, beats: "000010"},
    {song_pos: 189.059, beats: "000001"},
    {song_pos: 189.288, beats: "010000"},
    {song_pos: 189.78, beats: "000010"},
    {song_pos: 190.246, beats: "000010"},
    {song_pos: 190.932, beats: "001000"},
    {song_pos: 191.176, beats: "010000"},
    {song_pos: 192.39, beats: "100000"},
    {song_pos: 192.615, beats: "000001"},
    {song_pos: 193.121, beats: "000010"},
    {song_pos: 193.353, beats: "100000"},
    {song_pos: 193.805, beats: "000100"},
    {song_pos: 194.052, beats: "100000"},
    {song_pos: 194.519, beats: "000010"},
    {song_pos: 194.768, beats: "100000"},
    {song_pos: 195.236, beats: "010000"},
    {song_pos: 195.736, beats: "000100"},
    {song_pos: 196.188, beats: "000001"},
    {song_pos: 196.909, beats: "000001"},
    {song_pos: 197.624, beats: "010000"},
    {song_pos: 197.887, beats: "100000"},
    {song_pos: 198.357, beats: "010000"},
    {song_pos: 198.8, beats: "000010"},
    {song_pos: 199.036, beats: "000001"},
    {song_pos: 200.0, beats: "000100"},
    {song_pos: 200.458, beats: "010000"},
    {song_pos: 200.7, beats: "000001"},
    {song_pos: 201.173, beats: "000100"},
    {song_pos: 201.679, beats: "000010"},
    {song_pos: 202.355, beats: "001000"},
    {song_pos: 202.61, beats: "100000"},
    {song_pos: 203.8, beats: "010000"},
    {song_pos: 204.297, beats: "000001"},
    {song_pos: 204.526, beats: "000100"},
    {song_pos: 205.018, beats: "000001"},
    {song_pos: 205.484, beats: "010000"},
    {song_pos: 206.17, beats: "000010"},
    {song_pos: 206.414, beats: "001000"},
    {song_pos: 207.628, beats: "010000"},
    {song_pos: 207.853, beats: "100000"},
    {song_pos: 208.359, beats: "000100"},
    {song_pos: 208.591, beats: "100000"},
    {song_pos: 209.043, beats: "000001"},
    {song_pos: 209.29, beats: "000001"},
    {song_pos: 209.757, beats: "000010"},
    {song_pos: 210.006, beats: "000100"},
    {song_pos: 210.474, beats: "000100"},
    {song_pos: 210.974, beats: "000100"},
    {song_pos: 211.426, beats: "001000"},
    {song_pos: 212.147, beats: "001000"},
    {song_pos: 212.862, beats: "000001"},
    {song_pos: 213.125, beats: "000010"},
    {song_pos: 213.595, beats: "001000"},
    {song_pos: 214.038, beats: "010000"},
    {song_pos: 214.274, beats: "100000"},
    ]
})
