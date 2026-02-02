//                     Section 1: Array Advanced Methods (Deep Practice)



//Task 1.1 – map vs forEach vs reduce (Behavior Study)
const numArray = [53 , 23 , 31 , 22 , 10];

const forEachUse = numArray.forEach((item , index) => {
    const curruntData = `The Currunt Index Is ${index} and Number is ${item}`;
    return curruntData ;
})
console.log(`For Each Result => ${forEachUse}`);

const mapUse = numArray.map((item , index) => {
    const curruntData = `The Currunt Index Is ${index} and Number is ${item}`;
    return curruntData;
})
console.log(`Map Result => ${mapUse}`);

const reduceUse = numArray.reduce((first, item, index) => {
    const currentData = `The Currunt Index Is ${index} and Number is ${item}`;
    let final = `${first} | ${currentData} `
    
    return final
}, `first value`);

console.log(`Reduce Result => ${reduceUse}`);


//Task 1.2 – filter + reduce Combination
const dataArray = [37 , 24 , 30 , 27 , 50];

const arrFunction1 = (condition) => {
    const filterData = dataArray.filter(item => item >= condition);
    const reducer = filterData.reduce((first , second) => {
        let totalAggregate = first + second ;
        return totalAggregate;
    }, 0)
    console.log(`The Total Sum Is ${reducer}`);
}
arrFunction1(30);
arrFunction1(35);


const fruits = ["Apple" , "Banana" , "Grapes" , "Orange" , "Mango" , "Peach" , "Berry"];

const arrFunction2 = (condition) => {
    const filterData = fruits.filter(item => item.includes(condition));
    const reducer = filterData.reduce((first , second) => {
        let result = `${first} ${first === "" ? "" : ","} ${second}`;
        return result ;
    }, "")
    
    console.log(`Item Filtered Is ${reducer}`)
}

arrFunction2("e");
arrFunction2("r")


//Task 1.3 – Custom Array Method Simulation (Hard)

const numberList = [43, 4, 56, 53, 10, 2, 81];

const myMap = (myCallBack) => {
    let result = [];
    for(let i = 0 ; i < numberList.length ; i++) {
        result.push(myCallBack(numberList[i] , i));
        console.log(`call back function execute ${numberList[i]}`)
    }
    return result;
}

//My Custom Map Function
let customMap = myMap((item , index) => {
    let output = `The Currunt Item Is ${item} and its index is ${index}`;
    return output;
})

console.log(customMap)

//Built-In Map Function
const mapUsage = numberList.map((item , index) => {
    let output = `The Current Item Is ${item} and its index is ${index}`
    return output
})
console.log(mapUsage)

