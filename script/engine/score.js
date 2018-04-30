// Score class handles all scoring logic
ENGINE.Score = function(args) {
	_.extend(this, {
		score: 0, 
		combo: 0, 
		displayCombo: false, 
		comboOpacity: 1,
		noteNum: 0,  // Number of notes in beatmap
		maxScore: 1000000.0, 
		scoreMultiplier: {
			"perfect": 1.0,
			"great": 0.96,
			"good": 0.8,
			"bad": 0.5,
			"miss": 0.0
		}
	}, args);
};

ENGINE.Score.prototype = {
	// Update score depending on the score type
	updateScore: function(scoreType) {
		console.log(scoreType);
		var avg_score = this.maxScore / this.noteNum;
		var scoreChange = avg_score * (1 + 0.3 * (this.combo / this.noteNum - 0.5));
		this.score += scoreChange * this.scoreMultiplier[scoreType];
		if (this.score > this.maxScore) {
			this.score = this.maxScore;
		}
	},

	// Increment the combo meter by 1
	incCombo: function() {
		this.combo++;
	},

	// Reset combo meter
	resetCombo: function() {
		this.combo = 0;
	},
	render: function(delta) {
		// The score
		app.layer.save()
		         .fillStyle("rgba(255, 255, 255, 1)")
				 .font("bold " + Math.round(app.height * 0.050) + 
				 	"px 'Neutra Text Light', 'Lucida Sans Unicode', sans-serif")
				 .textAlign("center")
				 .fillText(this.addCommas(this.score), app.width * 0.5,
				 	app.height * 0.26)
				 .restore();

		// Draw combo
		app.layer.save()
			.fillStyle("black")
		    .globalAlpha(this.comboOpacity)
		    .font("bold " + Math.round(app.height * 0.040) +
				"px 'Neutra Text Light', 'Lucida Sans Unicode', sans-serif")
		    .textAlign("center")
		    .fillText(this.addCommas(this.combo) + "x", app.width * 0.5,
		 	    app.height * 0.7)
		    .restore();
},

	// Regex function add commas to the number
	addCommas: function(num) {
		var wholeNum = Math.round(num);
		return wholeNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
};