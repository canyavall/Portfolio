function queueTime(customers, n) {
  let queue = [0];
  for (let i = 0; i < customers.length; i++) {
    if (i<n){
      queue[i]=customers[i];
    } else {
      let min = queue.indexOf(Math.min(...queue));
      queue[min] += customers[i];
    }
  }
  return Math.max(...queue);
}

console.log(queueTime([], 1)); //0
console.log(queueTime([1,2,3,4], 1)); //10
console.log(queueTime([2,2,3,3,4,4], 2)); //9
console.log(queueTime([1,2,3,4,5], 100)); //5
