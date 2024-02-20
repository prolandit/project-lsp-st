const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const __hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}
  
const __comparePassword = (payloadPass, dbPass) => {
    return bcrypt.compareSync(payloadPass, dbPass);
}
  
module.exports = { __hashPassword, __comparePassword }