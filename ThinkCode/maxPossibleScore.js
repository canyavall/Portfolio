function maxPossibleScore(obj, arr) {
  arr = arr.toString().split(",");
  return Object.keys(obj).map((key) => (arr.indexOf(key) !== -1) ? obj[key]*2 : obj[key]).reduce((a,b) => a+b);
}

console.log(maxPossibleScore({"a": 1}, []))//, 1
console.log(maxPossibleScore({"a": 1}, ["a"]))//, 2
console.log(maxPossibleScore({"a": 1, "b": 14}, ["b"]))//, 29
console.log(maxPossibleScore({"a": 1, "b": 2, "c": 4}, ["a", "b", "c"]))//, 14
console.log(maxPossibleScore({"a": 2, "b": 5, "c": 8}, ["c"]))//, 23
console.log(maxPossibleScore({ '1': 47037.97689398313, '27': 61.02604069235951, another: 5 }, [ 1, 'another' ])); //94146.97982865862
console.log(maxPossibleScore({ true: 47037.97689398313, false: 61.02604069235951, another: 5 }, [ true, 'another' ]));//94146.9798286586
