/**
 * Funciton compose implementation using reduce method
 */
const add = (n) => n + 10;
const mult = (n) => n * 2;
const div = (n) => n / 2;
let n = 8;
let result = div(mult(add(n)));
console.log(result);

//using pipe funciton
let pipe =
  (...fns) =>
  () =>
    fns.reduce((acc, cur) => cur(acc), n);
let result1 = pipe(add, mult, div)();
console.log(result1);

//compose
let result2 = (...fns) => {
  return fns.reduce((acc, cur) => cur(acc), n);
};
console.log(result2(add, mult, div));
