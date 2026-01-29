//                   Section 1: var vs let vs const (Deep Understanding)



//Task 1.1 – Scope Exploration
// var coreVariable = "Initial Value";
// console.log(`Before Var: ${coreVariable}`);

// {
//     var coreVariable = "Var inside first block";
//     console.log(`Inside VAR block: ${coreVariable}`);
// }

// console.log(`After VAR block: ${coreVariable}`);

// {
//     let coreVariable = "Let inside second block";
//     console.log(`Inside LET block: ${coreVariable}`);
// }

// console.log(`After LET block: ${coreVariable}`);



//Task 1.2 – Re-declaration & Re-assignment
// var varVariable = `First Variable-Declaration With Var`;

// var varVariable = `Access Again with Var`;

// try {
//     let varVariable = `Access Again With Let`;
// } catch (e) {
//     console.log(`Yaha Error Agaya Sar ${e}`);
// }

// const checkArray = [`Array first value`];
// console.log(`New Array Create => ${checkArray}`);

// try {
//     checkArray[0] = `Array Second Value With Modification` ;
// } catch (e) {
//     console.log(`plan flop hogaya shit!! ${e}`);
// }

// try {
//     checkArray = [`direct tabdeeli lanay ke koshish`];
// } catch (e) {
//     console.log(`Dabdeli to ni aaskti boss`);
// }

// console.log(`check in the final ${varVariable}`);



//Task 1.3 – Loop Behavior Test
// const array = ["first" , "second" , "third"];
// const object = {first : 0 , Second : 1 , Third : 2};

// for(var items in object) {
//     setTimeout(() => {
//         console.log(`Loop Is Running Using Var with For..In Loop => ${items}`);
//     }, 1000);
// }
// for(let items in object) {
//     setTimeout(() => {
//         console.log(`Loop Is Running Using Let with For..In Loop => ${items}`);
//     }, 2000);
// }
// for(const items of array) {
//     setTimeout(() => {
//         console.log(`Loop Is Running Using Const with For..Of Loop => ${items}`);
//     }, 3000);
// }
// setTimeout(() => {
//         console.log(`Sub Loops Khatam , Ub Meri Bari !`)
// }, 4000);

