let lmnt = document.getElementById("element");
let btn = document.getElementById("btn");
let red = "red";
lmnt.style.backgroundColor = red;
btn.addEventListener("click", change_bg);
function change_bg() {
  if (red == "red") {
    lmnt.style.backgroundColor = "green";
  } else if (red == "green") {
    lmnt.style.backgroundColor = "";
  }
}