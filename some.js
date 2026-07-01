/**
 * some() method implementation
 * without prototype pattern
 * with prototype pattern
 */

// let arr = [2, 4, 5, 6, 7, 8, 9];
let arr = [
  "Mr. Abdur Rahim",
  "Md. Reyad Ahmed",
  "Md. Shahriar Islam",
  "Md. Faruq Abdullah",
  "Md. Awlad Hossen",
  "Ms. Gulshan Ara",
];

//Without prototype pattern
function mySome(arr, callback) {
  let state = false;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      state = true;
    }
  }
  return state;
}
//With prototype pattern
Array.prototype.mySome = function (callback) {
  let state = false;
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      state = true;
    }
  }
  return state;
};

//using mySome() without prototype
let checkState1 = mySome(
  arr,
  (item) => item.toUpperCase().slice(0, 3) === "MR.",
);
//using mySome() with prototype
let checkState2 = arr.mySome(
  (item) => item.toUpperCase().slice(0, 3) === "MR.",
);
//using built-in some()
let checkState3 = arr.some((item) => item.toUpperCase().slice(0, 3) === "MR.");

console.log(checkState1);
console.log(checkState2);
console.log(checkState3);
