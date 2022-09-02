const axios = require('axios').default;
const url = require('../api/apiData');

// Funcion que devuelve una promesa con sus correspondientes error y data
const data = async() => console.log(await axios.get(url));

module.exports = data;