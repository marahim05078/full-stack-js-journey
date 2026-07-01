/**
 * every() method implementation
 * without prototype pattern
 * with prototype pattern
 */

// let arr = [2, 4, 5, 6, 7, 8, 9];
let arr = [
  "Md. Abdur Rahim",
  "Md. Reyad Ahmed",
  "Md. Shahriar Islam",
  "Md. Faruq Abdullah",
  "Md. Awlad Hossen",
];

//Without prototype pattern
function myEvery(arr, callback) {
  let state = true;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      state = false;
    }
  }
  return state;
}
//With prototype pattern
Array.prototype.myEvery = function (callback) {
  let state = true;
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      state = false;
    }
  }
  return state;
};

//using myEvery() without prototype
let checkState1 = myEvery(
  arr,
  (item) => item.toUpperCase().slice(0, 3) === "MD.",
);
//using myEvery() with prototype
let checkState2 = arr.myEvery(
  (item) => item.toUpperCase().slice(0, 3) === "MD.",
);
//using built-in every()
let checkState3 = arr.every((item) => item.toUpperCase().slice(0, 3) === "MD.");
// let checkState1 = myEvery(arr, (item) => item.toUpperCase().includes("MD.", 0));
// let checkState2 = myEvery(arr, (item) => item % 2 === 0);
// let checkState2 = arr.myEvery((item) => item % 2 === 0);
// let checkState3 = arr.every((item) => item % 2 === 0);

console.log(checkState1);
console.log(checkState2);
console.log(checkState3);
