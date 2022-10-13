// const grid = [
//   [{ color: 1 }, { color: 10 }, { color: 20 }],
//   [{ color: 40 }, { color: 50 }, { color: 80 }],
//   [{ color: 150 }, { color: 200 }, { color: 255 }],
// ];
const canvasSize = 300;
const cellsAmount = 10;
const grid = new Array(cellsAmount);
console.log(grid);

function setup() {
  createCanvas(canvasSize, canvasSize);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(cellsAmount);
    for (let j = 0; j < grid.length; j++) {
      if (Math.random() < 0.5) grid[i][j] = 0;
      else grid[i][j] = 1;
    }
  }

  console.log(grid);
}

function draw() {
  const cellSize = canvasSize / grid.length;
  grid.forEach((gridRow, x) => {
    gridRow.forEach((rowElement, y) => {
      if (rowElement == 0) fill(0);
      else fill(255);
      square(x * cellSize, y * cellSize, cellSize);
    });
  });
}
