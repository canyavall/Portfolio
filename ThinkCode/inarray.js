//https://www.codewars.com/kata/which-are-in/train/javascript
function inArray(array1,array2){
  let res = [];
  for (let i = 0; i < array2.length; i++) {
    for (let u = 0; u < array1.length; u++) {
      if (array2[i].includes(array1[u]) && res.indexOf(array1[u]) === -1){
        res.push(array1[u]);
        break;
      }
    }
  }
  return res.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2)); //["live", "strong"]

a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2)); //["arp", "live", "strong"]
