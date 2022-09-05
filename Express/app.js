const express = require('express');
const app = express();

app.listen(3000, () => console.log('El servidor esta corriendo'));

app.get('/', function(req, res){
    res.send('Home')
});

app.get('/contacto', function(req, res){
    res.send('Contacto')
});

app.get('/productos/:idProducto', function(req, res){
    const porducto = req.params.idProducto;
    res.send(`Esta es la pagina del producto ${porducto}`)
});
