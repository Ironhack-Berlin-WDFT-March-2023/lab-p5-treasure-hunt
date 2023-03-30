class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage("../assets/character-down.png")
    this.treasure.image = loadImage("../assets/treasure.png")
    this.treasure.setRandomPosition()
  }

  drawGrid() {
 
    clear()
    
    console.log(WIDTH/10)
    stroke(0)
    line(WIDTH/10, 0, WIDTH/10, HEIGHT) 
    line((WIDTH/10 * 2), 0, (WIDTH/10 * 2), HEIGHT) 
    line((WIDTH/10 * 3), 0, (WIDTH/10 * 3), HEIGHT)
    line((WIDTH/10 * 4), 0, (WIDTH/10 * 4), HEIGHT)
    line((WIDTH/10 * 5), 0, (WIDTH/10 * 5), HEIGHT)
    line((WIDTH/10 * 6), 0, (WIDTH/10 * 6), HEIGHT)
    line((WIDTH/10 * 7), 0, (WIDTH/10 * 7), HEIGHT)
    line((WIDTH/10 * 8), 0, (WIDTH/10 * 8), HEIGHT)
    line((WIDTH/10 * 9), 0, (WIDTH/10 * 9), HEIGHT)

    //Horizontal Lines
    line(0, HEIGHT/10, WIDTH, HEIGHT/10) 
    line(0, (HEIGHT/10 * 2), WIDTH, (HEIGHT/10 * 2)) 
    line(0, (HEIGHT/10 * 3), WIDTH, (HEIGHT/10 * 3)) 
    line(0, (HEIGHT/10 * 4), WIDTH, (HEIGHT/10 * 4)) 
    line(0, (HEIGHT/10 * 5), WIDTH, (HEIGHT/10 * 5)) 
    line(0, (HEIGHT/10 * 6), WIDTH, (HEIGHT/10 * 6)) 
    line(0, (HEIGHT/10 * 7), WIDTH, (HEIGHT/10 * 7)) 
    line(0, (HEIGHT/10 * 8), WIDTH, (HEIGHT/10 * 8)) 
    line(0, (HEIGHT/10 * 9), WIDTH, (HEIGHT/10 * 9)) 

    //Outline
    line(0,0, WIDTH, 0)
    line(WIDTH, 0, WIDTH, HEIGHT)
    line(WIDTH, HEIGHT, 0, HEIGHT)
    line(0, HEIGHT, 0, 0)
  }

}

class Player {
  constructor() {
    this.col = 0
    this.row = 0
    this.image
  }

  moveUp() {  
    this.row -= 1
  }

  moveDown() {
    this.row += 1
  }

  moveLeft() {
    this.col -= 1
  }

  moveRight() {
    this.col += 1
  }


  draw() {

  image(this.image, (this.col*100), (this.row*100), 100, 100)
}
}

class Treasure {
  constructor() {
    this.col
    this.row
    this.image
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10)
    this.row = Math.floor(Math.random() * 10)
    console.log(this.col)
  }

  drawTreasure() {

    image(this.image, (this.col * 100), (this.row * 100), 100, 100)
  }

}


