

class Player {
  constructor(col, row) {
    this.col = col
    this.row = row
    this.image
  }
  
  moveUp() {
    this.col -= 50
  }
  
  moveDown() {
    this.col += 50
  }
  
  moveLeft() {
    this.row -= 50
  }
  
  moveRight() {
    this.row += 50
  }
  
  draw() {
    image(this.image, this.row, this.col, 50, 50)
  }
  
  preload() {
    this.image = loadImage("../assets/character-down.png")
  }
  
}



function preload() {
  player.preload()
  treasure.preload()
}

function setup() {
  let canvas = createCanvas();
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.draw()
}

function keyPressed() {
  //console.log('key')
  if (keyCode === 39) {
    player.moveRight()
	}
  
	if (keyCode === 37) {
    player.moveLeft()
	}
  
	if (keyCode === 38) {
    player.moveUp()
	}
  
	if (keyCode === 40) {
    player.moveDown()
	}
  if (player.row === treasure.row && player.col === treasure.col) {
    treasure.found()
  }
  
  clear()
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
  }
  
  draw() {
    image(this.image, this.row, this.col, 50, 50)
  }
  
  preload() {
    this.image = loadImage("../assets/treasure.png")
  }
  
  found() {
    this.setRandomPosition()
  }
}

const game = new Game();
let treasure = new Treasure(50, 50);
let player = new Player(50, 50);
treasure.setRandomPosition();



