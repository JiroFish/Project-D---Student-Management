'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DonNghiPhep extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DonNghiPhep.hasOne(models.NhanVien, { foreignKey: 'maNhanVien', sourceKey: 'maNhanVien' });
    }
  }
  DonNghiPhep.init({
    maDon: DataTypes.STRING,
    maNhanVien: DataTypes.STRING,
    ngayBatDau: DataTypes.DATEONLY,
    ngayKetThuc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'DonNghiPhep',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    }
  });
  DonNghiPhep.removeAttribute('id');
  return DonNghiPhep;
};