**Tải + cài đặt môi trường Node.js (Trên mạng)**
**Cài thư viện cần thiết: (Terminal)**
npm i
**Cấu hình lại DB nếu cần**
trong file src/configs/connectionDB.js
**Chạy lệnh trong gitbash/cmd trong folder dự án**
Tạo migrations (đã tạo thì không cần):
npx sequelize-cli model:generate --name NhanVien --attributes maNhanVien:string,tenNhanVien:string,maChucVu:string,maPhongBan:string,tuoi:INTEGER,sdt:string
npx sequelize-cli model:generate --name HopDong --attributes maHopDong:string,maNhanVien:string,ngayBatDau:DATEONLY,ngayKetThuc:DATEONLY
npx sequelize-cli model:generate --name ChucVu --attributes maChucVu:string,tenChucVu:string,luongCoDinh:INTEGER
npx sequelize-cli model:generate --name PhongBan --attributes maPhongBan:string,tenPhongBan:string,viTri:string,truongPhong:string
npx sequelize-cli model:generate --name DonNghiPhep --attributes maDon:string,maNhanVien:string,ngayBatDau:DATEONLY,ngayKetThuc:DATEONLY
npx sequelize-cli model:generate --name LuongBong --attributes maBangLuong:string,maNhanVien:string,thang:INTEGER,luongThuong:INTEGER,maKhauTru:string
npx sequelize-cli model:generate --name BangKhauTru --attributes maKhauTru:string,loaiKhauTru:string,giaTien:INTEGER,moTa:TEXT

Chạy migrations (thực thi phần Tạo migrations - Đẩy lên DB):
npx sequelize-cli db:migrate (tạo mới)
npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate (Khởi tạo lại)

//////
Tạo seeder demo (đã tạo thì không cần):
npx sequelize-cli seed:generate --name User1

Chạy seeder demo: (seeder là chèn data cứng vào db là không dùng lệnh insert)
npx sequelize-cli db:seed:all

//////
Chạy file:
npm start