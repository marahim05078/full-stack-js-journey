/**
 * Implementation of binay search
 */

let arr = [3, 34, 23, 1, 67, 10, 5, 15, 19, 50, 4, 7, 34, 23, 55, 23];

arr.sort((a, b) => a - b);

console.log(arr);
const myBinarySearch = (arr, value, count) => {
  let lowestIndex = 0;
  let maxIndex = arr.length - 1;

  while (lowestIndex <= maxIndex) {
    let mid = Math.floor((lowestIndex + maxIndex) / 2);
    console.log(
      `LowestIndex = ${lowestIndex} -  MaxIndex = ${maxIndex}- MidIndex = ${mid}`,
    );
    if (arr[mid] < value) lowestIndex = mid + 1;

    if (arr[mid] > value) maxIndex = mid - 1;

    if (arr[mid] === value) return mid;
  }
  return -1;
};

let value = 200;
let result = myBinarySearch(arr, value);
console.log(`Index of ${value} =`, result);
