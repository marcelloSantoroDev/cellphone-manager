const { userService } = require('../services');
const tokenGenerator = require('../utils/tokenGenerator');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const {type} = await userService.createUser({ name, email, password });

    if (type === 'INVALID_VALUE') return res.status(400).json({ message });

    const token = tokenGenerator(email);

    res.status(201).json({ token });
}

module.exports = {
    createUser,
};