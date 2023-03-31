class Game {
  constructor() {
    this.player = new Player();
  }
  
  preload(){
    this.player.image=loadImage("../assets/character-down.png")
    this.player.imageUp=loadImage("../assets/character-up.png")
    this.player.imageDown=loadImage("../assets/character-down.png")
    this.player.imageLeft=loadImage("../assets/character-left.png")
    this.player.imageRight=loadImage("../assets/character-right.png")

  }
  draw() {
    clear();
    this.drawGrid()
    this.player.draw()
    
  }
  drawGrid() {
    background(220);
    for (var x = 0; x < width + 1; x += width / 10) {
      for (var y = 0; y < height + 1; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  }
}

class Player {
  constructor() {
    this.col = 0;
    this.row = 0;
    this.imageUp
    this.imageDown
    this.imageLeft
    this.imageRight
    this.image
 
  }
  draw(){
    image(this.image,this.col,this.row,100,100)
  }

  moveUp() {
    this.row -= 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
  moveRight() {
    this.col += 1;
  }
 
}

function hello(){
  
}