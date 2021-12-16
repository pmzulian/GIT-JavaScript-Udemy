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

////
