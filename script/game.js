// Main game loop
app.game = new ENGINE.Scene({
	playing: true,
	stopped: false,
	fadeDelay: 0.0000025,  // Audio fade speed
	noteSpeed: 0,
	beatmap: null,  // Current beatmap playing
	barSprite: null,  // Bar sprite to be used
	barKeys: "asdjkl",  // Which keys correspond to the bars
	pressedBars: [],   // Which bars are currently pressed
	barLength: [],  // How wide each background bar is (from 0 to 1)
	noteNum: 0,  // Timing purposes
	noteSize: app.width * 0.035,
	score: null,
    barHeight: app.height * 0.55,
    scoreBounds: null,

    // Called when the scene is initially created
	oncreate: function() {
		// Create new collection
		this.entities = new ENGINE.Collection(this);
        this.barNotes = [];

		for (var barNum = 0; barNum < this.barKeys.length; barNum++) {
            this.barNotes.push(new ENGINE.Collection(this));
			this.pressedBars.push(false);
			this.barLength.push(0.0);
		}
		this.initScoreBounds();

        // Event listeners triggered when game is tabbed out or tabbed back in
		window.addEventListener("blur", function() {
			app.game.pause();
		}, false);
		window.addEventListener("focus", function() {
			if (!app.game.stopped) {
				app.game.unpause();
			}
		}, false);
	},

    // Called whenever the scene selected
	onenter: function() {
		this.beatmap = app.currBeatmap;
        // this.beatmap = app.beatmaps["stay_the_night_map"];
		this.noteSpeed = this.beatmap.noteSpeed * app.noteSpeedMultiplier;
        this.barSprite = app.assets.data.sprites[this.beatmap.barSprite];
        this.playing = true;

		// Load in the current song
		app.song = app.assets.audio(this.beatmap.mp3Name);
        var currSong = app.song;
        currSong.loop = false;
        currSong.volume = app.volume;

		// Avoid Promise Error when repeatedly pausing and playing
		setTimeout(function() {
			currSong.play();
			currSong.volume = app.volume;
		}, 1000);
		currSong.currentTime = this.beatmap.songStart / 2;

        // Create score object
        this.score = this.entities.add(ENGINE.Score, {
            noteNum: this.beatmap.notes.length
        });

        app.song.addEventListener("ended", this.endGameRound);
	},

    // Repeatedly request an animation frame for the current scene
	onrender: function(delta) {
        // Draw the background
        app.layer.clear("rgb(0, 0, 0)");
        var bg = app.assets.image(this.beatmap.bg);
        app.layer.drawImage(bg,	0, 0, app.width, app.height);

		this.drawUI();

		// // Draw a note for testing position
		// var _note = app.assets.data.sprites["white-fill-glow"];
		// var _frame = _note.frame;
        // var glow = app.assets.image("KCCS_set3-05");
		// app.layer.drawImage(glow, _frame.x, _frame.y, _frame.w, _frame.h,
		// 	app.width * 0.47 - this.noteSize / 2,
		// 	this.barHeight + app.height * (0.29 + 0.028),
         //    // this.barHeight + app.height * (0.309 - 0.04) - this.noteSize,
         //    this.noteSize, this.noteSize);

		// Render all entities
		this.entities.call("render", delta);
        for (var barNum = 0; barNum < this.barKeys.length; barNum++) {
            this.barNotes[barNum].call("render", delta);
        }
	},

    // Function runs on an interval wiithout requesting an animation frame
	onstep: function(delta) {
		if (this.beatmap.currBeat < this.beatmap.notes.length) {
			this.createNote();
		}

		if (this.playing) {
            this.animateBars();

		}

		// Call step functions for all entities
		this.entities.step(delta);
		this.entities.call("step", delta);
        for (var barNum = 0; barNum < this.barKeys.length; barNum++) {
            this.barNotes[barNum].step(delta);
            this.barNotes[barNum].call("step", delta);
        }
	},

    // Event trigger for mouse click
	onmousedown: function(x, y, button) {
		/**
		if (this.playing && x < app.width/2) {
			this.fade_out();
			this.stopped = true;
		}
		if (!this.playing && x > app.width/2) {
			this.fade_in();
			this.stopped = false;
		}**/
	},

    // Event trigger for key press
	onkeydown: function(key) {
		// Pause the game
		if (key == "p") {
			if (this.playing) {
				this.pause();
				this.stopped = true;
			} else {
				this.unpause();
				this.stopped = false;
			}
			return;
		}

		if (key == "r") {
		    app.selectScene(app.game);
        }

		// Exit the game
		if (key == "escape") {
			app.selectScene(app.songSelect);
		}

		// Check if key corresponds to one of the bars
        var pressedBar = this.barKeys.indexOf(key);
        if (pressedBar > -1) {
            // Flag for bar expansion animation
            this.pressedBars[pressedBar] = true;
            this.checkRemoveNote(pressedBar);
        }

        // Log which key is pressed and time of the press
        console.log(key, " ", (app.song.currentTime - this.beatmap.songStart) /
            this.beatmap.speedMultiplier) + 0.08;
	},

    // Event trigger for key release
	onkeyup: function(key) {
		// Check if key corresponds to one of the bars
		var pressed_bar = this.barKeys.indexOf(key);
		if (pressed_bar > -1) {
			// Flag for bar release animation
			this.pressedBars[pressed_bar] = false;
		}
	},

    // When another scene is selected, clear notes and reset variables
	onleave: function() {
		this.entities.wipe();
        for (var barNum = 0; barNum < this.barKeys.length; barNum++) {
            this.barNotes[barNum].wipe();
        }

		// Reset the beatmap's beat tracker
		this.beatmap.currBeat = 0;

		// Set playing back to true in case exited while paused
		this.playing = true;

		app.song.load();

        app.song.removeEventListener("ended", this.endGameRound);
	},

    // Height bounds for different scores depending on button timing
    initScoreBounds: function() {
	    this.scoreBounds = {};
	    scoreHeightOffset = {
	        "perfect": 0,
            "great": 0.014,
            "good": 0.03,
            "bad": 0.045
	    };
        for (scoreType in scoreHeightOffset) {
            var heightOffset = scoreHeightOffset[scoreType];
            var upBound = this.barHeight + app.height * (0.29 + heightOffset);
            var lowBound = this.barHeight + app.height * (0.309 - heightOffset) - this.noteSize;
            this.scoreBounds[scoreType] = [lowBound, upBound];
        }
    },

	// Create a note if the notes in the map haven't all been exhausted
	createNote: function() {
		if (this.playing) {
			var beat = this.beatmap.getBeat();
			// Trigger note creation when the song position is reached
			var noteDelay = this.barHeight / this.noteSpeed;
            var notePositions = [0.349, 0.409, 0.469, 0.529, 0.589, 0.649];
			if (app.song.currentTime - (this.beatmap.songStart - noteDelay) >=
				beat.song_pos * this.beatmap.speedMultiplier) {
				this.noteNum ++;
				var keys = beat.beats.split("");
				for(var barNum = 0; barNum < keys.length; barNum++) {
					if (keys[barNum] == 1) {
						this.barNotes[barNum].add(ENGINE.Note, {
							spriteKey: this.beatmap.getNoteSprite(barNum),
							x: app.width * (notePositions[barNum] - 0.0005) - this.noteSize / 2,
							speed: this.noteSpeed,
							size: this.noteSize,
							score: this.score,
                            barHeight: this.barHeight
						});
					}
				}
				this.beatmap.updateBeat();
			}
		}
	},

    // Draw the game UI
    drawUI: function() {
        this.drawTitle();
        this.drawArtist();
        this.drawDifficulty();
        this.drawBars();
    },

    // Draw the title of the song
    drawTitle: function() {
        var glow = app.assets.image("KCCS_set3-05");

	    // Title background
		var title_bar = app.assets.data.sprites["song-title-bar"];
		var t_frame = title_bar.frame;
		app.layer.drawImage(glow, t_frame.x, t_frame.y, t_frame.w, t_frame.h,
			0, app.height * 0.15, app.width * 0.39, app.height * 0.055);

        // Title of the song
		app.layer.save()
		         .fillStyle("rgba(255, 255, 255, 1)")
				 .font(Math.round(app.height * 0.030) +
				 	"px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif")
				 .textAlign("start")
				 .fillText(this.beatmap.songTitle, this.beatmap.titleOffset,
				 	app.height * 0.188)
				 .restore();
    },

    // Draw the artist of the song
    drawArtist: function() {
		// Artist name
		app.layer.save()
		         .fillStyle("rgba(233, 233, 233, 1)")
				 .font(Math.round(app.height * 0.02) +
				 	"px 'Neutra Text Light', 'Lucida Sans Unicode', sans-serif")
				 .textAlign("start")
				 .fillText(this.beatmap.artistName, this.beatmap.artistOffset,
                     app.height * 0.233)
				 .restore();
    },

    // Draw difficulty rating stars
    drawDifficulty: function() {
        var glow = app.assets.image("KCCS_set3-05");
		for (var i = 0; i < 5; i++) {
			if (i < this.beatmap.difficulty) {
				var star = app.assets.data.sprites["star-filled"];
				app.layer.drawImage(glow, star.frame.x, star.frame.y, star.frame.w,
					star.frame.h, app.width * (0.3 + 0.015 * i), app.height * 0.218,
					app.height * 0.018, app.height * 0.018);
			} else {
				var no_star = app.assets.data.sprites["star-empty"];
				app.layer.drawImage(glow, no_star.frame.x, no_star.frame.y, no_star.frame.w,
					no_star.frame.h, app.width * (0.3 + 0.015 * i), app.height * 0.218,
					app.height * 0.018, app.height * 0.018);
			}
		}
    },

    // Draw bars onto the canvas
    drawBars: function() {
        var sprite = app.assets.image("sprites");
        var bars = app.assets.image("KCCS_barsv1-03");

		var barFrame = this.barSprite.frame;
		var barBottom = app.assets.data.sprites["darkest-bottom"];
		var barBotFrame = barBottom.frame;
		var barBack = app.assets.data.sprites["thick"];
		var backFrame = barBack.frame;
		var barPositions = [0.35, 0.41, 0.47, 0.53, 0.59, 0.65];
		for (i = 0; i < 6; i++) {
			var barLen = this.barLength[i];
			app.layer.drawImage(bars, backFrame.x, backFrame.y, backFrame.w, backFrame.h,
				app.width * barPositions[i] - barLen * app.width * 0.0327 / 2,
				app.height * 0.297, barLen * app.width * 0.03, this.barHeight + app.height * 0.005);
			app.layer.drawImage(bars, barFrame.x, barFrame.y, barFrame.w, barFrame.h,
				app.width * barPositions[i] - app.width * 0.013 / 2,
				app.height * 0.3, app.width * 0.013, this.barHeight);
			app.layer.drawImage(sprite, barBotFrame.x, barBotFrame.y, barBotFrame.w, barBotFrame.h,
				app.width * barPositions[i] - app.width * 0.0373 / 2,
				this.barHeight + app.height * 0.3 - barBotFrame.h / 2,
                app.width * 0.035, app.height * 0.01);

			// Bar letters
			var barKey = this.barKeys.charAt(i).toUpperCase();
			app.layer.save()
			         .fillStyle("rgba(0, 0, 0, 1")
			         .font(Math.round(app.height * 0.025) +
				 	     "px 'Neutra Text', 'Lucida Sans Unicode', sans-serif")
			         .textAlign("center")
			         .fillText(barKey, app.width * (barPositions[i] - 0.001), app.height * 0.89)
			         .restore();
		}
    },

    // Animate the bars when pressed or released
    animateBars: function() {
        for (var i = 0; i < this.pressedBars.length; i++) {
            var len = this.barLength[i];
            var barSpeed = 0.4;
            if (this.pressedBars[i]) {
                if (len < 1.0) {
                    len = Math.min(1.0, len + barSpeed);
                }
            } else {
                if (len > 0.0) {
                    len = Math.max(0.0, len - barSpeed * 0.3);
                }
            }
            this.barLength[i] = len;
        }
    },

    // Check if there is a note to remove on the pressed bar
    checkRemoveNote: function(pressedBar) {
        var upBound = app.height * 0.845;
        var lowBound = app.height * 0.852 - this.noteSize;
        // Remove note if key pressed on note
        var numNotes = this.barNotes[pressedBar].length;
        if (numNotes > 0 && this.playing) {
            var currNoteId = 0;
            while (currNoteId < numNotes) {
                var currPressedState = this.barNotes[pressedBar][currNoteId].pressedState;
                if (currPressedState != "moving") {
                    currNoteId++;
                } else {
                    break;
                }
            }
            if (currNoteId < numNotes) {
                var currNote = this.barNotes[pressedBar][currNoteId];
                var newPressedState = this.checkScoreBounds(currNote);
                if (newPressedState != "moving") {
                    currNote.pressedState = newPressedState;
                    currNote.image = app.assets.image("KCCS_set3-05");
                    if (newPressedState == "perfect") {
                        currNote.spriteKey = "white-fill-glow";
                    } else if (newPressedState == "great" || newPressedState == "good") {
                        currNote.spriteKey = "white-fill";
                    } else {
                        currNote.spriteKey = "grey-fill";
                    }
                }
            }
		}
    },

    // Check if the current note is within one of the score boundaries
    checkScoreBounds: function(note) {
	    if (note.y > this.scoreBounds["bad"][0]) {
	        var scoreTypes = ["perfect", "great", "good", "bad"];
	        for (var scoreTypeId = 0; scoreTypeId < scoreTypes.length; scoreTypeId++) {
	            var scoreType = scoreTypes[scoreTypeId];
                if (note.y > this.scoreBounds[scoreType][0] &&
                    note.y < this.scoreBounds[scoreType][1]) {
                    return scoreType;
                }
	        }
	        return "miss";
        } else {
	        return "moving";
        }
    },

    // Pause game
	pause: function() {
	    if (app.scene == this) {
            var currSong = app.song;
            for (var barNum = 0; barNum < this.barKeys.length; barNum++) {
                this.barNotes[barNum].call("pause");
            }
            currSong.pause();
            this.playing = false;
        }
	},

    // Unpause game
	unpause: function() {
        if (app.scene == this) {
            var currSong = app.song;
            currSong.play();
            for (var barNum = 0; barNum < this.barKeys.length; barNum++) {
                this.barNotes[barNum].call("play");
            }
            this.playing = true;
        }
	},

    // End the current game round
    endGameRound: function() {
	    app.selectScene(app.songSelect);
	    console.log("Ending round");
    },

	// Convert song time to minutes:seconds display
	convTime: function(currentTime) {
		var whole = Math.round(currentTime);
		var minute = parseInt(whole / 60);
		var second = whole % 60;
		if (second < 10) {
			second = "0" + second
		}
		return minute + ":" + second;
	}
});