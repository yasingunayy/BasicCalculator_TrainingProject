"use strict";

const display = document.getElementById("displayInput");
const buttons = document.getElementsByClassName("btn");
const clear = document.getElementById("clear-entry");
const darkLightButton = document.getElementById("dark-light");

let control = true;
let result;
let val = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if (buttons[i].innerHTML == "=") {
      display.value = calc(val);
    } else {
      display.value += buttons[i].innerHTML;
      val += buttons[i].innerHTML;
    }
  });
}

darkLightButton.addEventListener("click", (e) => {
  if (control) {
    document.body.style.backgroundColor = "#444";
    control = false;
    darkLightButton.innerHTML = "<b>LİGHT</b>";
    darkLightButton.style.color = "#444";
    darkLightButton.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    control = true;
    darkLightButton.innerHTML = "<b>DARK</b>";
    darkLightButton.style.backgroundColor = "#444";
    darkLightButton.style.color = "#fff";
  }
});

clear.addEventListener("click", (e) => {
  display.value = "";
  val = "";
});

function calc(str) {
  result = eval(str);
  return result;
}
