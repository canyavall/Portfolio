//https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
function encodeRailFenceCipher(string, numberRails) {
  let rail = 0;
  let order = 1;
  let arrayString = string.replace(/\s/g, '').split("");
  let arrayResult = [];
  for (let i = 0; i < arrayString.length; i++) {
    (arrayResult[rail]) ? arrayResult[rail].push(arrayString[i]) : arrayResult[rail] = [arrayString[i]];
    if (rail === 0) order = 1;
    if (rail === numberRails-1) order = 0;
    (order === 1) ? rail++ : rail--;
  }
  return arrayResult.join("").replace(/,/g, '');
}

function decodeRailFenceCipher(string, numberRails) {
  let resultString = "";
  let arrayString = string.split("");
  let arrayRailsNum = [];
  let arrayRails = [];
  let rail = 0;
  //check charaters by rail
  for (let i = 0; i < string.length; i++) {
    (arrayRailsNum[rail]) ? arrayRailsNum[rail] += 1 : arrayRailsNum[rail] = 1;
    if (rail === 0) order = 1;
    if (rail === numberRails-1) order = 0;
    (order === 1) ? rail++ : rail--;
  }
  //create rails
  for (let i = 0; i < numberRails; i++) {
    arrayRails[i] = string.substring(0, arrayRailsNum[i]);
    string = string.substr(arrayRailsNum[i])
  }
  //merge rails
  for (let i = 0; i < array.length; i++) {
    array[i]
  }
  console.log(arrayRails);
  return true;
}

//console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));//"WECRLTEERDSOEEFEAOCAIVDEN");
console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)); //"WEAREDISCOVEREDFLEEATONCE"
