class Game {
  constructor() {
    this.player = new Player();
  }
  drawGrid() {
    // line(10, 100, width, 100);

    for (let i = 0; i <= width; i += 100) {
      line(0, i, width, i);
      line(i, 0, i, height);
    }
  }
  preload() {
    this.player.image = loadImage("../assets/character-down.png");
  }
}

class Player {
  constructor() {
    this.image;
    this.col = 0;
    this.row = 0;
  }
  moveUp() {
    this.col -= 100;
  }
  moveDown() {
    this.col += 100;
  }
  moveLeft() {
    this.row -= 100;
  }
  moveRight() {
    this.row += 100;
  }
  draw() {
    image(this.image, this.row, this.col, 100, 100);
  }
}

// const player = new Player(0, 0); // (0,0) = Initial position (col, row)
// player.moveDown(); // Increase by 1 the value of player.row
// player.moveDown(); // Increase by 1 the value of player.row
// player.moveRight(); // Increase by 1 the value of player.col
// console.log(player.col, player.row); // => 1,2
