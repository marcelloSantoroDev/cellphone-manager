const { emailSchema } = require('./schemas')

const validateEmail = (email) => {
    const { error } = emailSchema.validate(email);

    console.log(error);

    if (error) {
        return { type: 'INVALID_EMAIL', message: 'Invalid fields' };
    }

    return { type: null, message: '' };
};

module.exports = validateEmail;