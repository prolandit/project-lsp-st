const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const kuk_model = (sequelize) => {
  const kuk = sequelize.define(
    "kuk",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      elemen_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "elemen",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama_kuk: { type: DataTypes.STRING(100) },
      no_kuk: { type: DataTypes.INTEGER },
      createdAt: {
        type: DataTypes.NOW,
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.NOW,
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      // Other kuk options go here
      tableName: "kuk",
    }
  );

  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  kuk.initRelation = (models) => {
    kuk.belongsTo(models.elemen, {
      foreignKey: "elemen_id",
      as: "elemen",
    });
  };

  return kuk;
};

module.exports = kuk_model;
