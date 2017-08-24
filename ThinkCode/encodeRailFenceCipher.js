//https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
function encodeRailFenceCipher(string, numberRails) {
  let rail = 0;
  let order = 1;
  let arrayString = string.split("");
  let arrayResult = [];
  let arrayOrder = 0;
  for (let i = 0; i < arrayString.length; i++) {
    (arrayResult[rail]) ? arrayResult[rail].push(arrayString[i]) : arrayResult[rail] = [arrayString[i]];
    if (rail === 0) order = 1;
    if (rail === numberRails-1) order = 0;
    (order === 1) ? rail++ : rail--;
  }
  return arrayResult.map((e) => e.join("")).join("");
}

function decodeRailFenceCipher(string, numberRails) {
  let resultString = "";
  let arrayString = string.split("");
  let arrayRailsNum = [];
  let arrayRails = [];
  let rail = 0;
  let order = 1;
  let arrayOrder = 0;

  //check charaters by rail
  for (let i = 0; i < string.length; i++) {
    (arrayRailsNum[rail]) ? arrayRailsNum[rail] += 1 : arrayRailsNum[rail] = 1;
    if (rail === 0) order = 1;
    if (rail === numberRails-1) order = 0;
    (order === 1) ? rail++ : rail--;
  }
  //create rails
  for (let i = 0; i < numberRails; i++) {
    arrayRails[i] = string.substring(0, arrayRailsNum[i]).split("");
    string = string.substr(arrayRailsNum[i])
  }
  order = 0

  //merge rails
  for (let i = 0; i < arrayString.length; i++) {
    resultString += arrayRails[arrayOrder][0];
    arrayRails[arrayOrder].shift();
    if (arrayOrder === 0) order = 1;
    if (arrayOrder === numberRails-1) order = 0;
    (order === 1) ? arrayOrder++ : arrayOrder--;
  }
  return resultString;
}

//console.log(encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3));//"WECRLTEERDSOEEFEAOCAIVDEN");
//console.log(decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3)); //"WEAREDISCOVEREDFLEEATONCE"
console.log(encodeRailFenceCipher("Hello, World!", 3)); //"Hoo!el,Wrdl l"
