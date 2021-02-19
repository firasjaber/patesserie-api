const express = require('express');
const router = express.Router();
const {getAllProducts, updateProduct, addProduct, deleteProduct, getProduct} = require('./../controllers/product.controllers');

router.get('/', getAllProducts);
router.put('/:id', updateProduct);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);
router.get('/:id',getProduct)

module.exports = router;
