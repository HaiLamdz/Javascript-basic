// // khởi tạo 1 biến để xác định vị trí của slide đang hiển thị
// let slideindex = 0;

// // dùng DOM để truy xuất vào các ảnh thông qua class myslide
// let slideimg = document.getElementsByClassName('myslide');
// // console.log(slideindex);

// // viết funtion thực hiện công việc hiển thị slide 
// function slide(){

// // nếu vị trí mà index của slide vượt quá số lượng slide thì chuyển về slide đầu tiên
// if(slideindex >= slideimg.length){
//     slideindex = 0;
// }
// // nếu vị trí mà index của slide < 0 thì chuyển về slide cuối cunbgf
// if(slideimg < 0){
//     slideimg = slideindex.length -1
// }

//     // ẩn toàn bộ các slide đi
//     for (let i = 0; i < slideimg.length; i++) {
//        slideimg[i].style.display = "none" 
        
//     } 
//     // hiển thị ra slide có index đã quy định ở trên dòng 2
//     slideimg[slideindex].style.display = "block"

// }
// slide();

// // vieets function chuyển slide
// function nextslide(n){
//     slideindex += n;
//     slide();
//     console.log(slideindex);
    
// }
// // làn auto stop
// // khai báo 1 biến để xác định ciệc chuyển auto
// let autoimg;

// // viết function tự động chuyển slide
// function autoslide(){
//     // gọi hàm slide với index tăng dần
//     slideindex++;
//     slide();

//         // gọi hàm autoslide sau 1 khoảng thời gian (tính bằng mini giây)
//         autoimg = setTimeout(autoslide, 1000)
// }
// autoslide(); // nếu muốn bắt đầu tự động chuyển slide khi tải trang

// // viết function dừng tự động chuyển slide
// function stopslide(){
//     clearInterval(autoimg)
// }




// Bài 2: Tạo form đăng nhập gồm tài khoản, mật khẩu
// -	Mật khẩu phải khớp “123@123ab”
// -	Tài khoản phải dài hơn 6 ký tự và không quá 20 ký tự
// -	Khi ấn vào nút đăng nhập, nếu lỗi thì sẽ hiển thị sang bên cạnh
// -	Nếu không xảy ra lỗi thì hiển thị thông báo “Đăng nhập thành công”


// viết fuction xử lí đăng nhập
function dangnhap(){
    // lấy dữ liệu từ form khi ấn submit
    let taikhoan = document.getElementById('taikhoan').value;
    let matkhau = document.getElementById('matkhau').value;

    // dung DOM để bắn lỗi sang html
    let thognbao = document.getElementsByClassName('thongbao');
    // console.log(taikhoan);
    // console.log(matkhau);

    //xử lí đang nhập
    // xử lí varlidate
    // khoiwr tạo biến kiểm trra
    let check = true;

    // validate mất khẩu khớp
    if(matkhau == ''){
        check = false;
        thognbao[1].innerHTML = "vui lòng nhập mất khẩu"
    }
    if(taikhoan == ''){
        check = false;
        thognbao[1].innerHTML = "vui lòng nhập tài khoản";
    }
    if(matkhau !== '123@123ab'){
        check = false;
        thognbao[1].innerHTML = "bạn nhập sai mật khẩu"
    }else{
        thognbao[1].innerHTML = " ";
    }

    // validate tài khoản 
    if(taikhoan.length > 6 || taikhoan.length < 20){
        thognbao[1].innerHTML = " ";
    }else{
        check = false;
        thognbao[1].innerHTML = "độ dài tài khoản phải từ 6 > 20 kyws tự"
    }
    if(check){
        alert("đăng nhập thàm công");
    }
}


// Bài 3: Tạo form đăng ký thành viên gồm các thông tin
// -	Họ tên: không được để trống, lớn hơn 7 ký tự
// -	Năm sinh: không được để trống, tuổi phải trên 18 tuổi
// -	Combobox – Loại đăng ký: (thành viên thường, thành viên vip)
// -	Giá tiền: nếu chọn thành viên thường thì giá tự động điền là 3000, vip thì là 5000
// -	Số tháng đăng ký: không được để trống, phải là số
// 	Khi ấn đăng ký, nếu lỗi thì hiển thị lỗi ra theo từng trường dữ liệu
// 	Nếu không lỗi thì tính tổng tiền = giá tiền * số tháng / in ra màn hình


// viết function bắt sự kiện khi người dùng thay đổi lựa chọn lạo thành viên
// function chonloai(){
//     let loaidangky = document.getElementById('loaidangky');
//     let giaTien = document.getElementById('giaTien');

//     if(loaidangky.value == 1){
//         giaTien.value = 3000;
//     }else if(loaidangky.value == 2){
//         giaTien.value = 5000;
//     }else{
//         giaTien.value = '';
//     }
// }

// // validate
// function dangky(){
//     // khởi tạo biến kiểm tra
// let check = true;

// // validate
// let hoTen = document.getElementById('hoTen').value;
// let namsinh = document.getElementById('namsinh').value;
// let loaidangky = document.getElementById('loaidangky').value;
// let soThangDangKy = document.getElementById('soThangDangKy').value;
// let tongtien = document.getElementById('tongtien');
// let giaTien = document.getElementById('giaTien').value;
// let thongbao = document.getElementsByClassName('thongbao');
// namHienTai = new Date().getFullYear();
// tuoi = Number(namHienTai) - Number(namsinh);

// // validate
// if(hoTen === ' '){
//     check = false;
//     thongbao[0].innerHTML = 'vui lòng nhập họ tên';
// }else if(hoTen.length < 7){
//     check = false;
//     thongbao[0].innerHTML = 'vui lòng nhập họ tên > 7 ký tự';
// }
// else{
//     thongbao[0].innerHTML = '';
// }


// if(namsinh === ' '){
//     check = false;
//     thongbao[1].innerHTML = 'vui lòng nhập năm sinh';
// }else if(tuoi < 18){
//     check = false;
//     thongbao[1].innerHTML = 'yc lớn hơn 18';
// }
// else{
//     thongbao[1].innerHTML = '';
// }


// if(loaidangky === ' '){
//     check = false;
//     thongbao[2].innerHTML = 'vui lòng nhập laoij đăng ký';
// }
// else{
//         thongbao[2].innerHTML = '';
// }


// if(soThangDangKy ===' '){
//     check = false;
//     thongbao[3].innerHTML = 'vui lòng nhập số tháng đăng ký';
// }else if(isNaN(soThangDangKy)){
//     check = false;
//     thongbao[3].innerHTML = 'tháng phải là số';
// }
// else{
//     thongbao[3].innerHTML = '';
// }
// // tính tổng
// if(check){
//     let tong = Number(giaTien)*Number(soThangDangKy)
//     tongtien.value = tong
//     console.log(tong);
// }

// }


// khoogn dùng onchange
// document.getElementById('loaidangky').addEventListener('change', function{
//     let giaTien = document.getElementById('giaTien');
//     if(this.value == 1){
//         giaTien.value = 3000;
//     }else if(this == 2){
//         giaTien.value = 5000;
//     }else{
//         giaTien.value = '';
//     }

// })
