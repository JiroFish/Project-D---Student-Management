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
    // routes.get("/store", HomeController.Handle_Store);

    return app.use("/", routes);
}
// module.exports = {
//     initWebRoutes
// }
export default initWebRoutes;