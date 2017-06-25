//Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
function pigIt (str) {
  return  str.split(" ").map((e) => e.substr(1) + e.charAt(0) + "ay ").join("").trim();
}

console.log(pigIt('Pig latin is cool'));; // igPay atinlay siay oolcay
