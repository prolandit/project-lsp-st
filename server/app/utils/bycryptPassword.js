const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}
  
const verifyPassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}
  
module.exports = { hashPassword, verifyPassword }