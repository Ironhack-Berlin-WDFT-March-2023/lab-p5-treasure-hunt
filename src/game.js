let playerImage, treasureImage;

function preload(){
  playerImage = loadImage('../assets/character-down.png')
  treasureImage = loadImage('../assets/treasure.png')
}

class Game {
  drawGrid() {
    // https://p5js.org/reference/#/p5/line
    for(let i = 0; i <= 1000; i+= 100){
      line(0, i, width, i)
      line(i, 0, i, height)
    }
  }
}
class Player{
  constructor(col, row){
    this.col = col
    this.row = row
  }
  moveUp(){
    this.row--
  }
  moveDown(){
    this.row++
  }
  moveLeft(){
    this.col--
  }
  moveRight(){
    this.col++
  }
  draw(){
    clear()
    image(playerImage, this.col * 100, this.row * 100, 100, 100)
  }
}
class Treasure{
  constructor(col, row){
    this.col = col
    this.row = row 
  }
  setRandomPosition(){
    let randomX = Math.floor(Math.random() * 10)
    let randomY = Math.floor(Math.random() * 10)
    this.col = randomX * 100
    this.row = randomY * 100
  }
  drawTreasure(){
    image(treasureImage, this.col, this.row, 100, 100)
  }
}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    player.moveLeft()
  }
  if(keyCode === RIGHT_ARROW){
    player.moveRight()
  }
  if(keyCode === UP_ARROW){
    player.moveUp()
  }
  if(keyCode === DOWN_ARROW){
    player.moveDown()
  }
}