import db from '../models/index';


const createHopDong = async (maHopDong, maNhanVien, ngayBatDau, ngayKetthuc) => {
    try {
        await db.HopDong.create({
            maHopDong: maHopDong,
            maNhanVien: maNhanVien,
            ngayBatDau: ngayBatDau,
            ngayKetthuc: ngayKetthuc
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
    await db.NhanVien.update(
        {
            maHopDong: maHopDongMoi,
            maNhanVien: maNhanVien,
            ngayBatDau: ngayBatDau,
            ngayKetthuc: ngayKetthuc
        },
        {
            where: { maHopDong: maHopDongCu }
        }
    )
};

const deleteHopDong = async (id) => {
    try {
        await db.HopDong.destroy({
            where: { maHopDong: id }
        })
    } catch (err) {
    }
}
module.exports = { createHopDong, readHopDong, updateHopDong, deleteHopDong }