let num1 = 19;
let num2 = Number(prompt("Enter any number"));
if (num2 <= num1) {
  console.log(num1 - num2);
} else {
  console.log(Math.abs(num1 - num2) * 3);
}
