let drums = [
  new Audio("./tom-1.mp3"),
  new Audio("./tom-2.mp3"),
  new Audio("./tom-3.mp3"),
  new Audio("./tom-4.mp3"),
  new Audio("./snare.mp3"),
  new Audio("./crash.mp3"),
  new Audio("./kick-bass.mp3"),
];

let sizeN = document.getElementsByClassName("size");
console.log(sizeN);

for (let i = 0; i < sizeN.length; i++) {
  sizeN[i].addEventListener("click", playDrum);
  function playDrum() {
    drums[i].cloneNode().play();
  }
}
window.addEventListener("keydown", play_d);
function play_d(event) {
  switch (event.key) {
    case "w":
      drums[0].cloneNode().play();
      break;
    case "a":
      drums[1].cloneNode().play();
      break;
    case "s":
      drums[2].cloneNode().play();
      break;
    case "d":
      drums[3].cloneNode().play();
      break;
    case "j":
      drums[4].cloneNode().play();
      break;
    case "k":
      drums[5].cloneNode().play();
      break;
    case "l":
      drums[6].cloneNode().play();
      break;
  }
}
