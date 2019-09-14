function async_one() {
    return '1';
}

function async_two() {
    return '2';
}

async function async_three() {
    let a = await async_two();
    console.log(a);
    console.log(async_one());
}

async_three();
