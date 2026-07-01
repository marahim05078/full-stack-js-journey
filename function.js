// Function composition function1(function2(function3(arguments))

// // Function for adding two numbers
// function add(a, b) {
//   return a + b;
// }

// // Function for subtracting two numbers
// function sub(a, b) {
//   return a - b;
// }

// // Function for multiplication two numbers
// function times(a, b) {
//   return a * b;
// }

// // Now call the functions
// let a = 10;
// let b = 20;

// let result = Math.abs(times(add(a, b), sub(a, b)));

// console.log(result);

// Function creation using constuctor

let fn = new Function(
  "name",
  ` console.log("Hello Mr.", name);
  `,
);

fn("Abdur Rahim");
