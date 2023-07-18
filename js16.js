let num = 21;
if (num % 3 === 0 && num % 7 === 0) {
  console.log("The number is a multiple of both 3 and 7");
} else if (num % 3 === 0) {
  console.log("The number is a multiple of 3");
} else if (num % 7 === 0) {
  console.log("The number is a multiple of 7");
} else {
  console.log("The number is not a multiple of 3 or 7");
}
