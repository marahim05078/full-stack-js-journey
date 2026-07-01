/**
 * Different types of sorting method implementation
 */

let arr = [4, 6, 2, 3, 6, 9, 23, 43, 52, 10, 8, 5];
//Bubble sort implementation without callback
const mySort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
mySort(arr);

// Bubble sort implementation with callback
Array.prototype.mySort = function (callback) {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (callback(this[j], this[j + 1]) > 0) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};
arr.mySort((a, b) => b - a);

console.log(arr);
