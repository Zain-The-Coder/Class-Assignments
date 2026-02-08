//                     Section 3: OOP with JavaScript


//
// Task 3.1 – Constructor Functions
function User(name, age) {
  this.name = name;
  this.age = age;

}

User.prototype.introduce = function () {
  return `Hi, my name is ${this.name} and I am ${this.age} years old`;
};

const u1 = new User("Zain", 17);
const u2 = new User("Ali", 18);

console.log(u1.name);
console.log(u2.name); 

console.log(u1.introduce());
console.log(u2.introduce());

console.log(u1.introduce === u2.introduce); 
console.log(u1.__proto__ === User.prototype);



// Task 3.2 – ES6 Classes (Comparison)
class User1 {
  constructor(name1, age1) {
    this.name1 = name1;
    this.age1 = age1;
  }

  introduce() {
    return `Hi, my name is ${this.name1} and I am ${this.age1} years old`;
  }
}

const u11 = new User("Zain", 17);
const u21 = new User("Ali", 18);

console.log(u11.introduce());
console.log(u21.introduce());

console.log(u11.introduce === u21.introduce); 
console.log(u11.__proto__ === User1.prototype); 

console.log(u11.name !== u21.name); 


