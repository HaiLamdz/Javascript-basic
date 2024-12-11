// Bài 1: Tạo 1 banner slide gồm 5 ảnh, tạo 4 nút: PRE, NEXT, AUTO, STOP
// Viết chức năng tương ứng cho 4 nút vừa tạo
// -	PRE: quay lại ảnh trước
// -	NEXT: chuyển tới ảnh kế tiếp
// -	AUTO: tự động chuyển 
// -	STOP: Ngắt tự động



slideindex = 0;
function slide(){
    let slideimg = document.getElementsByClassName('myslide');

    for (let i = 0; i < slideimg.length; i++) {
        slideimg[i].style.display = 'none';
    }
    if(slideindex >= slideimg.length){
        slideindex = 0;
    }
    if(slideindex < 0){
        slideindex = slideimg.length -1;
    }
    slideimg[slideindex].style.display = 'block';
}
slide();
function chuyenanh(n){
    slideindex += n;
    slide();
}
let autoimg;
function auto(){
    slideindex++;
    slide();
    autoimg = setTimeout(auto, 1000)
}
auto();
function stop(){
    clearInterval(autoimg);
}


// Bài 2: Tạo form đăng nhập gồm tài khoản, mật khẩu
// -	Mật khẩu phải khớp “123@123ab”
// -	Tài khoản phải dài hơn 6 ký tự và không quá 20 ký tự
// -	Khi ấn vào nút đăng nhập, nếu lỗi thì sẽ hiển thị sang bên cạnh
// -	Nếu không xảy ra lỗi thì hiển thị thông báo “Đăng nhập thành công”

function dangnhap(){
    let taikhoan = document.getElementById('taikhoan').value;
    let matkhau = document.getElementById('passwork').value;
    // console.log(taikhoan);
    // console.log(matkhau);
    let thongbao = document.getElementsByClassName('thongbao');
    let check = true;
    if(taikhoan == ''){
        check = false;
        thongbao[0].innerHTML = 'Tài khoản không đucợ bỏ trống';
    }else if(taikhoan.length < 6 || taikhoan.length > 20){
        check = false;
        thongbao[0].innerHTML = 'Tài khoản phải hơn 7 ký tự và dưới 20 ký tự';
    }else{
        thongbao[0].innerHTML = '';
    }

    if(matkhau == ''){
        check = false;
        thongbao[1].innerHTML = 'mật khẩu không đucợ bỏ trống';
    }else if(matkhau !== "123@123ab"){
        check = false;
        thongbao[1].innerHTML = 'bạn đã nhập sai mật khẩu';
    }else{
        thongbao[1].innerHTML = '';
    }
    if(check){
        alert('đang nhập thành công');
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

function chonloai(){
    let loaidangky = document.getElementById('loaidangky');
    let giatien = document.getElementById('giatien');

    if(loaidangky.value == '1'){
        giatien.value = 3000;
    }else if(loaidangky.value == '2'){
        giatien.value = 5000;
    }else(
        giatien.value = 0
    )
}
function dangky(){
    let hoTen = document.getElementById('hoTen').value;
    let namsinh = document.getElementById('namsinh').value;
    let loaidangky = document.getElementById('loaidangky');
    let giatien = document.getElementById('giatien').value;
    let sothangdangky = document.getElementById('sothangdangky').value;
    let tongtien = document.getElementById('tongtien');

    let thongbao2 = document.getElementsByClassName('thongbao1');

    let checking = true;
    // Họ tên: không được để trống, lớn hơn 7 ký tự
    if(hoTen == ''){
        checking = false;
        thongbao2[0].innerHTML = 'họ tên không được để trống';
    }else if(hoTen.length < 7){
        checking = false;
        thongbao2[0].innerHTML = 'họ tên không được nhỏ hơn 7 ký tự';
    }else{
        thongbao2[0].innerHTML = ''
    }


    // Năm sinh: không được để trống, tuổi phải trên 18 tuổi
    let age = new Date().getFullYear() - namsinh;
    if(namsinh == ''){
        checking = false;
        thongbao2[1].innerHTML = 'năm sinh không được để trống';
    }else if(age < 18){
        checking = false;
        thongbao2[1].innerHTML = 'tuổi không dc nhỏ howh 18';
    }else{
        thongbao2[1].innerHTML = ''
    }


    // validate loại đăng ký
    if(loaidangky.value == '0'){
        checking = false;
        thongbao2[2].innerHTML = 'vui lòng chọn loại thành viên đăng ký';
    }else{
        thongbao2[2].innerHTML = ''
    }


    // Số tháng đăng ký: không được để trống, phải là số
    if(sothangdangky == ''){
        checking = false;
        thongbao2[3].innerHTML = 'vui lòng chọn l số tháng đăng ký';
    }else if(isNaN(sothangdangky)){
        checking = false;
        thongbao2[3].innerHTML = ' số tháng đăng ký phải nhập bnagwf số';
    }
    else{
        thongbao2[3].innerHTML = ''
    }



    if(checking){
        let tong = giatien * sothangdangky;
        tongtien.value = tong; 
    }


}