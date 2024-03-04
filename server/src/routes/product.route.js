const express = require('express');

const router = express.Router();

const { productController } = require('../controllers');

router.post('/', productController.createProduct);

module.exports = router;