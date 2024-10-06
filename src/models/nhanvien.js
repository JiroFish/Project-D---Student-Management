'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhanVien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NhanVien.hasOne(models.HopDong, { foreignKey: 'maNhanVien', sourceKey: 'maNhanVien' });
      NhanVien.belongsTo(models.ChucVu, { foreignKey: 'maChucVu', sourceKey: 'maChucVu' });
    }
  }
  NhanVien.init({
    maNhanVien: DataTypes.STRING,
    tenNhanVien: DataTypes.STRING,
    maChucVu: DataTypes.STRING,
    maPhongBan: DataTypes.STRING,
    tuoi: DataTypes.INTEGER,
    sdt: DataTypes.STRING,
    maBangLuong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NhanVien',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    },
  });
  NhanVien.removeAttribute('id');
  return NhanVien;
};