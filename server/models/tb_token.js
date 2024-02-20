'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_token.init({
    email_user: DataTypes.STRING,
    token: DataTypes.STRING,
    expiryTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tb_token',
  });
  return tb_token;
};