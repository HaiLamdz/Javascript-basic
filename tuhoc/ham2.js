// tham số hàm 
// 1 tham số 
// tham số là 1 giá trí truyền vào khi gọi tới hàm 
function wirtelog(message, message2){ // tham số
    console.log(message);
    // in ra nếu có tham số thứ 2
    if(message2){
        console.log(message2);
    }
}
wirtelog("test message"); // đối số
// kiểu dữ liệu 
// có thể tạo kiểu String, int,, float có thể chuyền bất cứ kiểu dữ  liệu
// tính riêng tư
// có thể chuyền 1 hoặc nhiều tham số
wirtelog("test message", "Test"); 

// argumment 
// đối tượng argumment 
function agumment(){
    console.log(arguments);
}
agumment("lam", "hải");
// giới thiệu vòng lặp for 
function forr(){
    var myString = [];
    for(var a of arguments){
        myString += `${a} -` ;
    }
    console.log(myString);
}
forr("lam", "hải");