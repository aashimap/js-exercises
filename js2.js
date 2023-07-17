let str = "bititude";
let newStr = "";
let remStr = "";
console.log("bititude");
for (let i = str.length - 1; i >= 0; i--) {
  newStr = str[i] + newStr;
  console.log(newStr + str.slice(0, i));
}
