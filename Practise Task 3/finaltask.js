
function parentFunction (myMap , delay = 1000) {
    console.log("Parent Function start");
    myMap.forEach((item , index) => {
        setTimeout(() => {
            console.log(`Running function ${index}`);
            item(() => {
                console.log(`callback function ${index} finish !`);
            })
        }, delay);
    })

}



function firstChildFunction (anonymousFunction) {
    console.log("first Child Function start");
    anonymousFunction();
    console.log("first child function end");
}
function secondChildFunction (anonymousFunction) {
    console.log("second Child Function start");
    anonymousFunction();
    console.log("second child function end");
}
function thirdChildFunction (anonymousFunction) {
    console.log("third Child Function start");
    anonymousFunction();
    console.log("third child function end");
}

const myMapObj = new Map();
myMap.set("Task No : 1" , firstChildFunction);
myMap.set("Task No : 2" , secondChildFunction);
myMap.set("Task No : 3" , thirdChildFunction);

parentFunction(myMapObj);

