// Class Expresion
/*const Person = class {
  constructor() {

  }
}*/

// Class Declaration
class PersonCl {
  constructor(firtsName, birthYear) {
    this.firtsName = firtsName;
    this.birthYear = birthYear;
  };

  calcAge() {
    console.log(2021 - this.birthYear);
  }
};

console.log(PersonCl);

const jessica = new PersonCl('Jessica', 1990);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
//Fin del archivo
