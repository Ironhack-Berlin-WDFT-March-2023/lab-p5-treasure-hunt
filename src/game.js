class Game {
  constructor() {
    this.player = new Player();
    this.Treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage("../assets/character-down.png");
    this.treasure.image = loadImage("../assets/treasure.png");
    this.treasure.setRandomPosition();
  }
  // Arguments: startX, startY, endX, endY
  drawGrid() {
    clear();
    line(0, 0, 0, 1000);
    line(100, 0, 100, 1000);
    line(200, 0, 200, 1000);
    line(300, 0, 300, 1000);
    line(400, 0, 400, 1000);
    line(500, 0, 500, 1000);
    line(600, 0, 600, 1000);
    line(700, 0, 700, 1000);
    line(800, 0, 800, 1000);
    line(900, 0, 900, 1000);
    line(1000, 0, 1000, 1000);
    //Lines horiztonal
    line(0, 0, 1000, 0);
    line(0, 100, 1000, 100);
    line(0, 200, 1000, 200);
    line(0, 300, 1000, 300);
    line(0, 400, 1000, 400);
    line(0, 500, 1000, 500);
    line(0, 600, 1000, 600);
    line(0, 700, 1000, 700);
    line(0, 800, 1000, 800);
    line(0, 900, 1000, 900);
    line(0, 1000, 1000, 1000);
  }
}
class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
  }

  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }
  draw() {
    image(this.image, this.col * 100, this.row * 100, 100, 100);
  }
}
class Treasure {
  constructor() {
    this.col;
    this.row;
    this.image;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10);
    this.row = Math.floor(Math.random() * 10);
    console.log(this.col);
  }
  drawTreasure() {
    image(this.image, this.col * 100, this.row * 100, 100, 100);
  }
}
