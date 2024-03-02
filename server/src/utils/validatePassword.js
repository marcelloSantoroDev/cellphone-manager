const bcrypt = require('bcrypt');

const validatePassword = (password, user) => {
const {password: userPassword} = user;
return bcrypt.compareSync(password, userPassword);
}

module.exports = validatePassword;