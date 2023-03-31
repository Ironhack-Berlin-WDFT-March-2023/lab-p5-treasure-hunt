class Game {
  constructor() {
    this.player = new Player()
    this.treasure = new Treasure()
  }

  preload() {
    this.player.image = loadImage("../assets/character-down.png")
    this.player.imagedown = loadImage("../assets/character-down.png")
    this.player.imageup = loadImage("../assets/character-up.png")
    this.player.imageleft = loadImage("../assets/character-left.png") 
    this.player.imageright = loadImage("../assets/character-right.png") 
    this.treasure.image = loadImage("../assets/treasure.png")
  }

  draw() {
    clear()
    this.drawGrid() 
    this.player.draw() 
    this.treasure.drawTreasure()
  }

  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line

    stroke("black")

    // Draw lines
    line(0, 0, WIDTH, 0) // top line
    line(0, 0, 0, WIDTH) // left line
    line(WIDTH, 0, WIDTH, HEIGHT) // right line
    line(0, HEIGHT, WIDTH, HEIGHT) // bottom line

    line((WIDTH / 10 * 1), 0, (WIDTH / 10 * 1), WIDTH)
    line((WIDTH / 10 * 2), 0, (WIDTH / 10 * 2), WIDTH)
    line((WIDTH / 10 * 3), 0, (WIDTH / 10 * 3), WIDTH)
    line((WIDTH / 10 * 4), 0, (WIDTH / 10 * 4), WIDTH)
    line((WIDTH / 10 * 5), 0, (WIDTH / 10 * 5), WIDTH)
    line((WIDTH / 10 * 6), 0, (WIDTH / 10 * 6), WIDTH)
    line((WIDTH / 10 * 7), 0, (WIDTH / 10 * 7), WIDTH)
    line((WIDTH / 10 * 8), 0, (WIDTH / 10 * 8), WIDTH)
    line((WIDTH / 10 * 9), 0, (WIDTH / 10 * 9), WIDTH)

    line(0, (HEIGHT / 10 * 1), WIDTH, (HEIGHT / 10 * 1))
    line(0, (HEIGHT / 10 * 2), WIDTH, (HEIGHT / 10 * 2))
    line(0, (HEIGHT / 10 * 3), WIDTH, (HEIGHT / 10 * 3))
    line(0, (HEIGHT / 10 * 4), WIDTH, (HEIGHT / 10 * 4))
    line(0, (HEIGHT / 10 * 5), WIDTH, (HEIGHT / 10 * 5))
    line(0, (HEIGHT / 10 * 6), WIDTH, (HEIGHT / 10 * 6))
    line(0, (HEIGHT / 10 * 7), WIDTH, (HEIGHT / 10 * 7))
    line(0, (HEIGHT / 10 * 8), WIDTH, (HEIGHT / 10 * 8))
    line(0, (HEIGHT / 10 * 9), WIDTH, (HEIGHT / 10 * 9))
  }
}

class Player {
  constructor() {
    this.col = 0
    this.row = 0
    this.width = 100
    this.height = 100
    this.image
  }

  moveRight() {
    this.col += 1
    game.treasure.collision()
    this.image = this.imageright
  }

  moveLeft() {
    this.col -= 1
    game.treasure.collision()
    this.image = this.imageleft
  }

  moveUp() {
    this.row -= 1
    game.treasure.collision()
    this.image = this.imageup
  }

  moveDown() {
    this.row += 1
    game.treasure.collision()
    this.image = this.imagedown
  }

  draw() {
    image(this.image, this.col*100, this.row*100, this.width, this.height)
  }
  }

class Treasure {
  constructor() {
    this.col = 1
    this.row = 1
    this.width = 100
    this.height = 100
    this.setRandomPosition()
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * (10 - 1) + 1);
    this.row = Math.floor(Math.random() * (10 - 1) + 1);
  } 

  drawTreasure() {
    image(this.image, this.col*100, this.row*100, this.width, this.height)
  }

  collision() {
    if (dist(this.col, this.row, game.player.col, game.player.row) < 1) {
      this.setRandomPosition()
    }
  }
}