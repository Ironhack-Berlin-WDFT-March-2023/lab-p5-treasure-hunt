class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    line(0, 0, 0, 1000);
    stroke(126);
    line(100, 0, 100, 1000);
    stroke(126);
    line(200, 0, 200, 1000);
    stroke(126);
    line(300, 0, 300, 1000);
    stroke(126);
    line(400, 0, 400, 1000);
    stroke(126);
    line(500, 0, 500, 1000);
    stroke(126);
    line(600, 0, 600, 1000);
    stroke(126);
    line(700, 0, 700, 1000);
    stroke(126);
    line(800, 0, 800, 1000);
    stroke(126);
    line(900, 0, 900, 1000);
    stroke(126);
    line(1000, 0, 1000, 1000);
    stroke(126);

    line(1000, 0, 0, 0);
    stroke(126);
    line(1000, 100, 0, 100);
    stroke(126);
    line(1000, 200, 0, 200);
    stroke(126);
    line(1000, 300, 0, 300);
    stroke(126);
    line(1000, 400, 0, 400);
    stroke(126);
    line(1000, 500, 0, 500);
    stroke(126);
    line(1000, 600, 0, 600);
    stroke(126);
    line(1000, 700, 0, 700);
    stroke(126);
    line(1000, 800, 0, 800);
    stroke(126);
    line(1000, 900, 0, 900);
    stroke(126);
    line(1000, 1000, 0, 1000);
    stroke(126);
  }
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }
  preload() {
    this.player.image = loadImage("../assets/character-down.png");
    this.treasure.image = loadImage("../assets/treasure.png");
  }
  draw() {
    this.player.draw();
  }
  drawTreasure() {
    this.treasure.draw();
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
    this.row -= 5;
  }
  moveDown() {
    this.row += 5;
  }
  moveLeft() {
    this.col -= 5;
  }
  moveRight() {
    this.col += 5;
  }
  draw() {
    image(this.image, this.col, this.row, this.width, this.height);

    if (keyIsDown(LEFT_ARROW)) {
			if (this.col > 0) this.moveLeft();
		}

		if (keyIsDown(RIGHT_ARROW)) {
			if (this.col < width - this.width) this.moveRight();
		}

		if (keyIsDown(UP_ARROW)) {
			if (this.row > 0) this.moveUp();
		} 

		if (keyIsDown(DOWN_ARROW)) {
			if (this.row < height - this.height) this.moveDown();
    }
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
    this.image;
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 100;
    this.row = Math.floor(Math.random() * 10) * 100;
  }
  drawTreasure() {
    image(this.image, this.col, this.row, this.width, this.height);
  }
}
 
