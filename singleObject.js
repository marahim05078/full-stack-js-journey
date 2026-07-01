/**
 * Array into a single objcet by using reduce method
 */

let arr = [
  { name: "Javascript Cookbook", price: 200 },
  { name: "Introduciton to Python", price: 200 },
  { name: "Javascript Cookbook", price: 300 },
  { name: "Programming Cookbook", price: 400 },
  { name: "Js DSA", price: 250 },
  { name: "Computer Science Distilled", price: 300 },
  { name: "Introduction to Algorithm", price: 600 },
  { name: "Introduction to Algorithm", price: 500 },
];

let singleObject = arr.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].price += cur.price;
    acc[cur.name].quantity += 1;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

console.log(singleObject);
