'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BangKhauTru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BangKhauTru.hasOne(models.LuongBong, { foreignKey: 'maKhauTru', sourceKey: 'maKhauTru' });
    }
  }
  BangKhauTru.init({
    maKhauTru: DataTypes.STRING,
    loaiKhauTru: DataTypes.STRING,
    giaTien: DataTypes.INTEGER,
    moTa: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'BangKhauTru',
    id: false,
    defaultScope: {  // Cấu hình mặc định cho mọi truy vấn
      attributes: { exclude: ['id'] }
    },
  });
  BangKhauTru.removeAttribute('id');
  return BangKhauTru;
};