'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LuongBong', {
      maBangLuong: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      maNhanVien: {
        type: Sequelize.STRING
      },
      thang: {
        type: Sequelize.INTEGER
      },
      luongThuong: {
        type: Sequelize.INTEGER
      },
      maKhauTru: {
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
    await queryInterface.dropTable('LuongBong');
  }
};