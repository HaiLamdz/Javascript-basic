/**
 * CHUỖI TRONG JS
 * 
 * 1. tọa chuỗi
 * cách tạo chuỗi
 * nên dùng cách nào, lý do
 * kiểm tra dât type
 * 2. một số case sử dụng backslash (/)
 * 3. xem đọ dài chuỗi
 * 4. chú ý độ dài khi viết  code
 * 5. template string ES6
 */
// cách 1
var fullName = new String("Hải Lam");
// cách 2 
// var firstName = "hải Lam";
// nên dùng cách 2 vì nó nhanh hơn 
// * 2. một số case sử dụng backslash (/) 
// var firstName = "Hải Lam \"đẹp trai\" ";
// console.log(firstName);
// * 3. xem đọ dài chuỗi
var firstName = "hải Lam";
console.log(firstName.length);
// * 5. template string ES6 
var firstName = "hải";
var lastName = "lam";

console.log("tôi là : " + firstName + lastName);
console.log(`toi là: ${firstName} ${lastName}`);


