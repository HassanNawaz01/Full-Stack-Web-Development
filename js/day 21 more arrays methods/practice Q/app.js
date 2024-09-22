//Q1
let arr = [1, 2, 3, 4];
let sum = arr.reduce((res, el) => res + el); //sum is var
let square = arr.map((el) => el * el); //square is an array
let avg = sum / arr.length;
console.log(`sum is :${sum} and average is :${avg}`);
console.log(`square of array elements are :${square}`);

//Q2
arr = [1, 2, 3, 4];
let newArr = arr.map((number) => number + 5);
console.log(newArr);

//Q3
let car = ["honDa", "suzuKi", "Xuv", "tesLa"];
let newCar = car.map((string) => string.toUpperCase());
console.log(newCar);

//Q4
const doubleAndReturnArgs = (arr, ...arg) => [
  ...arr,
  ...arg.map((el) => el * 2),
];
console.log(doubleAndReturnArgs([1, 43, 5], 7, 5, 4));

//Q5
const mergeObject = (obj1,obj2)=>({...obj1,...obj2});
console.log(mergeObject({a:1,b:3},{c:3,d:5}));