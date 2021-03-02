// Major Project "There is Still NO GAME!"
// Niles
// Mar 1st 2021

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
let dropplets = [];

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
  
  
}

function draw() {
  background("black");
  display();
  for (let i=dropplets.length-1; i>=0; i--){
    if (whatSection != sectionD) {
      dropplets[i].move;
      dropplets[i].displayBall;
    }
  }
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
  
  for (let y = 0; y < tilesHigh; y++) {
    if (lines[y] !== undefined) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
    }
  }
}


function mousePressed() {
  // particle math
  let particleNum = 4;
  let theta = 0;
  for (let i=0; i<particleNum; i++) {
    let xSpeed = cos(theta)*2 + random(-0.5, 0.5);
    let ySpeed = sin(theta)*2 + random(-0.5, 0.5);
    let particle = new Paint(mouseX, mouseY, this.dx, this.dy, 255, 0, 0, 255);
    dropplets.push(particle);
    if (particle >= 12) {
      splice(i, 4)
    }
  }
  // scene check
  if (whatSection === sectionA) {
    whatSection = sectionB;
    lines = loadStrings(whatSection);
  }
  else if (whatSection === sectionB) {
    whatSection = sectionC;
    lines = loadStrings(whatSection);
  }
  else{
    whatSection = sectionD;
    lines = loadStrings(whatSection);
  }
  
}

class Paint { //the particles that come off the title
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
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
      this.x += this.dx;
      this.y += this.dy;
    } 
  }
}

function showTile(location, x, y) { //shows the scene
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


function createEmptyGrid(cols, rows) { //the sections of the scene
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}