import db from '../models/index';

const seachHopDong = async (hd) => {
    let seach = await db.HopDong.findAll({
        where: { maNhanVien: hd }
    })
    return seach;
}

const createHopDong = async (maHopDong, maNhanVien, ngayBatDau, ngayKetThuc) => {
    try {
        await db.HopDong.create({
            maHopDong: maHopDong,
            maNhanVien: maNhanVien,
            ngayBatDau: ngayBatDau,
            ngayKetThuc: ngayKetThuc
        })
    } catch (err) {
        console.log(err);
    }
}

const readHopDong = async () => {
    let hopDong = [];
    try {
        hopDong = await db.HopDong.findAll({
            raw: true,
        })
        console.log(hopDong)
        return hopDong;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const updateHopDong = async (maHopDongCu, maHopDongMoi, maNhanVien, ngayBatDau, ngayKetthuc) => {
    const [updatedRows] = await db.HopDong.update(
        {
            maHopDong: maHopDongMoi,
            maNhanVien: maNhanVien,
            ngayBatDau: ngayBatDau,
            ngayKetthuc: ngayKetthuc
        },
        {
            where: { maHopDong: maHopDongCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deleteHopDong = async (id) => {
    try {
        const deletedRows = await db.HopDong.destroy({
            where: { maHopDong: id }
        })
        if (deletedRows === 0) {
            throw new Error('Không tìm thấy bản ghi nào để xóa');
        }

    } catch (err) {
        throw new Error(err.message);
    }
}
module.exports = { createHopDong, readHopDong, updateHopDong, deleteHopDong, seachHopDong }