//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
snail = function(array) {
  let finalArray = [];

  for (let i = 0; i <= array.length; i++) {

    //First line
    array[0].forEach((e) => finalArray.push(e));
    array.shift();

    //Right
    for (let u = 0; u < array.length -1 ; u++) {
      finalArray.push(array[u][array[u].length-1]);
      array[u].pop();
    }

    //Bottom
    if (array[array.length-1]) array[array.length-1].reverse().forEach((e) => finalArray.push(e));
    array.pop();

    //Left
    for (let o = array.length-1; o >= 0; o--) {
      finalArray.push(array[o][0]);
      array[o].shift();
    }

  }
    if (array.length === 1) finalArray.push(array[0][0]);
  return finalArray;
}

const array1 = [[1,2,3],
         [4,5,6],
         [7,8,9]]
console.log(snail(array1));// #=> [1,2,3,6,9,8,7,4,5]
const array2 = [[1,2,3,1],
                 [4,5,6,4],
                 [7,8,9,7],
                 [7,8,9,7]]
console.log(snail(array2));// #=> [1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]

const array3 = [[1,2,3,4,5],
                 [6,7,8,9,10],
                 [11,12,13,14,15],
                 [16,17,18,19,20],
                 [20,21,22,23,24,25]]
console.log(snail(array3));// #=> [1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]
