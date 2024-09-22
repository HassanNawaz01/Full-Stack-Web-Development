const student = {
  firstName: "Hassan",
  lastName: "Nawaz",
  id: 190405,
  section: "Electronics B",
  cgpa: 2.86,
  fullName() {
    console.log(this.firstName + this.lastName); //concat strings
  },
  getCgpa() {
    console.log(this.cgpa);
  },
};
console.log(student.fullName());
console.log(student.getCgpa());

//try & catch
// let a=5;
try {
  console.log(a);
} catch {
  console.log("a is not defined");
}

//Arrow Functions
const sum = (a, b) => {
  return a + b;
};
console.log(sum);
console.log(sum(4, 1));
//power
const pow = (a, b) => {
  return a ** b; //a^b
};
console.log(pow);
console.log(pow(4, 2));
//cube
const cube = (n) => n * n * n;
console.log(cube);
console.log(cube(3));

//practice Q
let sqrt = (n) => n * n;
console.log(sqrt);
console.log(sqrt(5));

//practice Q
// let id = setInterval(() => {
//   console.log("hello world!");
// }, 2000);
// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

//end Q1
const arr = [10, 5, 15, 10];
let arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return avg;
};
console.log("Average of all element of array is :", arrayAverage(arr));
// Q2
let isEven = (n) => {
  if (n % 2 == 0) {
    console.log(`Even Number`);
  } else {
    console.log(`Odd Number`);
  }
};
console.log(isEven(5));
// Q3

// const object = {
//   message: "Hello, World!",
//   logMessage() {
//     console.log(this.message);
//     console.log(this);
//   },
// };

// setTimeout(object.logMessage(), 1000);

//Q4
let a = 4;
function callback() {
  console.log(a);
  console.log(this);
}
const object= {
  a: 5,
  method(callback) {
    callback();
  }
};
console.log(object.method(callback));



// let hassan = {
//   //global scope(window)
//   age: 23,
//   height: 6.11,
//   weight: 55,
//   skill: this, //global scope(window)
//   getage: function () {
//     //function
//     console.log(this); //this refer : calling object (hassan)
//   },
//   getage1: () => {
//     //arrow function
//     console.log(this); //this refer : parent scope(parent is hassan) which scope is window
//   },
//   //
//   random: function () {
//     setTimeout(function () {
//       console.log(this);
//     }, 1000);

//     setTimeout(() => {
//       console.log(this);
//     }, 1000);
//   },
// };
// console.log(hassan.random());
