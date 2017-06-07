function duplicateEncode(word){
    let wordArray = word.toLowerCase().split("");
    let restString = "";
    for (let i = 0; i < wordArray.length; i++){
      restString += (wordArray.indexOf(wordArray[i]) == wordArray.lastIndexOf(wordArray[i])) ? "(" : ")";
    }
    return restString;
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success"));// ")())())"
console.log(duplicateEncode("(( @")); //"))(("
