//                           Section 4: Iterators & for..of


//Task 4.1 – Manual Iteration
// const iterableObject = {
//     [Symbol.iterator] () {
//         initialState = 1 ;
        
//         return {
//             next() {
//                 if(initialState <= 5) {
//                     return {value : initialState++ , done : false};
//                 }
//                 else {
//                     return {done : true}
//                 }
//             }
//         }
//     }
// }

// for(let item of iterableObject) {
//     console.log(item);
// }


//Task 4.2 – Comparing Loops
//const backendTech = [`MongoDB` , `PostgreSQL` , `Node.JS` , `Express.JS`];

// for(let i = 0 ; i < backendTech.length ; i++) {
//     console.log(`Using For Loop ${backendTech[i]}`); // Yaha pr is ny mujhay values bhi dein
//     console.log(`Using For Loop ${i}`) // Magar Seedha Index diya isny yaha
// }

// for(let i in backendTech) {
//     console.log(`Using For In Loop ${backendTech[i]}`) // Same Like For Loop
//     console.log(`Using For In Loop ${i}`) // same like for loop , magar is ny index string may diye
// }

// for(let i of backendTech) {
//     console.log(`Using For Of Loop ${backendTech[i]}`) // Yaha Undefined agaya
//     console.log(`Using For Of Loop ${i}`); // is ny index ni diya item diya , baki loops ny index diya
// }


//Task 4.3 – Real-World Iterator Usage
// const playList = ["Song1" , "Song2" , "Song3" , "Song4"];

// for( let song of playList ) {
//     console.log(`Now Playing ${song}`);
// }