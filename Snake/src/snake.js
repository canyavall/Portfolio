class Snake{
  constructor(gridMaxId, gridWidth){
    this.maxBody = 5;
    this.remove = 0;
    let startPosition = Math.floor((gridMaxId/2)-15);
    this.body = [startPosition, startPosition + 30, startPosition + 60, startPosition + 90, startPosition + 120];
    this.direction = [false, true, false, false];
    this.gameOver = false;
  }
  drawSnake(){
    let classPaint = "head";

    //Remove the last one in the snake after move
    if (this.remove > 0){
      $('#' + this.remove).removeClass();
      $('#' + this.remove).addClass("cell");
      this.remove = 0;
    }

    //Paint the snake
    for (let i = 0; i < this.body.length; i++) {
      let $cell = $('#' + this.body[i]);
      $cell.removeClass();
      $cell.addClass(classPaint);
      $cell.addClass("cell");
      classPaint = "selected";
    }
  }

  move(){
    let $head = $("#" + this.body[0]);
    let newPosition = 0;

    if (this.direction[0] == true){
      if ($head.attr("row") == 20) this.gameOver = true;
      newPosition = this.body[0] + 30;
    }
    if (this.direction[1] == true){
      if ($head.attr("row") == 1) this.gameOver = true;
      newPosition = this.body[0] - 30;
    }
    if (this.direction[2] == true){
      if ($head.attr("col") == 1) this.gameOver = true;
      newPosition = this.body[0] - 1;
    }
    if (this.direction[3] == true){
      if ($head.attr("col") == 30) this.gameOver = true;
      newPosition = this.body[0] + 1;
    }

    //Check collision
    if(this.body.indexOf(newPosition) > -1) this.gameOver = true;;

    //No collision, save the new position
    if(!this.gameOver){
      this.body.unshift(newPosition);
    }

    if(this.body.length > this.maxBody){
      this.remove = this.body[this.body.length-1];
      this.body.pop();
    }
  }

  calcMove(row, col, sum, otherSide){
    let $head = $("#" + this.body[0]);

    //Calculate next move
    let newPosition = this.body[0] + sum;
    if (row > 0 && $head.attr("row") == row) newPosition = this.body[0] + otherSide;
    if (col > 0 && $head.attr("col") == col) newPosition = this.body[0] + otherSide;

    //Check collision
    if(this.body.indexOf(newPosition) > -1) this.gameOver = true;;

    //No collision, save the new position
    this.body.unshift(newPosition);
  }

}
