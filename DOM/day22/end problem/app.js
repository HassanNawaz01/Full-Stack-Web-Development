//par1
let input = document.createElement("input");
let button = document.createElement("button");
document.querySelector("body").append(input);
document.querySelector("body").append(button);
button.innerText = "Click Me!";
//part2
input.setAttribute("placeholder", "username"); // or input.placeholder="username";
button.setAttribute("id", "btn"); // or button.id="btn";
//part3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");
//part4
let h1 = document.createElement("h1");
h1.innerText="DOM Practice";
document.querySelector("body").append(h1);
h1.classList.add("undColor");
//part 5
let p=document.createElement("p");
p.innerHTML="Apna College,<b> Delta</b> Practice";
document.querySelector("body").append(p);