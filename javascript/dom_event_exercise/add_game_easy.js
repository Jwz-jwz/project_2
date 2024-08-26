let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let num1, num2;

// function refreshNumber() {
//   num1 = Math.floor(Math.random() * 101);
//   num2 = Math.floor(Math.random() * 101);
//   one.value = num1;
//   two.value = num2;
//   console.log(num1, num2);
// }
function refreshNumber() {
  one.value = Math.floor(Math.random() * 101);
  two.value = Math.floor(Math.random() * 101);
  num1 = parseInt(one.value, 10);
  num2 = parseInt(two.value, 10);
}

function checkSum() {
  const userInput = parseInt(three.value, 10);
  if (userInput === num1 + num2) {
    alert("hariu zov baina");
  } else {
    alert("hariu buruu baina");
  }
}

refreshNumber();
btn1.addEventListener("click", checkSum);
btn2.addEventListener("click", refreshNumber);

//////////////// parseInt: orj irsen utgiig number bolgodog!!!!!!!
