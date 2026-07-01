let arr = ["a", "b", "c"];

// console.log(arr.keys());
// console.log(arr.values());
// console.log(arr.entries());
// console.log(Object.fromEntries(arr.entries(arr)));

let iter = arr[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
