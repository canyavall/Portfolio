// Write a function that accepts a square matrix in string form
// (where columns are comma-separated, and each row is on a new line),
// and returns a string representing the difference between the sums
// of its diagonals. For example:
//
// let matrix =
// `7,-12,6
//  -3,8,1
//  23,-16,4`;
//
// diagonalDifference(matrix) -> '-18'
// (because 7 + 8 + 4 = 19, and 6 + 8 + 23 = 37, hence 19 - 37 = 18).

function diagonalDifference(matrix){

  let leftDiag = 0;
  let rightDiag = 0;

  let counter = Math.sqrt(matrix.length);
  if (counter % 1 != 0) return "The matrix can't be calculated due the number of elements";

  let controller = 0;
  while (controller <= matrix.length){
    leftDiag += matrix[controller];
    controller += counter + 1;
  }

  controller = counter-1;
  while (controller < matrix.length - 1){
    rightDiag += matrix[controller];
    controller += counter - 1;
  }

  let total = leftDiag - rightDiag;
  if (total < 0) total *= -1;
  return total;
}


let matrix =[7,-12,6,-3,8,1,23,-16,4]; //18
console.log( diagonalDifference(matrix));

let matrix2 =[7,-12,6,-3,8,1,23,-16,4,7,3,9,-11,-1,2,6]; //1
console.log( diagonalDifference(matrix2));

let matrix3 =[1,2,3,4]; //0
console.log( diagonalDifference(matrix3));

let matrix4 =[1,2,3,4,5]; //error
console.log( diagonalDifference(matrix4));
