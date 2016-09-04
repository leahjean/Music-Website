ENGINE.Score = function(args) {
	_.extend(this, {
		score: 0,  // Absolute score
		combo: 0,  // Number of sequential hits
		combo_display: false,  // Display combo number or not
		combo_opacity: 1,  
		num_notes: 0,  // Number of notes in beatmap
		max_score: 1000000.0,  // Maximum possible score
	}, args);
};

ENGINE.Score.prototype = {
	hit: function() {
		this.combo++;
		var avg_score = this.max_score / this.num_notes;
		var score_change = avg_score * (1 + 0.3 * (this.combo / this.num_notes - 0.5));
		this.score += score_change;
		if (this.score > this.max_score) {
			this.score = this.max_score;
		}
	},
	miss: function() {
		this.combo = 0;
	},
	render: function(delta) {
		// The score
		app.layer.save()
		         .fillStyle("rgba(255, 255, 255, 1)")
				 .font("bold " + Math.round(app.height * 0.050) + 
				 	"px 'Neutra Text Light', 'Lucida Sans Unicode', sans-serif")
				 .textAlign("center")
				 .fillText(this.number_with_commas(this.score), app.width * 0.5,
				 	app.height * 0.35)
				 .restore();

		// The combo meter
		/*
		// Fade in and out effect for combo
		if (this.combo > 0 && this.combo % 16 == 0) {
			this.combo_display = true;
		}
		if (this.combo_display) {
			this.combo_opacity = Math.min(2.0, this.combo_opacity + 0.05);
			if (this.combo_opacity >= 3.0) {
				this.combo_display = false;
			}
		} else {
			this.combo_opacity = Math.max(0.0, this.combo_opacity - 0.05);
		}*/

		app.layer.fillStyle("rgba(255, 255, 255, 1)")
		   .save()
		   .globalAlpha(this.combo_opacity)
		   .font("bold " + Math.round(app.height * 0.040) + 
		 	  "px 'Neutra Text Light', 'Lucida Sans Unicode', sans-serif")
		   .textAlign("center")
		   .fillText(this.number_with_commas(this.combo) + "x", app.width * 0.25,
		 	  app.height * 0.35)
		   .restore();
},

	// Regex function add commas to the number
	number_with_commas: function(num) {
		var whole = Math.round(num);
		return whole.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
}