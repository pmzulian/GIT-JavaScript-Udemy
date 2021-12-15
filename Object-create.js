//Object.create
// Creamos el prototipo a asignar a los objetos persona
const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  // Función para añadir propiedades
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
};

// Creamos un objeto persona y le asignamos el prototipo
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 1960;
steven.calcAge();
console.log(steven);

const sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis dui adipiscing'
console.log(sentence.length);

console.log(steven.__proto__ === PersonProto);


// console.log(Object.getPrototypeOf({}));
// console.log(Object.getPrototypeOf([]));
// console.log(Object.getPrototypeOf(() => {}));

// Mejorando nuevas propiedades
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1980);
sarah.calcAge();
console.log(sarah);
