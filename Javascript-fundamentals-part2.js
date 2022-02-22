'use strict';
///////////////////////////////////////
// Activating Strict Mode
/*let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');*/

// const interface = 'Audio';
// const private = 534;

///////////////////////////////////////
// Functions
/*function logger() {
  console.log('My name is Jonas');
}*/
// calling / running / invoking function
/*logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');
*/

///////////////////////////////////////
// Function Declarations vs. Expressions
// Function declaration
/*function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// Expresión con var tampoco es izada
const suma = add(10, 5);
console.log(suma);

var add = function (p, q) {
  return p + q;
};*/

///////////////////////////////////////
// Functions Calling Other Functions
/*function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));*/

///////////////////////////////////////
// Object Methods
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }
  calcAge: function () {
    console.log(this);
    return 2037 - this.birthYeah;
  }
/*  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }*/
};

jonas.calcAge();



