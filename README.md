**CHẠY LỆNH TRONG GITBASH**
Tạo migrations (đã tạo thì không cần):
npx sequelize-cli model:generate --name NhanVien --attributes maNhanVien:string,tenNhanVien:string,maChucVu:string,maPhongBan:string,tuoi:INTEGER,sdt:string,id_BangLuong:string
npx sequelize-cli model:generate --name HopDong --attributes maHopDong:string,maNhanVien:string,ngayBatDau:DATEONLY,ngayKetthuc:DATEONLY
npx sequelize-cli model:generate --name ChucVu --attributes maChucVu:string,tenChucVu:string,luongCoDinh:INTEGER
npx sequelize-cli model:generate --name PhongBan --attributes maPhongBan:string,tenPhongBan:string,viTri:string,truongPhong:string
npx sequelize-cli model:generate --name DonNghiPhep --attributes maDon:string,maNhanVien:string,ngayBatDau:DATEONLY,ngayKetthuc:DATEONLY

Chạy migrations (thực thi phần Tạo migrations - Đẩy lên DB):
npx sequelize-cli db:migrate

//////

Tạo seeder demo (đã tạo thì không cần):
npx sequelize-cli seed:generate --name User1

Chạy seeder demo:
npx sequelize-cli db:seed:all