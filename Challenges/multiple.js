//to check whether number is a multiple of 3 or 7

const num = Number(prompt("enter a number"));

if (num % 3 === 0 && num % 7 === 0) {
  alert("Num is a multiple of 3 and 7");
}
const multiple =
  num % 3 === 0
    ? console.log("Number is multiple of 3")
    : num % 7 === 0
    ? console.log("Number is a multiple of &")
    : console.log("Number is neither a multiple of 3 or 7");
