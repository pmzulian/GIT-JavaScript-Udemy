// Prototype inheritance
const array = [1,2,3,4];

// Constructor Functions
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  this.calcAge = function() {
    console.log(2021 - this.birthYear);
  }
};

const persona = new Person('John', 1990);
console.log(persona)

console.log(persona instanceof Person);
