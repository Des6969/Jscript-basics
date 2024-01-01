// //Nameless Function:
// nam navako global level ma use garda chaincha
// function keyword must be used to make it global
const a = function () {
  console.log("Nameless");
};
a();
//default function
// euta default pathaidine
// //eg: pagination
// const mul = (a = 3, b) => {
//   return a * b;
// };
// const result = mul(undefined, 2);
// console.log(result);
//parametrized function
//parameter pathaunai parcha
// const multiplication = (a , b,c,d,e) => {

//   };

//pagination
function pagination(page = 1, size = 5) {
  for (let i = page; i <= size; i++) {
    console.log(i);
  }
}
pagination();
//Inline Function
//If we assign variable to nameless or anonymous function,it is called inlline function
//can keep reusing it by assingning it a variable
//global lie reusable banauna hamle  yo use garchau
const footer = function () {
  console.log("anonymous");
};
footer(); //1
footer(); //2
//closure(Interview most imp)
//function that returns the hardcoated varibale stored inside the function
//used to get the secret environment variables used in the application
//kasailie chalauna dina man chaina
//parameter chaina override garna mildaina
const secret = () => {
  const password = "password";
  return password;
};
console.log(secret());
//Implicit
//return keyword  bine kei gardai chau vane
const addit = (a, b) => a + b;
const result = addit(2, 3);
console.log(result);
//explict
//return keyboard garne
// const addi = (a, b) => {
//   return a + b;
// };
// console.log()(
  //IIFE(Immediately Invoked Functional Expression)
  //instantly run huncha define huna sath
  //scripts to add the dummy data inside the application during the first run
  function () {
    console.log("I am IIFE");
  }

