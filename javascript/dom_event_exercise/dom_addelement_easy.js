const qwerty = document.getElementById("element");
qwerty.style = `
display:flex`;

let butt = document.getElementById("btn");
i = 1;

butt.addEventListener("click", elementFunction);
function elementFunction() {
  const elem = document.createElement("div");
  qwerty.appendChild(elem);
  elem.style = `
  padding-top: 20px;
  text-align: center;
  width : 50px;
  height : 50px;
  background : yellow;`;
  elem.innerText = i;
  i++;
}
