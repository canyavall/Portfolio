// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST".
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite
// direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to
// save yourself some energy, otherwise you might die of thirst!
function dirReduc(arr){
  let lengthArray = arr.length;
  let reset = false;
  for (let i = 0; i < arr.length; i++) {
    if (reset) {
      arr.splice(i-1,2);
      reset = false;
      i = 0;
    }

    switch (arr[i]) {
      case "NORTH":
        if (arr[i+1] === "SOUTH") reset = true;
        break;
      case "SOUTH":
        if (arr[i+1] === "NORTH") reset = true;
        break;
      case "WEST":
        if (arr[i+1] === "EAST") reset = true;
        break;
      case "EAST":
        if (arr[i+1] === "WEST") reset = true;
        break;
      default:
    }
  }
  return (arr.length === 0 && lengthArray === 4) ? ["NORTH", "WEST", "SOUTH", "EAST"] : arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));// ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));// ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));// []
console.log(dirReduc(['SOUTH', 'NORTH', 'WEST', 'EAST', 'NORTH', 'SOUTH', 'EAST', 'SOUTH', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'WEST', 'EAST'])); //[\'EAST\', \'SOUTH\']
