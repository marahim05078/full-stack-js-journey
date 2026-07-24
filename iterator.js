/**
 * Iterator gives control over loop operations while working with array, sets, maps, string etc which are iterable data type
 * Built-in Iterator
 */
// const arr = [10, 20, 30, 40];

// const controlLoop = arr[Symbol.iterator]();

// console.log(controlLoop.next().value);
// console.log(controlLoop.next().value);
// console.log(controlLoop.next().value);
// console.log(controlLoop.next().value);
// console.log(controlLoop.next().value);

// Custom Iterator
function range(start, step, stop) {
  return {
    next: function () {
      obj = {
        value: start <= stop ? start : "undefined",
        done: start > stop,
      };
      start += step;
      return obj;
    },
  };
}

const numbers = range(1, 5, 15);
console.log(numbers.current);
console.log(numbers.current);
console.log(numbers.current);
console.log(numbers.current);
console.log(numbers.current);

// Implementing iterator with for...of

const rangeIterable = {
  start: 1,
  end: 10,
  [Symbol.iterator]() {
    let current = this.start;
    let stop = this.end;
    return {
      next() {
        if (current <= stop) return { value: current++, done: false };
        else return { done: true };
      },
    };
  },
};

for (let num of rangeIterable) {
  console.log(num);
}
