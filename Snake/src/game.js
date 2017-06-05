class Game {
  constructor(){
    this.$wrapper = $('.wrapper');
    this.gridWidth = 300;
    this.gridHeight = 200;
    this.intervalId = 0;
    this.cherry = 0;
    this.score = 0;
    this.setWrapper();
    this.maxGridId = this.createGrid();
    this.snake = new Snake(this.maxGridId);
    this.listeners();
    this.drawCherry();
  }

  play(){
    this.intervalId = setInterval(function(){
      this.checkCherryCollision()
      this.snake.move();
      if (this.snake.gameOver) this.playAgain();
      this.snake.drawSnake();
    }.bind(this), 150);
  }

  createGrid(){
    //Create grid
    let counter = 1;
    let maxRow = Math.floor(this.gridHeight/10);
    let maxCol = Math.floor(this.gridWidth/10);
    let $grid = $('<table>');
    for (let i = 1; i <= maxRow; i++) {
      let $row = $('<tr>');
      for (var u = 1; u <= maxCol; u++) {
        let $cell = $('<td>');
        $cell.attr("id", counter);
        $cell.attr("row", i);
        $cell.attr("col", u);
        $cell.addClass("cell");
        $row.append($cell);
        counter++;
      }
      $grid.append($row);
    }
    this.$wrapper.append($grid);
    return counter;
  }

  setWrapper(){
    this.$wrapper.width(this.gridWidth);
    this.$wrapper.height(this.gridHeight);
  }

  listeners(){
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 87://W
          this.snake.direction = [false, true, false, false];
          break;
        case 65: //A
          this.snake.direction = [false, false, true, false];
          break;
        case 68: //D
          this.snake.direction = [false, false, false, true];
          break;
        case 83: //S
          this.snake.direction = [true, false, false, false];
          break;
        default:
      }
    });
  }

  drawCherry(){
      this.cherry = Math.floor(Math.random() * (300 - 1 + 1)) + 1;
      $('#' + this.cherry).addClass("cherry");
  }

  checkCherryCollision(){
    if (this.snake.body[0] == this.cherry){
      $('#' + this.cherry).removeClass("cherry");
      this.snake.maxBody++;
      this.drawCherry();
      this.score += 100;
    }
  }

  playAgain(){
    clearInterval(this.intervalId);
    setTimeout(() =>{
      if (confirm("GAME OVER!!!\n \n Your score: " + this.score + " points \n \n Do you want to play again?")) document.location.reload();
    }, 500);
  }
}
