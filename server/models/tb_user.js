'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    role: DataTypes.STRING,
    ktpPassport: DataTypes.STRING,
    met: DataTypes.STRING,
    birthPlace: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    nationality: DataTypes.STRING,
    address: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    posCode: DataTypes.STRING,
    telp: DataTypes.STRING,
    phone: DataTypes.STRING,
    lastEducation: DataTypes.STRING,
    signUpload: DataTypes.STRING,
    tuk: DataTypes.STRING,
    institution: DataTypes.STRING,
    company: DataTypes.STRING,
    fund: DataTypes.STRING,
    job: DataTypes.STRING,
    position: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    telpCompany: DataTypes.STRING,
    companyPosCode: DataTypes.STRING,
    fax: DataTypes.STRING,
    companyEmail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_user',
  });
  return tb_user;
};