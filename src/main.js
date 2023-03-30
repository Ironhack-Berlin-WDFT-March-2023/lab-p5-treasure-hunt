const game = new Game();
const player = new Player()
const treasure = new Treasure()

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  strokeWeight(3)
}

function preload() {
  charUp = loadImage("../assets/character-up.png")
  charDown = loadImage("../assets/character-down.png"),
  charLeft = loadImage("../assets/character-left.png"),
  charRight = loadImage("../assets/character-right.png"),
  treasure.image = loadImage("../assets/treasure.png")
}

function draw() {
  game.drawGrid();
  player.draw();
  treasure.drawTreasure();
}

function keyPressed() {
    if(keyCode === LEFT_ARROW) {
        player.moveLeft()
    }

    if(keyCode === RIGHT_ARROW) {
        player.moveRight()
    }

    if(keyCode === UP_ARROW) {
        player.moveUp()
    }

    if(keyCode === DOWN_ARROW) {
        player.moveDown()
    }
}
