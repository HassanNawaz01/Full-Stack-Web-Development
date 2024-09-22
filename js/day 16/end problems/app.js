let arr=[7,9,0,-2];
let n=3;
let print = arr.slice(0,n)
console.log(print);
//task 2
arr=[7,9,0,-2];
n=3;
print = arr.slice(-n)
console.log(print);

//task 3
let str=[];
if (str.length==0){
    console.log("Empty String");
}
else{
    console.log("String is not Empty");
}
//task 4
str="heLLohHaSSaN";
let idx=4;
if (str[idx] === str[idx].toLowerCase()){
    console.log("lower case, character is :",str[idx]);
}
else{
    console.log("upper case, character is :",str[idx]);
}
//task 5
let arrayName="   hassan nawaz   ";
console.log(`Original string :${arrayName}`);
console.log(`string without spaces :${arrayName.trim()}`);
//task 6
arr = ['a',2,33,444,55,4,6,'nv'];
let items = 55;
if (arr.includes(items) == false){
    console.log(`Element does not exist`);
}
else{
    console.log(`Element exists in array`);
}
