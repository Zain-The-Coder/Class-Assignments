//                     Section 2: Closures (Memory & Scope)


//Task 2.1 – Closure Proof
function father() {
    let x = 1;
    function son() {
         console.log(`my father secret is ${x++}`);
    }
    return son;
}
const child = father();
child()
child()



// Task 2.2 – Independent Closures
function pappa () {
    let count = 0;
    function beta () {
        console.log(`My father secret is ${count++}`);
    }
    return beta ;
}
let result = pappa();
let result1 = pappa();
result();
result();
result();
result1();
