const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
// const tokenValidator = require('../middlewares/tokenValidator');

router.post('/', userController.createUser);

module.exports = router;