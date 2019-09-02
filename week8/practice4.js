class MissilesLaunchManager {
	constructor() {
	   this.numbers = [0, 1, 2, 3, 4, 5, 6, 7];
	}
	launchAll() {
	   for (var i=0; i < this.numbers.length; i++) {
	        setTimeout(function(){console.log("missile has been launched!")}, this.numbers[i] * 1000);
	   }
	}
}

let ml = new MissilesLaunchManager("Missile has been launched!");
ml.launchAll();