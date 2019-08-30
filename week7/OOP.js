class Movie {
  constructor(title, director) {
    this.title = title;
    this.director = director;
    this.stars = new Array();
    this.writers = new Array();
    this.rating = new Array();
    this.averageR = 0;
    this.totalSum = 0;
    this.numsCnt = 0;
  }
  getTitle() {
    return this.title;
  }
  getDirector() {
    return this.director;
  }
  addStar(star) {
    this.stars.push(star);
  }
  getStars() {
    return this.stars;
  }
  addWriter(writer) {
    this.writers.push(writer);
  }
  getWriters() {
    return this.writers;
  }
  addRating(rating) {
    this.rating.push(rating);
  }
  getAverageRating() {
    for(var i = 0; i < this.rating.length; i++) {
        this.totalSum += this.rating[i];
    }
    this.numsCnt = this.rating.length;
    this.averageR = this.totalSum / this.numsCnt;
    return this.averageR;
  }
}

class StaffMember {
  constructor(name, role, dateOfBirth) {
    this.name = name;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
    this.movie = new Object();
    this.dt = new Date();
    this.age = 0;
  }

  addMovie(movie) {
    this.movie = movie;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  getAge() {
    this.age = (parseInt(this.dt.getFullYear()) - parseInt(this.dateOfBirth.substring(6, 11)));
    return this.age;
  }
} 

/* getting some values */
const myMovie = new Movie("New Century", "ABD");
const stM1 = new StaffMember("Charlie Chaplain", "Commedy Hero", "12/04/1990");
const stM2 = new StaffMember("Harnold Shwartztenger", "Action Hero", "14/06/1970");
const stM3 = new StaffMember("Liza", "Dance star", "15/05/1985");
const stM4 = new StaffMember("Gloria", "Comedy Star", "15/07/1980");
// adding more stars
myMovie.addWriter("Arnand Pat");
myMovie.addWriter("Enoonima");
myMovie.addRating(33);
myMovie.addRating(22);
myMovie.addRating(25);
myMovie.addRating(34);
myMovie.addStar(stM1);
myMovie.addStar(stM2);
myMovie.addStar(stM3);
myMovie.addStar(stM4);
const keys = Object.keys(myMovie.getStars());
document.getElementById('container').innerHTML = "<h1>The " + myMovie.getTitle() + " Created by " + myMovie.getDirector() + " Average Rating: " + myMovie.getAverageRating() + "</h1>";
myMovie.getStars().forEach(function(key) {
     
     document.getElementById('star_container').innerHTML += "<p>Star Name: " + key.getName() + ", Role: " + key.getRole() + ", Age: " + key.getAge() + "</p><br />";
});
// adding to the html page