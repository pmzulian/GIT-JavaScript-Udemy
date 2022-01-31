// Herencia en Funciones Constructoras
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Prototypes
Person.prototype.calcAge = function() {
  console.log(2021 - this.birthYear);
};

// Clase que hereda de Person
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear)
  this.course = course;
};

// No funciona, no hay cadena prototípica
// Student.prototype = Person.prototype

// Conectamos con el prototipo de Person (tiene que ser en este punto)
Student.prototype = Object.create(Person.prototype);

const mike = new Student('Mike', 2010, 'Computer Science');
console.log(mike);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

// Método propio de Student
mike.introduce();

// Podemos hacer uso del método de Person
mike.calcAge();

// Inspecionamos los prototipos
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor);

// Herencia con Clases
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

class StudentCl extends PersonCl {
  constructor (fullName, birthYear, course) {
    // Siempre debe ocurrir primero
    super(fullName, birthYear);
    this.course = course;
  };

  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };

  // Sobrescribimos método de la clase padre
  calcAge() {
    console.log(`I am ${2021 - this.birthYear} years old`);
  };
};

// const peter = new StudentCl('Peter Parker', 1990);
const peter = new StudentCl('Peter Parker', 1990, 'Computer Science');
peter.introduce();
peter.calcAge();

// Contexto funciones arrow
// Object.prototype.frase = 'Hola mundo';
const obj = {
  frase: 'Hola mundo',
  saludar: () => console.log(this.frase)
};

const myThis = {
  frase: 'Desde contexto con call'
}
obj.saludar.call(myThis);






////
