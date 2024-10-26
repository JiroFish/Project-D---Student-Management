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
    let nhanvien_info = await db.nhanVienService.getInfoNhanVien(maNhanVien);
    console.log("Nhân Viên info", nhanvien_info);
}

module.exports = {
    Handle_LayChucVuGiaoVien,
    Handle_NhanVienInfo

}
