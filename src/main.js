const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  game.draw();
}

function drawTreasure() {
  game.drawTreasure();
}

function preload() {
  game.preload();
}
