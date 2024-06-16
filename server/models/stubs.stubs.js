const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const YourModelName = (sequelize) => {
  const model = sequelize.define(
    "table_name",
    {
      // add field here
    },
    {
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

module.exports = YourModelName;
