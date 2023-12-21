console.log("Statement");

const Num = Number(prompt("enter a number "));
const operator = prompt("enter the opertaion");
const Num2 = Number(prompt("Enter another number")); //converts the string into number

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
