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
  for (var i = 0; i < arrayNum.length; i++){
    if (arrayNum[i] >= 0) valid = true;
  }
  if (!valid) return null;



}



maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSequence([-2, -5])
