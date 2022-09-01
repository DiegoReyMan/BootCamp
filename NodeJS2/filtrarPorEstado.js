const fd = require("fs");
const { monitorEventLoopDelay } = require("perf_hooks");

const filtrarPorEstado = (command) => {

    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);

    switch (command) {
        case 'pendiente':
            data.forEach(elem => {
                if (elem.estado === 'pendiente') {
                    console.table(elem);
                };
            });
            break;
        case 'terminado': {
            data.forEach(elem => {
                if (elem.estado === 'terminado') {
                    console.table(elem);
                };
            });
            break;
        }
        case 'en progreso': {  
            data.forEach(elem => {
                if (elem.estado === 'en progreso') {
                    console.table(elem);
                };
            });
            break;
        }
        default:
            console.log('Especifique un estado');
    }
    
}
module.exports = filtrarPorEstado;