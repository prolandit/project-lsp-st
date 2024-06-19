"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("profile", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nik: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      alamat: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      tanggalLahir: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      tempatLahir: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      agama: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      signature: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      photo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      meta: {
        allowNull: true,
        type: Sequelize.JSON,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("profile");

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
