// takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

function tripledouble (num1, num2){
  let num = null;
  let rep = 0;
  let final = 0;
  let previous = null;
  let previous2 = null;
  num1.toString().split("").forEach((e,i,a) => {
    if (previous != null && e === previous){
      num = e;
      rep++;
    } else{
      rep = 0;
    }

    if (rep === 2) num2.toString().split("").forEach((ele, ind, arr) => {
      if (previous2 != null && e === previous2 && ele === num) final = 1;
      previous2 = ele;
    })
    previous = e;
  })

  return final;
}

console.log(tripledouble(451999277, 41177722899)); //1
console.log(tripledouble(1222345, 12345)); //0
console.log(tripledouble(12345, 12345)); //0
console.log(tripledouble(666789, 12345667)); //1
