// let body = document.querySelector("body");
// let btn = document.createElement("button");
// btn.innerText = "Click Me!";
// body.append(btn);
// btn.addEventListener("click", function () {
//   this.style.color = "green";
// });

//task 2
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function () {
  const value = inp.value;
  const filteredValue = value.replace(/[^a-zA-z\s]/g, "");
  this.inputMode.value = filteredValue;
  h2.innerText = filteredValue;
});
