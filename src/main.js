const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}
// Arguments: startX, startY, endX, endY
function draw() {
  game.drawGrid();
  game.player.draw();
  game.Treasure.drawTreasure();
}
function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft();
  }

  if (keyCode === 39) {
    game.player.moveRight();
  }

  if (keyCode === 38) {
    game.player.moveUp();
  }

  if (keyCode === 40) {
    game.player.moveDown();
  }
}
