const leer = require('./leerJson');
const escribir = require('./escribirJson');
const filtrar = require('./filtrarPorEstado');

let command1 = process.argv[2];

for (let i = 0; i < 3; i++) {
    process.argv.shift();
}

let command2 = process.argv.join(' ');


switch (command1) {
    case 'crear': 
        let escribirTarea = escribir(command2);
        break;
    case 'filtrar':
        let filtrarTarea = filtrar(command2);
        break;
    default:
        let data = leer('./tareas.json', command1);
}




