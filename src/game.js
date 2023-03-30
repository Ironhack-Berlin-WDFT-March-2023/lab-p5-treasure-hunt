class Game {
  constructor() {
    this.player = new Player ();
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

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
    this.col = 0;
    this.row = 0;
    this.image;
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
    image(this.image, this.row, this.col, 100, 100)
  }
}



/*player.moveDown() // Increase by 1 the value of player.row
player.moveDown() // Increase by 1 the value of player.row
player.moveRight() // Increase by 1 the value of player.col
console.log(player.col, player.row) // => 1,2*/
