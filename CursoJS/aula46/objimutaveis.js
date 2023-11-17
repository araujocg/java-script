// PreventExtensions
const obj1 = {a:1, b:2};

Object.preventExtensions(obj1);

delete obj1.b; // Funciona
obj1.a = 10;  // funciona
obj1.c = 3;  // Não funciona

console.log(obj1) // { a: 10 }

// freeze

const obj2 = {a:1234};

Object.freeze(obj2);

obj2.a = 5678; // Não funciona
obj2.b = 234; //Não funciona
delete obj2; //Não funciona

console.log(obj2); // { a: 1234 }

//

const obj3 = {a:1234};

Object.seal(obj3);

obj3.a = 5678; // funciona
obj3.b = 234; // Não funciona
delete obj3; //Não funciona

console.log(obj3); // { a: 5678 }
