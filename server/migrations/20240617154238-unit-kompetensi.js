"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("unit_kompetensi", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      unit_kerja_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "unit_kerja",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nama_unit_kompetensi: {
        type: Sequelize.STRING(100),
      },
      SKKNI_SKKK: {
        type: Sequelize.STRING(50),
      },
      kode_unit_kompetensi: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("unit_kompetensi");
  },
};
