const game = new Game();

function preload() {
  game.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawGrid();
  game.treasure.drawTreasure()
}

function keyPressed() {
  if (keyCode === 37) { // Moves to the left
    if (game.player.col > 0) game.player.moveLeft()
  }

  if (keyCode === 39) { // Moves to the right
    if (game.player.col < 9) game.player.moveRight()
  }

  if (keyCode === 38) { // Moves up
    if (game.player.row > 0) game.player.moveUp()
  }

  if (keyCode === 40) { // Moves down
    if (game.player.row < 9) game.player.moveDown()
  }
}