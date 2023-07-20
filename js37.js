let str = "learning";
if (str.length >= 3) {
  console.log(str.slice(-3) + str.slice(0, -3));
} else {
  console.log("String length should be greater than or equal to 3");
}
