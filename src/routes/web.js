import express from "express";
import HomeController from "../controller/HomeController";
import ControllerNghiepVu from "../controller/ControllerNghiepVu";
import Controller_ChangePage from "../controller/Controller_ChangePage";
const routes = express.Router();


const initWebRoutes = (app) => {
    routes.get("/", HomeController.Handle_Home);
    routes.get("/user", HomeController.Handle_User);

    routes.get("/nhanvien", HomeController.Handle_Nhan_Vien);
    routes.post("/nhanvien/create", HomeController.Handle_NhanVien_Create);
    routes.post("/nhanvien/update/:maNhanVienCu", HomeController.Handle_NhanVien_Update);
    routes.post("/nhanvien/delete/:maNhanVien", HomeController.Handle_NhanVien_Delete);
    routes.post("/nhanvien/search", HomeController.Handle_seachnv);
    routes.post("/nhanvien/info", ControllerNghiepVu.Handle_NhanVienInfo);
    routes.post("/dropdown", ControllerNghiepVu.Handle_Dropdown);

    // routes.post("/nhanvien/findupdate/:maNhanVien", HomeController.Handle_Find_Update);

    routes.get("/hopdong", HomeController.Handle_HopDong);
    routes.post("/hopdong/create", HomeController.Handle_HopDong_Create);
    routes.post("/hopdong/update/:maHopDongCu", HomeController.Handle_HopDong_Update);
    routes.post("/hopdong/delete/:maHopDong", HomeController.Handle_HopDong_Delete);
    routes.post("/hopdong/search", HomeController.Handle_seachhd);

    routes.get("/chucvu", HomeController.Handle_ChucVu);
    routes.post("/chucvu/create", HomeController.Handle_ChucVu_Create);
    routes.post("/chucvu/update/:maChucVuCu", HomeController.Handle_ChucVu_Update);
    routes.post("/chucvu/delete/:maChucVu", HomeController.Handle_ChucVu_Delete);

    routes.get("/phongban", HomeController.Handle_PhongBan);
    routes.post("/phongban/create", HomeController.Handle_PhongBan_Create);
    routes.post("/phongban/update/:maPhongBanCu", HomeController.Handle_PhongBan_Update);
    routes.post("/phongban/delete/:maPhongBan", HomeController.Handle_PhongBan_Delete);

    routes.get("/donnghiphep", HomeController.Handle_DonNghiPhep);
    routes.post("/donnghiphep/create", HomeController.Handle_DonNghiPhep_Create);
    routes.post("/donnghiphep/update/:maDonNghiPhepCu", HomeController.Handle_DonNghiPhep_Update);
    routes.post("/donnghiphep/delete/:maDonNghiPhep", HomeController.Handle_DonNghiPhep_Delete);

    routes.get("/luongbong", HomeController.Handle_LuongBong);
    routes.post("/luongbong/create", HomeController.Handle_LuongBong_Create);
    routes.post("/luongbong/update/:maBangLuongCu", HomeController.Handle_LuongBong_Update);
    routes.post("/luongbong/delete/:maBangLuong", HomeController.Handle_LuongBong_Delete);

    routes.get("/bangkhautru", HomeController.Handle_BangKhauTru);
    routes.post("/bangkhautru/create", HomeController.Handle_BangKhauTru_Create);
    routes.post("/bangkhautru/update/:maKhauTruCu", HomeController.Handle_BangKhauTru_Update);
    routes.post("/bangkhautru/delete/:maKhauTru", HomeController.Handle_BangKhauTru_Delete);

    routes.get("/chucvugiaovien", ControllerNghiepVu.Handle_LayChucVuGiaoVien);


    routes.get("/themnhanvien", Controller_ChangePage.Handle_ThemNhanVien);



    return app.use("/", routes);
}
// module.exports = {
//     initWebRoutes
// }
export default initWebRoutes;