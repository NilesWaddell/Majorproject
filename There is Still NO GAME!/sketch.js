// Major Project "There is Still NO GAME!"
// Niles
// Feb 24th 2021

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
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