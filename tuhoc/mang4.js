var items = [
    {
        id: 1,
        name: "Apple",
        price: 0
    },
    {
        id: 2,
        name: "samsung",
        price: 50
    }
];

var tongcoin = items.reduce(function(tong, item){
    return tong + item.price;
}, 0);
console.log(tongcoin);
var numbers = [
    12, 20, 30
];
var totalcoin = numbers.reduce(function(total, number){
    return total + number;
})
console.log(totalcoin);

// flat - làm phẳng mảng từ depth array - mảng sâu
var deptharray = [1, 2, [3, 4], 5, 6, [ 7, 9]];
var flatarray = deptharray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, [])
console.log(flatarray);

// lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "font_end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS",
            },
            {
                id: 2,
                title: "JS",
            }
        ]
    },
    {
        topic: "back_end",
        courses: [
            {
                id: 4,
                title: "php"
            },
            {
                id: 5,
                title: "nodeJS"
            }
        ]
    }
]

var newCourses = topic.reduce(function(course, topic){
    return course.concat(topic.courses);
}, []);
console.log(newCourses);

let num = [1, 2, 3, 4, 5]

let result = num.reduce((total, nums) => {
    return total + nums
}, 10)

console.log(result);