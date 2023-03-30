const game = new Game();
const player = new Player(1, 1)

const treasure = new Treasure(100, 100);
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition()
}
function draw() {
  player.draw()
  treasure.drawTreasure()
  game.drawGrid();
}