const express = require('express');
const router = express.Router();
const productController = require('../controllers/hoodie');
router.get('/', productController.getAllProducts);

router.get('/:id', productController.getSingleProduct);

router.patch('/:id');

router.post('/', productController.createProduct);

router.delete('/:id');

module.exports = router;
