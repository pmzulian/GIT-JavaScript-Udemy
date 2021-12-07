// Getters and Setters
const account = {
  owner: 'Gilbert',
  movements: [200, 500, 600, 860],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);

account.latest = 900;
console.log(account.movements);

// Obtener último elemento de un arreglo
const frutas = ['Manzana', 'Durazno', 'Banana', 'Pera'];

// Recuperar el último elemento usando length
const lastManually = frutas[frutas.length - 1];

// Usar en nuevo método at()
const lastAt = frutas.at(-1);

// Getters and Setters en Clases
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };

  // Methods will be added to to prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  };

  get age() {
    return 2021 - this.birthYear;
  };
};

const jessica = new PersonCl('Jessica', 1990);
// console.log(jessica.age);
console.log(jessica.__proto__);













// Fin archivo
