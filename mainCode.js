const canvasSize = window.innerHeight;
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
let grid = new Array(100);//HOW DENSE THE GRID IS
const frameRateValue = 10;
const cellSize = canvasWidth / grid.length;

function findClossestCells(array){
  //CREATE AND INITIALIZE NEXT GENERATION ARRAY
  let nextGenArray = new Array(array.length);
  for (let i = 0; i < nextGenArray.length; i++) {
    nextGenArray[i] = new Array();
    for (let j = 0; j < canvasHeight/(canvasWidth/array.length); j++) nextGenArray[i][j] = 0;
  }

  array.forEach((row, x) => {
    row.forEach((element, y) => {
      let neighborCount = 0;

      if(x == 0 ){
        if(array[x][y-1]) neighborCount++;
        if(array[x][y+1]) neighborCount++;
        if(array[x+1][y-1]) neighborCount++;
        if(array[x+1][y]) neighborCount++;
        if(array[x+1][y+1]) neighborCount++;
      }
      else if (x > 0 && x < array.length-1){
        if(array[x-1][y-1]) neighborCount++;
        if(array[x-1][y]) neighborCount++;
        if(array[x-1][y+1]) neighborCount++;
        if(array[x][y-1]) neighborCount++;
        if(array[x][y+1]) neighborCount++;
        if(array[x+1][y-1]) neighborCount++;
        if(array[x+1][y]) neighborCount++;
        if(array[x+1][y+1]) neighborCount++;
      }
      else if(x == array.length-1){
        if(array[x][y-1]) neighborCount++;
        if(array[x][y+1]) neighborCount++;
        if(array[x-1][y-1]) neighborCount++;
        if(array[x-1][y]) neighborCount++;
        if(array[x-1][y+1]) neighborCount++;
      }
      // console.log(counter);
      if (neighborCount < 2 || neighborCount > 3) nextGenArray[x][y] = 0;
      else if (element == 0 && neighborCount == 3) nextGenArray[x][y] = 1;
      else if(element == 1 && (neighborCount == 2 || neighborCount == 3)) nextGenArray[x][y] = 1;
    });
  });
  return nextGenArray;
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(frameRateValue);

  //INITIALIZE GRID WITH RANDOM 0 and 1
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array();
    for (let j = 0; j < canvasHeight/(canvasWidth/grid.length); j++){
      if (Math.random() < 0.5) grid[i][j] = 0;
      else grid[i][j] = 1;
    }
  }
}

function draw() {
  //DRAW ELEMENTS AND FILL WITH COLOR
  grid.forEach((row, x) => {
    row.forEach((element, y) => {
      element ? fill(0) : fill(255);
      square(x * cellSize, y * cellSize, cellSize);
    });
  });

  grid = findClossestCells(grid);
}
