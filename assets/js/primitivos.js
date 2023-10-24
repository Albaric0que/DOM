//Tipo de dato primitivo string
let theName = "Albita";
console.log(theName);

theName = "Albu";
console.log(theName);

//typeof y nombre de la variable para imprimir en pantalla el tipo de dato
console.log(typeof theName);

//Tipo de dato primitivo number
let age = 38;
console.log(age);

console.log(typeof age);

age = 38.6;
console.log(typeof age); //En JS los número enteros y los números flotantes, a diferencia de en otros lenguajes, son considerados el mismo tipo de dato- dato number.

//Tipo de dato primitivo boolean
let sexy = true;
console.log(sexy);

console.log(typeof sexy);

//Tipo de dato primitivo undefined
let jobPosition;
console.log(typeof jobPosition); //Si inicializas una variable pero no le asignas un valor su valor será undefined.

//Tipo de dato primitivo null
let imNull = null;
console.log(typeof imNull); //Existe disparidad de opiniones acerca de null, null se considera un tipo de dato primitivo pero, sin embargo, en el navegador y los interpretes de JS el tipo de un nulo es un objeto, lo que ha llevado a que también haya gente que lo considere un objeto.

//Tipo de dato primitivo symbol
let symbol1 = Symbol("a");
let symbol2 = Symbol("a");

console.log(symbol1 === symbol2); //El tipo de dato symbol nunca es igual, incluso si lo declaramos exactamente igual. Podemos verlo al hacer una comparación exacta.
