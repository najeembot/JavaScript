class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return "Hello, my name is "+this.name+" and I am "+this.age+" years old.";
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name,age,status);
    this.species = "shark";
    this.legs = 4;
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name,age,status);
    this.species = "cat";
    this.legs = 4;
  }
  introduce() {
    return "hello my name is "+this.name+" and i am "+this.age+" years old Meow meow!!";
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name,age, status);
    this.master = master;
  }
  greetMaster() {
    return "Hello " + this.master;
  }
  
}

let animal = new Animal("Randy", 8, 4, "dog", "ok", "Josh");
let cat = new Cat("Mycat", 4, 6,"Healthy", "d", "d");
let dog = new Dog("Doggy", 6, "Ok", "Joseph");
console.log(dog.greetMaster());
console.log(animal.species);
console.log(cat.introduce());