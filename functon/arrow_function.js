// const addSome = (a, b) => {return a+b}

// console.log(addSome(2, 5))

const functionTest = function(names){
    let name = names;
    console.log(names)
    function inner(){
        console.log("Inner")
        // console.log(`This is inner name: ${names}`)
    }
    inner()
}
const test = functionTest("Anower")