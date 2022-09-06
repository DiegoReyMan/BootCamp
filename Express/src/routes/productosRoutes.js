const express = require('express');
const router = express.Router();
const productosCtr = require('../controllers/productosController');

router.get('/', productosCtr.listarProductos)

router.get('/:idPoducto', productosCtr.infoProducto);

router.get('/:idPoducto/comentarios/:idComentario?', productosCtr.comentarioProducto);

module.exports = router;

 