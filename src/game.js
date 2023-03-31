class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for(let i = 0; i <= 1000; i+=100) {
      line(i, 0, i, 1000)
    }
    for(let j = 0; j <= 1000; j+=100) {
      line(0, j, 1000, j)
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = 200
    this.row = 200
    this.player.image = loadImage("./assets/character-down.png")
    
  }


  moveRight() {
    this.row += 100
  }

  moveLeft() {
    this.row -= 100
  }

  moveUp() {
    this.col -= 100
  }

  moveDown() {
    this.col += 100
  }

  draw() {
    console.log("player drawed")
    image(this.image, this.row, this.col, this.row, this.col)

    if (keyIsDown(LEFT_ARROW)) {
      if (this.row > 0) this.moveLeft() /* dann kann er nicht links raus aus dem Canvas */
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.moveRight()
    }

    if (keyIsDown(UP_ARROW)) {
      this.moveUp()
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.moveDown()
    }
  }
}