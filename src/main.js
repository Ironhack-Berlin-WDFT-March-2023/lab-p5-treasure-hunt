const game = new Game();

function preload() {
  game.preloadImages()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  game.drawPlayerOnGrid();
  game.drawTreasureOnGrid();
  game.drawGrid();
  game.treasure.isCatched();

  document.querySelector('h2 span').innerHTML = game.player.score;
}

function keyPressed() {
  if ( keyCode === 39 ) game.player.moveRight()
  if ( keyCode === 37 ) game.player.moveLeft()
  if ( keyCode === 38 ) game.player.moveUp()
  if ( keyCode === 40 ) game.player.moveDown()
}
