const fd = require("fs");
const { monitorEventLoopDelay } = require("perf_hooks");

const filtrarPorEstado = (command) => {

    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);

    switch (command) {
        case 'pendiente':
            var pendientes = data.filter(function(elem){
                return elem.estado === 'pendiente';
            })
            console.log(pendientes);
            break;
        case 'terminado': {
            var terminados = data.filter(function(elem){
                return elem.estado === 'terminado';
            })
            console.log(terminados);
            break;
        }
        case 'en progreso': {  
            var enProceso = data.filter(function(elem){
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