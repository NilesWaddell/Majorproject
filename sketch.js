// Major Project "There is Still NO GAME!"
// Niles
// Feb 24th 2021

const COLS = 24;
const ROWS = 18;
let grid;
let cellWidth = 30;
let cellHeight = 30;
let letterT, letterH, letterE, letterR, letterI, letterS, letterL, letterN, letterO, letterG, letterA, letterM, sectionOne, lines, tiles, empty; 
let levelBackground;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;

function preload() {
  levelBackground = loadImage("assets/Black.jpg");
  letterT = loadImage("assets/T.png");
  letterH = loadImage("assets/H.png");
  letterE = loadImage("assets/E.png");
  letterR = loadImage("assets/R.png");
  letterI = loadImage("assets/I.png");
  letterS = loadImage("assets/S.png");
  letterL = loadImage("assets/L.png");
  letterN = loadImage("assets/N.png");
  letterO = loadImage("assets/O.png");
  letterG = loadImage("assets/G.png");
  letterA = loadImage("assets/A.png");
  letterM = loadImage("assets/M.png");
  sectionOne = "assets/Section 1.txt";
  lines = loadStrings(sectionOne);
}

function setup() {
  function setup() {
    createCanvas(1000, 750);
  
    tilesHigh = lines.length;
    tilesWide = lines[0].length;
  
    tileWidth = width / tilesWide;
    tileHeight = height / tilesHigh;
  
    tiles = createEmptyGrid(tilesWide, tilesHigh);
  
    for (let y = 0; y < tilesHigh; y++) {
      for (let x = 0; x < tilesWide; x++) {
        let tileType = lines[y][x];
        tiles[x][y] = tileType;
      }
    }
  }
}
function draw() {
  // background("black");

  for (let y=0; y<ROWS; y++){
    for (let x=0; x<COLS; x++){
      if (grid[y][x] === 0){
        fill("black");
      }
      
      else {
        fill("white");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }

  }
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(grid[x][y], x, y);
    }
  }
}


// function mousePressed() {
//   let x = Math.floor(mouseX / cellWidth);
//   let y = Math.floor(mouseY / cellHeight);

//   if (grid[y][x] === 1) {
//     grid[y][x] = 0;
//   }
//   else if (grid[y][x] === 0 ) {
//     grid[y][x] = 1;
//   }
// }

class Paint { //the particles that come off the title
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.size = 10;
    this.colour = "white";
  }
  display() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() { //stop after momentum check
    this.x += this.dx;
    this.y += this.dy;
    if (this.dy < 0) {
      this.dy++;
    }
    if (this.dy > 0) {
      this.dy--;
    }
    if (this.dx < 0) {
      this.dx++;
    }
    if (this.dx > 0) {
      this.dx--;
    }
  }
}

function showTile(location, x, y) {
  if (location === "A") {
    image(letterA, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "E") {
    image(letterE, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "G") {
    image(letterG, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "H") {
    image(letterH, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "I") {
    image(letterI, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "L") {
    image(letterL, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "M") {
    image(letterM, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "N") {
    image(letterN, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "O") {
    image(letterO, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "R") {
    image(letterR, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "S") {
    image(letterS, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "T") {
    image(letterT, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}


function createEmptyGrid(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}