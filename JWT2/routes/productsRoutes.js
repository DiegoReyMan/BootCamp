const express = require('express');
const { listProducts, newProduct, editProduct, deleteProduct } = require('../controllers/productsControllers');
const verifyAdmin = require('../middlewares/verifyAdmin');


const router = express.Router();

router.get('/', listProducts);

router.use(verifyAdmin);

router.post('/new', newProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;