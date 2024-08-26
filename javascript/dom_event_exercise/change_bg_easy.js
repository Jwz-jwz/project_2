let lmnt = document.getElementById("element");
let btnn = document.getElementById("btn");
btnn.addEventListener("click", changeColor);
function changeColor() {
  let random = "#";
  let newrandomcolor = Math.floor(Math.random() * 16777215).toString(16);
  lmnt.style.backgroundColor = random + newrandomcolor;
}
