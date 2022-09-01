const fd = require("fs");

const leerJson = (path) => {
    let dataJson = fd.readFileSync("./tareas.json", "utf8");
    let data = JSON.parse(dataJson);
    return data;
}

module.exports = leerJson;
