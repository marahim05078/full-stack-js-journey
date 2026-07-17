/**
 * Higher Order Funciton
 * - Function can be passed as arguments
 * - Funciton can be returned from another function
 *
 * Hidden concept:
 * - scope
 * - Closure
 * - Execution contex (Function creation life cycle)
 * - Hoisting
 */

// // Taking a function as argument called callback

// function mathOperation(callback) {
//   return callback(a, b);
// }
// let a = 10;
// let b = 20;

// console.log(mathOperation((a, b) => a + b));
// console.log(mathOperation((a, b) => a - b));
// console.log(mathOperation((a, b) => a * b));

// // Returning a new function as result (closure)
// function counter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let result = counter();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());

// // Scope => Global, Local and block

// let myName1 = "Abdur Rahim"; // declared in Global scope

// function activity(callback, name) {
//   let myName2 = name; // declared in local or function scope
//   return callback(name);
// }
// {
//   let myName3 = "Shahriar Islam"; // Block scope
// }
// activity((who) => console.log(`${who} is now sleeping.`), myName1); // myName1 can be accessed here and everywhere because it is declared globally
// // activity((who) => console.log(`${who} is now sleeping.`), myName3); // Error. myName3 can not be accessed here because of block scope

// console.log("Global variable myName1 =", myName1); // myName1 can be accessed here and everywhere because it is declared globally
// // console.log("Local variable", myName2); //Error. myName2 can not be accessed here because of function scope
