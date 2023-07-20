let str = "bititude";
if (str.length >= 3) {
  let last = str.slice(-3);
  let newStr = last + str + last;
  console.log(newStr);
} else {
  console.log("String length must be greater than 3");
}
