// Static Methods
Array.from(document.querySelectorAll('h1'));

// El método from() no funciona en cualquier arreglo
// const arreglo = [1, 2, 3, 4];
// arreglo.from();

// Constructor Functions Static methods
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  /*this.calcAge = function() {
    console.log(2021 - this.birthYear);
  }*/
};

// Adding static Methods
Person.hey = function () {
  console.log('Hey there!');
};

// Person.hey();

// This hey() methods is not inherited
const jonas = new Person('John DOE', 1980);
// jonas.hey();

// Classes with static methods
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  };

  // Methods will be added to the .prototype property
  // Also call Instance Methods
  calcAge() {
    console.log(2021 - this.birthYear);
  };

  get age() {
    return 2021 - this.birthYear;
  };

  // Set a property already exists
  set fullName(name) {
    console.log(name);
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`)
  };

  get fullName() {
    return this._fullName;
  };

  // Static methods
  static hey() {
    console.log('Hey there!');
    console.log(this);
  };
};

const someone = new PersonCl('John DOE', 1965);
PersonCl.hey();







////
