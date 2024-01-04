console.log("array");
//spread operator
const arr = [
  { name: "Hari", age: 10 },
  { name: "shyam", age: 10 },
  { name: "ram", age: 10 },
];
const [a, ...rest] = arr;
console.log(rest);
