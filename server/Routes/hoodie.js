const express = require('express');
const fileUpload= require('../middlewares/fileUpload')
const authorization = require('../middlewares/authentication.middleware')
const router = express.Router();
const productController = require('../controllers/hoodie');
router.get('/', productController.getAllProducts);

router.get('/:id', productController.getSingleProduct);

//router.use(authorization)
router.patch('/:id');

router.post('/',fileUpload.single('image'), productController.createProduct);

router.delete('/:id');

module.exports = router;
