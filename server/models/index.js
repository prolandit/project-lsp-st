const TokenModel = require("./token");
const UserModel = require("./user");

const models = (database) => ({
  user: UserModel(database),
  token: TokenModel(database),
});

module.exports = models;
