// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.
// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string.
// "whi" is a triplet for the string "whatisup".
// As a simplification, you may assume that no letter occurs more than once in the secret string.
// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient
// information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur
// in one of the triplets given to you.

var recoverSecret = function(triplets) {
  let word = [].concat.apply([], triplets).filter((e,i,a) => i == a.indexOf(e)).sort;
  for (let i = 0; i < triplets.length; i++) {
    for (var u = 0; u < triplets[i].length; u++) {
      if (u === 0) {
        if (word.indexOf(triplets[i][u]) > word.indexOf(triplets[i][u+2])){
          word.splice(word.indexOf(triplets[i][u]),1);
          word.splice(word.indexOf(triplets[i][u+2]), 0, triplets[i][u]);
        }
        if (word.indexOf(triplets[i][u]) > word.indexOf(triplets[i][u+1])){
          word.splice(word.indexOf(triplets[i][u]),1);
          word.splice(word.indexOf(triplets[i][u+1]), 0, triplets[i][u]);
        }
      }

      if (u === 2) {
        if (word.indexOf(triplets[i][u-2]) > word.indexOf(triplets[i][u])){
          let letter = triplets[i][u-2];
          word.splice(word.indexOf(triplets[i][u]),1);
          word.splice(word.indexOf(triplets[i][u]), 0, letter);
        }
        if (word.indexOf(triplets[i][u-1]) > word.indexOf(triplets[i][u])){
          let letter = triplets[i][u-1];
          word.splice(word.indexOf(triplets[i][u-1]),1);
          word.splice(word.indexOf(triplets[i][u]), 0, letter);
        }

      }
    }
  }
  return word.toString().replace(/,/g,'');
}

console.log(recoverSecret([
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
])); //whatisup

console.log(recoverSecret([
['c', 'd', 'e'],
['a', 'b', 'c']
])); //abcde
