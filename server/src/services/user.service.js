const bcrypt = require('bcrypt');
const { users } = require('../models')

const createUser = async ({name, email, password}) => {
    if (password.length < 6) {
        return {
            type: 'INVALID_VALUE',
            message: '"password" length must be at least 6 characters long'
        };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    console.log("USERS>>>>>> "+ users);
    
    const user = await users.create({
        name,
        email,
        password: hashedPassword
    });

    return { type: null, message: user }; 
}

module.exports = { createUser };