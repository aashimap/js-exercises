let arr1 = [5, 7, 8, 4, 8, 9];
let arr2 = [8, 7, 5, 4, 8, 9];
let count = 0;
let c = 0;
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] === arr2[i]) {
    count++;
  } else if (arr1.includes(arr2[i])) {
    c++;
  }
}
if (count === arr1.length || c === 2) {
  console.log("Similar");
} else {
  console.log("Not Similar");
}
