//                       Section 3: First-Class & Higher-Order Functions


//Task 3.1 – Functions as Data
// const storedFunction = () => {
//     console.log("Stored Function Running ..");
// }
// storedFunction();
// function parentFun (childFunc) {
//     console.log("Parent Function Running ..")
//     childFunc()
// }

// function childFunc () {
//     console.log("I am A Child function")
// }
// parentFun(childFunc)

// const outsideFunction = () => {
//     console.log("I am outside function");
//     return function returnFunc () {
//         console.log("I am Retured Function")
//     }
// }

// let returnedFunc = outsideFunction() ;
// returnedFunc();



//Task 3.2 – Build Your Own Higher-Order Function (Hard)

// function parent (func = () => {console.log("No Function Passed")} , times = 0) {
//     console.log(`parent function run ${times} times`);
//     for(let i = 0 ; i < times ; i++) {
//         func()
//     }
// }

// parent();

// function child () {
//     console.log("I am child function");
// }

// function grandChild () {
//     console.log("i am grand Child function");
// }

// parent()
// parent(child , 2)
// parent(grandChild , 5);
// parent(child);
