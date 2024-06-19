const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const UserModel = (sequelize) => {
  const model = sequelize.define(
    "users",
    {
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      username: { type: DataTypes.STRING, unique: true },
      active: { type: DataTypes.BOOLEAN },
    },
    {
      tableName: "users",
      // Other model options go here
    }
  );

  // adding this if you want custom relationships
  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  model.initRelation = (models) => {
    model.hasOne(models.profile, {
      foreignKey: "userId",
      as: "Profile",
    });
  };

  return model;
};

module.exports = UserModel;
