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
  game.player.draw();
  game.treasure.drawTreasure();
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    if(game.player.col > 0) game.player.moveLeft()
  }
  else if(keyCode === RIGHT_ARROW) {
    if(game.player.col < 9) game.player.moveRight()
  }
  else if(keyCode === UP_ARROW) {
    if(game.player.row > 0) game.player.moveUp()
  }
  else if(keyCode === DOWN_ARROW) {
    if(game.player.row < 9) game.player.moveDown()
}
  }