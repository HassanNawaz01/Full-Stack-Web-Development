//every method print all array element
let arr = [1, 34, 55, 644, 33];
arr.forEach((el) => {
  console.log(el);
});
//map method  // square of array element and store squared element in new array
arr = [1, 34, 55, 644, 33];
let newArr = arr.map((el) => el * el);
console.log(newArr);
//example 2
let student = [
  //array inside onjects as array element
  {
    name: "hassan",
    marks: 98,
  },
  {
    name: "ali",
    marks: 90,
  },
  {
    name: "ahmad",
    marks: 91,
  },
];
let gpa = student.map((el) => el.marks / 10);
console.log(gpa);

//Filter Method
arr = [1, 2, 3, 4, 5, 6, 7, 8];
let even = arr.filter((el) => el % 2 == 0);
//if el=2,el%==0 => func return true and that element save in an array even
console.log(even);

//every method
arr = [1, 5, 3];
let boolean = arr.every((el) => el % 2 != 0);
console.log(boolean); //if all element of arr is odd then boolean is true

//some method
boolean = [1, 3, 4].some((el) => el % 2 == 0);
console.log(boolean);
//reduce Method return only single value
//sum of array element
let result = [1, 2, 3, 4].reduce((res, el) => res + el);
//max value in an array
arr = [2, 6, 45, 33];
let max = arr.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});
console.log(max);
//min value
//after return,return value update in min var
// min el ret
// 0   3   0
// 0   2   0
// 0   1   0
// 0   6   0
// 0  -1  -1
// -1 -2  -2
//ans >> min = -2
arr = [0, 3, 2, 1, 6, -1, -2];
let min = arr.reduce((min, el) => {
  if (el < min) {
    return el;
  } else {
    return min;
  }
});
console.log(min);

//spread in js
arr = [32, 5, 6, 7, 8, 653, 3, 5, 6, 7];
min = Math.min(...arr);
console.log(min);
//concat odd and even array
let odd = [1, 3, 5, 7];
Even = [2, 4, 6, 8];
let concat = [...odd, ...Even];
console.log(concat);

//Rest in js
function sum(...arg) {
  //arg[1,2,3,4]
  let sum = arg.reduce((sum, el) => sum + el);
  return sum;
}
console.log(sum(1, 2, 3, 4));

