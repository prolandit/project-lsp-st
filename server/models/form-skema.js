const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const form_skema_model = (sequelize) => {
  const form_skema = sequelize.define(
    "form_skema",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nama_skema: { type: DataTypes.STRING },
      lisensi_skema: { type: DataTypes.INTEGER },
      SKKNI_SKKK: { type: DataTypes.STRING },
      tahun: { type: DataTypes.DATE },
      type_form: { type: DataTypes.BOOLEAN },
    },
    {
      // Other form_skema options go here
      tableName: "form_skema",
    }
  );

  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  form_skema.initRelation = (models) => {
    form_skema.hasMany(models.unitKerja, {
      as: "unit_kerja",
      foreignKey: "kode_skema_id",
    });
  };

  return form_skema;
};

module.exports = form_skema_model;
