const game = new Game();

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("canvas");
  game.treasureRandomPosition()
  
}

function draw() {
  game.drawGrid();
  game.player.draw()
  game.treasure.drawTreasure()
}

function preload() {
  game.preload()
}

