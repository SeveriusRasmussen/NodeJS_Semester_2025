"use strict"
// Forklaring om variable: Const, Var, Let
// Const kan ændres via push til en Array.



// Missing declaration
//totalGlobalVariable = "NNever EVER!!! do this!"

// var whatIsThis = "never do this!"

// Use const whenever possible, otherwise use let if we ever intend to reassign
// const public = "variable";

const someType = 123;
// someType = 456;

function someFunction() {
    // function scope
}

{ // Block scope
    //console.log("what is this?")  (mangler declaration)
    let someVariable = true;
    {
        let someVariable = false;
    }
    console.log(someVariable)
}

const notConstantObject = {};
notConstantObject.name = "Rune";

const notConstantArray = [1];
notConstantArray.push(2);
// console.log(notConstantArray);


//for (var i = 0; i <= 5; i++) {
//    setTimeout(() => {
//        console.log(i);
//    }, 1000)
//}

// for (let i = 0; i <= 5; i++) {
//    setTimeout(() => {
//        console.log(i);
//    }, 1000)
//}