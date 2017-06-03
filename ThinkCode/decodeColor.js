/*
  Decode Colors.

  Create a function that expects an array with colors and returns a resistance.

  - decodeColors('brown black black'); // '10 ohms, 20%'
  - decodeColors('orange orange yellow gold'); // '330k ohms, 5%'
  - decodeColors('red black green gold'); // '2M ohms, 5%'

  This are the rules:
    - First three colors are the amount of Ohms -resistance unit-
    - Fourth color is the tolerance

  Colors dictionary:
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    gray: 8,
    white: 9,
  };

  We use the exponentiation format to represent the resistance:
    - `34 x 10^5` -> 340,000
    - `52 x 10^3` -> 5,200

  The first 2 numbers are to represent the base: `34` and `52` in our examples.
    - `34` would be 'orange yellow'. First color the first number, second second.
    - `52` would be 'gree red'.

  Third color would be exponent of 10.
    - `10^5` would be 'green'
    - `10^3` would be 'orange'

  Back to our resistances:
    - 340,000 would be 'orange yellow green'
    - 5,200 would be 'green red orange'

  Tolerance color:
    - 20% -> NO fourth color
    - 10% -> `silver`
    - 5% -> 'gold'
*/
const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  gray: 8,
  white: 9,
};

const tolerance = {
  silver: 10,
  gold: 5
}

function decodeColors(bands) {
  let bandArray = bands.split(" ");
  let tol = "20";
  let finalString = "";
  if (bandArray.length < 3) return "Missing some values";

  //ohms
  let base = "" + colors[bandArray[0]] + colors[bandArray[1]];
  base *= Math.pow(10, colors[bandArray[2]]);
  finalString = base.toString().split("").reverse().join("");
  finalString = finalString.replace("000000", "M");
  finalString = finalString.replace("000", "K");
  finalString = finalString.split("").reverse().join("");

  //tolerance
  if (bandArray[3]) tol = tolerance[bandArray[3]];

  return finalString + " ohms, " + tol + "%";
}

console.log(decodeColors('brown black black')); // '10 ohms, 20%'
console.log(decodeColors('brown black brown gold')); // '100 ohms, 5%'
console.log(decodeColors('brown black red silver')); // '1k ohms, 10%'
console.log(decodeColors('red red orange silver')); // '22k ohms, 10%'
console.log(decodeColors('yellow violet orange gold')); // '47k ohms, 5%'
console.log(decodeColors('orange orange yellow gold')); // '330k ohms, 5%'
console.log(decodeColors('red black green gold')); // '2M ohms, 5%'

const colorsReverse = {
  0: "black",
  1: "brown",
  2: "red",
  3: "orange",
  4: "yellow",
  5: "green",
  6: "blue",
  7: "violet",
  8: "gray",
  9: "white",
};

function encodeResistorColors (bands){
  let arrayBands = bands.split(" ");
  // let firstBandsClean = arrayBands[0].replace("k", "000").replace("M", "000000");
  let fourthColor = "";
  let point = 0;
  let counter = 0;

  if (arrayBands[0].indexOf(".") != -1) {
    point = 1;
    arrayBands[0] = arrayBands[0].replace(".", "")
  }

  //First and second color
  let firstColor = colorsReverse[arrayBands[0].charAt(0)];
  let secondColor = colorsReverse[arrayBands[0].charAt(1)];
  if (secondColor == undefined)secondColor = "black";

  let normalize = arrayBands[0].substr(2);
  if(arrayBands[0].indexOf("k") > 0) counter = 2;
  if(arrayBands[0].indexOf("M") > 0) counter = 5;

  let thirdColor = colorsReverse[(arrayBands[0].match(/0/g) || []).length + counter + point];

  if(arrayBands[2].charAt(0) == 1) fourthColor = "silver";
  if(arrayBands[2].charAt(0) == 5) fourthColor = "gold";

  return firstColor + " " + secondColor + " " + thirdColor + " " + fourthColor;
}

console.log(encodeResistorColors("10 ohms 5%")) // "brown black black gold"
console.log(encodeResistorColors("220 ohms 10%")) // "red red brown silver"
console.log(encodeResistorColors("1k ohms 5%")) // "brown black red gold"
console.log(encodeResistorColors("4.7k ohms 20%")) // "yellow violet orange"
console.log(encodeResistorColors("1M ohms 10%")) // "brown black green silver"
console.log(encodeResistorColors("2M ohms 5%")) // "red black green gold"
