let playerImage, treasureImage;
let playerDownImage, playerUpImage, playerLeftImage, playerRightImage
const scoreText = document.getElementById("score")
const scoreText2 = document.getElementById("score2")

function preload(){
  game.preload()
}

class Game {
  constructor(){
    this.player = new Player(8, 1, playerImage)
    this.player2 = new Player(1, 1, playerImage)
  }
  preload(){
    playerDownImage = loadImage('../assets/character-down.png')
    playerLeftImage = loadImage("../assets/character-left.png")
    playerRightImage = loadImage("../assets/character-right.png")
    playerUpImage = loadImage("../assets/character-up.png")
    
    treasureImage = loadImage('../assets/treasure.png')
    this.player.image = playerDownImage
    this.player2.image = playerDownImage
  }
  drawGrid() {
    for(let i = 0; i <= 1000; i+= 100){
      line(0, i, width, i)
      line(i, 0, i, height)
    }
  }
  draw(){
    // this.player.image = playerImage
    // this.player2.image = playerImage
    this.player2.draw()  
    this.player.draw()
  }
}
class Player{
  constructor(col, row){
    this.col = col
    this.row = row
    this.score = 0
    this.image
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
    image(this.image, this.col * 100, this.row * 100, 100, 100)
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
    game.player.image = playerLeftImage
    if(game.player.col >= 1){
      game.player.moveLeft()
    }
  }
  if(keyCode === RIGHT_ARROW){
    game.player.image = playerRightImage
    if(game.player.col <= 8){
      game.player.moveRight()
    }
  }
  if(keyCode === UP_ARROW){
    game.player.image = playerUpImage
    if(game.player.row >= 1){
      game.player.moveUp()
    }
  }
  if(keyCode === DOWN_ARROW){
    game.player.image = playerDownImage
    if(game.player.row <= 8){
      game.player.moveDown()

    }
  }
  if(game.player.col === treasure.col / 100 && game.player.row === treasure.row / 100){
    game.player.score++
    updateScore()
    treasure.setRandomPosition()
  }

  if(keyCode === 65){
    game.player2.image = playerLeftImage
    if(game.player2.col >= 1){
      game.player2.moveLeft()
      console.log("player2 left")
    }
  }
  if(keyCode === 68){
    game.player2.image = playerRightImage
    if(game.player2.col <= 8){
      game.player2.moveRight()
    }
  }
  if(keyCode === 87){
    game.player2.image = playerUpImage
    if(game.player2.row >= 1){
      game.player2.moveUp()
    }
  }
  if(keyCode === 83){
    game.player2.image = playerDownImage
    if(game.player2.row <= 8){
      game.player2.moveDown()

    }
  }
  if(game.player2.col === treasure.col / 100 && game.player2.row === treasure.row / 100){
    game.player2.score++
    scoreText2.innerText = game.player2.score
    treasure.setRandomPosition()
  }
}
function updateScore(score){
  scoreText.innerText = game.player.score
}