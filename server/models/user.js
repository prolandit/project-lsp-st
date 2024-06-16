const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const UserModel = (sequelize) =>
  sequelize.define(
    "tb_user",
    {
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      fullName: { type: DataTypes.STRING },
      role: { type: DataTypes.STRING },
      ktpPassport: { type: DataTypes.STRING },
      met: { type: DataTypes.STRING },
      birthPlace: { type: DataTypes.STRING },
      birthDate: { type: DataTypes.DATE },
      nationality: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      province: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      posCode: { type: DataTypes.STRING },
      telp: { type: DataTypes.STRING },
      phone: { type: DataTypes.STRING },
      lastEducation: { type: DataTypes.STRING },
      signUpload: { type: DataTypes.STRING },
      tuk: { type: DataTypes.STRING },
      institution: { type: DataTypes.STRING },
      company: { type: DataTypes.STRING },
      fund: { type: DataTypes.STRING },
      job: { type: DataTypes.STRING },
      position: { type: DataTypes.STRING },
      companyAddress: { type: DataTypes.STRING },
      telpCompany: { type: DataTypes.STRING },
      companyPosCode: { type: DataTypes.STRING },
      fax: { type: DataTypes.STRING },
      companyEmail: { type: DataTypes.STRING },
    },
    {
      // Other model options go here
    }
  );

module.exports = UserModel;
