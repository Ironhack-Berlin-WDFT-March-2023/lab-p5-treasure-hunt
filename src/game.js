class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage("../assets/character-down.png");
    this.treasure.image = loadImage("../assets/treasure.png");
    this.treasure.setRandomPosition();
  }

  drawGrid() {
    clear();
    for (let i = 0; i <= 1000; i += 100) {
      strokeWeight(2);
      line(i, 0, i, 1000);
      line(0, i, 1000, i);
    }
    this.player.draw();
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
  moveLeft() {
    this.col--;
  }
  moveRight() {
    this.col++;
  }
  moveUp() {
    this.row--;
  }
  moveDown() {
    this.row++;
  }

  draw() {
    image(this.image, this.col * 100, this.row * 100, this.width, this.height);
  }
}

class Treasure {
  constructor() {
    this.col = 1;
    this.row = 1;
    this.width = 100;
    this.height = 100;
    this.image;
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 9) + 1;
    this.row = Math.floor(Math.random() * 9) + 1;
  }

  drawTreasure() {
    image(this.image, this.col * 100, this.row * 100, this.width, this.height);
  }
}
