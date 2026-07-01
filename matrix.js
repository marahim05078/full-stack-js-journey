/**
 * Matrix sum
 * Mathods to be used: map(), reduce()
 */

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Horizontal Sum
let hSum = matrix.map((item) => {
  return item.reduce((acc, cur) => acc + cur, 0);
});

console.log(hSum);
// Vertical Sum using for.... Loop
let vSum1 = [];
for (let i = 0; i < matrix.length; i++) {
  vSum1[i] = 0;
  for (let j = 0; j < matrix[i].length; j++) {
    vSum1[i] += matrix[j][i];
  }
}

console.log(vSum1);
// Vertical Sum using reduce and map method
let vSum = matrix.reduce((acc, cur) => {
  return acc.map((item, i) => cur[i] + item);
});

console.log(vSum);

// Flat Sum
let flatSum = matrix.reduce((acc, cur) => {
  return acc + cur.reduce((a, c) => a + c);
}, 0);

console.log(flatSum);
