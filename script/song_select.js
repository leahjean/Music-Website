app.songSelect = new ENGINE.Scene({
	songKey: 0,  // Index of the song in the beatmap list
    origSongKey: 0,
    baseDisplayHeights: null,
	displayHeights: null,  // Height of displayed titles
    displayNum: 7,  // Number of titles to display
	beatmapNames: [],  // Sorted beatmaps
	sort: "alphabetic",  // Sort by name by default
    background: null,
    initialLoad: true,
    scrollState: "none",
    scrollSpeed: 0.06,
    menu: null,
    openedMenu: false,
    globalOpacity: 1,

    // Called when the scene is initially created
    oncreate: function() {
	    // Initialize variables
        this.origSongKey = this.songKey;
        this.initDispHeights();
        this.entities = new ENGINE.Collection(this);

    },

    // Called whenever the scene selected
	onenter: function() {
	    if (this.initialLoad) {
            // Add in the beatmap names/difficulties to the name array
            for (var i = 0; i < 3; i++) {
                for (var beatmapId in app.beatmaps) {
                    // Check that object has its own property not from prototype
                    if (app.beatmaps.hasOwnProperty(beatmapId)) {
                        this.beatmapNames.push({
                            id: beatmapId,
                            name: app.beatmaps[beatmapId].songTitle,
                            difficulty: app.beatmaps[beatmapId].difficulty,
                            artist: app.beatmaps[beatmapId].artistName
                        });
                    }
                }
            }
            this.background = app.assets.image("galaxy3");
            this.initialLoad = false;
        }

        // Sort the beatmap names by name by default
        if (this.sort == "alphabetic") {
            this.sortByAlphabet(this.sort)
        } else {
            this.sortByDifficulty();
        }

        this.initMenu();
	    this.setSong();
	},

    // Repeatedly request an animation frame for the current scene
	onrender: function(delta) {
        app.layer.clear("rgb(0, 0, 0)");

        this.drawBackground(this.globalOpacity);
        this.drawSongTitles(this.globalOpacity);
        this.drawHelpMessage(this.globalOpacity);

        this.entities.call("render", delta);
	},

    // Function runs on an interval wiithout requesting an animation frame
	onstep: function(delta) {
        if (this.scrollState != "none") {
            this.updateHeights();
            if (app.song.volume > 0) {
                app.song.volume = Math.max(0, app.song.volume - 0.01);
            }
        }

        this.updateGlobalOpacity();

	    this.entities.step(delta);
        this.entities.call("step", delta);
	},

    // Event trigger for mouse click
	onmousedown: function(x, y, button) {

	},

    // Event trigger for key press
	onkeydown: function(key) {
        if (key == "p") {   // Pause
            this.handlePKey();
        }

        if (this.openedMenu) {
            this.menu.onkeydown(key);
            if (key == "escape") {
                this.handlePKey();
            }
            return;
        }

        switch (key) {
            case "down":
                if (this.scrollState != "up" && this.songKey < this.beatmapNames.length - 1) {
                    this.end_song();
                    this.scrollState = "down";
                    this.incSongKey(this.scrollSpeed);
                    this.pushDisplayHeights();
                }
                break;
            case "up":
                if (this.scrollState != "down" && this.songKey > 0) {
                    this.end_song();
                    this.scrollState = "up";
                    this.decSongKey(this.scrollSpeed);
                    this.pushDisplayHeights();
                }
                break;
            case "enter":
                // Play current song
                if (this.scrollState == "none") {
                    var beatmapIndex = this.getBeatmapIndex();
                    var beatmap_id = this.beatmapNames[beatmapIndex].id;
                    app.currBeatmap = app.beatmaps[beatmap_id];
                    app.selectScene(app.game);
                }
                break;
        }
	},

    // When another scene is selected, stop the current song and wipe objects
	onleave: function() {
		app.song.load();

        this.entities.wipe();
	},

    // End playing the song
	end_song: function() {
		app.song.load();
	},

    // Sort alphabetically
    sortByAlphabet: function() {
        this.beatmapNames.sort(function (a,b) {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                // If same song name, order by artist name
                if (a.artist > b.artist) {
                    return 1;
                } else {
                    return -1;
                }
            }
        });
    },

    // Sort by difficulty
    sortByDifficulty: function() {
        this.beatmapNames.sort(function (a, b) {
            if (a.difficulty > b.difficulty) {
                return 1;
            } else if (a.difficulty < b.difficulty) {
                return -1;
            } else {
                app.songSelect.sortTwoByName(a, b);
                if (first.name > second.name) {
                    return 1;
                } else if (first.name < second.name) {
                    return -1;
                } else {
                    // If same song name, order by artist name
                    if (first.artist > second.artist) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
        });
	},

    // Initialize display heights for the songs on the title screen
    initDispHeights: function() {
        this.displayHeights = [];
        this.baseDisplayHeights = [];
        var dispCenter = Math.floor(this.displayNum/ 2);
        var heightInterval = 0.40 / dispCenter;
	    for (var i = 0; i < this.displayNum; i++) {
	        var displayHeight = app.height * (0.5 - heightInterval * (dispCenter - i));
	        this.baseDisplayHeights.push(displayHeight);
	        this.displayHeights.push(displayHeight);
        }
    },

    // Initialize the menu object
    initMenu: function() {
	    this.menu = this.entities.add(ENGINE.SongSelectMenu, {
            testing: "testing"
        });
    },

    // Play current song
    setSong: function() {
        var beatmapIndex = this.getBeatmapIndex();
        var curr_map = app.beatmaps[this.beatmapNames[beatmapIndex].id];
        app.song = app.assets.audio(curr_map.mp3Name);
        app.song.volume = app.volume;
        app.song.currentTime = 4;
        app.song.loop = true;
        app.song.play();
    },

    // Remember original key before scroll
    storeOrigKey: function() {
        if (this.scrollState == "none") {
            this.origSongKey = this.getOrigSongKey();
        }
    },

    // Increment the song key by the given amount
    incSongKey: function(increment) {
        this.storeOrigKey();
	    this.songKey += increment;
	    var songKeyUpperLimit = this.beatmapNames.length - 1;
	    if (this.songKey > songKeyUpperLimit) {
	        this.songKey = songKeyUpperLimit;
        }
    },

    // Decrement the song key by the given amount
    decSongKey: function(decrement) {
        this.storeOrigKey();
	    this.songKey -= decrement;
        if (this.songKey < 0) {
            this.songKey = 0;
        }
    },

    // Get the new whole number song key
    getBeatmapIndex: function() {
        if (this.scrollState == "up") {
            return Math.floor(this.songKey);
        } else {
            return Math.ceil(this.songKey);
        }
    },

    // Get the original song key
    getOrigSongKey: function() {
        if (this.scrollState == "up") {
            return Math.ceil(this.songKey);
        } else {
            return Math.floor(this.songKey);
        }
    },

    pushDisplayHeights: function() {
	    if (this.displayHeights.length < this.displayNum + 1) {
            var dispCenter = Math.floor(this.displayNum / 2);
            var heightInterval = 0.40 / dispCenter;
            var displayHeight = 0;
            if (this.scrollState == "down") {
                displayHeight = app.height * (0.5 - heightInterval * (dispCenter - this.displayNum - 1));
                this.displayHeights.push(displayHeight);
            } else {
                displayHeight = app.height * (0.5 - heightInterval * (dispCenter + 1));
                this.displayHeights.unshift(displayHeight);
            }
        }
    },

    // Update heights if scrolling
    updateHeights: function() {
        var dispCenter = Math.floor(this.displayNum / 2);
        var dispHeightInterval = 0.40 / dispCenter;
        if (this.scrollState == "down") {
            this.incSongKey(this.scrollSpeed);
            for (var i = 0; i < this.displayHeights.length; i++) {
                this.displayHeights[i] -= app.height * dispHeightInterval * this.scrollSpeed;
            }
        } else {
            this.decSongKey(this.scrollSpeed);
            for (var i = 0; i < this.displayHeights.length; i++) {
                this.displayHeights[i] += app.height * dispHeightInterval * this.scrollSpeed;
            }
        }
        if (Math.abs(this.songKey - this.origSongKey) >= 1) {
            this.endScroll();
        }
    },

    // Update variables to signal that scrolling has ended
    endScroll: function() {
        this.songKey = this.getOrigSongKey();
        this.origSongKey = this.songKey;
        this.displayHeights = this.baseDisplayHeights.slice();
        this.scrollState = "none";
        this.setSong();
    },

    // Get the background height index as a function of the current song index
    getbgHeightOffset: function() {
	    var songKeyRatio = this.songKey / (this.beatmapNames.length - 1);
	    var maxbgHeightOffset = this.background.height / app.aspectRatio - app.height;
	    return maxbgHeightOffset * songKeyRatio;
    },

    // Adjust opacity if menu is opening
    updateGlobalOpacity: function() {
        if (this.menu.menuState == "opening") {
            this.globalOpacity -= 0.6 * this.menu.slideSpeed;
            if (this.globalOpacity <= 0.4) {
                this.globalOpacity = 0.4;
            }
        }
        if (this.menu.menuState == "closing") {
            this.globalOpacity += 0.6 * this.menu.slideSpeed;
            if (this.globalOpacity >= 1.0) {
                this.globalOpacity = 1.0;
            }
        }
    },

    // Draw background
    drawBackground: function(opacity) {
        var bgHeightOffset = this.getbgHeightOffset();
        app.layer.save()
                 .globalAlpha(opacity)
                 .drawImage(this.background, 0, bgHeightOffset, this.background.width,
                     this.background.height / app.aspectRatio, 0, 0, app.width, app.height)
                 .restore();
    },

    // Draw song titles
    drawSongTitles: function(opacityMultiplier) {
		// Determine song indices to display
        var beatmapIndex = this.scrollState == "up" ? this.origSongKey - 1 : this.origSongKey;
		var upLim = Math.min(this.beatmapNames.length - 1,
			Math.floor(beatmapIndex + this.displayHeights.length / 2));
		var botLim = Math.max(0, upLim - this.displayHeights.length + 1);

		// Draw the song names
		for (var i = botLim; i <= upLim; i++) {
			var dist = i - beatmapIndex;  // Distance from the center
            var heightIndex = dist + Math.floor((this.displayHeights.length - 1) / 2);
			var currName = this.beatmapNames[i].name;
			var fontSize = this.getFontSize(this.displayHeights[heightIndex]);
			var fontHeight = this.displayHeights[heightIndex];
            var opacity = this.getOpacity(this.displayHeights[heightIndex]);
			var fontColor = "rgba(125, 125, 125, " + opacity + ")";

			// Draw selected element with a different font color
			if (i == beatmapIndex && this.scrollState == "none") {
				fontSize = Math.round(app.height * 0.07);
				fontColor = "rgba(255, 255, 255, 1)";
			}
			app.layer.save()
                     .globalAlpha(opacityMultiplier)
			         .fillStyle(fontColor)
			         .font(fontSize +
			         	"px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif")
			         .textAlign("center")
			         .fillText(currName, app.width * 0.5,
			         	  fontHeight + fontSize / 2)
			         .restore();
		}
    },

    // Draws the help message
    drawHelpMessage: function(opacity) {
	    var fontSize = app.height * 0.025;
        var fontHeight = app.height * 0.94;
        var fontColor = "rgba(255, 255, 255, 1)";
        app.layer.save()
           .globalAlpha(opacity)
           .fillStyle(fontColor)
           .font(fontSize +
              "px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif")
           .textAlign("center")
           .fillText("Press (enter) to select a song and arrow keys to scroll", app.width * 0.5,
                fontHeight + fontSize / 2)
           .restore();
    },

    // Calculate font size given a title's height
    getFontSize: function(height) {
	    return 44 - Math.abs(height - 0.5 * app.height) * 7.5 / (app.height * 0.12);
    },

    // Calculate opacity given a title's height
    getOpacity: function (height) {
        return Math.max(0, 1 - Math.abs(height / app.height - 0.5) / 0.9);
    },

    // Handle "p" key press
    handlePKey: function() {
        this.openedMenu = !this.openedMenu;
        if (app.song.paused) {
            app.song.play();
        } else {
            app.song.pause();
        }
        if (this.openedMenu) {
            this.menu.openMenu();
        } else {
            this.menu.closeMenu();
        }
    }
});