const express = require('express');
const app = express();

//Esto es para parsear el body que viene en formato JSON
app.use(express.json());

//Aquí debajo van las Rutas a los endpoints
//Por ejemplo: '/api'
const rutasMovies = require('./routes/moviesRoutes')
app.use('/movies', rutasMovies)


//Levantar servidor desde express
app.listen(3000, () => {
   console.log('Servidor corriendo en puerto 3000');
});

// Home 
app.get('/',(req, res) => {
   res.send('Home')
});

// Erro 404
app.get('*', (req, res) => {
   res.send('/erro404')
});

