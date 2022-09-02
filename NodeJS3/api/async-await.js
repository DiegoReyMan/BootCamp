const axios = require('axios').default;
const url = require('../api/apiData');

const data = async ()=> {
    try {
        const response = await axios.get(url());
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = data;