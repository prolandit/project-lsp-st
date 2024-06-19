const ProfileModel = require("./profile");
const TokenModel = require("./token");
const UserModel = require("./user");

const models = (database) => ({
  user: UserModel(database),
  token: TokenModel(database),
  profile: ProfileModel(database),
});

module.exports = models;
