// New feature
// Slice permite valores negativos para contar desde el final
const someArray = ['uno', 'dos', 'tres', 'cuatro'];
const something = someArray.slice(-2)[0];
console.log(something);
// At permite acceder al índice desde el final, con valores negativos
// console.log(someArray.at(-2));



//Arrays with Arrays
const array = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f']
];
console.log(array[0][0]); // a
console.log(array[0][2]); // c
console.log(array[1][1]); // d
console.log(array[1][2]); // f
