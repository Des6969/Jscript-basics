console.log("Statement");

const Num = Number(prompt("enter a number "));
const operator = prompt("enter the opertaion");
const Num2 = Number(prompt("Enter another number")); //converts the string into number
const isvalidnum = (Num >= 65 && Num <= 90) || (Num >= 97 && Num <= 122); //checking whether the number is alphabet or not
const isvalidnum2 = (Num2 >= 65 && Num2 <= 90) || (Num2 >= 97 && Num2 <= 122);
alert("Enter number");
// if ((isNaN = Num)) {
//   alert("Enter number");checking whether the entered number is alphabet or not using Nan
// }
let Result;
switch (operator) {
  case "+":
    Result = Num + Num2;
    break;
  case "-":
    Result = Num - Num2;
    break;
  case "*":
    Result = Num * Num2;
    break;
  case "%":
    Result = Num % Num2;
    break;
  case "/":
    if (Num2 != 0) {
      Result = Num / Num2;
    } else {
      alert("Not divisible by 0");
    }

    break;

  default:
    "Enter valid value";
}
console.log("Result:", Result);
