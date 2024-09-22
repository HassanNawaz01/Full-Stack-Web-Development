// let anchor = document.querySelectorAll(".myClass a");
// anchor.forEach((element) => {
//   element.innerText = "hello";
// });

// let myClass = document.querySelector(".myClass");
// let p = document.createElement("p");
// myClass.prepend(p);
// p.innerHTML = "hi i am hassan";
// let li = document.createElement("li");
// let ul = (document.querySelector("ul").appendChild(li).innerHTML =
//   "hellllllllo");
// myClass.classList.add("bg-div");
// myClass.querySelectorAll("ul li")[0].classList.add("liitems");

//practice Q
//part 1
let body=document.querySelector("body");
let para1= document.createElement("p");
para1.innerText="Hey I'm red!";
para1.classList.add("red");
body.append(para1);

//part 2
let h3 = document.createElement("h3");
h3.innerText="I'm a Blue h3";
h3.classList.add("blue");
body.append(h3);
//part3 
let div = document.createElement("div");
let h1= document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText="I'm in a Div";
para2.innerText="ME TOO";

div.classList.add("color");
body.append(div);
div.append(h1);
div.append(para2);