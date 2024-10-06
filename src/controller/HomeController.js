import nhanVienService from "../service/nhanVienService";
import hopDongService from "..service/hopDongService";

const Handle_Home = (req, res) => {
    return res.render("home.ejs");
}
const Handle_User = (req, res) => {
    return res.render("user.ejs");
}

const Handle_Nhan_Vien = async (req, res) => {
    let listNhanVien = await nhanVienService.readNhanVien();
    await nhanVienService.deleteUser();
    return res.render("sign_up.ejs", { listNhanVien });
}
const Handle_NhanVien_Create = (req, res) => {
    let maNhanVien = req.body.maNhanVien;
    let tenNhanVien = req.body.tenNhanVien;
    let maChucVu = req.body.maChucVu;
    let maPhongBan = req.body.maPhongBan;
    let tuoi = req.body.tuoi;
    let sdt = req.body.sdt;
    let maBangLuong = req.body.maBangLuong;
    nhanVienService.createUser(maNhanVien, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong);
    return res.redirect("/nhanvien");
}
const Handle_NhanVien_Update = (req, res) => {
    let maNhanVienCu = req.params.maNhanVienCu;
    let maNhanVienMoi = req.body.maNhanVienMoi;
    let tenNhanVien = req.body.tenNhanVien;
    let maChucVu = req.body.maChucVu;
    let maPhongBan = req.body.maPhongBan;
    let tuoi = req.body.tuoi;
    let sdt = req.body.sdt;
    let maBangLuong = req.body.maBangLuong;
    nhanVienService.updateUser(maNhanVienCu, maNhanVienMoi, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong);
    return res.redirect("/nhanvien");
}
const Handle_NhanVien_Delete = async (req, res) => {
    await nhanVienService.deleteUser(req.params.maNhanVien);
    return res.redirect("/nhanvien");
}

const Handle_HopDong = async (req, res) => {
    let listNhanVien = await hopDongService.readHopDong();
    //sử dụng listNhanVien để renderView
}
const Handle_HopDong_Create = async (req, res) => {
    maHopDong = req.body.maHopDong;
    maNhanVien = req.body.maNhanVien;
    ngayBatDau = req.body.ngayBatDau;
    ngayKetthuc = req.body.ngayKetthuc;
    await hopDongService.createHopDong(maHopDong, maNhanVien, ngayBatDau, ngayKetthuc);
}
const Handle_HopDong_Update = async (req, res) => {
    maHopDongCu = req.params.maHopDongCu;
    maHopDong = req.body.maHopDongMoi;
    maNhanVien = req.body.maNhanVien;
    ngayBatDau = req.body.ngayBatDau;
    ngayKetthuc = req.body.ngayKetthuc;
    await hopDongService.updateHopDong(maHopDongCu, maHopDongMoi, maNhanVien, ngayBatDau, ngayKetthuc);
}
const Handle_HopDong_Delete = async (req, res) => {
    maHopDong = req.body.maHopDong;
    await hopDongService.deleteHopDong(maHopDong);
}

module.exports = {
    Handle_Home,
    Handle_User,

    Handle_Nhan_Vien,
    Handle_NhanVien_Create,
    Handle_NhanVien_Update,
    Handle_NhanVien_Delete,

    Handle_HopDong,
    Handle_HopDong_Create,
    Handle_HopDong_Update,
    Handle_HopDong_Delete
}