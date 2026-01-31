const objective = [
  { naam: "user-1", value: 42, type: "number" },
  { naam: "user-2", value: "hello", type: "string" },
  { naam: "user-3", value: true, type: "boolean" },
  { naam: "user-4", value: [1, 2, 3], type: "object" }
];

const arrowFunc = (data) => {
  let output = "--- Regards..";
  
  const iterator = data[Symbol.iterator]();
  let item = iterator.next();

  while (!item.done) {
    let obj = item.value;
    
    output += `
    user Name: ${obj.naam}
    user Item: ${obj.value}
    user Type : ${obj.type}
    -----------------------`;

    item = iterator.next();
  }

  return output;
};

console.log(arrowFunc(objective));

const logs = [
  "1. Maine socha iterator.next() khud ba khud agay nikal jayega, par ye to loop ko phasa deta hai agar manually update na karo.",
  "2. Arrow function mein 'this' ka masla hota hai, agar main object ke andar use karta to undefined output ata",
  "3. Template literal mein space di to output mein bhi space agayi, mujhe laga wo khud manage kar lega."
];

for (let log of logs) {
  console.log(log);
}