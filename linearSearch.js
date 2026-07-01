/**
 * Linear search implementation
 */
let arr = [3, 5, 6, 1, 2, 9, 7, 8, 23, 44, 20, 21, 83];
let team = [
  { id: 3, name: "ARahim" },
  { id: 2, name: "Reyad" },
  { id: 4, name: "Shahriar" },
  { id: 5, name: "Masum" },
  { id: 8, name: "Kawsar" },
  { id: 6, name: "Faruq" },
  { id: 9, name: "Anis" },
  { id: 1, name: "Faisal" },
  { id: 7, name: "Jahid" },
  { id: 10, name: "Kabir" },
];

// Linear search implementation without callback
const linearSearch1 = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch1(arr, 1));

// Linear Search implementation with callback
const linearSearch2 = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch2(team, (item) => item.name === "Reyad"));
