// let x = 5, y = 6;
// let obj = {x, y};
let quux = () => 'anc'

let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
}
console.log(obj);

