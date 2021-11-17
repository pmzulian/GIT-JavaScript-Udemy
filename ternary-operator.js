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
//
// console.log(drink2);

//Ternary operator within string templates
// console.log(`I like drink ${age >= 18 ? "Wine" : "Water"}`);

// Comparison with ternary operator
// let modsAdded = 0;
// const isSubSection = true;
// console.log("isSubSection: ", isSubSection ? 1 : 0);
// console.log(modsAdded === (isSubSection ? 1 : 0) ? 'undef' : true);
// console.log(modsAdded === 1 ? 'undef' : true);

const a = 'String';
const b = null;
const c = 200;

console.log('Comparación a && b');
if(a && b){
  console.log('Ingresa al bucle');
} else {
  console.log('No ingresa al bucle');
};

console.log('Comparación a && c');
if(a && c){
  console.log('Ingresa al bucle');
} else {
  console.log('No ingresa al bucle');
}
