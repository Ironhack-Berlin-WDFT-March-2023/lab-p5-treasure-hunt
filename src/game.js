class Game {
  drawGrid() {
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    background(220);

    for (let x = 0; x < width; x += width / 10) {
      for (let y = 0; y < height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
};

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image = loadImage("assets/character-down.png");
  }

  moveUp() {
   
      this.image = loadImage("assets/character-up.png");
      this.row--;
    }
  
  moveDown() {
    
      this.image = loadImage("assets/character-down.png");
      this.row++;
    }
  

  moveLeft() {
    
      this.image = loadImage("assets/character-left.png");
      this.col--;
    }
  
  moveRight() {
    
      this.image = loadImage("assets/character-right.png");
      this.col++;
    }
  

  draw() {
    const cellSize = 64;
    const x = this.col * cellSize;
    const y = this.row * cellSize;
    image(this.image, x, y, cellSize, cellSize);
  }
};