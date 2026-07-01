/**
 * Vote counting using reduce method
 */
let arr = [
  "Java",
  "Python",
  "Python",
  "Javascript",
  "Java",
  "Rust",
  "Javascript",
  "Python",
];

let totalVote = arr.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(totalVote);
