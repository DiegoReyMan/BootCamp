const express = require('express');

// Desestructura las funciones del controlador
const { deleteProduct } = require('../controllers/productsControllers');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();


router.delete('/delete', verifyJWT, deleteProduct)

module.exports = router;