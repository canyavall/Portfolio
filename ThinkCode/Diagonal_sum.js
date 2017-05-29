// let matrix =
// `7,-12,6
//  -3,8,1
//  23,-16,4`;
//
// diagonalDifference(matrix) -> '-18'
// (because 7 + 8 + 4 = 19, and 6 + 8 + 23 = 37, hence 19 - 37 = 18).
//
function diagonalDifference(matrix){

  let counter = 2;
  let leftDiag = 0;
  let rightDiag = 0;
  while (counter*counter != matrix.length) counter++;

  controller = 0;
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
let matrix =[7,-12,6,-3,8,1,23,-16,4];

console.log( diagonalDifference(matrix));
