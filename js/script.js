// VARIABLES
const containerDiv = document.querySelector(".container-grid");
const rangePixel = document.getElementById("pixel-size");
const colorPicker = document.getElementById("color-picker");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnClear = document.querySelector(".btn-clear");
const btnErase = document.querySelector(".btn-erase");
const createDiv = document.createElement("div");

// START
let pixelNum = 5;
const initialColor = "#323232";
const initialBackgroundColor = "rgb(211, 211, 211)";
let flagRainbow = false;
let flagErase = false;
start();

//  FUNCTIONS
function start() {
  containerDiv.style.gridTemplateRows = `repeat(${pixelNum * 3}, 1fr)`;
  containerDiv.style.gridTemplateColumns = `repeat(${pixelNum * 4}, 1fr)`;
  for (let i = 0; i < pixelNum * 4 * (pixelNum * 3); i++) {
    const newDiv = containerDiv.appendChild(createDiv.cloneNode(true));
    newDiv.classList.add("box");
  }
  document.querySelectorAll(".box").forEach((item) => {
    clearContainer(item);
    item.addEventListener("mouseover", () => setRgb50(item));
  });
}

function setRgb50(box) {
  box.style.backgroundColor = initialColor;
}

function setRainbow(box) {
  let randomNum1 = Math.floor(Math.random() * 256);
  let randomNum2 = Math.floor(Math.random() * 256);
  let randomNum3 = Math.floor(Math.random() * 256);
  box.style.backgroundColor = flagRainbow
    ? `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`
    : colorPicker.value;
}

function clearContainer(box) {
  box.style.backgroundColor = initialBackgroundColor;
}

function erase(box) {
  box.style.backgroundColor = initialBackgroundColor;
}

function turnOffRainbowButton() {
  btnRainbow.classList.remove("btn-on");
  flagRainbow = false;
}

function turnOffEraseButton() {
  btnErase.classList.remove("btn-on");
  flagErase = false;
}

// CHANGE NUMBER OF SQUARES WITH INPUT RANGE
rangePixel.addEventListener("change", function (e) {
  if (flagRainbow) turnOffRainbowButton();
  if (flagErase) turnOffEraseButton();

  pixelNum = parseInt(e.target.value);
  start();
  colorPicker.value = initialColor;
});

// COLOR PICKER
colorPicker.addEventListener("change", function (e) {
  if (flagRainbow) turnOffRainbowButton();
  if (flagErase) turnOffEraseButton();

  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("mouseover", () => {
      // colorPicker.value = e.target.value;
      item.style.backgroundColor = `${e.target.value}`;
    });
  });
});

// CHANGE COLORING TO RAINBOW WITH BUTTON
btnRainbow.addEventListener("click", function () {
  flagRainbow = !flagRainbow;
  if (flagRainbow) {
    btnRainbow.classList.add("btn-on");
    if (flagErase) turnOffEraseButton();
  } else if (flagRainbow === false) {
    btnRainbow.classList.remove("btn-on");
  }
  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("mouseover", () => setRainbow(item));
  });
});

// CLEAR BUTTON
btnClear.addEventListener("click", function () {
  document.querySelectorAll(".box").forEach((item) => clearContainer(item));
});

// ERASER BUTTON
btnErase.addEventListener("click", function () {
  flagErase = !flagErase;
  if (flagErase) {
    btnErase.classList.add("btn-on");
    if (flagRainbow) turnOffRainbowButton();
  } else if (flagErase === false) {
    btnErase.classList.remove("btn-on");
  }
  document.querySelectorAll(".box").forEach((item) => {
    if (flagErase) {
      item.addEventListener("mouseover", () => erase(item));
    } else if (flagErase === false) {
      item.addEventListener("mouseover", () => {
        item.style.backgroundColor = colorPicker.value;
      });
    }
  });
});
