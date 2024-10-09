import db from '../models/index';


const createDonNghiPhep = async (maDonNghiPhep, maNhanVien, ngayBatDau, ngayKetThuc) => {
    try {
        await db.DonNghiPhep.create({
            maDon: maDonNghiPhep,
            maNhanVien: maNhanVien,
            ngayBatDau: ngayBatDau,
            ngayKetThuc: ngayKetThuc
        })
    } catch (err) {
        console.log(err);
    }
}

const readDonNghiPhep = async () => {
    let DonNghiPhep = [];
    try {
        DonNghiPhep = await db.DonNghiPhep.findAll({
            raw: true,
        })
        console.log(DonNghiPhep)
        return DonNghiPhep;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const updateDonNghiPhep = async (maDonNghiPhepCu, maDonNghiPhepMoi, maNhanVien, ngayBatDau, ngayKetThuc) => {
    const [updatedRows] = await db.DonNghiPhep.update(
        {
            maDon: maDonNghiPhepMoi,
            maNhanVien: maNhanVien,
            ngayBatDau: ngayBatDau,
            ngayKetThuc: ngayKetThuc
        },
        {
            where: { maDon: maDonNghiPhepCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('DonNghiPhep Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deleteDonNghiPhep = async (id) => {
    try {
        const deletedRows = await db.DonNghiPhep.destroy({
            where: { maDon: id }
        })
        if (deletedRows === 0) {
            throw new Error('DonNghiPhep Không tìm thấy bản ghi nào để xóa');
        }
    } catch (err) {
    }
}
module.exports = { createDonNghiPhep, readDonNghiPhep, updateDonNghiPhep, deleteDonNghiPhep }