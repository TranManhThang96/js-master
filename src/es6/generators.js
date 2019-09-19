function* maker() {
    yield 'a';
    yield 'b';
    yield 'c';
}

const test = maker();
console.log(test.next().value);  //a
console.log(test.next().value);   //b
console.log(test.next().value);   //c
console.log(test.next().value);   //undefined


function* makeCount() {
    let count = 0;
    while(count < 4) {
        yield count+=1;
        console.log(count);
    }
}

const MAKE_COUNT = makeCount();
console.log(MAKE_COUNT.next().value);  //1
console.log(MAKE_COUNT.next().value);   //2
console.log(MAKE_COUNT.next().value);   //3
console.log(MAKE_COUNT.next().value);   //4