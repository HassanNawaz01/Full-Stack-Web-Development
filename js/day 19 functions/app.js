//    syntax

// function funcName(){
//     do something
// }

//calling
// funcName();
console.log("Q : print 1 to 5")
function print1to5(){
    for(let i=1; i<=5;i++){
        console.log(i);
    }
}
print1to5();

console.log("practice Q : Dice roll 1to 6")
//practice Q Dice roll 1to 6
function dice(){
   let rand=Math.floor(Math.random()*6)+1;
   console.log(rand);
}
dice();
dice();
dice();
dice();

//print name and age 
console.log("****** print name and age ******* ");
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Hassan Nawaz",23);
//sum & average
console.log("****** sum & average ******");
function sum(a,b,c){
    console.log("sum is :",a+b+c);
    console.log("Avg is :",(a+b+c)/3);
}
sum(3,3,3);
console.log("****** sum three number and return ******");
//return keyword (Add three number using 2 argument of function)
function sum(a,b){
    return a+b;
}
let result = sum(2,sum(3,3));
console.log(result);

//Is adult or not
console.log("****** Is adult or not ******");
function isAdult(age){
    if (age>=18){
        console.log("Age ",age," is Adult");
    }else{
        console.log("Age",age," is Not Adult");
    }
}
isAdult(35);
isAdult(10);

//practice Q a function that returns the sum of a number from 1 to n
console.log("practice Q a function that returns the sum of a number from 1 to n");

sum=0;
function sum1toN(n){
for (let i=1;i<=n;i++){
    sum+=i;
}
return sum;
}
console.log(sum1toN(3));

//practice Q : write a function that returns the concatenation of all strings in an array
console.log("practice Q : write a function that returns the concatenation of all strings in an array");
function Concat(str){
    let concatStr="";
    for (let i=0;i<str.length;i++){
        concatStr+=str[i];
    }
    return concatStr;
}
let arr=["hi","hello","by","!"];
console.log(Concat(arr));

//Function Scope  veriables define inside the function are not accessible outside the function
console.log("Function Scope");
function calcSum(a,b){
    let sumOf=a+b;
}
// console.log(sumOf);  //var sumOf function me define ha it is not accessable outside the function



// block scope: variable define inside the  {} (mean block) cannot be accessed from outside the block
console.log("block scope");
{
    let a=25;
}
// console.log(a);  // var a is not accessible outside the block {}

//example 2
let age =25;
if (age>=18){
    let str="adult";
}
// console.log(str);  // str is not accessable 


//Lexical Scope :variable define outerFunction can be accessable in innerFunction
console.log("Lexical Scope");
function outerFunc(){
    let x=5;
    let y=6;
    function funcInner(){
        console.log(x);
        console.log(y);
    }
    funcInner();
}
outerFunc();

//function expression : another way of creating function
console.log("function expression");
let hello = function(){
    console.log("hello");
}
hello = function(){
    console.log("hi");
}
console.log(hello);  //print function as a value of var hello 
hello();   //execute hello function




//higher order function : a function that does one or both
//take one and multiple function as argument
//return a function

console.log("higher order function");
function multipleGreet(func,n){
    for(let i=1; i<=n;i++){
        func();
    }
}
let greet = function(){
    console.log("Hello");
}
multipleGreet(greet,2);



//higher order function 
//create factory Function which create even and odd function

function evenOddFactory(request){
    if (request=="odd"){
        return function(n){
            console.log(!(n%2==0));  // print true or false
        }
    }else if(request == "even"){
        return function(n){
            console.log(n%2==0); // print true or false
        }
    }else{
        console.log("wrong request");
    }
}
let request = "odd";
let func = evenOddFactory(request); //return odd function in var func
let n=5;
console.log(func);
func(n);  //pass odd value to var func having value odd function

//Methods in Object: functions use in objects called methods of that object
const calculator = {
    num:5,
    add: function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul :function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    }
}
console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log("sum is :",calculator.add(1,9));

//Method (Shorthand)
let = calculator1 = {
    num:5,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    divide(a,b){
        return a/b;
    }
}
console.log(calculator1);
console.log(calculator1.num);
console.log(calculator1.add);
console.log("sum is :",calculator1.add(10,9));



