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
const searchNhanVienPB = async (nv, pb) => {
    let seach = await db.NhanVien.findAll({
        where: {
            tenNhanVien: nv,
            maPhongBan: pb
        },
        raw: true
    })
    return seach;
}

const getDropdown = async () => {
    let nhanvien = [];
    try {
        nhanvien = await db.NhanVien.findAll({
            where: {
                maNhanVien: "admin"
            },
            raw: true,
            nest: true
        })
        console.log("drop", nhanvien)
        return nhanvien;
    } catch (err) {
        console.log('>>>>>lỗi', err);
    }
}

const checkDuplicate = async (maNhanVien) => {
    try {
        let checker = await db.NhanVien.findAll({
            where: {
                maNhanVien: maNhanVien
            }
        });
        if (checker) {
            throw new Error("TB trong servive Đã có bản ghi trùng mã nhân viên");
        }
    } catch (error) {
        console.log("Lỗi hàm checkDuplicate");
        return;
    }
};

const createUser = async (maNhanVien, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt) => {
    try {
        await checkDuplicate(maNhanVien);
        await db.NhanVien.create({
            maNhanVien: maNhanVien,
            tenNhanVien: tenNhanVien,
            maChucVu: maChucVu,
            maPhongBan: maPhongBan,
            tuoi: tuoi,
            sdt: sdt
        })

    } catch (err) {
        throw new Error("Trùng mã nhân viên");
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

const getInfoNhanVien = async () => {
    let select_NhanVien_in_HopDong = await db.NhanVien.findAll({
        attributes: ['maNhanVien', 'tenNhanVien'],
        raw: true,
        nest: true
    })
    return select_NhanVien_in_HopDong
}

const getInfoChucVuPhongBan = async () => {
    let chucVu = await db.ChucVu.findAll({
        attributes: ['maChucVu', 'tenChucVu'],
        raw: true,
        nest: true
    })
    let phongBan = await db.PhongBan.findAll({
        attributes: ['maPhongBan', 'tenPhongBan'],
        raw: true,
        nest: true
    })
    let checkerNull = [{ errorMessage: null, thanhCong: null }]
    let cv_pb = [...chucVu, ...phongBan, ...checkerNull];
    console.log("check cv_pb", cv_pb);
    return cv_pb;
}

const nhanVienService = async () => {
    let nhanVien = await db.NhanVien.findAll({
        attributes: ['maNhanVien', 'tenNhanVien'],
        raw: true,
        nest: true
    })
    return nhanVien;
}

module.exports = {
    createUser,
    readNhanVien,
    deleteUser,
    updateUser,
    getGiaoVien,
    findByIdNhanVien,
    searchNhanVien,
    getInfoNhanVien,
    getDropdown,
    getInfoChucVuPhongBan,
    searchNhanVienPB,
    nhanVienService
}