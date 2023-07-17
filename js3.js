let year = prompt("Enter the year");
if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 400 === 0 && year % 100 === 0)
) {
  console.log("Leap Year");
} else {
  console.log("NOT a Leap Year");
}
