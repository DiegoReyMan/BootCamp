const axios = require('axios').default;
const url = require('../api/apiData');

const data = async() => console.log(await axios.get(url));

module.exports = data;