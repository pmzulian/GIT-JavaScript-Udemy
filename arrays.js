// Sperse arrays
/* const disperso = new Array(5);
console.log(disperso.length);
disperso[100] = 20;
console.log(disperso.length);
console.log(disperso[50]);
disperso.forEach(value => console.log(value)); */

let arr = [1,5,10,15];
arr[20] = 100;
console.log(`Length: ${arr.length}`);
arr.forEach(value => console.log(value));
console.log(`Index empty: ${arr[15]}`);