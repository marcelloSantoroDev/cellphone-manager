const { users } = require('../models');
const validatePassword = require('../utils/validatePassword');


const existingUserCheck = async (email, password) => {
    const user = await users.findOne({ where: { email } });

    if (!user) {
        return { type: 'USER_NOT_FOUND', message: 'Invalid fields' };
    }

    const passwordValid = validatePassword(password, user.dataValues);

    if(!passwordValid) return { type: 'INVALID_PASSWORD', message: 'Invalid fields' };

    return { type: null, message: '' };
};

module.exports = existingUserCheck;