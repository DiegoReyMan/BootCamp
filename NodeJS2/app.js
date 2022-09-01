const leer = require('./funcionesDeTareas');

let data = leer('./tareas.json'); 

let command = process.argv[2];

switch (command) {
    case 'listar' :
        console.table(data);
        break;
    case undefined :
        console.log('Atención-Tienes que pasar una acción.');
        break;
    default :
        console.log('No entiendo que quieres hacer');
}

