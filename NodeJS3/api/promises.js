const axios = require('axios').default;
const url = require('../api/apiData');

// Funcion que devuelve una promesa con sus correspondientes error y data
const getData = () => {
    let promies = axios.get(url)
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
}
module.exports = getData;