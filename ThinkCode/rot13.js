function rot13(message){
  let str = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  return message.split("").map((e) => {
    if (str.indexOf(e) !== -1) return str.charAt(str.indexOf(e)+13);
    if (str.indexOf(e.toLowerCase()) !== -1) return str.charAt(str.indexOf(e.toLowerCase())+13).toUpperCase();
    return e;
  }).join("");
}

console.log(rot13("abc")); //nop
console.log(rot13("test")); //grfg
console.log(rot13("Test")); //Grfg
console.log(rot13("Codewars")); //Pbqrjnef
console.log(rot13("10+2 is twelve.")); //10+2 vf gjryir.
