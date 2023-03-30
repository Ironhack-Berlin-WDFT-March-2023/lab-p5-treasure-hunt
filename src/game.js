class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    //https://p5js.org/reference/#/p5/line

    createCanvas(800, 800);
    background(200);
    
  
    // Set grid dimensions
    let rows = 10;
    let cols = 10;
  
    // Set grid item dimensions
    let itemWidth = width / cols;
    let itemHeight = height / rows;
  
    // Loop through rows and columns
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // Calculate grid item position
        let x = j * itemWidth;
        let y = i * itemHeight;
  
        // Draw grid item
        if ((i + j) % 2 === 0) {
          fill(255);
          rect(x, y, itemWidth, itemHeight);
        }
      }
    }
      
      }

       
  }

