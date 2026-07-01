/**
 * Implementation of map and filter using reduce method
 * Best preactice: Only use reduce funciton as alternative when both filter and map need to use otherwise use the respective indivitual method when either map or filter method is required
 */

// map implementation
// Squaring
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mapedArray = arr.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);
console.log(mapedArray);
// filter implementation
let filteredArray = arr.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(filteredArray);
// Big array
let arr1 = [];
for (let i = 0; i < 50000000; i++) {
  arr1.push(i);
}
// map and filter chain and checking time efficiency
console.time("mapfilter");
arr1.filter((item) => item % 2 === 0).map((item) => item * item);
console.timeEnd("mapfilter");
// map and filter reduce and checking time efficiency
console.time("reduce");
arr1.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * cur);
  }
  return acc;
}, []);
console.timeEnd("reduce");
