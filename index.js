// import class Stack
const Stack = require("./Stack");
const Queue = require("./Queue");

// let stack = new Stack(10);
// console.log(stack, stack.isEmpty());
// let insertedItem = stack.insert(1, 2, 3, 4, 5, 6);
// console.log(stack, "Inserted Item", insertedItem, stack.isEmpty());
// console.log("The top element is", stack.onTop());

let queue = new Queue(4);
console.log(queue.showQueue());
queue.insert(3);
queue.insert(2);
queue.insert(6);
queue.insert(5);
queue.insert(1);
console.log(queue.showQueue());
console.log("Rear value =", queue.rear);
console.log("Next queue =", queue.next());
queue.delete();
console.log("After Delete \n", queue.showQueue());
console.log("Rear value =", queue.rear);
console.log("Next queue =", queue.next());
// //String Reversing
// let str = "hello";
// let reverseString = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reverseString += str.charAt(i);
// }
// console.log(reverseString);
