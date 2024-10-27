import nhanVienService from "../service/nhanVienService";
import hopDongService from "../service/hopDongService";
import chucVuService from "../service/chucVuService";
import phongBanService from "../service/phongBanService";
import donNghiPhepService from "../service/donNghiPhepService";
import luongBongService from "../service/luongBongService";
import bangKhauTruService from "../service/bangKhauTruService";

const Handle_ThemNhanVien = async (req, res) => {
    var info_ChucVu_PhongBan = null;
    try {
        info_ChucVu_PhongBan = await nhanVienService.getInfoChucVuPhongBan();
        return res.render("Themnhanvien.ejs", { info_ChucVu_PhongBan });

    } catch (error) {
        return res.render("Themnhanvien.ejs", { info_ChucVu_PhongBan });
    }
}

const Handle_ThongTinPhongBan = async (req, res) => {
    return res.render("Themnhanvien.ejs");
}

const Handle_ThemHopDong = async (req, res) => {
    try {
        let infoNhanVien = await nhanVienService.getInfoNhanVien();
        return res.render("Themhopdong.ejs", { infoNhanVien });
    } catch (error) {
        return res.render("Themhopdong.ejs", { infoNhanVien });


    }
}
const Handle_ThemPhongBan = async (req, res) => {
    return res.render("Themphongban.ejs");

}

module.exports = {
    Handle_ThemNhanVien,
    Handle_ThongTinPhongBan,
    Handle_ThemHopDong,
    Handle_ThemPhongBan

}
