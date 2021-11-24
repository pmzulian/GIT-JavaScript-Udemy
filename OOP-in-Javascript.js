// Prototype inheritance
const array = [1,2,3,4];

// Constructor Functions
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  /*this.calcAge = function() {
    console.log(2021 - this.birthYear);
  }*/
};

const globant = new Person('John', 1990);
// console.log(persona)

// console.log(persona instanceof Person);

// Prototypes
Person.prototype.calcAge = function() {
  console.log(2021 - this.birthYear);
}
// console.log(Person.prototype);

globant.calcAge();
