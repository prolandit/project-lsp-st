const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const TokenModel = (sequelize) =>
  sequelize.define(
    "tb_token",
    {
      email_user: DataTypes.STRING,
      token: DataTypes.STRING,
      expiryTime: DataTypes.DATE,
    },
    {
      // Other model options go here
    }
  );

module.exports = TokenModel;
