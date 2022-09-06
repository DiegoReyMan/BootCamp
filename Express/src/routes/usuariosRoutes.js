const express = require('express');
const router = express.Router();
const usuariosCtr = require('../controllers/usuariosController')

router.get('/', usuariosCtr.litarUsuarios);

router.get('/:idUsuario', usuariosCtr.infoUsuario);

module.exports = router;