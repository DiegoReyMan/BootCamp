const db = require('../database/models/index');


const funciones = {
    list: async (req,res) => {
        const movies = await db.Movie.findAll()
        res.status(200).json({movies});
    }
}

module.exports = funciones;