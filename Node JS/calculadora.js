// Importa funciones de la calculadora

const suma = require('./Calculadora/sumar');
const resta = require('./Calculadora/restar');
const multipcacion = require('./Calculadora/multiplicar');
const divicion = require('./Calculadora/dividir');


console.log(suma(1, 2));
console.log(resta(1, 2));
console.log(multipcacion(1, 2));
console.log(divicion(1, 3));
console.log(divicion(3, 0));

