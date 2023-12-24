const num = Number(prompt("Enter a number"));
const num2 = Number(prompt("Enter a number"));
if (!num == 0 && !num2 == 0) {
  const multiplication = num * num2;
  const divison = num / num2;
  console.log(
    "Multiplication is :" + multiplication + "Division is : " + divison
  );
} else {
  alert("Enter a non zero number");
}
