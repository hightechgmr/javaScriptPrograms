const person = {
	name: "Harshit",
	course: "Bachelor of Computer Applications",
	university: "Kumaun University",
	percentage: 80,
	
	// getMarks() {
	// 	console.log(this.percentage);
	// }

		// Alternatively
		getMarks: function(){
			console.log(this.percentage);
		}

}

person.getMarks();