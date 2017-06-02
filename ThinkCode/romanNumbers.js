'use strict';

// Roman numeral translator (45 mins)

// Write a function that takes a roman numeral as input,
// and returns the same number in Hindu-Arabic form
// (https://en.wikipedia.org/wiki/Roman_numerals).
// Extra credit: write a second function that takes
// a number as input and returns its roman numeral.

function getNumeral(str){
  let arrayNum = str.split(""),
      nums = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1},
      finalNum = 0,
      prev = 0,
      rest = 0;

  for (var i = 0; i < arrayNum.length; i++) {
    rest = 0;
    if ((prev == "C" && arrayNum[i] == "M") ||
        (prev == "I" && arrayNum[i] == "V") ||
        (prev == "X" && arrayNum[i] == "C") ||
        (prev == "C" && arrayNum[i] == "D") ||
        (prev == "X" && arrayNum[i] == "L") ||
        (prev == "I" && arrayNum[i] == "X")) rest = nums[prev];
    prev = arrayNum[i];
    finalNum += nums[arrayNum[i]] - 2 * rest;
  }
    return finalNum
}

// console.log(getNumeral("VI")); //6
// console.log(getNumeral("IX")); //9
// console.log(getNumeral("XXVIII")); //28
// console.log(getNumeral("CXLII")); //142
// console.log(getNumeral("CCCXLIX"));//349
// console.log(getNumeral("DCCCLXXVIII"));//878
// console.log(getNumeral("MCDXXXIX"));//1439
// console.log(getNumeral("MMDCCCXCIV"));//2894
// console.log(getNumeral("MMCMXC"));//2990

console.time('getNumeral');
console.log(getNumeral("MMDCCCXCIV"));//2894
console.timeEnd('getNumeral');
