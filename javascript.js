

function createGrid(rows, columns){ //creates and calls to remove the previous grid
  removeGrid();
  const grid = document.getElementById("container");
  let cell;
  for (let i = 0; i< rows; i++){
    for(let j = 0; j< columns; j++){
      cell = document.createElement("div");
      grid.appendChild(cell).className = "gridItem";
      cell.style.width = (600 / (rows)) + "px";
      cell.style.height = (600 / (rows)) + "px";
    }
  }
  hover();
};

function hover(){                   // on mouse hovering sets the cells to random colors
    const cells = document.querySelectorAll(".gridItem");
    

    cells.forEach((gridItem) =>{

        gridItem.addEventListener("mouseover", () => {
            let red = Math.random() * 255;
            let green = Math.random() * 255;
            let blue = Math.random() * 255;
            gridItem.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
        });
    });
}

function removeGrid() { // it removes the canvas
    let cell = document.getElementsByClassName("gridItem");
    while(cell.length > 0) {
        cell[0].parentNode.removeChild(cell[0]);
    }
}

let gridNumber = 0;
let gridSize = document.querySelector("button");
gridSize.addEventListener("click", (event) =>{ // creates the canvas, limits are (0, 100]

  event.preventDefault();
  do
  gridNumber = parseInt(prompt("Add the number of squares you want in the grid per side (maximum 100): "));
  while (gridNumber <= 0 || gridNumber > 100);
  createGrid(gridNumber, gridNumber);
})

createGrid(8,8); //starting canvas


const copyright = document.getElementById("copyright");
copyright.textContent = `Copyright ©  ${(new Date().getFullYear())} Vlad-Dinca`;

