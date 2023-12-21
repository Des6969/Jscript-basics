const num1 = Number(prompt("enter a number "));
const num2 = Number(prompt("enter a number"));
let sum;
sum = num1 + num2;
if (num1 === num2) {
  sum = sum * 3;
}
console.log("sum:", sum);
