// bài 1
// sư rdungj function viết chường trình nhập số nguyên n in ra kết quả n! 
// dung for và while 
// let n = prompt("nhập vào số nguyên n: ")

//     function giaiThua(a) {
//         let gt = 1;
//         for(let i = 1; i <= a;i++){
//             gt *= i;
            
//         }
//         console.log(gt); 
//     }
//     giaiThua(n);   
// bài 2
// sử dụng function để giải phương trình bậc 2 
let x = prompt("nhập x");
let y = prompt("nhập y");
let z = prompt("nhập z");
function giaiPT(x,y,z){
    let denta = y*y - 4*x*z;
    console.log(denta);
    if(denta < 0){
       return "pt vô nghiệm";
    }else if(denta > 0){
        nghiem2 =( -y + Math.sqrt(denta)) /( 2*x);
        nghiem3 = (-y - Math.sqrt(denta)) /( 2*x);
        return "pt có 2 nghiệm x = " + nghiem2 + " x = " + nghiem3; 
    }else{
        nghiem1 = -y/(2*x);
        return "phuwogn trình có 1 nghiệm x = " + nghiem1;
    }
}
console.log(giaiPT(x, y, z));
