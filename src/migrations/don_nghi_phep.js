'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DonNghiPhep', {
      maDon: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      maNhanVien: {
        type: Sequelize.STRING
      },
      ngayBatDau: {
        type: Sequelize.DATEONLY
      },
      ngayKetThuc: {
        type: Sequelize.DATEONLY
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
    await queryInterface.dropTable('DonNghiPhep');
  }
};