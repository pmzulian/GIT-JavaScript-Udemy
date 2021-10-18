// Ternary operator
const age = 30;
age >= 18 ?
  console.log('You can drink wine ') :
  console.log('You are too young');

//Fomulación expresiva para variables condicionales
const drink = age >= 18 ? 'Can drink' : 'Not able to drink';
// console.log(drink);

let drink2;

if(age >= 18) {
  drink2 = 'Wine';
} else {
  drink2 = 'Water';
}

// console.log(drink2);

//Ternary operator within string templates
console.log(`I like drink ${age >= 18 ? "Wine" : "Water"}`);
