//es6
let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = () => i * 2;
}

//es6 Block-Scoped Functions
{
    function foo () { return 1 }
    console.log(foo());   //return  1
    {
        function foo () { return 2 }
        console.log(foo());   //return 2
    }
    console.log(foo());  //return 1
}


//es5
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function() { return i * 2; };
    })(i);
}


(function() {
    var foo = function() {return 1};
    console.log(foo());  //return 1
    (function(){
        var foo = function() {return 2};
        console.log(foo());  //return 2
    })()
    console.log(foo());   //return 1
})()

{
    console.log('hàm này tự động gọi hả');
}



//ghi chú

//1. cú pháp tương đương
//es5
// (function() {
//     // statement
//    })()
//    tương đương
//es6
//    {
//         // statement
//    }

//2. {statement} khi sử dụng cái này. function tự động gọi khi file này được gọi