require('dotenv').config();

const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const verifyJWS = require('./middlewares/verifyJWT');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', usersRoutes);
app.use('/products', verifyJWS, productsRoutes);


app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto ${PORT}`);
});





