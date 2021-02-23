// Major Project "There is Still NO GAME!"
// Niles
// Feb 24th 2021

const COLS = 32;
const ROWS = 18;
let grid;
let cellWidth = 60;
let cellHeight = 60;

function setup() {
  createCanvas(1920, 1080);

  grid = createEmptyGrid(COLS, ROWS);
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
      showTile(tiles[x][y], x, y);
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0 ) {
    grid[y][x] = 1;
  }
}

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
  if (location === "#") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "C") {
    image(coin, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "B") {
    image(box, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "F") {
    image(fly, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "P") {
    image(p1, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "S") {
    image(slime, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}


function createEmptyGrid(COLS, ROWS) {
  let emptyGrid = [];
  for (let y=0; y<ROWS; y++) {
    emptyGrid.push([]);
    for(let x=0; x<COLS; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}