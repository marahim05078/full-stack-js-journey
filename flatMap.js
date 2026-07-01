/**
 * flatMap() implementation using reduce method
 */
let arr = ["Abdur Rahim", "Reyad Ahmed", "Shahriar Islam", "Masud Rana"];

// Using map and flat seperately
let mapedArray = arr.map((item) => item.split(" ")).flat();
console.log(mapedArray);

//Using reduce method
let myFlatMap = arr.reduce((acc, cur) => {
  return acc.concat(cur.split(" "));
}, []);

console.log(myFlatMap);
