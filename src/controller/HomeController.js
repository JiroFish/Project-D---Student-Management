import nhanVienService from "../service/nhanVienService";
import hopDongService from "../service/hopDongService";
import chucVuService from "../service/chucVuService";
import phongBanService from "../service/phongBanService";
import donNghiPhepService from "../service/donNghiPhepService"

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

const Handle_PhongBan = async (req, res) => {
    let listPhongBan = await phongBanService.readPhongBan();
    //sử dụng listChucVu để renderView
}
const Handle_PhongBan_Create = async (req, res) => {
    let maPhongBan = req.body.maPhongBan;
    let tenPhongBan = req.body.tenPhongBan;
    let viTri = req.body.viTri;
    let truongPhong = req.body.truongPhong;
    try {
        await phongBanService.createPhongBan(maPhongBan, tenPhongBan, viTri, truongPhong);
        return res.status(200).json({ message: 'Create Phòng ban thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_PhongBan_Update = async (req, res) => {
    let maPhongBanCu = req.params.maPhongBanCu;
    let maPhongBanMoi = req.body.maPhongBanMoi;
    let tenPhongBan = req.body.tenPhongBan;
    let viTri = req.body.viTri;
    let truongPhong = req.body.truongPhong;
    console.log(maPhongBanCu, maPhongBanMoi, tenPhongBan, viTri, truongPhong);
    try {
        await phongBanService.updatePhongBan(maPhongBanCu, maPhongBanMoi, tenPhongBan, viTri, truongPhong);
        return res.status(200).json({ message: 'Update Phòng ban thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_PhongBan_Delete = async (req, res) => {
    let maPhongBan = req.params.maPhongBan;
    try {
        await phongBanService.deletePhongBan(maPhongBan);
        return res.status(200).json({ message: 'Delete Phòng ban thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

const Handle_DonNghiPhep = async (req, res) => {
    let listDonNghiPhep = await donNghiPhepService.readDonNghiPhep();
    //sử dụng listChucVu để renderView
}
const Handle_DonNghiPhep_Create = async (req, res) => {
    let maDonNghiPhep = req.body.maDonNghiPhep;
    let maNhanVien = req.body.maNhanVien;
    let ngayBatDau = req.body.ngayBatDau;
    let ngayKetThuc = req.body.ngayKetThuc;
    try {
        await donNghiPhepService.createDonNghiPhep(maDonNghiPhep, maNhanVien, ngayBatDau, ngayKetThuc);
        return res.status(200).json({ message: 'Create Đơn nghỉ phép thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_DonNghiPhep_Update = async (req, res) => {
    let maDonNghiPhepCu = req.params.maDonNghiPhepCu;
    let maDonNghiPhepMoi = req.body.maDonNghiPhepMoi;
    let maNhanVien = req.body.maNhanVien;
    let ngayBatDau = req.body.ngayBatDau;
    let ngayKetThuc = req.body.ngayKetThuc;
    try {
        await donNghiPhepService.updateDonNghiPhep(maDonNghiPhepCu, maDonNghiPhepMoi, maNhanVien, ngayBatDau, ngayKetThuc);
        return res.status(200).json({ message: 'Update Đơn nghỉ phép thành công' });
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}
const Handle_DonNghiPhep_Delete = async (req, res) => {
    let maDonNghiPhep = req.params.maDonNghiPhep;
    try {
        await donNghiPhepService.deleteDonNghiPhep(maDonNghiPhep);
        return res.status(200).json({ message: 'Delete Đơn nghỉ phép thành công' });
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
    Handle_ChucVu_Delete,

    Handle_PhongBan,
    Handle_PhongBan_Create,
    Handle_PhongBan_Update,
    Handle_PhongBan_Delete,

    Handle_DonNghiPhep,
    Handle_DonNghiPhep_Create,
    Handle_DonNghiPhep_Update,
    Handle_DonNghiPhep_Delete
}