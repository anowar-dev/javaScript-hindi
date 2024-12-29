
function test(n, a){

    // const second = Number(a)
    // console.log(typeof second)
if(n === 1 && a === 5){
    return n + a
}
    else{
        return `The n's values: ${n} and a's values are ${a}`
    }
}

console.log(test(1, 5))