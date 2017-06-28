//Given the string representations of two integers, return the string representation of the sum of those integers.
function sumStrings(a,b) {
  let aRev = a.toString().replace(/\b0+/g, '').split("").reverse();
  let bRev = b.toString().replace(/\b0+/g, '').split("").reverse();
  let rep = (aRev.length > bRev.length) ? aRev.length : bRev.length;

  let final = "";
  let rest = false;
  for (var i = 0; i < rep; i++) {
    let num = (rest) ? 1 : 0;
    if (aRev[i] !== undefined) num += aRev[i]*1;
    if (bRev[i] !== undefined) num += bRev[i]*1;
    rest = false;
    if (num >= 10){
      rest = true;
      num -= 10;
    }
    final = num.toString() + final;
  }
  return (rest) ? "1" + final : final;
}

// console.log(sumStrings('123','456')); //,'579'
// console.log(sumStrings('8797', '45')); //8842
// console.log(sumStrings('800', '9567')); //10367
// console.log(sumStrings('99', '1')); //100
console.log(sumStrings('00103', '08567')); //8670
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937')); //712577413488402631964821329
console.log(sumStrings('', '5'));//5
