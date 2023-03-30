class Game {
  constructor() {
    // Create a new Player object and assign it to the player property
    this.player = new Player();
    this.treasure = new Treasure();
    
  }

  drawGrid() {
    background(220);
    // Set the number of lines in the grid
    const numLines = 10;
    // Calculate the spacing between each line
    const spacing = width / numLines;
    // Draw the vertical lines
    for (let x = 0; x <= width; x += spacing) {
      line(x, 0, x, height);
    }
    // Draw the horizontal lines
    for (let y = 0; y <= height; y += spacing) {
      line(0, y, width, y);
    }
  }

  preload() {
    // Load the image for the player object
    this.player.image = loadImage("../assets/character-down.png");
    this.treasure.image = loadImage("../assets/treasure.png")
  }

  treasureRandomPosition(){
    this.treasure.randomTreasureCol = Math.floor(Math.random() * 450)
    this.treasure.randomTreasureRow = Math.floor(Math.random() * 450)


  }
}

class Player {
  constructor (){
    this.col = 0
    this.row = 0
    this.image
  }
  moveUp(){
    this.row -= 10
  }
  moveDown(){
    this.row += 10
  }
  moveLeft(){
    this.col -= 10
  }
  moveRight(){
    this.col += 10
  }
  draw(){
    image(this.image, this.col, this.row, 50, 50)
    
    if (keyIsDown(LEFT_ARROW) && this.col > 0) {
			this.moveLeft()
		}

		if (keyIsDown(RIGHT_ARROW) && this.col < 450) {
			this.moveRight()
		}

		if (keyIsDown(UP_ARROW) && this.row > 0) {
			this.moveUp()
		}

		if (keyIsDown(DOWN_ARROW) && this.row < 450) {
			this.moveDown()
		}
  
  }
}

class Treasure {
  constructor () {
    this.image
    this.randomTreasureCol
    this.randomTreasureRow

  }

  drawTreasure() {
   image(this.image, this.randomTreasureCol, this.randomTreasureRow, 50, 50)
  }

}

// console.log(treasure.randomTreasureCol, randomTreasureRow)

