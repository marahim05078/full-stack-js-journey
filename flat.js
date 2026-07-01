/**
 * Array flatting using reduce method
 * Array having one level of nested array
 */
let arr1 = [[1, 2], 3, 4, 5, [6, 7], [8, 9]];

let flattenArray = arr1.reduce((acc, cur) => acc.concat(cur), []);

console.log("Array1 having one level of nested Array =", flattenArray);

/**
 * Array flatting using reduce method and recursive operation
 * Array having more than one level of nested array
 * Built in method is flat(depthOfNestedArray). If depth is unknown, depthOfNestedArray = infinity
 */
let arr2 = [[1, 2], 3, [4, 5, [6, 7, [8, 9]]]];

function flatten(arr) {
  let flattenArray = arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.push(...flatten(cur));
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);
  return flattenArray;
}

console.log("Array2 having multiple level of nested array =", flatten(arr2));
