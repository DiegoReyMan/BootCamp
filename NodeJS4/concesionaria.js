let autos = require('./autos');

// Objeto literal consesionara, con atributos y funciones.
let concesionaria = {

    autos: autos,

    // buscarAuto: function(patente) {
    //     let res = null;
    //     this.autos.forEach(auto => {
    //         if (auto.patente === patente) {
    //             res = auto;
    //         }
    //     });
    //     return res;
    // },

    buscarAuto: function(patente){
        const res = this.autos.find( auto => auto.patente === patente)
        if (res == undefined) {
            return null  
        } else {
            return res
        }
    },

    venderAuto: function(patente) {
        const auto = this.buscarAuto(patente);
        if (!auto) {
            auto.vendido = true;
        }
    }
}

//console.log(concesionaria.venderAuto('JJK116'))
console.log(concesionaria.buscarAuto('JJK116'));
