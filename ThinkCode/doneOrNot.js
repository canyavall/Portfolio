function doneOrNot(board){
  let finish = true;
  //Check lines
  board.forEach((el)=> { if (el.reduce((a,b) => a+b) !== 45) finish = false;});

  //Check columns
  for (let i = 0; i < 9; i++) {
    let col = 0;
    for (var u = 0; u < 9; u++) {
      col += board[u][i];
    }
    if (col !== 45) finish = false;
  }

  //Check zones
  for (var i = 0; i < 9; i++) {
      //0+1+2+10+11+12+18+19+20
  }
  //Return
  return (finish) ? "Finished!" : "Try again!";
}

console.log(doneOrNot([ [5, 3, 4, 6, 7, 8, 9, 1, 2],
                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
                        [1, 9, 8, 3, 4, 2, 5, 6, 7],
                        [8, 5, 9, 7, 6, 1, 4, 2, 3],
                        [4, 2, 6, 8, 5, 3, 7, 9, 1],
                        [7, 1, 3, 9, 2, 4, 8, 5, 6],
                        [9, 6, 1, 5, 3, 7, 2, 8, 4],
                        [2, 8, 7, 4, 1, 9, 6, 3, 5],
                        [3, 4, 5, 2, 8, 6, 1, 7, 9]])); //Finished!
