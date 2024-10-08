import nhanVienService from "../service/nhanVienService";
import hopDongService from "../service/hopDongService";
import chucVuService from "../service/chucVuService";

const Handle_Home = (req, res) => {
    return res.render("home.ejs");
}
const Handle_User = (req, res) => {
    return res.render("user.ejs");
}

const Handle_Nhan_Vien = async (req, res) => {
    let listNhanVien = await nhanVienService.readNhanVien();
    return res.render("sign_up.ejs", { listNhanVien });
}
const Handle_NhanVien_Create = async (req, res) => {
    let maNhanVien = req.body.maNhanVien;
    let tenNhanVien = req.body.tenNhanVien;
    let maChucVu = req.body.maChucVu;
    let maPhongBan = req.body.maPhongBan;
    let tuoi = req.body.tuoi;
    let sdt = req.body.sdt;
    let maBangLuong = req.body.maBangLuong;
    try {
        await nhanVienService.createUser(maNhanVien, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong);
        return res.status(200).json({ message: 'Create Nhân viên thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
    // return res.redirect("/nhanvien");
}

const Handle_NhanVien_Update = async (req, res) => {
    let maNhanVienCu = req.params.maNhanVienCu;
    let maNhanVienMoi = req.body.maNhanVienMoi;
    let tenNhanVien = req.body.tenNhanVien;
    let maChucVu = req.body.maChucVu;
    let maPhongBan = req.body.maPhongBan;
    let tuoi = req.body.tuoi;
    let sdt = req.body.sdt;
    let maBangLuong = req.body.maBangLuong;
    try {
        await nhanVienService.updateUser(maNhanVienCu, maNhanVienMoi, tenNhanVien, maChucVu, maPhongBan, tuoi, sdt, maBangLuong);
        return res.status(200).json({ message: 'Update thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
    // return res.redirect("/nhanvien");
}
const Handle_NhanVien_Delete = async (req, res) => {

    try {
        await nhanVienService.deleteUser(req.params.maNhanVien);
        return res.status(200).json({ message: 'Delete thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const Handle_HopDong = async (req, res) => {
    let listNhanVien = await hopDongService.readHopDong();
    //sử dụng listNhanVien để renderView

}
const Handle_HopDong_Create = async (req, res) => {
    let maHopDong = req.body.maHopDong;
    let maNhanVien = req.body.maNhanVien;
    let ngayBatDau = req.body.ngayBatDau;
    let ngayKetthuc = req.body.ngayKetthuc;
    try {
        await hopDongService.createHopDong(maHopDong, maNhanVien, ngayBatDau, ngayKetthuc);
        return res.status(200).json({ message: 'Create hợp đồng thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_HopDong_Update = async (req, res) => {
    let maHopDongCu = req.params.maHopDongCu;
    let maHopDongMoi = req.body.maHopDongMoi;
    let maNhanVien = req.body.maNhanVien;
    let ngayBatDau = req.body.ngayBatDau;
    let ngayKetthuc = req.body.ngayKetthuc;
    try {
        await hopDongService.updateHopDong(maHopDongCu, maHopDongMoi, maNhanVien, ngayBatDau, ngayKetthuc);
        return res.status(200).json({ message: 'Update hợp đồng thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_HopDong_Delete = async (req, res) => {
    let maHopDong = req.params.maHopDong;
    try {
        await hopDongService.deleteHopDong(maHopDong);
        return res.status(200).json({ message: 'Delete hợp đồng thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const Handle_ChucVu = async (req, res) => {
    let listChucVu = await chucVuService.readChucVu();
    //sử dụng listChucVu để renderView
}
const Handle_ChucVu_Create = async (req, res) => {
    let maChucVu = req.body.maChucVu;
    let tenChucVu = req.body.tenChucVu;
    let luongCoDinh = req.body.luongCoDinh;
    try {
        await chucVuService.createChucVu(maChucVu, tenChucVu, luongCoDinh);
        return res.status(200).json({ message: 'Create Chức vụ thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_ChucVu_Update = async (req, res) => {
    let maChucVuCu = req.params.maChucVuCu;
    let maChucVuMoi = req.body.maChucVuMoi;
    let tenChucVu = req.body.tenChucVu;
    let luongCoDinh = req.body.luongCoDinh;
    try {
        await chucVuService.updateChucVu(maChucVuCu, maChucVuMoi, tenChucVu, luongCoDinh);
        return res.status(200).json({ message: 'Update Chức vụ thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_ChucVu_Delete = async (req, res) => {
    let maChucVu = req.params.maChucVu;
    try {
        await chucVuService.deleteChucVu(maChucVu);
        return res.status(200).json({ message: 'Delete Chức vụ thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
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
    Handle_HopDong_Delete,

    Handle_ChucVu,
    Handle_ChucVu_Create,
    Handle_ChucVu_Update,
    Handle_ChucVu_Delete
}