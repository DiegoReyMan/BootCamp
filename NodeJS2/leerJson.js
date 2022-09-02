const fd = require("fs");

const leerJson = (path, command) => {

    // Lee el archivo de la "db" y lo trasnfora en un objeto
    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);
    
    switch (command) {
        case 'listar' :
            data.forEach(elem => {
                console.table(elem);
            });
            break;
        case undefined :
            console.log('Atención-Tienes que pasar una acción.');
            break;
        default :
            console.log('No entiendo que quieres hacer');
    }
    
}




module.exports = leerJson;

