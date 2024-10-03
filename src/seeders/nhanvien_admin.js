'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('nhanviens', [{
      maNhanVien: 'admin',
      tenNhanVien: 'admin',
      maChucVu: '',
      maPhongBan: '',
      tuoi: 18,
      sdt: '',
      id_BangLuong: ''
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
