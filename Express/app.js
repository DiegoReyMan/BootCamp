const express = require('express');
const app = express();

app.listen(3000, () => console.log('El servidor esta corriendo'));

app.get('/',(req, res) => {
    res.send('Home')
});

app.get('/contacto', (req, res) => {
    res.send('Contacto')
});

app.get('/productos/:idProducto', (req, res) => {
    const porducto = req.params.idProducto;
    res.send(`Esta es la pagina del producto ${porducto}`)
});

app.get('*', (req, res) => {
    res.send(`Error 404`)
});
