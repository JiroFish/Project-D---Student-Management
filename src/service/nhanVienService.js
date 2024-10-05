import mysql from 'mysql2/promise';
import Bluebird from 'bluebird';
import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

const hashPassword = (userPassword) => {
    let hash = bcrypt.hashSync(userPassword, salt);
    return hash;
}

const createUser = async (maNhanVien, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong) => {
    try {
        // let hashedPassword = hashPassword(password);
        // // const [rows, fields] = await conn.execute('insert Users(email,password) values (?,?)', [email, hashedPassword]);
        // await db.Users.create({
        //     email: email,
        //     password: hashedPassword,
        //     username: 'aa'
        // })
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
    // const conn = await mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'test', Promise: Bluebird
    // })
    // const [rows, fields] = await conn.execute("select * from Users");
    // return rows;


    let nhanvien = [];
    try {
        nhanvien = await db.NhanVien.findAll({
            // where: { maNhanVien: 'admin' },
            // attributes: ['maNhanVien', 'tenNhanVien'],
            // include: {
            //     model: db.HopDong,
            //     attributes: ['maHopDong']
            // },
            raw: true,
            // nest: true
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
    await db.NhanVien.update(
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
    )
};

const deleteUser = async (id) => {
    try {
        // const [rows, fields] = await conn.execute("delete from Users where id=?", [id]);
        // return rows;
        await db.NhanVien.destroy({
            where: { maNhanVien: id }
        })
    } catch (err) {
    }
}
module.exports = { createUser, readNhanVien, deleteUser, updateUser }