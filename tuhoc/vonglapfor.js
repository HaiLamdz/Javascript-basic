// for loop

// Làm bài
// function getRandNumbers (min, max, length){
//     var arr = [];
//     for(var i = 0; i < length; i ++){
//         let random = Math.random() * (max - min) + min
//         arr.push(random);
//     }
//     return arr;
// }

// console.log(getRandNumbers(1,5,3));

/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */
function run(object) {
    var arr = [];
    for(let i in object){
        arr.push("thuoc tinh " + i + "co gia tri la: " + object[i])
    };
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]