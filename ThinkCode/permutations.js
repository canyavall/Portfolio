//https://www.codewars.com/kata/permutations/train/javascript
function permutations(string) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0 && results.indexOf(memo.concat(cur).join("")) === -1)
        results.push(memo.concat(cur).join(""));
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(string.split(""));
}

// console.log(permutations('a'));// ['a']
// console.log(permutations('ab').sort());//['ab', 'ba']
console.log(permutations('aabb').sort());//['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
