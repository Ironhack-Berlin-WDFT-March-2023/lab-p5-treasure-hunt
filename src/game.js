class Game {
  constructor(){
    this.player = new Player()
  
  }
  drawGrid() {
    for (let i = 0; i <= width; i+=100){
      line (0, i, width, i)
      line (i, 0, i, height)
    }
    
    // https://p5js.org/reference/#/p5/line
  }
  preload() {
    this.player.image = loadImage("../assets/character-down.png")
  }
}

class Player{
  constructor (){
    this.image
    this.col = 0
    this.row = 0
  }

  moveUp (){
    this.col -=100
  }

  moveDown(){
    this.col +=100
  }

  moveLeft(){
    this.row -=100
  }

  moveRight(){
    this.row +=100
  }

  draw(){
    image(this.image, this.row, this.col, 100, 100)
  }

}
