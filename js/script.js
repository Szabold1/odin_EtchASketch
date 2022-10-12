const containerDiv = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const newDiv = containerDiv.appendChild(document.createElement("div"));
  newDiv.classList.add("box");
}

const gridBox = document.querySelectorAll(".box");
gridBox.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = "rgb(50, 50, 50)";
  });
});
