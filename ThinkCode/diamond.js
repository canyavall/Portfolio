// You need to return a string that displays a diamond shape on the screen using
// asterisk ("*") characters.
//
// diamond(3) should return the following:
//  *
// ***
//  *

//    *
//   ***
//  *****
//   ***
//    *
// The shape that will be returned from print method resembles a diamond, where
// the number provided as input represents the number of *’s printed on the
// middle line. The line above and below will be centered and will have 2 less
// *’s than the middle line. This reduction by 2 *’s for each line continues
// until a line with a single * is printed at the top and bottom of the figure.
// Return null if input is even number or negative (as it is not possible to
// print diamond with even number or negative number).

function diamond(num){
  if (num %2 == 0 || num < 0) return null;

  let middleNum = Math.ceil(num/2);
  let finalArray = [];

  for (let i = 1; i <= num; i++) {
    if (i <= middleNum){
      let lat = " ".repeat(middleNum - i) + "*".repeat(i-1)
      finalArray[i] = lat + "*" + lat.split("").reverse().join("");
    }else{
      finalArray[i] = finalArray[middleNum - (i - middleNum)]
    }
  }

  let finalString = "";
  finalArray.forEach(e => finalString += e + '\n');
  return finalString;
}
// console.time('diamond 11');
// diamond(11);
// console.timeEnd('diamond 11');

console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(11));
console.log(diamond(151));
