//                 Section 3: Arrow Functions (Behavior Matters)



// Task 3.1 – Arrow vs Regular Function
const obj = {
    name : `zain ur rehman` ,

    normalFunction : function () {
        console.log(this.name);
    },
    arrowFunction : () => {
        console.log(this.name)
    }
}
obj.normalFunction();
obj.arrowFunction();


//Task 3.2 – Implicit vs Explicit Return
const web = ["HTML" , "CSS" , "JS"];

//Yaha Return Keyword ke need ni because without curly braces 1 line may kaam hogaya !`
const implicitFunction = web.map(item => `The Currunt Item Is ${item}`);

//Yaha Need Agaye because Braces Use krliye.
const explicitFunction = web.map(item => {
    return `The Currunt Item Is ${item}`
})

console.log(implicitFunction);
console.log(explicitFunction);


//Task 3.3 – Arrow Functions in Callbacks
const webSite = ["HTML" , "CSS" , "JS"];

const arrowFunction = () => {
    console.log(`Arrow Function Run ${webSite}`);
} 
function normalFunction () {
    console.log(`Normal Function Run ${webSite}`);
}
setTimeout(arrowFunction , 1000);
setTimeout(normalFunction , 1000);

