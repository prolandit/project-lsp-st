const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const elemen_model = (sequelize) => {
  const elemen = sequelize.define(
    "elemen",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      unit_kompetensi_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "unit_kompetensi",
          key: "kode_skema_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama_element: { type: DataTypes.STRING(100) },
      no_elemen: { type: DataTypes.INTEGER },
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
      // Other elemen options go here
      tableName: "elemen",
    }
  );

  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  elemen.initRelation = (models) => {
    elemen.belongsTo(models.unitKompetensi, {
      foreignKey: "unit_kompetensi_id",
      as: "unit_kompetensi",
    });

    elemen.hasMany(models.kuk, {
      as: "kuk",
      foreignKey: "elemen_id",
    });
  };

  return elemen;
};

module.exports = elemen_model;
