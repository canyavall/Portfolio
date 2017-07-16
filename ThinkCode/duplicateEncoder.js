function duplicateEncode(word){
    let wordArray = word.toLowerCase().split("");
    let restString = "";
    wordArray.forEach((e) => restString += (wordArray.indexOf(e) == wordArray.lastIndexOf(e)) ? "(" : ")")
    return restString;
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
console.log(duplicateEncode("Success"));// ")())())"
console.log(duplicateEncode("(( @")); //"))(("
