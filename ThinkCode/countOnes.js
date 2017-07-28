function countOnes(left, right) {
  let tot = 0;
  for(i = left; i <= right; i++){
    let vari = i.toString(2);
    for (u=0;u<vari.length;u++){
      if (vari.charAt(u) === '1') tot++;
    }
  }
  return tot;
}

 console.log(countOnes(0,32))// 81
console.log(countOnes(5, 15))// 27
console.log(countOnes(15, 25))// 29
console.log(countOnes(25, 35))// 34
console.log(countOnes(35, 45))// 34
console.log(countOnes(227475, 318261)); //856483
console.log(countOnes(27475, 918261)); //16234163
console.log(countOnes(409130, 800733)); //3981254
