//es6
//name uppercase
const PI = 3.141592;
PI > 3.0;

//es5
Object.defineProperty(typeof global === 'object' ? global : window, 'PI2', {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
});

console.log(typeof PI2);