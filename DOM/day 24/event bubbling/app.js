let div = document.querySelector(".container");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
div.addEventListener("click", function (event) {
    console.log("div clicked");
});
ul.addEventListener("click", function (event) {
  console.log("ul clicked");
  event.stopPropagation();
});
for (li of lis) {
  li.addEventListener("click", function (event) {
    console.log("li clicked");
    event.stopPropagation();
  });
}
