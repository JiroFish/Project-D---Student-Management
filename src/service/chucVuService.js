import db from '../models/index';


const createChucVu = async (maChucVu, tenChucVu, luongCoDinh) => {
    try {
        await db.ChucVu.create({
            maChucVu: maChucVu,
            tenChucVu: tenChucVu,
            luongCoDinh: luongCoDinh
        })
    } catch (err) {
        console.log(err);
    }
}

const readChucVu = async () => {
    let ChucVu = [];
    try {
        ChucVu = await db.ChucVu.findAll({
            raw: true,
        })
        console.log(ChucVu)
        return ChucVu;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const updateChucVu = async (maChucVuCu, maChucVuMoi, tenChucVu, luongCoDinh) => {
    const [updatedRows] = await db.ChucVu.update(
        {
            maChucVu: maChucVuMoi,
            tenChucVu: tenChucVu,
            luongCoDinh: luongCoDinh
        },
        {
            where: { maChucVu: maChucVuCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deleteChucVu = async (id) => {
    try {
        const deletedRows = await db.ChucVu.destroy({
            where: { maChucVu: id }
        })
    } catch (err) {
    }
    if (deletedRows === 0) {
        throw new Error('Không tìm thấy bản ghi nào để xóa');
    }
}
module.exports = { createChucVu, readChucVu, updateChucVu, deleteChucVu }