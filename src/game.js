class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    createCanvas(500, 500)
    background(200)

    let rows = 10
    let columns = 10

    let itemWidth = width / columns
    let itemHeight = height / rows

    for (let i=0; i<rows; i++) {
      for (let j=0; j<columns; j++) {
        let x = j * itemWidth;
        let y = i * itemHeight

        if ((i + j) % 2 === 0) {
          fill(255)
          rect(x, y, itemWidth, itemHeight)
        }
      }
    }
  }
}
