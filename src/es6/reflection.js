let obj = { a: 1 }
Object.defineProperty(obj, "b", { value: 2 })
obj[Symbol("c")] = 3

let b ={a: 1, b:2, c: 4};
console.log(Object.keys(b))