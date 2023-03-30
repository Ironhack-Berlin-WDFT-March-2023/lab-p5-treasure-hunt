class Game {
  drawGrid() {
    // Iteration 1
    clear()
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    // Horizontal lines
    line(0, 0, 1000, 0);
    stroke(126);
    line(0, 100, 1000, 100);
    stroke(126);
    line(0, 200, 1000, 200);
    stroke(126);
    line(0, 300, 1000, 300);
    stroke(126);
    line(0, 400, 1000, 400);
    stroke(126);
    line(0, 500, 1000, 500);
    stroke(126);
    line(0, 600, 1000, 600);
    stroke(126);
    line(0, 700, 1000, 700);
    stroke(126);
    line(0, 800, 1000, 800);
    stroke(126);
    line(0, 900, 1000, 900);
    stroke(126);
    line(0, 1000, 1000, 1000);
    stroke(126);

    // Vertical lines

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
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
  }
  moveUp() {
    this.row -= 100
  }

  moveDown() {
    this.row += 100
  }

  moveLeft() {
    this.col -= 100
  }

  moveRight() {
    this.col += 100
  }

  draw() { 
    console.log("player drawed");
    image(charUp, this.col, this.row, 100, 100)

    if (keyIsDown(LEFT_ARROW)) {
      image(charLeft, this.col, this.row, 100, 100);
      
    }

    if (keyIsDown(RIGHT_ARROW)) {
      image(charRight, this.col, this.row, 100, 100);
    }

    if (keyIsDown(UP_ARROW)) {
      image(charUp, this.col, this.row, 100, 100);
    }

    if (keyIsDown(DOWN_ARROW)) {
      image(charDown, this.col, this.row, 100, 100);
    }
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.width = 100;
    this.height = 100;
  }

  setRandomPosition() {
    this.col = Math.floor((Math.random()*9) + 1)
    this.row = Math.floor((Math.random()*9) + 1)
  }

  drawTreasure() {
    image(this.image, this.col, this.row, 100, 100)
  }
}
