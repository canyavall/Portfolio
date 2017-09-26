//https://www.codewars.com/kata/the-hunger-games-zoo-disaster/train/javascript

const zooFood = {
  'antelope': ['grass'],
  'big-fish': ['little-fish'],
  'bug': ['leaves'],
  'bear': ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  'chicken': ['bug'],
  'cow': ['grass'],
  'fox': ['chicken', 'sheep'],
  'giraffe': ['leaves'],
  'lion': ['antelope', 'cow'],
  'panda': ['leaves'],
  'sheep': ['grass']
}
var whoEatsWho = function(zoo) {
  let resZoo = [];
  let eater = [];
  let zooArray = zoo.split(",");
  resZoo.push(zoo);
  let recZoo = function (animal) {
    //console.log(animal, "/", zooArray);
    if (zooFood[animal]){
      for (let u = 0; u < zooFood[animal].length; u++) {
        if (eater.indexOf(zooFood[animal][u]) !== -1){
          recZoo(zooFood[animal][u]);
          resZoo.push(animal + " eats " + zooFood[animal][u]);
          eater.splice(eater.indexOf(zooFood[animal][u]), 1);
        }
      }
    }
  }

  zooArray.forEach((e,i,a) => {
    eater.push(e);
    recZoo(e)
  })

  // Your code here
  return resZoo.concat(eater);
}


var input = "fox,bug,chicken,grass,sheep";
console.log(whoEatsWho(input));
// var expected = 	[
//       "fox,bug,chicken,grass,sheep",
//       "chicken eats bug",
//       "fox eats chicken",
//       "sheep eats grass",
//       "fox eats sheep",
//       "fox"
//       ];

input = "chicken,fox,leaves,bug,grass,sheep";
console.log(whoEatsWho(input));//Expected: '[\'chicken,fox,leaves,bug,grass,sheep\', \'fox eats chicken\', \'bug eats leaves\', \'sheep eats grass\', \'fox,bug,sheep\']'
