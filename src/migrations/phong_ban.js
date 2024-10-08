'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PhongBan', {
      maPhongBan: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tenPhongBan: {
        type: Sequelize.STRING
      },
      viTri: {
        type: Sequelize.STRING
      },
      truongPhong: {
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
    await queryInterface.dropTable('PhongBan');
  }
};