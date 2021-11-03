// Values and Variables
/*console.log(40 + 20 + 7 + 13);

let firstName = 'Goku';
console.log(firstName);*/

// Undefined & Null
/*let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);

console.log(typeof null);

//Let, Const and Var
lastName = 'Globant';
console.log(lastName);*/

// Types
/*console.log(typeof 5);
console.log(typeof 'To be or not to be');
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol('Just me'));
console.log(typeof {});
console.log(typeof function(){});*/

/*function a() {
  return 5;
};

a.hi = 'Hello World';

console.log(a.hi);

console.log(true.toString());
console.log(typeof Math);
console.log(typeof BigInt(20));*/

// Pass by value and reference
/*var a = 5;
var b = a;
b++

console.log(a);
console.log(b);

var c = ['one', 'two'];
var d = c;
d.push('three');
console.log(c);
console.log(d);

let obj1 = {name: 'Globant', pass: '1234'};
let obj2 = obj1;
obj2.pass = '0987';
console.log(obj1);
console.log(obj2);*/

/*let e = [1,2,3,4];
let f = [].concat(e);
f.push(88930985);
console.log(e);
console.log(f);*/

/*let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);

obj.c = 5;

console.log(obj);
console.log(clone);

let clone2 = {...obj};
console.log(clone2);*/

let obj = {a: 'a', b: 'b', c: {deep: 'try to copy me'}};
let clone = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'Hahaha';
console.log(superClone);
