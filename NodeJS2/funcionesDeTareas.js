const fd = require("fs");

const leerJson = (path, command) => {
    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);
    //return data;
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
    
}

module.exports = leerJson;
