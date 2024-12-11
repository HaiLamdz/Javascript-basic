//1  tính chu vi và diện tích hcn 
// viết chương trình nhập vào 2 số thự dương a và b từ bàn phím .
// a và b là chiều dài và chiều rộng của hcn 
// in ra màn hình chu vi và diện tích của hcn đó 

// var a = prompt("nhập vào chiều dài hcn: ");
// var b = prompt("nhập vào chiều rộng hình chữ nhật: ");
// let chuVi = (Number(a) + Number(b)) * 2;
// console.log("chu vi hcn đó là: " + chuVi);
// let dienTich = a * b;
// console.log("diện tích hcn đó là: " + dienTich);
// 3 viết chương trình nhập vào 3 điểm môn toán, văn anh của 1 học sinh 
// tính điểm tb và làm tròn 2 chữ sau dấu phẩy 
// toFixed(2) thuận toán làm tròn 2 chữa số sau dấu phẩy
// var toan = prompt("nhập điển mmoon toán: ");
// var van = prompt("nhập điểm môn văn: ");
// var english = prompt("nhập điểm môn tiếng anh: ");
// let sum = Number(toan)+ Number(van) + Number(english);
// console.log(sum);
// let dtb = sum / 3;
// let dtb2 = dtb.toFixed(2); // làm tròn 2 chữa số sau dấu phẩy
// console.log("điểm trung bình là: " + dtb2);
// 4 viết chường trình nhập vào từ bàn phím bán kính r của đg  tròn, in ra kết quả 
// chu vi = 2*pi*r
// .. diện tich = pi*r**2 
// cách lấy pi : let Pi = Math.pi 
var r = prompt("Mời nhập vào bán kính đg tròn");
let chuVi = 2 * Math.PI * Number(r);
console.log("chu vi đg tròn là: " + chuVi);
let dienTich = Math.PI * Number(r)**2;
console.log("diện tích đg tròn là: " + dienTich);

