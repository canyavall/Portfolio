// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortTheOdd (nums){
  if (nums.length === 0) return [];
  const oddNumbers = nums.filter((number) => number % 2 !== 0).sort((a, b) => a - b);
  let controller = 0;
  nums.forEach((e, i, a)=>{
    if(e % 2 !== 0){
      a[i] = oddNumbers[controller]
      controller++;
    }
  })
  return nums;
}

console.log(sortTheOdd([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
