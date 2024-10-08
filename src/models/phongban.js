'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhongBan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PhongBan.hasMany(models.NhanVien, { foreignKey: 'maPhongBan', sourceKey: 'maPhongBan' })
    }
  }
  PhongBan.init({
    maPhongBan: DataTypes.STRING,
    tenPhongBan: DataTypes.STRING,
    viTri: DataTypes.STRING,
    truongPhong: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PhongBan',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    },
  });
  PhongBan.removeAttribute('id');
  return PhongBan;
};