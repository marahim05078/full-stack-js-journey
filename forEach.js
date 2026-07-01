/**
 * forEach() method implementation
 * Testing the result for both in-built and custom methods
 */
let arr = [2, 3, 4, 5, 6, 7];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
//Custom forEach impelementation
//Manipulating Array prototype
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
// Pure named function without touching prototype chain
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
// Using custom myForEach() method

arr.myForEach((item) => (sum1 += item));
myForEach(arr, (item) => (sum2 += item));
arr.forEach((item) => (sum3 += item));
console.log("Using Prototype:", sum1);
console.log("Using pure function:", sum2);
console.log("Using built-in method:", sum3);
