//https://www.codewars.com/kata/nut-farm/javascript
var shakeTree = function(tree) {
  let res = [];
  tree.forEach((el) => el.forEach ((e, i, a) => {
    a[i] = e.replace(/\\/, "r")
  }));
  tree[0].forEach((e, ind) => {
    let tempIndex = ind;
    let value = 0;
    if (e === "o"){
      value = 1;
      for (let i = 1; i < tree.length; i++) {
        if (tree[i][tempIndex] === "r") tempIndex++;
        if (tree[i][tempIndex] === "/") tempIndex--;
        if (tree[i][tempIndex] === "_") {
          value = 0;
          break;
        }
        if (tree[i][tempIndex] === " ") value = 1;
      }
    }
    if (res[tempIndex] > 0 && value === 1 ) res[tempIndex]++;
    if (!res[tempIndex]) res[tempIndex] = value;
    if (!res[ind]) res[ind] = 0;
  })
  return res;
}

var tree = [ [ ' ', 'o', 'o', 'o', 'o', 'o', 'o', ' ' ],
  [ ' ', '/', ' ', ' ', '\\', ' ', '/', ' ' ],
  [ ' ', ' ', '_', ' ', ' ', '\\', ' ', ' ' ],
  [ ' ', ' ', ' ', '/', ' ', '_', ' ', ' ' ],
  [ ' ', ' ', '\\', ' ', ' ', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', '|', '|', ' ', ' ', ' ' ],
  [ ' ', ' ', ' ', '|', '|', ' ', ' ', ' ' ] ];
  console.log(shakeTree(tree));//[1, 0, 0, 1, 0, 0, 3, 0]
