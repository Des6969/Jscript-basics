// console.log("array");
// const persons = [
//   { name: "ram", age: 20 },
//   { name: "hari", age: 22 },
//   {},
//   {},
//   { a: "" },
// ];
// const personss = new Array();

// console.log(persons);
// //access
// //provide index value in the array
// //index always starts from zero
// console.log(persons[persons.length - 1]);

// //update
// persons[0] = { name: "rojal" };
// persons[3] = { name: "des" };
// //delete
// delete persons[0];
// //loop inside array
// const peoples = [
//   { name: "ram", age: 20 },
//   { name: "hari", age: 22 },
//   { name: "des", age: 23 },
// ];

//loop for using loop
// for (let i = 0; i <= peoples.length - 1; i++) {
//   showName(peoples[i]);
// }
//loop using array inbuiilt feature
// peoples.forEach(showName);

//es5 standard
//direct source data manipulation

/*Advance technique
immutable javascript:
create a shallow copy and operate on it
map:loop lagaucha copy ma original lie chudaina(array nikalcha)
const arr=["tom","dog","jerry"]
const newFun=(data,index)=>{
  console.log({data:data.toUpperCase(),index});

};
const newArr=arr.map(newFun);//function inside a function is callback function

,filter,reduce,every,
some:
*/
// console.log("...........");

// peoples.map((people) => showName(people));

//Write a funtion to sort the data in ascending order
const ex = [
  { name: "ram", age: 20 },
  { name: "hari", age: 22 },
  { name: "des", age: 23 },
];
const newAr = ex.sort((a, b) => a.age - b.age);
console.log({ newAr });
