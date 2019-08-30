class Person {
	constructor (firstName, lastName, Age, Gender) {

		this.firstName = (firstName != "") ? firstName : "John";
		this.lastName = (lastName != "") ? lastName : "Doe";
		this.Age = (Age !== null) ? Age : 0;
		this.Gender = (Gender != "") ? Gender : "Male";
	}
	greetExtraTerresterials(raceName) {
		console.log("Welcome to Planet Earth "+raceName);
	}

}

var person = new Person("Joseph", "Ronson", 34);
person.greetExtraTerresterials("WhiteCacausians");