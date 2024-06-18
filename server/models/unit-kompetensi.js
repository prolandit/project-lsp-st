const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const unit_kompetensi_model = (sequelize) => {
  const unit_kompetensi = sequelize.define(
    "unit_kompetensi",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      unit_kerja_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "unit_kerja",
          key: "kode_skema_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama_unit_kompetensi: { type: DataTypes.STRING(100) },
      SKKNI_SKKK: { type: DataTypes.STRING(50) },
      kode_unit_kompetensi: { type: DataTypes.INTEGER },
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
      // Other unit_kompetensi options go here
      tableName: "unit_kompetensi",
    }
  );

  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  unit_kompetensi.initRelation = (models) => {
    unit_kompetensi.belongsTo(models.unitKerja, {
      foreignKey: "unit_kerja_id",
      as: "unit_kerja",
    });

    unit_kompetensi.hasMany(models.elemen, {
      as: "elemen",
      foreignKey: "unit_kompetensi_id",
    });
  };

  return unit_kompetensi;
};

module.exports = unit_kompetensi_model;
