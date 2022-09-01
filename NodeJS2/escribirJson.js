const fd = require("fs");
const escribirJson = (titulo) => {

    let tareaNueva = {
        titulo: titulo,
        estado: 'pendiente'
    }
    
    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);

    data.push(tareaNueva);

    let dataJsonNuevo = JSON.stringify(data);

    fd.writeFileSync("./tareas.json", dataJsonNuevo, "utf8");
    
};

module.exports = escribirJson;