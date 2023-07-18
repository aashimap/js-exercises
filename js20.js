let num1 = 99;
let num2 = 39;
if (Math.abs(num1 - 100) < Math.abs(num2 - 100)) {
  console.log("Number_1 is closer to 100");
} else if (Math.abs(num1 - 100) === Math.abs(num2 - 100)) {
  console.log("Both are closer to 100");
} else {
  console.log("Number_2 is closer to 100");
}
