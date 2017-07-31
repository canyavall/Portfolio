function findAll(n, k) {
  if (n > k*9) return [];
  let pos = []
  let min = (n - (k-1)*9 > 0) ? n - (k-1)*9 : 1;
  let max = (n > 11) ? 9 : n-2;
  var numMin = (min === max) ? min : max/2;
  let numMax = max.toString()+ min.toString().repeat(k-1);
  for (let i = numMin; i <= numMax; i++) {
    let numArr = i.toString().split("");
    if (numArr.reduce((a,b) => a*1+b*1) === n &&
        numArr.indexOf('0') === -1 &&
        pos.indexOf(numArr.sort().join("")) === -1)
          pos.push(numArr.sort().join(""));
  }
  console.log(pos);
  return [pos.length, pos[0], pos[pos.length-1]]
}

// console.log(findAll(10, 3));//[8, '118', '334']
// console.log(findAll(27, 3));//, [1, '999', '999'])
console.log(findAll(35, 6));//, [123, '116999', '566666']
