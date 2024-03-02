const bcrypt = require('bcrypt');
const { users } = require('../models')
const validateEmail = require('../utils/validateEmail');

const createUser = async ({name, email, password}) => {
    
    if (password.length < 6) {
        return {
            type: 'INVALID_PASSWORD',
            message: '"password" length must be at least 6 characters long'
        };
    }

    if (name.length < 3) {
        return {
            type: 'INVALID_NAME',
            message: '"name" length must be at least 3 characters long'
        };
    }

    const checkEmail = validateEmail(email);

    if (checkEmail.type) {
        return checkEmail;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await users.create({
        name,
        email,
        password: hashedPassword
    });

    return { type: null, message: user }; 
}

module.exports = { createUser };