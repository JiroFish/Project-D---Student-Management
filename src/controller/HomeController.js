import nhanVienService from "../service/nhanVienService";

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
module.exports = {
    Handle_Home,
    Handle_User,
    Handle_Nhan_Vien,
    Handle_NhanVien_Create,
    Handle_NhanVien_Update,
    Handle_NhanVien_Delete
}