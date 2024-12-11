// Bài 1: Tạo 1 banner slide gồm 5 ảnh, tạo 4 nút: PRE, NEXT, AUTO, STOP
// Viết chức năng tương ứng cho 4 nút vừa tạo
// -	PRE: quay lại ảnh trước
// -	NEXT: chuyển tới ảnh kế tiếp
// -	AUTO: tự động chuyển 
// -	STOP: Ngắt tự động


slideindex = 0;
let slideimg = document.getElementsByClassName('myslide');
function slide() {

    if (slideindex >= slideimg.length) {
        slideindex = 0;
    }
    if (slideindex < 0) {
        slideindex = slideimg.length - 1;
    }
    for (let i = 0; i < slideimg.length; i++) {
        slideimg[i].style.display = "none";
    }
    slideimg[slideindex].style.display = "block";
}
slide();
function chuyenanh(n) {
    slideindex += n;
    slide();
    console.log(slideindex);
}
let autoimg;
function auto() {
    slide();
    slideindex++;

    autoimg = setTimeout(auto, 1000);
}
function stop() {
    clearInterval(autoimg);
}



// Bài 2: Tạo form đăng nhập gồm tài khoản, mật khẩu
// -	Mật khẩu phải khớp “123@123ab”
// -	Tài khoản phải dài hơn 6 ký tự và không quá 20 ký tự
// -	Khi ấn vào nút đăng nhập, nếu lỗi thì sẽ hiển thị sang bên cạnh
// -	Nếu không xảy ra lỗi thì hiển thị thông báo “Đăng nhập thành công”


// function dangnhap() {
//     let taikhoan = document.getElementById('taikhoan').value;
//     let passwork = document.getElementById('passwork').value;

//     let thongbao = document.getElementsByClassName('thongbao');

//     console.log(taikhoan);
//     console.log(passwork);

//     let check = true;

//     if (taikhoan == '') {
//         check = false;
//         thongbao[0].innerHTML = "tài khoản không được để trống"
//     }
//     else if(taikhoan.length < 6 ||  taikhoan.length > 20){
//         check = false;
//         thongbao[0].innerHTML = "tài khoản phải từ 6 đến 20 ký tự"
//     }
//     else {
//         thongbao[0].innerHTML = ""
//     }
//     if(passwork == ""){
//         check = false;
//         thongbao[1].innerHTML = "mật khẩu không được để trống"
//     }
//     else if(passwork !== "123@123ab"){
//         check = false;
//         thongbao[1].innerHTML = "bạn đẫ nhập sai mật khẩu"
//     }else{
//         thongbao[1].innerHTML = ""
//     }
//     if(check){
//         alert("đăngnhập thành công");
//     }
// }


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
    let thongbao = document.getElementsByClassName('thongbao');
    if(loaidangky.value == '1'){
        giatien.value = 5000
    }else if(loaidangky.value == '2'){
        giatien.value = 3000
    }else{
        giatien.value = 0
        // thongbao[2].innerHTML = "vui lòng chọn thành viên đăng 
    }
}

function dangky(){

    let hoTen = document.getElementById('hoTen').value;
    let namsinh = document.getElementById('namsinh').value;
    let loaidangky = document.getElementById('loaidangky');
    let giatien = document.getElementById('giatien').value;
    let sothangdangky = document.getElementById('sothangdangky').value;
    let tongtien = document.getElementById('tongtien');
    let thongbao = document.getElementsByClassName('thongbao');

    let check = true;
    let age = new Date().getFullYear() - Number(namsinh);
    if(hoTen == ''){
        check = false;
        thongbao[0].innerHTML = "họ tên không được để trống";
    }else if(hoTen.length < 7){
        check = false;
        thongbao[0].innerHTML = "họ tên phải lớn hơn 7 ký tự";
    }else{
        thongbao[0].innerHTML = ''
    }


    if(namsinh == ''){
        check = false;
        thongbao[1].innerHTML = "năm sinh không được để trống";
    }else if(age < 18){
        check = false;
        thongbao[1].innerHTML = "tuổi phải trên 18";
    }else{
        thongbao[1].innerHTML = ''
    }

    if(loaidangky.value === '0'){
        check = false;
        thongbao[2].innerHTML = " vui lòng chọn loại đang ký";
    }else{
        thongbao[2].innerHTML = ''
    }


    if(sothangdangky == ''){
        check = false;
        thongbao[3].innerHTML = "số tháng đăng ký không được để trống";
    }else if(isNaN(sothangdangky)){
        check = false;
        thongbao[3].innerHTML = "số tháng đăng ký phải nhập bằng số";
    }else{
        thongbao[3].innerHTML = ''
    }

    if(check){
        let tong = Number(giatien) * Number(sothangdangky);
        tongtien.value = tong;
        // console.log(tongtien);
    }
    
}