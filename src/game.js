class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    /*  for (let i = 0; i<= 10 ; i++){
      line (0, Height/10*i, )
      line()
    } */

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

    strokeWeight(3);
  }
}

class Player {
  constructor(col = 0, row = 0) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 100;
    treasure.collision();
  }
  moveDown() {
    this.row += 100;
    treasure.collision();
  }
  moveRight() {
    this.col += 100;
    treasure.collision();
  }
  moveLeft() {
    this.col -= 100;
    treasure.collision();
  }

  draw() {
    console.log("player drawed!!", { col: this.col, row: this.row, keyCode });

    if (!keyCode) {
      image(charDown, this.col, this.row, 100, 100);
    }

    if (keyCode === UP_ARROW) {
      image(charUp, this.col, this.row, 100, 100);
    } else if (keyCode === RIGHT_ARROW) {
      image(charRight, this.col, this.row, 100, 100);
    } else if (keyCode === LEFT_ARROW) {
      image(charLeft, this.col, this.row, 100, 100);
    } else if (keyCode === DOWN_ARROW) {
      image(charDown, this.col, this.row, 100, 100);
    }
  }
}

class Treasure {
  constructor(col = 0, row = 0) {
    this.col = col;
    this.row = row;

    this.setRandomPosition();
  }

  setRandomPosition() {
    this.col = Math.round(Math.random() * 10) * 100;
    this.row = Math.round(Math.random() * 10) * 100;
  }

  draw() {
    console.log("Treasure drawed!!", { col: this.col, row: this.row, keyCode });
    image(treasureImg, this.col, this.row, 100, 100);
  }

  collision() {
    console.log("Collision!!!");
    if (player.col === this.col && player.row === this.row) {
      this.setRandomPosition();
    }
    /* if (dist(this.col, this.row, player.col, player.row) < 100) {
      this.setRandomPosition();
    } */
  }
}
