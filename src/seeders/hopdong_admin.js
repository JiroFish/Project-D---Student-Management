'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('hopdong', [{
      maHopDong: 'hdadmin',
      maNhanVien: 'admin',
      ngayBatDau: '2024-10-03',
      ngayKetThuc: ''
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
