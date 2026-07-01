/**
 * reduce() method implementation
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Custom myReduce function without prototype pattern.
// In case of prototype pattern use Array.prototype.myReduce() and
// we don't need to pass array manually because it will be accessed from prototype chain and
// array will be get by this key word.

function myReduce(arr, callback, init) {
  let acc = init;
  let start = 0;
  if (!init) {
    acc = arr[start];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }
  return acc;
}
// In case of adding multiplication and other similar operation of array we don't need to
// initialize but for other operation like filtering or maping or traverse operation we
// must need to initialize what we want from it otherwise it may throught an type error depending on
// the logic tobe written in the callback fucntion.

let sum = myReduce(arr, (acc, cur) => acc + cur);
console.log(sum);
