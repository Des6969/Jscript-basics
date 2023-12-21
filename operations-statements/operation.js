console.log("Hello");

const num1 = Number(prompt("enter a number "));
const num2 = Number(prompt("enter a number"));

if (num1 > num2) {
  alert(num1 * num2);
} else {
  alert(Number(num1 + num2));
}

if (num1 > 5 || num2 == 6) {
  alert("aayo");
} else {
  alert("aayana");
}

if (num1 > 5 && num2 == 6) {
  alert("aayo");
} else {
  alert("aayana");
}
