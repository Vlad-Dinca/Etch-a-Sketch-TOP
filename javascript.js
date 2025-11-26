
// container.appendChild(grid);

function createGrid(rows, columns){
  const grid = document.getElementById("container");
  let cell;
  for (let i = 0; i< rows; i++){
    for(let j = 0; j< columns; j++){
      cell = document.createElement("div");
      grid.appendChild(cell).className = "gridItem";
      cell.style.width = (600 / (rows)) + "px";
      cell.style.height = (600 / (rows)) + "px";
      // cell.style.width="10 px
      // ;
      // cell.style.height="10 px";
    }
  }
  hover();
};

function hover(){
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell) =>{
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "green";
        });
    });
}

function removeGrid() {
    let cell = document.getElementsByClassName("gridItem");
    while(cell.length > 0) {
        cell[0].parentNode.removeChild(cell[0]);
    }
}

let gridNumber = 0;
let gridSize = document.querySelector("button");
gridSize.addEventListener("click", (event) =>{

  event.preventDefault();
  if (gridNumber !=0)
    removeGrid();
  gridNumber = parseInt(prompt("Add the number of squares you want in the grid per side (maximum 100): "));
  createGrid(gridNumber, gridNumber);

})

createGrid(8,8);

