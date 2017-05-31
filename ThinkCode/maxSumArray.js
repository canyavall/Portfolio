// Maximum subarray sum (30 mins)

// Write a method that finds the maximum sum of a contiguous subsequence in an
// array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//
// should be 6: [4, -1, 2, 1]
//
// Easy case is when the list is made up of only positive numbers and the
// maximum sum is the sum of the whole array. If the list is made up of only
// negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum.
// Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arrayNum){
  let valid = false;
  let finalArray = [];
  let bufferArray = [];
  let sumFinal = 0;
  let sumBuffer = 0;
  for (var i = 0; i < arrayNum.length; i++){
    if (arrayNum[i] >= 0) valid = true;
    if (arrayNum[i] < 0 && finalArray.length == 0) continue; //ignore number if it is negative and still we don't have a final

    bufferArray.push(arrayNum[i]);
    sumBuffer = bufferArray.reduce((x, y) => x + y)

    if (sumBuffer > sumFinal) finalArray = bufferArray.slice();
    if (sumBuffer < sumFinal - 2 && arrayNum[i] < 0) bufferArray = [];

    sumFinal = finalArray.reduce((x, y) => x + y);
  }
  if (!valid) return null;
  return sumFinal;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4, -1]));// should be 6: [4, -1, 2, 1]
console.log(maxSequence([-2,1,-5])) // should be 1
console.log(maxSequence([4,1,-4,2,-5,1,1,2,3,-1,2])) // should be 8
