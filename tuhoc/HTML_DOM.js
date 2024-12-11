var boxNode = document.querySelectorAll(".box-1");

// công việc 1 : sử dụng tới boxNode

console.log(boxNode);

// công việc 2: sử dụng tới các li elements
// là con của bõ-1

// console.log(boxNode.getElementsByTagName('li'));
// console.log(boxNode.querySelector("p"));

// 1. document.getElementById
// 2.document.getElementsByClassName
// 3.document.getElementsByTagName
// 4.querySelector
// 5.querySelectorAll

// 6. HTML HTMLAllCollection
// 7.document.write
var elements = document.getElementsByTagName("h1");
console.log(elements[0]);