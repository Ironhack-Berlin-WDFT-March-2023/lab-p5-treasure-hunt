let playerImage, treasureImage;
let playerDownImage, playerUpImage, playerLeftImage, playerRightImage
const scoreText = document.getElementById("score")
const scoreText2 = document.getElementById("score2")

function preload(){
  playerDownImage = loadImage('../assets/character-down.png')
  playerLeftImage = loadImage("../assets/character-left.png")
  playerRightImage = loadImage("../assets/character-right.png")
  playerUpImage = loadImage("../assets/character-up.png")
  
  treasureImage = loadImage('../assets/treasure.png')

  playerImage = playerDownImage
}

class Game {
  drawGrid() {
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
    this.score = 0
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
    playerImage = playerLeftImage
    if(player.col >= 1){
      player.moveLeft()
    }
  }
  if(keyCode === RIGHT_ARROW){
    playerImage = playerRightImage
    if(player.col <= 8){
      player.moveRight()
    }
  }
  if(keyCode === UP_ARROW){
    playerImage = playerUpImage
    if(player.row >= 1){
      player.moveUp()
    }
  }
  if(keyCode === DOWN_ARROW){
    playerImage = playerDownImage
    if(player.row <= 8){
      player.moveDown()

    }
  }
  if(player.col === treasure.col / 100 && player.row === treasure.row / 100){
    player.score++
    updateScore()
    treasure.setRandomPosition()
  }

  if(keyCode === 65){
    playerImage = playerLeftImage
    if(player2.col >= 1){
      player2.moveLeft()
      console.log("player2 left")
    }
  }
  if(keyCode === 68){
    playerImage = playerRightImage
    if(player2.col <= 8){
      player2.moveRight()
    }
  }
  if(keyCode === 87){
    playerImage = playerUpImage
    if(player2.row >= 1){
      player2.moveUp()
    }
  }
  if(keyCode === 83){
    playerImage = playerDownImage
    if(player2.row <= 8){
      player2.moveDown()

    }
  }
  if(player2.col === treasure.col / 100 && player2.row === treasure.row / 100){
    player2.score++
    scoreText2.innerText = player2.score
    treasure.setRandomPosition()
  }
}
function updateScore(score){
  scoreText.innerText = player.score
}