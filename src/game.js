class Game {
  constructor() {
    this.player = new Player();
    this.treasure = new Treasure();
  }

  preload() {
    this.player.image = loadImage('assets/character-down.png');
    this.treasure.image = loadImage('assets/treasure.png');
  }

  
  
  draw() {
    clear()
    background(220);
    this.drawGrid();
    this.player.draw();
    this.treasure.drawTreasure();
  }

  drawGrid() {
    for (let i = 0; i <= 10; i++) {
      line(0, HEIGHT / 10 * i, WIDTH, HEIGHT / 10 * i)

      line(WIDTH / 10 * i, 0, WIDTH / 10 * i, WIDTH)
    }

  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.image;
    }

  moveUp() {
    if (this.row >= 100) {

    
      this.row -= 100; }
    
  }

  moveDown() {
    if (this.row <= 800){ //twice the width

      this.row +=100;
    }
  }

  moveLeft() {
    if(this.col >= 100) {
      this.col -= 100;
       }
    }
  

  moveRight() {
    if (this.col <= 800){

  
      this.col += 100;
    } }
  
   draw() {
   image(this.image, this.col, this.row, 100, 100);

   }
    }
    
    class Treasure {
      constructor() {
        this.col = 0;
        this.row = 0;
        this.image;
        this.setRandomPosition();
      }
    
      setRandomPosition() {
        this.col = Math.floor(Math.random() * 10) * 100;
        this.row = Math.floor(Math.random() * 10) * 100;
      }
    
      drawTreasure() {
        image(this.image, this.col, this.row, 100, 100);
      }
    }





