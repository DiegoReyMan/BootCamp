let peliculas = [
    {
        id: 1,
        titulo: 'Spider-Man: Lejos de casa',
        duracion: 129,
        genero: 'Aventura'
    },
    {
        id: 2,
        titulo: 'Toy Story 4',
        duracion: 100,
        genero: 'Animación'
    },
    {
        id: 3,
        titulo: 'X-Men: Fénix Oscura',
        duracion: 113,
        genero: 'Acción'
    }
];

const express = require('express');
const router = express.Router();

router.put('/pelicula/:id', (req, res) => {
    const idPelicula = req.params.id;
    peliculas.forEach((elem) => {
        if(elem.id == idPelicula){
            elem.titulo = req.body.titulo;
            elem.genero = req.body.genero;
            elem.duracion = req.body.duracion;
        }
    })
})