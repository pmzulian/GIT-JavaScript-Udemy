// Class Expresion
/*const Person = class {
  constructor() {

  }
}*/

// Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };

  // Methods will be added to to prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }
};

console.log(PersonCl);

const jessica = new PersonCl('Jessica', 1990);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

//Add method to class prototype
PersonCl.prototype.greet = function () {
  console.log(`Hello ${this.firstName}`);
};

jessica.greet();

console.log('Mensaje conflicto con stash');

//Fin del archivo
