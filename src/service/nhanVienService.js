import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
import db from '../models/index';

// const salt = bcrypt.genSaltSync(10);
// const hashPassword = (userPassword) => {
//     let hash = bcrypt.hashSync(userPassword, salt);
//     return hash;
// }

const searchNhanVien = async (nv) => {
    let seach = await db.NhanVien.findAll({
        where: { tenNhanVien: nv }
    })
    return seach;
}

const createUser = async (maNhanVien, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt) => {
    try {
        await db.NhanVien.create({
            maNhanVien: maNhanVien,
            tenNhanVien: tenNhanVien,
            maChucVu: maChucVu,
            maPhongBan: maPhongBan,
            tuoi: tuoi,
            sdt: sdt
        })
    } catch (err) {
        console.log(err);
    }
}

const readNhanVien = async () => {
    let nhanvien = [];
    try {
        nhanvien = await db.NhanVien.findAll({
            // where: { maNhanVien: 'mnv_1' },
            // attributes: ['maNhanVien', 'tenNhanVien'],

            // include: {
            //     model: db.HopDong,
            //     attributes: ['maHopDong']
            // },
            include:
                [
                    {
                        model: db.ChucVu,
                        // where: {
                        //     maChucVu: "GV"
                        // },
                        attributes: ['tenChucVu']
                    },
                    {
                        model: db.PhongBan,
                        attributes: ['tenPhongBan']
                    }

                ]
            ,
            // include: {
            //     model: db.PhongBan,
            //     attributes: ['tenPhongBan']
            // },
            // include: {
            //     model: db.DonNghiPhep,
            //     attributes: ['maDonNghiPhep']
            // },
            // include: {
            //     model: db.LuongBong,
            //     attributes: ['maBangLuong']
            // },
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

const updateUser = async (maNhanVienCu, maNhanVienMoi, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt) => {
    const [updatedRows] = await db.NhanVien.update(
        {
            maNhanVien: maNhanVienMoi,
            tenNhanVien: tenNhanVien,
            maChucVu: maChucVu,
            maPhongBan: maPhongBan,
            tuoi: tuoi,
            sdt: sdt
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

const findByIdNhanVien = async (maNhanVienCu) => {
    try {
        nv1 = await db.NhanVien.findOne({
            where: { maNhanVien: maNhanVienCu },
            raw: true
        })
        return nv1;
    } catch (error) {
        throw new Error(error.messeage);
    }
}

const getGiaoVien = async () => {
    let getGV = await db.NhanVien.findAll(
        {
            where: {
                maChucVu: 'GV'
            },
            attributes: ['maNhanVien', 'tenNhanVien'],
            raw: true,
            nest: true
        }

    )
    return getGV;
}

const getInfoNhanVien = async (maNhanVien) => {
    await db.NhanVien.findAll({
        where: {
            maNhanVien: maNhanVien
        }
    })
}

module.exports = { createUser, readNhanVien, deleteUser, updateUser, getGiaoVien, findByIdNhanVien, searchNhanVien, getInfoNhanVien }