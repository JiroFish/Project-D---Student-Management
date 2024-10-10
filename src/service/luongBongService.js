import db from '../models/index';


const createLuongBong = async (maBangLuong, maNhanVien, thang, luongThuong, maKhauTru) => {
    try {
        await db.LuongBong.create({
            maBangLuong: maBangLuong,
            maNhanVien: maNhanVien,
            thang: thang,
            luongThuong: luongThuong,
            maKhauTru: maKhauTru
        })
    } catch (err) {
        console.log(err);
    }
}

const readLuongBong = async () => {
    let LuongBong = [];
    try {
        LuongBong = await db.LuongBong.findAll({
            raw: true,
        })
        console.log(LuongBong)
        return LuongBong;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const updateLuongBong = async (maBangLuongCu, maBangLuongMoi, maNhanVien, thang, luongThuong, maKhauTru) => {
    const [updatedRows] = await db.LuongBong.update(
        {
            maBangLuong: maBangLuongMoi,
            maNhanVien: maNhanVien,
            thang: thang,
            luongThuong: luongThuong,
            maKhauTru: maKhauTru
        },
        {
            where: { maBangLuong: maBangLuongCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('LuongBong Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deleteLuongBong = async (id) => {
    const deletedRows = await db.LuongBong.destroy({
        where: { maBangLuong: id }
    });
    if (deletedRows === 0) {
        throw new Error('LuongBong Không tìm thấy bản ghi nào để xóa');
    }

}
module.exports = { createLuongBong, readLuongBong, updateLuongBong, deleteLuongBong }