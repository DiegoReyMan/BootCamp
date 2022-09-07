//Aquí esta la exportación de nuestra base de datos ficticia (recordar que es un array)
const fs = require('fs');


const moviesController = {
   listMovies: (req, res) => {
      try{
         const db = require('../database/database');
         console.log(db);
         res.status(200).json(db);
      }catch(err){
         res.status(500).json("Error interno del server");
      }
      //Este controlador debe mostrar el listado de películas


   },

   movieId: (req, res) => {
      //Este controlador debe mostar el detalle de una pelicula especificado por un ID
      try{
         const db = require('../database/database');
         let id = req.params.id;
         let i = 0;
         while (i < db.length && db[i].id != id) i++;
         i < db.length ? res.status(200).json(db[i]) : res.status(404).json("No existe la pelicula con ese Id");
      }catch(error){
         res.status(500).json("Error interno del servidor");
      }

   },

   createMovie: (req, res) => {
      //Este controlador debe agregar una nueva película a nuestra base de datos
      const newMovie = {
         id: req.body.id,
         name: req.body.name,
         year: req.body.year,
         genre: req.body.genre,
         director: req.body.director
      }
      console.log(newMovie);
      
      const data = this.listMovies();
      data.push(newMovie);

   },

   deleteMovie: (req, res) => {
      const id = req.params.id;
      
   }
}

module.exports = moviesController;