// Object prototype 
// là đối tượng nguyên mẫu 
function user(firstName, lastName, avata){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avata = avata;
    this.getTen = function (){
        return `${this.firstName} ${this.lastName}`;
    }
}
var author = new user('lam', 'vũ','avata');
// author.title = 'Vũ Hải Lam';
// console.log(author.getTen());
// truyền thêm 1 thuộc tính ở bên ngoài hàm tạo
// user.prototype.className = 'lam';
// cso thể thêm 1 function
// user.prototype.getclassName = function(){
//     return this.className;
// }