let autos = require('./autos');

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
    }
}

console.log(concesionaria.buscarAuto('JA123'));
