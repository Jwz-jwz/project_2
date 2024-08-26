const button = document.getElementById("alertButton");
button.addEventListener("keydown", printKey);

function printKey(alert) {
  if (alert.key == "j") {
    console.log("event key=", alert.key);
    button.style.color = "red";
  } else {
    button.style.color = "yellow";
    console.log("event key=", alert.key);
  }
}
