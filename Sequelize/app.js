
const express = require('express');
const verifyJWS = require('./middlewares/verifyJWT');
const db = require('sequelize');

const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');


const app = express();
const PORT = 3000;

app.use(express.json()); 

app.use('/', usersRoutes);



app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});





