/**
 * map() implementation
 * with prototype
 * without prototype
 */
let arr = ["stack learner", "stack overflow", "stack underflow", "stack full"];
//without prototype
function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
//with prototype
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

let mapedArray1 = myMap(arr, (item) => item.slice(6));
let mapedArray2 = arr.myMap((item) => item.slice(6));
let mapedArray3 = arr.map((item) => item.slice(6));

console.log(mapedArray1);
console.log(mapedArray2);
console.log(mapedArray3);
