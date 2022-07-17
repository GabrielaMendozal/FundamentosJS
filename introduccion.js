// comentario en línea
/*
un
comentario
en
bloque
*/

let titulo = "Practica de JavaScript"; //string
let edad = 20; // number
let soltero = true; // Bolean true/false
let nombre = null; //Null
let apellido; //Undefined

console.log( "El titulo es:", titulo );
console.log( "Edad: ", edad);
console.log( "Soltero: ", soltero);
console.log( "Nombre: ", nombre);
console.log( "Apellido: ", apellido);

let resultado = 4 + 5 * 7 - 2 / 3;
console.log(resultado);

console.log( 8 === "8");

console.log( 8 !== "8");

nombre= "Alex";
apellido = "Rodriguez";

let nombreCompleto = nombre + " " + apellido;
console.log( nombreCompleto)

let x = 10;
let y = 20;
let z = 30;
let suma = x + y;
//suma = suma + z;
suma += z;
console.log( suma);
