const express = require('express');
const router = express.Router();
const {listMovies, movieId, createMovie, deleteMovie} = require('../controllers/moviesController')


router.get('/list', listMovies)

router.get('/detail/:id', movieId);

router.post('/create', createMovie);

router.delete('/destroy/:id', deleteMovie)

module.exports = router;