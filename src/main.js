const game = new Game();
const player = new Player();
const treasure = new Treasure();

let charDown, charUp, charLeft, charRight, treasureImg;

function preload() {
  console.log("preload");

  charDown = loadImage("../assets/character-down.png");
  charUp = loadImage("../assets/character-up.png");
  charLeft = loadImage("../assets/character-left.png");
  charRight = loadImage("../assets/character-right.png");
  treasureImg = loadImage("../assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  treasure.draw();
}

function keyPressed() {
  if (keyCode === ENTER) {
    console.log("enter");
    treasure.setRandomPosition();
  }
  if (keyCode === LEFT_ARROW) {
    console.log("left");
    player.moveLeft();
  }
  if (keyCode === RIGHT_ARROW) {
    console.log("right");
    player.moveRight();
  }
  if (keyCode === UP_ARROW) {
    console.log("left");
    player.moveUp();
  }
  if (keyCode === DOWN_ARROW) {
    console.log("right");
    player.moveDown();
  }
}
