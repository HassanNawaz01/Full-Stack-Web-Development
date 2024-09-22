let btn= document.querySelector("button");
let p= document.querySelector("p");
let h3= document.querySelector("h3");
btn.addEventListener("click",bgColor);
p.addEventListener("click",bgColor);
h3.addEventListener("mouseenter",bgColor);

function bgColor(){
  this.style.backgroundColor="blue";
}


