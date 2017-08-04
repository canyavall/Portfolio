function findAll(n, k) {
  if (n > k*9) return [];
  let pos = [];
  let minArray = '1'.repeat(k).split("");
  let minPos = minArray.length -1;
  while (minArray.reduce((a,b) => a*1+b*1) !== n) {
    if (minArray[minPos] === 9) minPos -= 1;
    minArray[minPos] = minArray[minPos]*1+1
  }
  let min = minArray.join("");
  let max = Math.ceil(n/k) + '0'.repeat(k-1);
  console.log(min, max);
  if (n/k % 1 === 0) pos.push(Math.ceil(n/k).toString().repeat(k))
  for (let i = min; i <= max; i++) {
    if (i.toString().indexOf('0') !== -1) continue;
    let numArr = i.toString().split("");
    if (numArr.indexOf('0') !== -1) continue;
    if (numArr.reduce((a,b) => a*1+b*1) === n &&
        pos.indexOf(numArr.sort().join("")) === -1)
          pos.push(numArr.sort().join(""));
  }
  return [pos.length, pos[0], pos[pos.length-1]]
}

console.log(findAll(10, 3));//[8, '118', '334']
console.log(findAll(84, 4));//[];
console.log(findAll(27, 3));//, [1, '999', '999'])
console.log(findAll(35, 6));//, [123, '116999', '566666']
console.log(findAll(21, 4));//[ 31, '1299', '5556' ]
console.log(findAll(26, 3));//[ 1, '899', '899' ]
console.log(findAll(28, 8));//[ 255, '11111599', '33334444' ]
