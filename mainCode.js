const canvasSize = 500;
const grid = new Array(20);
console.log(grid);

function setup() {
  createCanvas(canvasSize, canvasSize);

  //INITIALIZE GRID WITH RANDOM 0 and 1
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array();
    for (let j = 0; j < grid.length; j++) {
      if (Math.random() < 0.5) grid[i][j] = 0;
      else grid[i][j] = 1;
    }
  }

  console.log(grid);
}

function draw() {
  const cellSize = canvasSize / grid.length;

  //DRAW ELEMENTS AND FILL WITH COLOR
  grid.forEach((row, x) => {
    row.forEach((element, y) => {
      element ? fill(0) : fill(255);
      square(x * cellSize, y * cellSize, cellSize);
    });
  });
}
