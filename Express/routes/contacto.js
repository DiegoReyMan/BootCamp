const express = require('express');
 
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Contacto')
});

router.get('/:idContacto', (req, res) => {
    const contacto = req.params.idContacto;
    res.send(`Esta es la pagina del contacto ${contacto}`)
});

module.exports = router;