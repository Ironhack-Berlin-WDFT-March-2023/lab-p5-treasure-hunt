const game = new Game();
const treasure = new Treasure(100, 100);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition()
}
function draw() {
  clear()
  treasure.drawTreasure()
  game.drawGrid();
  game.draw()
}
window.addEventListener("keydown", (e) =>{
  e.preventDefault()
})