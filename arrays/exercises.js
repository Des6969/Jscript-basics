// console.log("array");
// //spread operator
// //Important
// //... rest le aagadi ko chodera pachadi ko sab dekhaucha

// const arr = [
//   { name: "Hari", age: 10 },
//   { name: "shyam", age: 10 },
//   { name: "ram", age: 10 },
// ];
// const [a, ...rest] = arr;
// console.log(rest);
//Write a function that returns username who has admin access
const user = [
  { name: "raktim", role: ["admin"] },
  { name: "hari", role: ["guest"] },
  { name: "shyam", role: ["admin", "vendor"] },
  { name: "des", role: ["ceo"] },
];
//define func
const checkRole = (role) => {
  const newUser = user.map((user) => {
    if (user.role.includes(role)) return user.name;
  });
  return newUser;
};
//call function
const res = checkRole(prompt("enter role"));
console.log(res);
//using filter
// return user.filter((user) => user.roles.includes(role));
//write a function that sum every character of[1,2,3]

const num = [1, 2, 3];

const sum = () => {};
const res = console.log();
