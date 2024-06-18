const { DataTypes } = require("sequelize");

/**
 *
 * @param {import("sequelize").Sequelize} sequelize
 * @returns
 */
const unit_kerja_model = (sequelize) => {
  const unit_kerja = sequelize.define(
    "unit_kerja",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      kode_skema_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "form_skema",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama_kel_pekerjaan: { type: DataTypes.STRING(100) },
      no_kel_pekerjaan: {
        type: DataTypes.INTEGER,
      },
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
      // Other unit_kerja options go here
      tableName: "unit_kerja",
    }
  );

  /**
   * this function will call after all models are loaded so you can add custom relationships freely from this file
   * @param {ReturnType<import("./index")>} models
   */
  unit_kerja.initRelation = (models) => {
    unit_kerja.belongsTo(models.formSkema, {
      foreignKey: "kode_skema_id",
      as: "form_skema",
    });

    unit_kerja.hasMany(models.unitKompetensi, {
      as: "unit_kompetensi",
      foreignKey: "unit_kerja_id",
    });
  };

  return unit_kerja;
};

module.exports = unit_kerja_model;
