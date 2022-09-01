const leer = require('./leerJson');
const escribir = require('./escribirJson');

let command = process.argv[2];
let titulo = process.argv[3];


switch (command) {
    case 'crear': 
        let escribirTarea = escribir(titulo);
        break;
    default:
        let data = leer('./tareas.json', command);
}




