import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
import db from '../models/index';

// const salt = bcrypt.genSaltSync(10);
// const hashPassword = (userPassword) => {
//     let hash = bcrypt.hashSync(userPassword, salt);
//     return hash;
// }

const createUser = async (maNhanVien, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong) => {
    try {
        await db.NhanVien.create({
            maNhanVien: maNhanVien,
            tenNhanVien: tenNhanVien,
            maChucVu: maChucVu,
            maPhongBan: maPhongBan,
            tuoi: tuoi,
            sdt: sdt,
            maBangLuong: maBangLuong
        })
    } catch (err) {
        console.log(err);
    }
}

const readNhanVien = async () => {
    let nhanvien = [];
    try {
        nhanvien = await db.NhanVien.findAll({
            where: { maNhanVien: 'admin' },
            attributes: ['maNhanVien', 'tenNhanVien'],
            include: {
                model: db.HopDong,
                attributes: ['maHopDong']
            },
            raw: true,
            nest: true
        })
        console.log(nhanvien)
        return nhanvien;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }


    // let ur = [];
    // try {
    //     ur = await db.NhanVien.findOne({
    //         where: { maNhanVien: 'admin' },
    //         attributes: ['maNhanVien', 'tenNhanVien'],
    //         include: {
    //             model: db.HopDong,
    //             attributes: ['maHopDong']
    //         },
    //         raw: true,
    //         nest: true
    //     })
    //     console.log(ur)
    //     return ur;
    // } catch (err) {
    //     console.log(">>>>Lỗi: ", err)
    // }

}

const updateUser = async (maNhanVienCu, maNhanVienMoi, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong) => {
    const [updatedRows] = await db.NhanVien.update(
        {
            maNhanVien: maNhanVienMoi,
            tenNhanVien: tenNhanVien,
            maChucVu: maChucVu,
            maPhongBan: maPhongBan,
            tuoi: tuoi,
            sdt: sdt,
            maBangLuong: maBangLuong
        },
        {
            where: { maNhanVien: maNhanVienCu }
        }
    );
    if (updatedRows === 0) {
        throw new Error('Không tìm thấy bản ghi nào để cập nhật');
    }
};

const deleteUser = async (id) => {
    const deletedRows = await db.NhanVien.destroy({
        where: { maNhanVien: id }
    });
    if (deletedRows === 0) {
        throw new Error('Không tìm thấy bản ghi nào để xóa');
    }
}
module.exports = { createUser, readNhanVien, deleteUser, updateUser }