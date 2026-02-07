//               Section 1: call, apply & bind (Context Control)


//Task 1.1 – Losing and Fixing this
const object = {
    name : 'zain ur rehman' ,
    greet : function () {
        console.log(`Hello , My name is ${this.name}`);
    }
}
object.greet();

let nowObj = object.greet;

nowObj();
nowObj.call(object);


//Task 1.2 – call vs apply (Argument Handling)
const userName = {
    name : 'zain ur rehman' ,
}

function expenceTraker (rp , rt , d = 0) {
    console.log(`Welcome ${this.name} Your Price is ${rp + rt - d}`);
}
expenceTraker.call(userName , 300 , 40 , 90);
expenceTraker.apply(userName , [500 , 300 , 200]);

expenceTraker.call(userName , 43 , 10);


//Task 1.3 – bind and Delayed Execution 
const obj = {
    language : "JavaScript"
}

function accessable () {
    console.log(`I am using ${this.language}`);
}

setTimeout(accessable , 1000)
let nowFunc = accessable.bind(obj);
setTimeout(nowFunc , 1000);


