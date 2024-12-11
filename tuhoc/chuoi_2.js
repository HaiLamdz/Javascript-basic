/**
 * LÀM VIỆC VỚI CHUỖI
 * 
 * keywwork: 
 * 1. length kiểm tra đọ dài của chuỗi
 * 2. find index: trìm vị trí trong chuỗi
 * 3. cut strinng: cắt chuỗi
 * 4. replace: đè chuỗi
 * 5. convert to upper case: chuyển đổi tất cả thaanhf chuỗi hoa (toUpperCase)
 * 5. convert to lower case: chuyển đổi tất cả thaanhf chuỗi thường(toLowerCase)
 * 7. trim: loại bổ khoảng trắng ở hai đầu
 * 8. split: cắt 1 chuỗi thành 1 array
 * 
 */
var string = "vũ Hải lam";
// * 1. length kiểm tra đọ dài của chuỗi 
console.log(string.length);
// * 2. find index: trìm vị trí trong chuỗi 
console.log(string.indexOf("lam"));
// * 3. cut strinng: cắt chuỗi
console.log(string.slice(7, 10));// từ trái sang phải
// từ phải sang trái thì tính theo số âm
// * 4. replace: đè chuỗi
console.log(string.replace("lam", "nam"));
// nếu có nhieuf hơn 1 chuỗi muốn thay thì 
console.log(string.replace(/lam/g, "nam"));
// * 8. split: cắt 1 chuỗi thành 1 array
var languages = "js, php, c++";
console.log(languages.split(", "));
console.log(string.toUpperCase());


