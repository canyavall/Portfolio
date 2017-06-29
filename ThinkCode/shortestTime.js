// John is a programmer. He treasures his time very much. He lives on the n floor of a building.
// Every morning he will go downstairs as quickly as possible to begin his great work today.
// There are two ways he goes downstairs: walking or taking the elevator.
// When John uses the elevator, he will go through the following steps:
function shortestTime(n,m,speeds){
  let walk = (n-1) * speeds[3];
  let elevator = speeds[1]*2 + speeds[2] + (n-1)*speeds[0] + Math.abs(m-n)*speeds[0];
  return (walk < elevator) ? walk : elevator;

}

console.log(shortestTime(5,6,[1,2,3,10])); //12
console.log(shortestTime(1,6,[1,2,3,10])); //0
console.log(shortestTime(5,5,[1,2,3,10])); //11
