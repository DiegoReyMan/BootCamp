const fd = require("fs");

const filtrarPorEstado = (command) => {

    // Lee el archivo de la "db" y lo trasnfora en un objeto
    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);

    // Filtra el array de objetos por el estado
    switch (command) {
        case 'pendiente':
            var pendientes = data.filter((elem) => {
                return elem.estado === 'pendiente';
            })
            console.log(pendientes);
            break;
        case 'terminado': {
            var terminados = data.filter((elem) => {
                return elem.estado === 'terminado';
            })
            console.log(terminados);
            break;
        }
        case 'en progreso': {  
            var enProceso = data.filter((elem)  => {
                return elem.estado === 'en progreso';
            })
            console.log(enProceso);
            break;
        }
        default:
            console.log('Especifique un estado');
    }
    
}
module.exports = filtrarPorEstado;