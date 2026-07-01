/**
 * custom filter() implementation
 * without prototype
 * with prototype
 */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Without Prototype

function myFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    } else {
      continue;
    }
  }
  return result;
}
//with prototype
Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    } else {
      continue;
    }
  }
  return result;
};

//custom filter function
let filteredData1 = myFilter(arr, (item) => item % 2 === 0);
//using custom but prototype pattern
let filteredData2 = arr.myFilter((item) => item % 2 === 0);
//using built-in function
let filteredData3 = arr.filter((item) => item % 2 === 0);

console.log(filteredData1);
console.log(filteredData2);
console.log(filteredData3);
