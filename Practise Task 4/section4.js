// //                     Section 4: Asynchronous JavaScript


// //Task 4.1 – Sync vs Async Execution Order
console.log("program start");

function first () {
    console.log("inside normal function");
}
first();
setTimeout(() => {
    console.log("i am run with (0ms) late");
}, 0);

setTimeout(() => {
    console.log("i am run with (300 ms) late")
}, 300);

console.log("program end");


// // Task 4.2 – Callback Hell Simulation
setTimeout(() => {
    console.log("i am run at 100ms");
    setTimeout(() => {
        console.log("i am run at 200ms");
        setTimeout(() => {
            console.log("i am run at 300ms");
            setTimeout(() => {
                console.log("i am run at 400ms");
                setTimeout(() => {
                    console.log("i am run at 500ms");
                }, 500);
            }, 400);
        }, 300);
    }, 200);
}, 100);


// Task 4.3 – Promises vs Callbacks (Hard)

function parent (text, delay) {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay);
    });
    return promise ;
}

    parent("i am run at 100ms" , 100)
    .then(() => parent("I am run at 200ms", 200))
    .then(() => parent("I am run at 300ms", 300))
    .then(() => parent("I am run at 400ms", 400))
    .then(() => parent("I am run at 500ms", 500))


