import nhanVienService from "../service/nhanVienService";
import hopDongService from "../service/hopDongService";
import chucVuService from "../service/chucVuService";
import phongBanService from "../service/phongBanService";
import donNghiPhepService from "../service/donNghiPhepService";
import luongBongService from "../service/luongBongService";
import bangKhauTruService from "../service/bangKhauTruService";

const Handle_LayChucVuGiaoVien = async (req, res) => {
    let GV = await nhanVienService.getGiaoVien();
    console.log(GV);
    return res.status(200).json(GV);
    // res.json({ message: "Lấy API thành công" });
}

const Handle_NhanVienInfo = async (maNhanVien) => {
    let nhanvien_info = await nhanVienService.getInfoNhanVien(maNhanVien);
    console.log("Nhân Viên info", nhanvien_info);
}

const Handle_Dropdown = async (req, res) => {
    let nhanVien = await nhanVienService.getDropdown();
    console.log("a=", nhanVien);
    return res.json(nhanVien);
}

module.exports = {
    Handle_LayChucVuGiaoVien,
    Handle_NhanVienInfo,
    Handle_Dropdown

}
