'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LuongBong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LuongBong.hasOne(models.NhanVien, { foreignKey: 'maNhanVien', sourceKey: 'maNhanVien' });
      LuongBong.belongsTo(models.BangKhauTru, { foreignKey: 'maKhauTru', targetKey: 'maKhauTru' });
    }
  }
  LuongBong.init({
    maBangLuong: DataTypes.STRING,
    maNhanVien: DataTypes.STRING,
    thang: DataTypes.INTEGER,
    luongThuong: DataTypes.INTEGER,
    maKhauTru: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LuongBong',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    },
  });
  LuongBong.removeAttribute('id');
  return LuongBong;
};