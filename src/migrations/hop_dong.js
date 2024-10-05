'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HopDong', {
      maHopDong: {
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
      ngayKetthuc: {
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
    await queryInterface.dropTable('HopDong');
  }
};