function doneOrNot(board){
  var merged = [].concat.apply([], board);
  let sqIni = 0;

  for (let i = 0; i < 9; i++) {
    let u = i*9;

    //Check rows
    if (merged.slice(u,u+9).reduce((a,b) => a+b) !== 45) return "Try again!";

    //Check columns
    if(merged.filter((n,t)=> (t-i)%9 === 0).reduce((a,b) => a+b) !== 45) return "Try again!";
    //This piece of code is better for performance
    //if ((merged[i] + merged[i+9] + merged[i+18] + merged[i+27] + merged[i+36] + merged[i+45] + merged[i+54]+ merged[i+63]+ merged[i+72])!== 45)finish = false;

    //Blocks
    if(merged.slice(sqIni,sqIni+3).reduce((a,b) => a+b) +
       merged.slice(sqIni+9,sqIni+12).reduce((a,b) => a+b) +
       merged.slice(sqIni+18,sqIni+21).reduce((a,b) => a+b) !== 45 )
          return "Try again!";

    //Calculate initial
    sqIni = (i === 2 || i === 5) ? sqIni+21 : sqIni+3;

  }

  //Return
  return "Finished!";
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
