let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");
btn.addEventListener("click", function () {
  let color = colorGenerate();
  h3.innerText = color;
  div.style.backgroundColor = color;
});

function colorGenerate() {
  let red = Math.floor(Math.random() * 250);
  let green = Math.floor(Math.random() * 250);
  let blue = Math.floor(Math.random() * 250);
  let color = `rgb(${red},${green},${blue})`; // string like: rgb(234,525,525)
  return color;
}
