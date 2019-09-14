//1. default params
let a  = function f (x, y = 7, z = 42) {
    return x + y + z
}

//es5
let b = function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
console.log(a(60), b(56,78,67));



//2. rest params es6
//rest có nghĩa là tổng hợp các tham số thành đối số duy nhất
function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, "hello", true, 7) === 9

//es5
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7)


//3. Spread Operator es6
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f (x, y, ...a) {
    return (x + y) * a.length
}
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
console.log(chars);

//es5
var params = [ "hello", true, 7 ];
var other = [ 1, 2 ].concat(params); // [ 1, 2, "hello", true, 7 ]

function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]



