//https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/train/javascript

var findMissing = function (list) {
  const sumLast = Math.abs(list[list.length-1] - list[list.length-2]);
  const sumFirst = Math.abs(list[1] - list[0]);
  const sum = (sumLast > sumFirst) ? sumFirst : sumLast;
  for(i=1; i < list.length; i++){
    if (Math.abs(list[i]) - Math.abs(list[i-1]) > sum) return (list[i] < 0) ? list[i-1]-sum : list[i-1]+sum;
  }
  return (list[0] < 0) ? list[0]-sum : list[0]+sum;
}

/console.log(findMissing([-3, -8, -18]));
console.log(findMissing([ -9, -7, -6 ]));
