const express = require('express');
const app = express();

// Requiere las rutas
const rutasProductos = require('./routes/productosRoutes');
const rutasContacto = require('./routes/usuariosRoutes');

// Levanta el servidor 
app.listen(3000, () => console.log('El servidor esta corriendo'));

// Atiende a /productos y /usuarios
app.use('/producto', rutasProductos);
app.use('/usuarios', rutasContacto);

// Home 
app.get('/',(req, res) => {
    res.send('Home')
});
 
// Erro 404
app.get('*', (req, res) => {
    res.send('/erro404')
});

