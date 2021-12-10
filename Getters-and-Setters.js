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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  };

  // Methods will be added to to prototype property
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
};

const evelyn = new PersonCl('Evelyn WAUGH', 1990);
console.log(evelyn);
// console.log(evelyn.__proto__);













// Fin archivo
