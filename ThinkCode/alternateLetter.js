function isAlt(word) {
  const voc = ["a", "e", "i", "o", "u"];
  let wordArray = word.split("");
  if (voc.indexOf(word.split("")[0]) === -1) wordArray.shift();
  for(i = 0; i < wordArray.length; i++){
    if (voc.indexOf(wordArray[i]) === -1 && i%2 === 0) return false;
    if (voc.indexOf(wordArray[i]) !== -1 && i%2 !== 0) return false;
  }
  return true;
}

console.log(isAlt("amazon")); //true
console.log(isAlt("apple")); //false
console.log(isAlt("banana"));//true
console.log(isAlt("hibah")); // true
console.log(isAlt("cfbii")); //false
console.log(isAlt("cieag")); //false
