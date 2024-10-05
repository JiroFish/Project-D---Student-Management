'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HopDong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HopDong.belongsTo(models.NhanVien, { foreignKey: 'maNhanVien', targetKey: 'maNhanVien' });
    }
  }
  HopDong.init({
    maHopDong: DataTypes.STRING,
    maNhanVien: DataTypes.STRING,
    ngayBatDau: DataTypes.DATEONLY,
    ngayKetthuc: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'HopDong',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    }
  });
  return HopDong;
};