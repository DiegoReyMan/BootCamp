const leer = require('./funcionesDeTareas');

let command = process.argv[2];

let data = leer('./tareas.json', command);

