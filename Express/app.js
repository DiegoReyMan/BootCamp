const express = require('express');
const rutasProductos = require('./routes/productos');
const rutasContacto = require('./routes/contacto');


const app = express();

app.listen(3000, () => console.log('El servidor esta corriendo'));

app.use('/producto', rutasProductos);
app.use('/contacto', rutasContacto);

app.get('/',(req, res) => {
    res.send('Home')
});
 
app.get('*', (req, res) => {
    res.send('/erro404')
});
