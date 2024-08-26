let input = document.getElementById("input_fruit").value;
console.log(typeof input);
let fruit = document.getElementsByClassName("fruit");
console.log(fruit);
let result = document.getElementById("result");

input.addEventListener(`input`, getvalue);

// function getvalue() {
//   if (input == "cherry") {
//     result.innerText = "cherry";
//   } else if (input == "app") {
//     result.innerText = "app";
//   } else if (input == "ora") {
//     result.innerText = "ora";
//   } else if (input == "pine") {
//     result.innerText = "pine";
//   } else if (input == "straw") {
//     result.innerText = "straw";
//   } else if (input == "blue") {
//     result.innerText = "blue";
//   } else if (input == "rasb") {
//     result.innerText = "rasb";
//   }
// }

function getvalue() {
  document.getElementById("result").innerHTML = "result is" + input;
}
