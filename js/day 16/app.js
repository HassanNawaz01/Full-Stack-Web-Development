// STRING METHOD

// trim method
let enteredEmail= "  hassannawaz5569@gmail.com  "
let enteredPassword= "   abcdndsmd"
let email=enteredEmail.trim();
let password=enteredPassword.trim();
console.log(email,password);

//toUpperCase & toLowerCase Method
console.log("toUpperCase & toLowerCase Method");
let str="  Hassan Nawaz  ";
console.log(str.toUpperCase(),str.toLowerCase());
//method Chaining
console.log(str.trim().toUpperCase());
//slice Method
console.log("Slice Method");
let random="IloveCoding";
console.log(random.slice(1));
console.log(random.slice(1,5));
console.log(random.slice(-6));
//Replace and Repeat Method
console.log("REPLACE");
console.log(random.replace("love","hate"));
console.log("REPEAT");
console.log(random.repeat(5));



//ARRAY
//Visualizing an array
console.log("Visualizing an array")
let nums=[];
nums=[1,2,3,4,5,6];
console.log(nums);
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]); 
console.log(nums[4]);
console.log(nums[5]);
console.log(nums[6]);
console.log(nums[nums.length-1]);
//array method push,pop,shift,unshift
console.log("push,pop,shift,unshift");
let cars=["toyota","honda","suzuki","xuv"];
console.log("cars array",cars);
cars.push("tesla");
console.log("pushMethod",cars);
cars.pop();
console.log("popMethod",cars);
cars.unshift("tesla");
console.log("unshiftMethod",cars);
cars.shift("xuv");
console.log("shiftMethod",cars);
//practice Q
let start=["january","july","march","auguest"];
console.log(start);
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
let final=start;
console.log(final);
//indexOf & includes
console.log("indexOf");
let primary=["red","yellow","green"];
console.log(primary);
console.log(primary.indexOf("green"));
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("orange"));

console.log("includes");
console.log(primary.includes("yellow"));
console.log(primary.includes("orange"));

//concat & reverse method
console.log("concat primary and secondary array")
primary=["red","yellow","green"];
let secondary=["grey","brown"]
console.log(primary.concat(secondary));
//reverse
console.log("reverse");
console.log(primary.reverse());

//slice Method doesnt change original array
let colors=["red","yellow","green","blue","grey"];
console.log("silce Method, Colors:",colors);
console.log("slice(2)",colors.slice(2));
console.log("slice(2,4)",colors.slice(2,4));
console.log("slice(-3)",colors.slice(-3));
// splice change the original array
colors=["red","yellow","green","blue","grey","cyan"];
colors.splice(1,2,"orange");
console.log(colors);
colors.splice(1,0,"purple");
console.log(colors);
//practice Q
let months=["jan","july","march","august"];
months.splice(0,2,"july","june");
console.log(months)
//array Reference
let arr=['a','b','c','d'];
let arrCopy=['a','b','c','d'];
console.log(arr==arrCopy);

arr=['a','b','c','d'];
arrCopy = arr;
console.log(arr==arrCopy);

arr=['a','b','c','d'];
arrCopy = arr;
arr.push("e");
console.log(arr);
console.log(arrCopy);

arrCopy=['a','b','c','d'];
arrCopy.pop();
console.log(arr);
console.log(arrCopy);