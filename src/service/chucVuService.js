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
    await db.ChucVu.update(
        {
            maChucVu: maChucVuMoi,
            tenChucVu: tenChucVu,
            luongCoDinh: luongCoDinh
        },
        {
            where: { maChucVu: maChucVuCu }
        }
    )
};

const deleteChucVu = async (id) => {
    try {
        await db.ChucVu.destroy({
            where: { maChucVu: id }
        })
    } catch (err) {
    }
}
module.exports = { createChucVu, readChucVu, updateChucVu, deleteChucVu }