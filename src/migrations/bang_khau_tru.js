'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BangKhauTru', {
      maKhauTru: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      loaiKhauTru: {
        type: Sequelize.STRING
      },
      giaTien: {
        type: Sequelize.INTEGER
      },
      moTa: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('BangKhauTru');
  }
};