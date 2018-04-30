// Song select menu
ENGINE.SongSelectMenu = function(args) {
    ENGINE.Menu.call(this, args);
    _.extend(this, {
        widthOffset: app.width,
        menuState: "hidden",
        slideSpeed: 0.07,
        baseMenuItems: ["VOLUME", "SETTINGS", "QUIT"],
        globalOpacity: 0,
        selectedItem: -1
    }, args);
};

ENGINE.SongSelectMenu.prototype = {
    // Repeatedly request an animation frame for the current scene
    render: function(delta) {
        if (this.menuState == "hidden") {
            return;
        }

        // Menu background
        app.layer.save()
            .globalAlpha(this.globalOpacity);
        app.layer.fillStyle("rgba(23, 28, 62, 0.85)")
            .fillRect(this.widthOffset, 0, app.width, app.height);
        var menuBorderWidth = app.width * 0.0015;
        app.layer.fillStyle("rgba(11, 8, 32, 0.92)")
            .fillRect(this.widthOffset - menuBorderWidth, 0, menuBorderWidth, app.height);
        app.layer.restore();

        this.drawMenuItems();
    },

    // Logic will run at a constant interval without requesting animation frame
    step: function(delta) {
        if (this.menuState == "hidden") {
            return;
        }

        if (this.menuState != "visible") {
            this.slideMenu();
        }
    },

    // Key commands
    onkeydown: function(key) {
        if (key == "down") {
            if (this.selectedItem < this.baseMenuItems.length - 1) {
                this.selectedItem += 1;
            }
        }

        if (key == "up") {
            if (this.selectedItem > 0) {
                this.selectedItem -= 1;
            }
        }

        if (key == "escape") {
            this.selectedItem = -1;
        }

        if (key == "enter") {
            if (this.selectedItem >= 0 || this.selectedItem < this.baseMenuItems.length) {
                var selectedFunction = "handle" + this.baseMenuItems[this.selectedItem];
                if (this[selectedFunction]) {
                    this[selectedFunction].apply(this);
                }
            }
        }
    },

    // Slide the menu
    slideMenu: function() {
        var menuWidth = app.width * 0.23;
        var slideOffset = menuWidth * this.slideSpeed;
        if (this.menuState == "opening") {
            this.widthOffset -= slideOffset;
            if (this.widthOffset <= app.width - menuWidth) {
                this.widthOffset = app.width - menuWidth;
                this.menuState = "visible";
            }
            this.globalOpacity += this.slideSpeed;
            if (this.globalOpacity >= 1.0 - this.slideSpeed) {
                this.globalOpacity = 1.0;
            }
        } else {
            this.widthOffset += slideOffset;
            if (this.widthOffset >= app.width) {
                this.widthOffset = app.width;
                this.menuState = "hidden";
                this.selectedItem = -1;
            }
            this.globalOpacity -= this.slideSpeed;
            if (this.globalOpacity <= this.slideSpeed) {
                this.globalOpacity = 0.0;
            }
        }
        console.log(this.menuState);
    },

    // Trigger animation for opening menu
    openMenu: function() {
        this.menuState = "opening";
    },

    // Trigger animation for closing menu
    closeMenu: function() {
        this.menuState = "closing";
    },

    // Draw the menu items
    drawMenuItems: function() {
        var startHeight = app.height * 0.17;
        var fontSize = app.height * 0.025;

        if (this.selectedItem >= 0) {
            var highlightCenter = startHeight + app.height * 0.07 * this.selectedItem -
                app.height * 0.044;
            app.layer.save()
                .globalAlpha(this.globalOpacity)
                .fillStyle("rgb(114, 201, 191)")
                .fillRect(this.widthOffset, highlightCenter,
                    app.width - this.widthOffset, app.height * 0.07)
                .restore();
        }

        app.layer.save()
            .globalAlpha(this.globalOpacity)
            .fillStyle("rgba(255, 255, 255, 1)")
            .font(fontSize + "px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif");
        for (var i = 0; i < this.baseMenuItems.length; i++) {
                app.layer.fillText(this.baseMenuItems[i], this.widthOffset + app.width * 0.03,
                    startHeight + app.height * 0.07 * i)
        }
        app.layer.restore();
    },

    handleVOLUME: function() {
        app.song.volume = Math.abs(app.song.volume - 0.5);
    },

    // Quit the game
    handleQUIT: function() {
        window.close();
    }
};

// Test text insertion
// app.layer.save()
//     .globalAlpha(this.globalOpacity)
//     .fillStyle("rgba(255, 255, 255, 1)")
//     .font("44.02px 'Neutra Text Bold', 'Lucida Sans Unicode', sans-serif")
//     .fillText("hello", 100, 100)
//     .restore();
