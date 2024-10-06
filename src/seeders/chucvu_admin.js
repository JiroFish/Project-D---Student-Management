'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chucvu', [{
      maChucVu: 'cv_admin',
      maNhanVien: 'admin',
      ngayBatDau: '2024-10-03',
      ngayKetThuc: '2025-10-03'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
