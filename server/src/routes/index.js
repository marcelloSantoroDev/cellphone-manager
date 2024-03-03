const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');
const loginRoute = require('./login.route');
const authRoute = require('./auth.route');

router.use('/user', userRoute);
router.use('/login', loginRoute);
router.use('/auth', authRoute);

module.exports = router;