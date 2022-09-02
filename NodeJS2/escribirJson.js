const fd = require("fs");
const escribirJson = (titulo) => {

    // Crea el objeto a agregar
    let tareaNueva = {
        titulo: titulo,
        estado: 'pendiente'
    }
    
    // Lee el archivo de la "db" y lo trasnfora en un objeto
    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);

    // Agrega el objeto nuevo a los ya existentes
    data.push(tareaNueva);

    let dataJsonNuevo = JSON.stringify(data);

    // Escribe el nuevo objeto en el archivo.json
    fd.writeFileSync("./tareas.json", dataJsonNuevo, "utf8");
    
};

module.exports = escribirJson;