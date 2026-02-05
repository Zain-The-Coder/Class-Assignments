//                       Section 4: Callback Functions (Execution Control)


//Task 4.1 – Synchronous Callback Flow
function firstFunction (thirdFunction) {
    console.log("First Function Running...");
    setTimeout(() => {
        console.log("Third Function In first");
        thirdFunction();
    }, 1000);
    console.log("first Function End");
}

function secondFunction (thirdFunction) {
    console.log("Second Function Running...");
    setTimeout(() => {
        console.log("Third Function In Second");
        thirdFunction();
    }, 1000);
    console.log("Second Function End");
}

function thirdFunction () {
    console.log("Third Function Running...");
    console.log("Third Function End");
}

firstFunction(() => {
  thirdFunction();
  secondFunction(thirdFunction);
});

secondFunction(() => {
    thirdFunction();
    secondFunction(thirdFunction);
})


//Task 4.2 – Asynchronous Callback Observation
//  function firstFunction() {
//     const currentTime = new Date();
//     let hour = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let second = currentTime.getSeconds();
//     let time = `${hour} : ${minutes} : ${second}`;

//     console.log(`First function start at: ${time}`);
//     console.log(`First function end at: ${time}`);
// }

// function secondFunction() {
//     const currentTime = new Date();
//     let hour = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let second = currentTime.getSeconds();
//     let time = `${hour} : ${minutes} : ${second}`;

//     console.log(`Second function start at: ${time}`);

//     setTimeout(() => {
//     const currentTime = new Date();
//     let hour = currentTime.getHours();
//     let minutes = currentTime.getMinutes();
//     let second = currentTime.getSeconds();
//     let time = `${hour} : ${minutes} : ${second}`;
//         console.log(`Second function end at: ${time}`);
//     }, 2000);
// }

// firstFunction();
// secondFunction();
