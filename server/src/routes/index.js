const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');
const loginRoute = require('./login.route');

router.use('/user', userRoute);
router.use('/login', loginRoute);

module.exports = router;