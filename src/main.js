const game = new Game();
const treasure = new Treasure(100, 100);

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  treasure.setRandomPosition()
  console.log("set up")
}
function draw() {
  clear()
  treasure.drawTreasure()
  game.drawGrid();
  game.draw()
}
window.addEventListener("keydown", (e) =>{
  console.log(e.key)
  if(e.key === "ArrowDown" || e.key === "ArrowUp" ||e.key === "ArrowLeft" || e.key ==="ArrowRight"){
    e.preventDefault()
  }
})