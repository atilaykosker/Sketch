const gridLines = document.documentElement;
const newGridButton = document.getElementById("create-grid");
const cells = document.getElementsByClassName("cell");
const resetButton = document.getElementById("reset");

function createCells(quantity = 16) {
  for (let i = 0; i < quantity ** 2; ++i) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");
    container.appendChild(newDiv);
  }
}

newGridButton.addEventListener("click", function () {
  container.innerHTML = "";
  const quantity = prompt("Set the grid using a value between 2 and 64.");
  if (quantity < 2 || quantity > 64) {
    quantity = prompt("Please insert a value from 2 to 64.");
  }
  createCells(quantity);
  gridLines.style.setProperty("--quantity", quantity);
  createColor();
  cellClear();
});

function createColor() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "red";
    });
  }
}
function cellClear() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (e) {
      e.target.style.backgroundColor = "white";
    });
  }
}

resetButton.addEventListener("click", function () {
  location.reload();
});

createCells();
createColor();
cellClear();
