const express = require('express');
const app = express();

app.listen(3000, () => console.log('El servidor esta corriendo'));

app.get('/',(req, res) => {
    res.send('Home')
});

app.get('/producto', (req, res) => {
    res.send('Producto')
});

app.get('/contacto', (req, res) => {
    res.send('Contacto')
});

app.get('/contacto/:idContacto', (req, res) => {
    const contacto = req.params.idContacto;
    res.send(`Esta es la pagina del contacto ${contacto}`)
});

app.get('*', (req, res) => {
    res.send(`Error 404`)
});
