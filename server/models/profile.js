const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const ProfileModel = (sequelize) => {
  const model = sequelize.define(
    "profile",
    {
      nama: {
        type: DataTypes.STRING,
      },
      nik: {
        type: DataTypes.STRING,
      },
      alamat: {
        type: DataTypes.STRING,
      },
      tanggalLahir: {
        type: DataTypes.DATE,
      },
      gender: {
        type: DataTypes.INTEGER,
      },
      agama: {
        type: DataTypes.INTEGER,
      },
      signature: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
      meta: {
        type: DataTypes.JSON,
        defaultValue: "{}",
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "profile",
      // Other model options go here
    }
  );

  // adding this if you want custom relationships
  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  model.initRelation = (models) => {};

  return model;
};

module.exports = ProfileModel;
