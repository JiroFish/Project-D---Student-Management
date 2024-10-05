'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NhanVien', {
      maNhanVien: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenNhanVien: {
        type: Sequelize.STRING
      },
      maChucVu: {
        type: Sequelize.STRING
      },
      maPhongBan: {
        type: Sequelize.STRING
      },
      tuoi: {
        type: Sequelize.INTEGER
      },
      sdt: {
        type: Sequelize.STRING
      },
      id_BangLuong: {
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
    await queryInterface.dropTable('NhanVien');
  }
};