'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tb_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      ktpPassport: {
        type: Sequelize.STRING
      },
      met: {
        type: Sequelize.STRING
      },
      birthPlace: {
        type: Sequelize.STRING
      },
      birthDate: {
        type: Sequelize.DATE
      },
      nationality: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      posCode: {
        type: Sequelize.STRING
      },
      telp: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      lastEducation: {
        type: Sequelize.STRING
      },
      signUpload: {
        type: Sequelize.STRING
      },
      tuk: {
        type: Sequelize.STRING
      },
      institution: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      fund: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      companyAddress: {
        type: Sequelize.STRING
      },
      telpCompany: {
        type: Sequelize.STRING
      },
      companyPosCode: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      companyEmail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tb_users');
  }
};