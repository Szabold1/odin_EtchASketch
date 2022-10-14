// VARIABLES
const containerDiv = document.querySelector(".container-grid");
const rangePixel = document.getElementById("pixel-size");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnClear = document.querySelector(".btn-clear");
const createDiv = document.createElement("div");

// START
let pixelNum = 5;
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
  box.style.backgroundColor = "rgb(50, 50, 50)";
}

function setRainbow(box) {
  let randomNum1 = Math.floor(Math.random() * 256);
  let randomNum2 = Math.floor(Math.random() * 256);
  let randomNum3 = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

function clearContainer(box) {
  box.style.backgroundColor = "rgb(211, 211, 211)";
}

// CHANGE NUMBER OF SQUARES WITH INPUT RANGE
rangePixel.addEventListener("input", function (e) {
  pixelNum = parseInt(e.target.value);
  start();
});

// CHANGE COLORING TO RAINBOW WITH BUTTON
btnRainbow.addEventListener("click", function () {
  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("mouseover", () => setRainbow(item));
  });
});

// CLEAR BUTTON
btnClear.addEventListener("click", function () {
  document.querySelectorAll(".box").forEach((item) => clearContainer(item));
});
