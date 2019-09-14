//hàm 1 tham số
let fun1 = a => a * 2;   // ko cần dấu ngoặc () bao đóng tham số với hàm 1 tham số
let fun2 = function(a) {return  a * 2;}
console.log(fun1(5), fun2(10));

//hàm 2 tham số
let fun3 = (a,b) => a + b;   // khi có 2 tham số trở lên cần dấu ngoặc bao đóng tham số
let fun4 = function(a, b) {return  a + b;}
console.log(fun3(4,6), fun4(10,20));

//return 1 object
let fun5 = () => ({name: 'thangbeo', age: 23});   // lúc này trả về 1 obj nên cần có () bao lấy object
let fun6 = function() {
    return {name: 'thangbeo', age: 23}
};

//Cú pháp với Object literal
var setNameIdsEs6 = (id, name) => ({ id: id, name: name }); 
console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"} 

// Rest parameters và default parameters được hỗ trợ
let fun7 = (a,b,c=1) => { return c;}

//Statement Bodies
let a = [0,5,10,20,45,67,35];
let fives = [];
a.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
})
console.log(fives);

a.forEach(function(v) {
    if (v % 5 === 0) {
        fives.push(v);
    }
})

//Lexical this
//es6
// this.nums.forEach((v) => {
//     if (v % 5 === 0)
//         this.fives.push(v)
// })

//es5 có 3 cách để sử dụng this trong function
//  variant 1: gán self = this.
// var self = this;
// this.nums.forEach(function (v) {
//     if (v % 5 === 0)
//         self.fives.push(v);
// });

// //  variant 2 , this
// this.nums.forEach(function (v) {
//     if (v % 5 === 0)
//         this.fives.push(v);
// }, this);

// //  variant 3 (since ECMAScript 5.1 only)   bind(this)
// this.nums.forEach(function (v) {
//     if (v % 5 === 0)
//         this.fives.push(v);
// }.bind(this));

