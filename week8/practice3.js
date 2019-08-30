class Cuboid {
	constructor(length, width, height) {
		this.length = length;
		this.width = width;
		this.height = height;
		this.volume = "";
		this.surfaceArea = "";
	}
	getVolume() {
		this.volume = (parseFloat(this.length) * parseFloat(this.width) * parseFloat(this.height));
		return this.volume;
	}
	getSurfaceArea() {
		this.surfaceArea = (2 * parseFloat(this.length) * parseFloat(this.width) + parseFloat(this.width) * parseFloat(this.height) + parseFloat(this.height) * parseFloat(this.length));
		return this.surfaceArea;
	}
	setVolume(length, width, height) {
		this.length = length;
		this.width = width;
		this.height = height;
		this.volume = (parseFloat(this.length) * parseFloat(this.width) * parseFloat(this.height));
	}
	setSurfaceArea(length, width, height) {
		this.surfaceArea = (2 * parseFloat(this.length) * parseFloat(this.width) + parseFloat(this.width) * parseFloat(this.height) + parseFloat(this.height) * parseFloat(this.length));
		return this.surfaceArea;
	}
}

class Cube extends Cuboid {
	constructor(length, width, height) {
		super(length, width, height);
	}
}

let cuboid = new Cuboid(32, 24, 48);
let cube = new Cube(46, 33, 44);
cube.setVolume(32, 33, 35);
cube.setSurfaceArea(12, 323, 444);
console.log(cuboid.getVolume());
console.log(cuboid.getSurfaceArea());
console.log(cube.getVolume());