// Major Project "There is Still NO GAME!"
// Niles
// Feb 24th 2021

const COLS = 24;
const ROWS = 18;
let grid;
let cellWidth = 30;
let cellHeight = 30;
let letterT, letterH, letterE, letterR, letterI, letterS, letterL, letterN, letterO, letterG, letterA, letterM, lines, tiles, empty, sectionA, 
sectionB, sectionC, sectionD; 
let levelBackground;
let tilesHigh, tilesWide;
let tileWidth, tileHeight; 
let whatSection;

function preload() { //used to load all my assets
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
  empty = loadImage("assets/Black again.jpg");
  sectionA = "assets/Section 1.txt";
  sectionB = "assets/Section 1b.txt";
  sectionC = "assets/Section 1c.txt";
  sectionD = "assets/Section 1d.txt";
  whatSection = sectionA;
  lines = loadStrings(whatSection);
}

function setup() { //creates the grid and canvas
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

function draw() {
  background("black");
  display();
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
}


function mousePressed() {
  if (whatSection === sectionA) {
    whatSection = sectionB;
    let particle = new Paint(mouseX, mouseY);
  }
  else if (whatSection === sectionB) {
    whatSection = sectionC;
  }
  else if (whatSection === sectionC) {
    whatSection = sectionD;
  }
}

class Paint { //the particles that come off the title
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.dx = random (-2, 2);
    this.dy = 10;
    this.size = 10;
    this.colour = "yellow";
  }
  displayBall() {
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() { //stop after momentum check
    if (this.y < height - 10) {
      this.x -= 2;
      this.y += 10;
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