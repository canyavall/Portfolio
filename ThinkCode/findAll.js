//function findAll(n, k) {
//     if (n > k*9) return [];
//   let pos = [];
//
//   //Calculate min
//   let minArray = '1'.repeat(k).split("");
//   let minPos = minArray.length -1;
//   while (minArray.reduce((a,b) => a*1+b*1) !== n) {
//     if (minArray[minPos] === 9) minPos -= 1;
//     minArray[minPos] = minArray[minPos]*1+1
//   }
//   let min = minArray.join("")*1;
//
//   //Calculate max
//   let maxArray = Math.floor(n/k).toString().repeat(k).split("");
//   let maxPos = maxArray.length -1;
//   while (maxArray.reduce((a,b) => a*1+b*1) !== n) {
//     maxArray[maxPos] = maxArray[maxPos]*1+1
//     maxPos -= 1;
//   }
//   let max = maxArray.join("")*1;
//
//   //Calculate number
//   for (let i = min; i <= max; i+=9) {
//     let numArr = i.toString().split("");
//     if (numArr.indexOf('0') !== -1) continue;
//     if (numArr.reduce((a,b) => a*1+b*1) === n){
//       let num = numArr.sort().join("");
//       if (pos.indexOf(num) === -1)  pos.push(num);
//     }
//   }
//   return [pos.length, pos[0], pos[pos.length-1]];
// }
function findAll(s, d) {
  const ps = parts(s, d, 1),
        n = ps.length;
  return n == 0 ? [] : [n, ps[0].join(''), ps[n - 1].join('')];
}

function parts(s, d, p) {
  if (s < p) return [];
  if (d == 1) return s < 10 ? [[s]] : [];
  const a = [];
  for (let i = p; i < 10; ++i)
    for (const xs of parts(s - i, d - 1, i)) a.push((xs.unshift(i), xs));
    console.log(a);
  return a;
}
console.log(findAll(10, 3));//[8, '118', '334']
// console.log(findAll(84, 4));//[];
// console.log(findAll(27, 3));//, [1, '999', '999'])
// console.log(findAll(35, 6));//, [123, '116999', '566666']
// console.log(findAll(21, 4));//[ 31, '1299', '5556' ]
// console.log(findAll(26, 3));//[ 1, '899', '899' ]
// console.log(findAll(28, 8));//[ 255, '11111599', '33334444' ]
