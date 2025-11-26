
// container.appendChild(grid);

function createGrid(rows, columns){
  const grid = document.getElementById("container");
  let cell;
  for (let c = 0; c <= rows * columns; c++){
      cell = document.createElement("div");
      grid.appendChild(cell).className = "gridItem";
  };
};

createGrid(16, 16);