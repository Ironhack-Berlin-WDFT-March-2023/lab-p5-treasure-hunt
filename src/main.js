let playerImageDown
let treasureImage

  



function setup() {
  let canvas = createCanvas();
  canvas.parent("canvas");
}


  
 

function draw() {
  clear()
    game.drawGrid()
      //clear();
   player.draw();
  treasure.draw();
    };






function preload() {
  playerImageDown = loadImage("../assets/character-down.png");
  treasureImage = loadImage("../assets/treasure.png");
  
}



/*function setup() {
  //createCanvas(640, 640);
  
}*/
//function draw() {
  //clear();
  //player.draw();
  //drawTreasure();
//}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.moveLeft();
  } else if (keyCode === RIGHT_ARROW) {
    player.moveRight();
  } else if (keyCode === UP_ARROW) {
    player.moveUp();
  } else if (keyCode === DOWN_ARROW) {
    player.moveDown();
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image = playerImageDown;
  }

  moveUp() {
    this.row -= 1;
  }

  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }

  moveRight() {
    this.col += 1;
  }

  draw() {
    image(playerImageDown, this.col * 80, this.row * 80, 80, 80);
  }
}

class Treasure {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image = treasureImage
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 8);
    this.row = Math.floor(Math.random() * 8);
  }

  draw() {
    image(treasureImage, this.col * 80, this.row * 80, 80, 80);
  }
}

  // treasure.draw();

  
  const game = new Game();
  let player = new Player();
  let treasure = new Treasure();
  treasure.setRandomPosition();