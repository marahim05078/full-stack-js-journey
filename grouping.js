/**
 * Grouping the similar item as a object by using reduce method
 */
let arr = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eliven",
];

let group = arr.reduce((acc, cur) => {
  let fistLatter = cur.slice(0, 1).toUpperCase();
  if (fistLatter in acc) {
    acc[fistLatter].push(cur);
  } else {
    acc[fistLatter] = [cur];
  }
  return acc;
}, {});

// Sorting the Object by ascending order of key
let sortedGroup = Object.keys(group)
  .sort()
  .reduce((acc, cur) => {
    if (cur in group) {
      acc[cur] = group[cur];
    }
    return acc;
  }, {});
console.log("Unsorted Group =", group);
console.log("Sorted Group =", sortedGroup);
