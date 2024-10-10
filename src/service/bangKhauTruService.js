import db from '../models/index';


const createBangKhauTru = async (maKhauTru, loaiKhauTru, giaTien, moTa) => {
    try {
        await db.BangKhauTru.create({
            maKhauTru: maKhauTru,
            loaiKhauTru: loaiKhauTru,
            giaTien: giaTien,
            moTa: moTa
        })
    } catch (err) {
        console.log(err);
    }
}

const readBangKhauTru = async () => {
    let BangKhauTru = [];
    try {
        BangKhauTru = await db.BangKhauTru.findAll({
            raw: true,
        })
        console.log(BangKhauTru)
        return BangKhauTru;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const updateBangKhauTru = async (maKhauTruCu, maKhauTruMoi, loaiKhauTru, giaTien, moTa) => {
    console.log(maKhauTruCu, maKhauTruMoi, loaiKhauTru, giaTien, moTa);
    const [updatedRows] = await db.BangKhauTru.update(
        {
            maKhauTru: maKhauTruMoi,
            loaiKhauTru: loaiKhauTru,
            giaTien: giaTien,
            moTa: moTa
        },
        {
            where: { maKhauTru: maKhauTruCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('BangKhauTru Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deleteBangKhauTru = async (id) => {
    const deletedRows = await db.BangKhauTru.destroy({
        where: { maKhauTru: id }
    });
    if (deletedRows === 0) {
        throw new Error('BangKhauTru Không tìm thấy bản ghi nào để xóa');
    }

}
module.exports = { createBangKhauTru, readBangKhauTru, updateBangKhauTru, deleteBangKhauTru }