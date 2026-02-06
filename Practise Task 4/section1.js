//               Section 1: call, apply & bind (Context Control)


//Task 1.1 – Losing and Fixing this
// const obj = {
//     name : 'zain ur rehman' ,
//     greet : function () {
//         console.log(`Hello , My name is ${this.name}`);
//     }
// }
// obj.greet();

// let nowObj = obj.greet;

// nowObj();
// nowObj.call(obj);


//Task 1.2 – call vs apply (Argument Handling)
const userName = {
    name : 'zain ur rehman' ,
}

function expenceTraker (rp , rt , d) {
    console.log(`Welcome ${this.name} Your Price is ${rp + rt - d}`);
}
expenceTraker.call(userName , 300 , 40 , 90);
const bind = expenceTraker.bind(userName, 500, 100, 200);
bind();

expenceTraker.call(userName , 355 , 32);