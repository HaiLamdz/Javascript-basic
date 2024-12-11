var items = [
    {
        id: 1,
        name: "Apple",
        price: 0
    },
    {
        id: 2,
        name: "samsung",
        price: 0
    }
];
var free = items.every(function(items, index){
    return items.price === 0;
});
console.log(free);

var newitems = items.map(function(item){
    return{
        id : items.id,
        name: `khoa hoc : ${items.name}`,
        coin: items.price,
        coinText: `gia: ${items.price}`,
    };
})
console.log(newitems);

// reduce
var i = 0;
function xulyprice(accumulator, currentValue, currentIndex, originArray){
    i++;

    var total = accumulator + currentValue.price;
    console.table({
        'lượt chạy: ': i,
        'biến tích trữ: ': accumulator,
        'giá khóa học: ': currentValue.price,
        'tích trữ được: ': total
    })

    console.log(currentValue);

    // / kết quả cuối cùng
    return accumulator + currentValue.price;
}
var tongprice = items.reduce(xulyprice, 0);
console.log(tongprice);
// biến lưu trữ
// var tongprice = 0;
// // lặp qua các phần tử
// for(var item of items){
//     // thực hiện việc lưu trữ
//     tongprice += item.price;
// }
// console.log(tongprice);

// // ngắn gọn
// hiệu năng


