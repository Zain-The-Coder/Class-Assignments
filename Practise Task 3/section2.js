// //                   Section 2: Default Parameters (Edge Cases)


// //Task 2.1 – Default Value Traps
function greetUser (user = "zain ur rehman") {
    console.log(`Check user , user name is ${user}`)
    console.log(`Welcome ${user} !`)
}
greetUser();
greetUser(undefined);
greetUser("zain");
greetUser(null);
greetUser(5);
greetUser(true);


//Task 2.2 – Defaults with Functions & Objects
function parentFunction (
    childFunction = () => {console.log(`default child function value`)} 
    ,obj = {name : "javaScript" , topic : "default functions"}) {
        console.log("parent Function run");

        console.log(`Default Child Function : ` , childFunction());
        console.log(`Default Object : ` , obj);
        
}
parentFunction();//first output

let customObject = {
    name : "JavaScript" , 
    topic : "function with default" ,
}
function childFunction () {
    return "Hello , I am Child Function";
}
parentFunction(childFunction , customObject)