class Box {
  constructor(value) {
    this.value = value;
  }

  map(fn) {
    return new Box(fn(this.value));
  }
}

const result = new Box(5);

console.log(result);
console.log(result.map((item) => item * 2));
