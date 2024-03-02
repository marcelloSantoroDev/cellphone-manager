const existingUserCheck = require("../utils/existingUserCheck");
const validateEmail = require("../utils/vaidateEmail");

const logUser = async ({email, password}) => {
    if (!email || !password) {
        return { type: 'INVALID_FIELDS', message: 'Some required fields are missing' };
    }

    const checkUser = await existingUserCheck(email);

    if (checkUser.type) {
        return checkUser;
    }

    const checkInvalidEmail = validateEmail(email);

    if (checkInvalidEmail.type) {
        return checkInvalidEmail;
    }

    return { type: null, message: '' };
}

module.exports = { logUser };