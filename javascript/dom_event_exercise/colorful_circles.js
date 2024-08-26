let num1 = document.getElementById("number");

let butt = document.getElementById("button");
let out = document.getElementById("cici");
out.style.display = `flex`;
let num;
// num.value = Math.floor(Math.random() * 101);

butt.addEventListener("click", generate);
function generate(el) {
  console.log(num1.value);
  num = parseInt(num1.value, 10);
  console.log(typeof num);
  for (i = 0; i < num; i++) {
    let circle = document.createElement("div");
    cici.appendChild(circle);
    circle.style = `
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #2b974f;

      `;
  }
}
