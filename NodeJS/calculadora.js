// Importa funciones de la calculadora

const suma = require('./CalculadoraModules/sumar');
const resta = require('./CalculadoraModules/restar');
const multipcacion = require('./CalculadoraModules/multiplicar');
const divicion = require('./CalculadoraModules/dividir');


console.log(suma(1, 2));
console.log(resta(1, 2));
console.log(multipcacion(1, 2));
console.log(divicion(1, 3));
console.log(divicion(3, 0)); 

