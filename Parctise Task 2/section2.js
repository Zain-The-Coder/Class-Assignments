//                          Section 2: JavaScript Behind the Scenes



// Task 2.1 – Hoisting Reality Check

normalFunction();// Print Successfully
console.log(variable3)// undefined

try{
    arrowFunction();
} catch (e){
    console.error(`Arrow Function Failed Beacuse Of TDZ`);
}

try{
    console.log(`Try to print variable decalare by let ${variable1}`);
} catch(e){
    console.error(variable1); //Failed To print let declared because of TDZ 
}
try {
    console.log(variable2);
} catch (e) {
    console.log(e)// Failed To print const declared because of TDZ ;
}

let variable1 = `React.JS`;
const variable2 = "Vue.JS";
var variable3 = "Angular.JS";

const arrowFunction = () => {
    console.log("JavaScript")
}
function normalFunction () {
    console.log("Python")
}


//Task 2.2 – Call Stack Observation
function parentFunction () {
    console.log("Parent Function Start");
    childFunction();
    console.log("Parent Function End");

}

function childFunction () {
    console.log("Child Function Start");
    grandChild();
    console.log("Child Function End");
}

function grandChild () {
    console.log("Grand Child Function Start");
    setTimeout(() => {
        console.log("Run Asynchoronous Code");
    }, 2000);
    console.log("Grand Child Function Finish");
}

parentFunction();


//Task 2.3 – Closure Proof
function mainFunc () {
    let variable = 0;
    return function () {
        variable++ ;
        console.log(`Closure Testing ,  ${variable}`);
    }
}
mainFunc() //meri observation hai , ye kyu ni chala

const myFunc = mainFunc();
myFunc()
myFunc()
myFunc()