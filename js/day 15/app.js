//console.log

let a=0;
let age=22;
console.log(a);
console.log("I am Hassan Nawaz &",age, "years old");


//03 template literal
        
//Example 1
let p1=10;
let p2=5;
//using template literal ${}
console.log(`total price is : ${p1*p2} rupees`)
//without
console.log("total price is :",(p1*p2),"rupees");

//Example 2
let pencilPrice=10;
let eraserPrice=5;
//using template literal $
let totalPrice=`The total price is : ${pencilPrice+eraserPrice} rupees`;
console.log(totalPrice);
// without
totalPrice="The total price is :"+ (pencilPrice+eraserPrice)+" rupees";
console.log(totalPrice);
//operators

//arithmatic operators(+,-,*,/,%,**)
let num1=10;
let num2=5;
console.log(`addition is : ${num1 + num2}`);
console.log(`subtration is : ${num1 - num2}`);
console.log(`multiplication is : ${num1 * num2}`);
console.log(`division is : ${num1 / num2}`);
console.log(`modulo (remainder) is : ${num1 % num2}`);
console.log(`power of ${num1} ^ ${num2} : ${num1**num2}`);

//uniary operators(++,--)
console.log("uniary operators")
let x=0;
y=x++;//asign then increment
console.log(y);
console.log(x);

x=0;
y=++x;//increment  then assign
console.log(y);
console.log(x);

//assignment operator(=,+=,-+,*=,/=,%=,**=)
console.log("assignment operators")
a=10;
b=5;
console.log(a=b);
console.log(a+=b); //a=a+b
console.log(a-=b);//a=a-b
console.log(a*=b);//a=a*b
console.log(a/=b);//a=a/b
console.log(a**=b);//a=a**b
console.log(a%=b);//a=a%b

//comparison operators(>,<,>=,<=,==,!=,===)
a=10;
b=10;
let c="10";
console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);
console.log(a==c);
console.log(a!=c);
console.log(a===b);
console.log(a===c);//gives wrong ans bcz we only compaire same data type using ===

// if else
age = 20;
if(age<18){
    console.log(`your age is less then required`);
}
else{
    console.log(`your are eligble for this task`);
}

// else if
// let size= prompt("enter the size");
let size="xl";
if (size==="xl"){
    console.log(`Price is 250 Rs.`);
}
else if (size==="l"){
    console.log(`Price is 200 Rs.`);
}
else if (size==="m"){
    console.log(`Price is 150 Rs.`);
}
else if (size==="s"){
    console.log(`Price is 100 Rs.`);
}
else{
    console.log(` this size is not available`);
}
//nested if else
// let marks=prompt(`Enter your Marks please! :`);
let marks=10;
if (marks>33){
    if (marks>80) {
        console.log(`Your grade is outstanding: A+`);
    } else if(marks>70){
        console.log(`Good grade keep working hard : B+`);
    }else if(marks>60){
        console.log(`Good grade keep working hard : B`);
    }else if(marks>50){
        console.log(`Your grade is satisfactory : C`);
    }
    else if(marks>33){
        console.log(`poor grade : D`);}
}
else{
    console.log(`Fail! you need to work hard`);
}
//logical operator logical AND,logical OR,logical NOT
// logical AND
console.log("logical AND");
console.log(false && false);
console.log( true && false);
console.log(false && true);
console.log( true && true);
//Logical OR
console.log("Logical OR");
console.log(false || false);
console.log( true || false);
console.log(false || true);
console.log( true || true);
//logical NOT
console.log("logical NOT");
console.log(!true);
console.log(!false);
//practice Q
console.log("Practice Q: Good String");
let str="apple";
if(str[0]==="a" && str.length>3){
    console.log(`Your entered string :"${str}" is good string`);
}
else{
    console.log(`Your string is bad string`);
}

//truthy and falsy
console.log("truthy and falsy")
let number=1;
if (number){    // number=1 mean value is true 
    console.log("true");
}
else{
    console.log("false");
}
//practice Q End 
//Q1
console.log("practice Q End");
num=20;
if (num%10==0){
    console.log("good");
}else{
    console.log("bad");
}
//Q2
// fullname = prompt("Enter your name!");
// age = prompt("Enter your age!");
// alert(`${fullname} is ${age} years old.`);
//Q3
let quarter=1;
switch (quarter) {
    case 1:
    console.log("January, February, March ");
    break;
    
    case 2:
    console.log("April, May, June ");
    break;

    case 3:
    console.log("July, August, September");
    break;

    case 4:
    console.log("October, November, December ");
    break;

    default:
        console.log("invalid entry");
}
str ="Apples";
if((str[0]==="a" || str[0]==="A" ) && str.length>5){
    console.log("Golden");
}
else{
    console.log("Not Golden");
}
a=50;
b=1500;
c=200;
if(a>b && a>c){
    console.log(a,"is greater");
}else if(b>a && b>c){
    console.log(b,"is greater");
}else{
    console.log(`${c} is greater`);
}
//last Q for string
let numberOne="ABC";
let numberTwo="deAC";
if ((numberOne[numberOne.length-1]) === (numberTwo[numberTwo.length-1])){
    console.log(`Last digit is same`);
}
else{
     console.log(`Last digit is different`);
}
//last q for number
numberOne=1232;
numberTwo=31;
if ( numberOne % 10 === numberTwo % 10 ) { //num/10 their remainder must be same for same last digit number 
    console.log(`Last digit is same`);
}
else{
     console.log(`Last digit is different`);
}