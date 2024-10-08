import db from '../models/index';


const createPhongBan = async (maPhongBan, tenPhongBan, viTri, truongPhong) => {
    try {
        await db.PhongBan.create({
            maPhongBan: maPhongBan,
            tenPhongBan: tenPhongBan,
            viTri: viTri,
            truongPhong: truongPhong
        })
    } catch (err) {
        console.log(err);
    }
}

const readPhongBan = async () => {
    let PhongBan = [];
    try {
        PhongBan = await db.PhongBan.findAll({
            raw: true,
        })
        console.log(PhongBan)
        return PhongBan;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const updatePhongBan = async (maPhongBanCu, maPhongBanMoi, tenPhongBan, viTri, truongPhong) => {
    console.log(maPhongBanCu, maPhongBanMoi, tenPhongBan, viTri, truongPhong);
    const [updatedRows] = await db.PhongBan.update(
        {
            maPhongBan: maPhongBanMoi,
            tenPhongBan: tenPhongBan,
            viTri: viTri,
            truongPhong: truongPhong
        },
        {
            where: { maPhongBan: maPhongBanCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('PhongBan Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deletePhongBan = async (id) => {
    const deletedRows = await db.PhongBan.destroy({
        where: { maPhongBan: id }
    });
    if (deletedRows === 0) {
        throw new Error('PhongBan Không tìm thấy bản ghi nào để xóa');
    }

}
module.exports = { createPhongBan, readPhongBan, updatePhongBan, deletePhongBan }