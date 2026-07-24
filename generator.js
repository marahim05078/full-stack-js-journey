/**
 * Generator in special type of function declared using * symbol and it return an iterator object containing next() method.
 *  Whatever we keep in the yield, we could access calling the next() method.
 */
// A simple generator function
function* iteratorGenerator() {
  yield 1;
  yield 2;
}
const numbers = iteratorGenerator();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

// Creating a range function using generator
function* ranger(start = 0, stop = 100, step = 5) {
  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}

const rangeIterator = ranger();
// We have full control over the loop. We can pause whereever we want and can continue whenever we want to continue.
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());

// We can apply for...of loop over any iterable. Iterable are those data type which have iterator
// We have no contron over the built-in loop method
for (let number of rangeIterator) {
  console.log(number);
}
// Infinite number or ID generator using generator
function* idGenearator(start = 0) {
  let id = start;
  while (true) {
    yield id++;
  }
}

const createID = idGenearator(100000);

console.log(createID.next().value);
console.log(createID.next().value);
console.log(createID.next().value);
