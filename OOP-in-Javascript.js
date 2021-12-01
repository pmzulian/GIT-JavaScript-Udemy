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

// globant.calcAge();

// Property __proto__
// console.log(globant.__proto__);

// Equivalence between prototypes
// console.log(globant.__proto__ === Person.prototype);

// isPrototypeOf()
// console.log(Person.prototype.isPrototypeOf(globant));
// console.log(Person.prototype.isPrototypeOf(Person));

// Add properties to prototype
Person.prototype.species = 'Homo Sapiens';
// console.log(globant);
// console.log(globant.species);
// console.log(globant.hasOwnProperty('firstName'));
// console.log(globant.hasOwnProperty('species'));

// __proto__
// console.log(globant.__proto__);
// console.log(globant.__proto__.__proto__);

// Object.prototype (top of the prototype chain)
// console.log(globant.__proto__.__proto__.__proto__);

// Prototype of a function
// console.log(Person.prototype.constructor);

// Prototype of an array
const arr = [2, 2, 3, 3, 4, 4, 5, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Add methos wich returns the unique elements of an Array
Array.prototype.unique = function() {
  return [...new Set(this)];
}

// console.log(arr.unique());

// DOM prototype
const h1 = document.querySelector('h1');
// console.dir(h1)

// Functions prototype
console.dir(x => x + 1);

















// Fin archivo
