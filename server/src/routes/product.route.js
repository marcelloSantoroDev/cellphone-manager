const express = require('express');

const router = express.Router();

const { productController } = require('../controllers');

router.post('/', productController.createProduct);
router.get('/', productController.getAll);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;