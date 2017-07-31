function damagedOrSunk (board, attacks){
  board = board.reverse();
  let res = { sunk:0, damaged:0 , notTouched:0, points:0 };
  let ships = {};
  [].concat.apply([], board).forEach((e)=>{if (e>0) ships[e] ? ships[e]++ : ships[e] = 1});
  let combat = Object.assign({}, ships);
  attacks.forEach((e) => { if (board[e[1]-1][e[0]-1]) combat[board[e[1]-1][e[0]-1]]-- })
  for(proper in ships){
    if (ships[proper] > combat[proper] && combat[proper] !== 0 ) res.damaged++;
    if (combat[proper] === 0 ) res.sunk++;
    if (ships[proper] === combat[proper]) res.notTouched++;
    res.points = res.damaged * 0.5 + res.sunk - res.notTouched;
  }
  return res;
}

var board = [ [0, 0, 1, 0],
              [0, 0, 1, 0],
              [0, 0, 1, 0] ];
var attacks = [[3, 1], [3, 2], [3, 3]];
var result = damagedOrSunk(board, attacks);
console.log(result);// { sunk: 1, damaged: 0 , notTouched: 0, points: 1 }
