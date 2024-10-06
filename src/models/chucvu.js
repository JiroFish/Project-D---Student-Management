'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChucVu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChucVu.hasMany(models.NhanVien, { foreignKey: 'maChucVu', targetKey: 'maChucVu' });
    }
  }
  ChucVu.init({
    maChucVu: DataTypes.STRING,
    tenChucVu: DataTypes.STRING,
    luongCoDinh: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ChucVu',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    }
  });
  return ChucVu;
};