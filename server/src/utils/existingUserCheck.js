const { users } = require('../models');

const existingUserCheck = async (email) => {
    const getUser = await users.findOne({ where: { email } });

    if (!getUser) {
        return { type: 'USER_NOT_FOUND', message: 'Invalid fields' };
    }

    return { type: null, message: '' };
};

module.exports = existingUserCheck;