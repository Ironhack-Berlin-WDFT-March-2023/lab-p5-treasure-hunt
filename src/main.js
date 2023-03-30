const game = new Game();
const player = new Player(1, 1)
const player2 = new Player(3, 3)

const treasure = new Treasure(100, 100);
function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition()
}
function draw() {
  clear()
  player2.draw()  
  player.draw()
  treasure.drawTreasure()
  game.drawGrid();
}