let arr = [1, 4, 3, 6, 7];
let i = 0;
let pos;
if (arr.length > 1) {
  if (arr[0] === 1 || arr[arr.length - 1] === 1) {
    console.log("checked ok");
  } else {
    console.log("1 is not present at first or last position");
  }
} else {
  console.log("Array length is not greater than 1");
}
