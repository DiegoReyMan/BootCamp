let autos = require('./autos');

// Objeto literal consesionara, con atributos y funciones.
let concesionaria = {

    autos: autos,

    buscarAuto: function(patente) {
        let res = null;
        this.autos.forEach(auto => {
            if (auto.patente === patente) {
                res = auto;
            }
        });
        return res;
    },

    venderAuto: function(patente) {
        const auto = this.buscarAuto(patente);
        if (auto != null) {
            auto.vendido = true;
        }
    }
}

console.log(concesionaria.venderAuto('JJK116'))
console.log(concesionaria.buscarAuto('JJK116'));
