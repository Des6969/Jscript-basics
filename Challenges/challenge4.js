/*Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)
 */
const num1 = Number(prompt("Enter a number"));
const num2 = Number(prompt("Enter a number"));
const multiplyOrDivide = (num1, num2, operation = "multiply") => {
  if (operation === "multiply") {
    return num1 * num2;
  }
  return num1 / num2;
};
console.log("Multiplication:", multiplyOrDivide(10, 5));
console.log("Division:", multiplyOrDivide(10, 5, "divide"));
