let btns = document.querySelectorAll("button");

function clickme() {
  console.log("button clicked");
}

for (btn of btns) {
  btn.onclick = clickme;
}
