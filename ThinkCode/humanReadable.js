// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable(seconds) {
  let hours = ("0" + Math.floor(seconds/60/60)).slice (-2);
  seconds -= hours*60*60;
  let minutes = ("0" + Math.floor(seconds/60)).slice (-2);
  return hours + ":" + minutes+":"+("0" + (seconds - minutes * 60)).slice (-2);
}

console.log(humanReadable(0)); //'00:00:00'
console.log(humanReadable(5)); //'00:00:05'
console.log(humanReadable(60)); //'00:01:00'
console.log(humanReadable(86399)); //'23:59:59'
console.log(humanReadable(359999)); //'99:59:59'
