let str = "learning";
let newStr;
if (str.length < 3) {
  newStr = str.toUpperCase();
  console.log(newStr);
} else {
  newStr = str.slice(0, 3).toUpperCase();
  console.log(newStr + str.slice(3));
}
