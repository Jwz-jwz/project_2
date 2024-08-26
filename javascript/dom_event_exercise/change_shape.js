let lmnt = document.getElementById("element");

lmnt.addEventListener("click", change_shape);
function change_shape() {
  lmnt.style = `
    border-radius: 50%`;
}
lmnt.addEventListener("dblclick", triangle);
function triangle() {
  lmnt.style = `
  width: 0;
	height: 0;
	border-left: 150px solid transparent;
	border-right: 150px solid transparent;
	border-bottom: 300px solid red;
  background-color: white;`;
}
