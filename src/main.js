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
}

function keyPressed() {
  if (keyCode === 37) { // Moves to the left
    if (game.player.col > 100) game.player.moveLeft()
  }

  if (keyCode === 39) { // Moves to the right
    if (game.player.col < 900) game.player.moveRight()
  }

  if (keyCode === 38) { // Moves up
    if (game.player.row > 100) game.player.moveUp()
  }

  if (keyCode === 40) { // Moves down
    if (game.player.row < 900) game.player.moveDown()
  }
}