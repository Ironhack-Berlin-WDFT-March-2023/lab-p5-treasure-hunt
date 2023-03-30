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
  }
  preload() {
    this.player.image = loadImage("../assets/character-down.png");
  }
  draw() {
    this.player.draw();
  }
  keyPressed() {
    if (keyCode === 39) {
      game.player.moveRight();
    }
    if (keyCode === 37) {
      game.player.moveLeft();
    }
    if (keyCode === 38) {
      game.player.moveUp();
    }
    if (keyCode === 40) {
      game.player.moveDown();
    }
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
    this.col -= 1;
  }
  moveDown() {
    this.col += 1;
  }
  moveLeft() {
    this.row -= 1;
  }
  moveRight() {
    this.row += 1;
  }
  draw() {
    image(this.image, this.col, this.row, this.width, this.height);

    if (keyIsDown(LEFT_ARROW)) {
			if (this.x > 0) this.moveLeft()
		}

		if (keyIsDown(RIGHT_ARROW)) {
			if (this.x < width - this.width) this.moveRight()
		}

		if (keyIsDown(UP_ARROW)) {
			if (this.y > 0) this.moveUp()
		}

		if (keyIsDown(DOWN_ARROW)) {
			if (this.y < height - this.height) this.moveDown()
    
    }
  }
}
 
