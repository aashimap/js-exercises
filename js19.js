let str = "This is the given Script";
let arr = str.split(" ");
if (arr[4] === "Script") {
  arr = arr.filter((item) => item !== "Script");
}
newStr = arr.join(" ");
console.log(newStr);
