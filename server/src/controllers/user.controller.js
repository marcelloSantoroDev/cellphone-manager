const { userService } = require('../services');
const tokenGenerator = require('../utils/tokenGenerator');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const {type, message} = await userService.createUser({ name, email, password });

    if (type === 'INVALID_PASSWORD') return res.status(200).json({token: null, message});
    if (type === 'INVALID_EMAIL') return res.status(200).json({token: null, message});
    if (type === 'INVALID_NAME') return res.status(200).json({token: null, message});
    if (type === 'CONFLICT') return res.status(200).json({token: null, message});

    const token = tokenGenerator(email);

    res.status(201).json({ token });
}

module.exports = {
    createUser,
};