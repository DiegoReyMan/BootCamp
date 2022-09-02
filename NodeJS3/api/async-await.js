const axios = require('axios').default;
const url = require('../api/apiData');

// Funcion que hace el fetch e imprime en pantalla la data de la url
const getData = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data);

    } catch(err) {   
        console.log(err);
    }
}

module.exports = getData;

