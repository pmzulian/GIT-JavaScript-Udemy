// Ternary operator
// const age = 30;
// age >= 18 ?
//   console.log('You can drink wine ') :
//   console.log('You are too young');

//Fomulación expresiva para variables condicionales
// const drink = age >= 18 ? 'Can drink' : 'Not able to drink';
// console.log(drink);

// let drink2;
//
// if(age >= 18) {
//   drink2 = 'Wine';
// } else {
//   drink2 = 'Water';
// }

// console.log(drink2);

//Ternary operator within string templates
// console.log(`I like drink ${age >= 18 ? "Wine" : "Water"}`);

// const num = '10,2';
// console.log("" && -0);

// Comparison with ternary operator
// let modsAdded = 0;
// const isSubSection = true;
// console.log("isSubSection: ", isSubSection ? 1 : 0);
// console.log(modsAdded === (isSubSection ? 1 : 0) ? 'undef' : true);
// console.log(modsAdded === 1 ? 'undef' : true);

// New feature
// Slice permite valores negativos para contar desde el final
const someArray = ['uno', 'dos', 'tres', 'cuatro'];
const something = someArray.slice(-2)[0];
console.log(something);
// At permite acceder al índice desde el final, con valores negativos
// console.log(someArray.at(-2));
