class Game {
  constructor() {
    this.player = new Player;
    this.treasure = new Treasure;
  }

  preloadImages() {
    this.player.imgMoveLeft = loadImage('../assets/character-left.png');
    this.player.imgMoveRight = loadImage('../assets/character-right.png');
    this.player.imgMoveUp = loadImage('../assets/character-up.png');
    this.player.imgMoveDown = loadImage('../assets/character-down.png');

    this.treasure.imgTreasure = loadImage('../assets/treasure.png');
  }

  drawGrid() {
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) line(x, 0, x, HEIGHT); // vertical lines
    for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) line(0, y, WIDTH, y); // horizontal lines
  }

  drawPlayerOnGrid() {
    clear()
    this.player.placePlayerOnGrid();
  }

  drawTreasureOnGrid() {
    this.treasure.placeTreasureOnGrid();
  }
}


class Player {
  constructor() {
    this.row = 0;
    this.col = 0;

    this.imgMoveLeft;
    this.imgMoveRight;
    this.imgMoveUp;
    this.imgMoveDown;
    this.orientation = 'down';

    this.score = 0;
  }

  placePlayerOnGrid() {
    switch ( this.orientation ) {
      case 'left' : image(this.imgMoveLeft, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE ); break;
      case 'right' : image(this.imgMoveRight, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE ); break;
      case 'up' : image(this.imgMoveUp, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE ); break;
      case 'down' : image(this.imgMoveDown, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE ); break;
    }
  }
    
  moveLeft() {
    if ( this.row > 0 ) this.row -= SQUARE_SIDE;
    this.orientation = 'left';
  }

  moveRight() {
    if ( this.row < WIDTH - SQUARE_SIDE ) this.row += SQUARE_SIDE;
    this.orientation = 'right';
  }

  moveUp() {
    if ( this.col > 0 ) this.col -= SQUARE_SIDE;
    this.orientation = 'up';
  }

  moveDown() {
    if ( this.col < HEIGHT - SQUARE_SIDE ) this.col += SQUARE_SIDE;
    this.orientation = 'down';
  }
}


class Treasure {
  constructor() {
    this.row;
    this.col;
    this.imgTreasure;

    this.setRandomPosition(); // will be execute once on construction
  }

  setRandomPosition() {
    this.row = Math.floor( Math.random() * 10 ) * SQUARE_SIDE;
    this.col = Math.floor( Math.random() * 10 ) * SQUARE_SIDE;
  }

  placeTreasureOnGrid() {
    image( this.imgTreasure, this.row, this.col, SQUARE_SIDE, SQUARE_SIDE );
  }

  isCatched() {
    if ( game.player.col === this.col && game.player.row === this.row ) {
      this.setRandomPosition();
      game.player.score++;
    }
  }
}