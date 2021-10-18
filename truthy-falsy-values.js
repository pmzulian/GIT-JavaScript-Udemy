//Truthy and Falsy values

console.log('Valor de cero: ' + Boolean(0));
console.log('Valor de undefined: ' + Boolean(undefined));
console.log('Valor de string: ' + Boolean('Globant'));
console.log('Valor de objeto vacío: ' + Boolean({}));

// const money = 0;
const money = 100;
if(money) {
  console.log('Do not spend it all');
} else {
  console.log('You should be careful');
}

let height;

if(height) {
  console.log('Height is defined');
} else {
  console.log('Height is undefined');
}
