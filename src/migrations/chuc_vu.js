'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ChucVu', {
      maChucVu: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenChucVu: {
        type: Sequelize.STRING
      },
      luongCoDinh: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('ChucVu');
  }
};