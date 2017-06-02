'use strict';

// Roman numeral translator (45 mins)

// Write a function that takes a roman numeral as input,
// and returns the same number in Hindu-Arabic form
// (https://en.wikipedia.org/wiki/Roman_numerals).
// Extra credit: write a second function that takes
// a number as input and returns its roman numeral.


let nums = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};
function getNumeral(str){
  let arrayNum = str.split(""),
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

console.log(getNumeral("VI")); //6
console.log(getNumeral("IX")); //9
console.log(getNumeral("XXVIII")); //28
console.log(getNumeral("CXLII")); //142
console.log(getNumeral("CCCXLIX"));//349
console.log(getNumeral("DCCCLXXVIII"));//878
console.log(getNumeral("MCDXXXIX"));//1439
console.log(getNumeral("MMDCCCXCIV"));//2894
console.log(getNumeral("MMCMXC"));//2990

let rom = ["M", "D", "C", "L", "X", "V", "I"];

function getRoman (num){
  let numSize = num.toString().length;
  let arrayNum = "0".repeat(4 - numSize) + num;
  let finalString = "";
  let control = 0;
  for (let i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0 && arrayNum[i] < 4) finalString += rom[control].repeat(arrayNum[i]);
    if (arrayNum[i] == 4) finalString += rom[control] + rom[control - 1];
    if (arrayNum[i] == 5) finalString += rom[control - 1];
    if (arrayNum[i] > 6 && arrayNum[i] < 9) finalString += rom[control-1] + rom[control].repeat(arrayNum[i]-5);
    if (arrayNum[i] == 9) finalString += rom[control] + rom[control - 2];
    control +=2;
  }
  return finalString;
}

console.log(getRoman(5)); //V
console.log(getRoman(11)); //XI
console.log(getRoman(142)); //CXLII
console.log(getRoman(1422)); //MCDXXII
console.log(getRoman(2304)); //MMCCCIV
console.log(getRoman(2894));//MMDCCCXCIV
