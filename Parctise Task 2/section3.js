//                     Section 3: Destructuring, Rest & Spread Operators


//Task 3.1 – Destructuring with Defaults
const myObj = {
    name : "zain ur rehman" , 
    batch : 16 ,
    course : "Modern Web Application Development" ,
}
const { name, age,  grade = "Not Assigned",  city = "Unknown" } = myObj;

console.log(name);
console.log(age);
console.log(grade);
console.log(city);


//Task 3.2 – Rest Operator in Functions
function sumNumbers (...numbers) {
    if(numbers.length === 0) {return};
    let num = numbers.reduce((first , second) => first + second , 0);
    console.log(`Numbers Are : ${numbers.join(",")}`)
    console.log(`And Thier Sum Is : ${num}`);

}

sumNumbers(2 , 4 , 5)
sumNumbers(13 , 32 , 51)
sumNumbers(2 , 85)


//Task 3.3 – Spread Operator & References (Important)
const orignalObject = {
    name : "zain ur rehman" , 
    skills : {
        frontend : "CSS",
        backend : "TailwindCss" ,
    }
}
const firstCopy = orignalObject;
const secondCopy = {...orignalObject};// Nested Object don't copy

firstCopy.skills.backend = "React.JS" ;
firstCopy.name = "ZAIN" ;
secondCopy.skills.backend = "JavaScript" ; // yaha krdiya
secondCopy.name = "Ahmed" ;// yaha change ni kiya orignal ko

console.log("Orignal : " , orignalObject);// Yaha backtick use kiye to [object object] aya
console.log("Direct Copy : " , firstCopy);
console.log("Spread Copy : " , secondCopy);