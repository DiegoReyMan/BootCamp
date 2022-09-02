const axios = require('axios').default;
const url = require('../api/apiData');

// Funcion que hace el fetch e imprime en pantalla la data de la url
const data = async () => {
    try {
        const response = await axios.get(url);
        console.log(response);

    } catch(err) {   
        console.log(err);
    }
}

module.exports = data;

