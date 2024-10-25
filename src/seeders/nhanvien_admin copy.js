'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('nhanvien', [{
      maNhanVien: '3',
      tenNhanVien: 'Nguyễn D',
      maChucVu: 'GV',
      maPhongBan: 'PB1',
      tuoi: 18,
      sdt: '22222',
      maBangLuong: 'mbl'
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
