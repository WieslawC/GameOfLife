const canvasSize = 500;
const cellsAmout = 40;
let grid = new Array(cellsAmout);
const frameRateValue = 10;

function findClossestCells(array){
  let nextGenArray = array;

  array.forEach((row, x) => {
    row.forEach((element, y) => {
      let counter = 0;

      if(x == 0 ){
        if(array[x][y-1])counter++;
        if(array[x][y+1])counter++;
        if(array[x+1][y-1])counter++;
        if(array[x+1][y])counter++;
        if(array[x+1][y+1])counter++;
      }
      else if (x > 0 && x < array.length-1){
        if(array[x-1][y-1])counter++;
        if(array[x-1][y])counter++;
        if(array[x-1][y+1])counter++;
        if(array[x][y-1])counter++;
        if(array[x][y+1])counter++;
        if(array[x+1][y-1])counter++;
        if(array[x+1][y])counter++;
        if(array[x+1][y+1])counter++;
      }
      else if(x == array.length-1){
        if(array[x][y-1])counter++;
        if(array[x][y+1])counter++;
        if(array[x-1][y-1])counter++;
        if(array[x-1][y])counter++;
        if(array[x-1][y+1])counter++;
      }
      // console.log(counter);
      if (element == 1 && counter < 2)nextGenArray[x][y] = 0;
      else if (element == 1 && counter > 3)nextGenArray[x][y] = 0;
      else if (element == 0 && counter == 3)nextGenArray[x][y] = 1;
      
    });
  });
  return nextGenArray;
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(frameRateValue);

  //INITIALIZE GRID WITH RANDOM 0 and 1
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array();
    for (let j = 0; j < grid.length; j++) {
      if (Math.random() < 0.5) grid[i][j] = 0;
      else grid[i][j] = 1;
    }
  }

  // console.log(grid);
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

  grid = findClossestCells(grid);
  // console.log(grid);

  // noLoop();
}
