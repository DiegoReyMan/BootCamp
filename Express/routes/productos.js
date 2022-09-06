const express = require('express');
 
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Producto')
});

router.get('/:idPoducto', (req, res) => {
    const producto = req.params.idPoducto;
    res.send(`Esta es la pagina del producto ${producto}`)
});

router.get('/:idPoducto/comentarios/:idComentario?', (req, res) => {
    const producto = req.params.idPoducto;
    const comentario = req.params.idComentario;
    if (comentario == undefined) {
        res.send(`Esta es la pagina del comentario del ${producto}`)
    } else {
        res.send(`Esta es la pagina del comentario del ${producto} viendo el comentarios ${comentario}`)
    }
});

module.exports = router;

 