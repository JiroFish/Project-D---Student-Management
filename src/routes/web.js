import express from "express";
import HomeController from "../controller/HomeController";
const routes = express.Router();


const initWebRoutes = (app) => {
    routes.get("/", HomeController.Handle_Home);
    routes.get("/user", HomeController.Handle_User);

    routes.get("/nhanvien", HomeController.Handle_Nhan_Vien);
    routes.post("/nhanvien/create", HomeController.Handle_NhanVien_Create);
    routes.put("/nhanvien/update/:maNhanVienCu", HomeController.Handle_NhanVien_Update);
    routes.delete("/nhanvien/delete/:maNhanVien", HomeController.Handle_NhanVien_Delete);

    routes.get("/hopdong", HomeController.Handle_HopDong);
    routes.post("/hopdong/create", HomeController.Handle_HopDong_Create);
    routes.put("/hopdong/update/:maHopDongCu", HomeController.Handle_HopDong_Update);
    routes.delete("/hopdong/delete/:maHopDong", HomeController.Handle_HopDong_Delete);

    routes.get("/chucvu", HomeController.Handle_ChucVu);
    routes.post("/chucvu/create", HomeController.Handle_ChucVu_Create);
    routes.put("/chucvu/update/:maChucVuCu", HomeController.Handle_ChucVu_Update);
    routes.delete("/chucvu/delete/:maChucVu", HomeController.Handle_ChucVu_Delete);

    routes.get("/phongban", HomeController.Handle_PhongBan);
    routes.post("/phongban/create", HomeController.Handle_PhongBan_Create);
    routes.put("/phongban/update/:maPhongBanCu", HomeController.Handle_PhongBan_Update);
    routes.delete("/phongban/delete/:maPhongBan", HomeController.Handle_PhongBan_Delete);

    routes.get("/donnghiphep", HomeController.Handle_DonNghiPhep);
    routes.post("/donnghiphep/create", HomeController.Handle_DonNghiPhep_Create);
    routes.put("/donnghiphep/update/:maDonNghiPhepCu", HomeController.Handle_DonNghiPhep_Update);
    routes.delete("/donnghiphep/delete/:maDonNghiPhep", HomeController.Handle_DonNghiPhep_Delete);
    return app.use("/", routes);
}
// module.exports = {
//     initWebRoutes
// }
export default initWebRoutes;