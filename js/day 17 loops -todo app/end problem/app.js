let arr=[1,2,3,4,5,6,2,3];
let num=2;
for (i=0;i<arr.length;i++){
    if (arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);



//task 2
let number = 287;
let count = 0;
let copy=num;
while(copy>0){
copy =Math.floor(copy /10); 
count++;
}
console.log(count);

//task 3
number = 287152;
copy =number;
let sum = 0;
while(copy>0){
sum+=copy % 10;    //return last digit of number
copy =Math.floor(copy /10); //remove last digit of number
}
console.log(sum);

// ### How number % 10 Works:
// - When you divide a number by 10, the remainder is always the last digit of that number.

// ### Examples:
// - *Single-digit number*:
//   javascript
//   let number = 7;
//   let lastDigit = number % 10;  // Returns 7
  
// - *Multiple-digit number*:
//   javascript
//   let number = 12345;
//   let lastDigit = number % 10;  // Returns 5
  
// ### Explanation:
// - *Dividing by 10*: When you divide any integer by 10, the quotient is the number without the last digit, and the remainder is the last digit.
// - For example, 12345 % 10 equals 5 because 12345 divided by 10 is 1234 with a remainder of 5.


// Math.floor() is a function in JavaScript that returns the largest integer less than or equal to a given number. Essentially, it "floors" the number, removing any fractional part and rounding down to the nearest integer.

// ### How Math.floor() Works:
// - *Positive Numbers*: For positive numbers, Math.floor() simply removes the decimal part.
//   javascript
//   Math.floor(4.7);  // Returns 4
//   Math.floor(4.3);  // Returns 4
  

// - *Negative Numbers*: For negative numbers, Math.floor() still rounds down, which means it moves away from zero.
//   javascript
//   Math.floor(-4.7);  // Returns -5
//   Math.floor(-4.3);  // Returns -5
  

// ### Example in Context:
// In the context of the previous example, where we used Math.floor(number / 10) to remove the last digit:

// - If number is 12345, dividing by 10 gives 1234.5.
// - Math.floor(1234.5) returns 1234, effectively removing the last digit.

// This allows us to keep reducing the number digit by digit in a while loop until no digits remain.


//task 4
let n=6;
let fact=1;
for (i=1;i<=n;i++){
 fact *= i;
}
console.log(`factorial of ${n} is :${fact}`);

//task 5
let largeNum=0;
arr=[23,44,43,22,776,54,767,900,1000,54,3,2];
for (i=0;i<arr.length-1;i++)
{   
    if (arr[i]>arr[i+1])
    {   if(arr[i]>largeNum)
        {largeNum=arr[i];}
    }
    else{
        if(arr[i+1]>largeNum)
        {largeNum=arr[i+1];}
    }
}
console.log(largeNum);
//or 
let largest = 0;
arr=[23,44,43,22,776,54,767,900,1000,54,3,2];
for(i=0;i<arr.length;i++){
    if (largest<arr[i]){
        largest=arr[i];
    }
}
console.log(largest);

//for smallest
let smallest = 0;
arr=[23,44,43,22,776,54,1,5,3,4,5,5];
smallest = arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]<smallest)
    smallest = arr[i];
}
console.log(smallest);