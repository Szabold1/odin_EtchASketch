// VARIABLES
const containerDiv = document.querySelector(".container-grid");
const btnPixel = document.querySelector(".btn-pixel");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnClear = document.querySelector(".btn-clear");
const createDiv = document.createElement("div");

// START
let pixelNum = 5;
for (let i = 0; i < pixelNum * 4 * (pixelNum * 3); i++) {
  const newDiv = containerDiv.appendChild(createDiv.cloneNode(true));
  newDiv.classList.add("box");
}

document.querySelectorAll(".box").forEach((item) => {
  item.addEventListener("mouseover", () => setRgb50(item));
});

//  FUNCTIONS
function setRgb50(i) {
  i.style.backgroundColor = "rgb(50, 50, 50)";
}

function setRainbow(i) {
  let randomNum1 = Math.floor(Math.random() * 256);
  let randomNum2 = Math.floor(Math.random() * 256);
  let randomNum3 = Math.floor(Math.random() * 256);
  i.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}

function clearContainer(box) {
  box.style.backgroundColor = "rgb(211, 211, 211)";
}

// CHANGE NUMBER OF SQUARES WITH BUTTON
btnPixel.addEventListener("click", function () {
  const userChoice = prompt("Number of squares per side:", 20);
  if (userChoice > 100) {
    alert("Please choose a smaller number");
  } else if (userChoice < 1) {
    alert("Please choose a larger number");
  } else {
    pixelNum = userChoice;
    containerDiv.style.gridTemplateRows = `repeat(${pixelNum * 3}, 1fr)`;
    containerDiv.style.gridTemplateColumns = `repeat(${pixelNum * 4}, 1fr)`;

    for (let i = 0; i < pixelNum * 4 * (pixelNum * 3); i++) {
      newDiv = containerDiv.appendChild(createDiv.cloneNode(true));
      newDiv.classList.add("box");
    }

    document.querySelectorAll(".box").forEach((item) => {
      clearContainer(item);
      item.addEventListener("mouseover", () => setRgb50(item));
    });
  }
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
