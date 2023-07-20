let arr = [3, 2, 65, 23];
let newArr = arr.slice(1, arr.length - 1);

for (i = 0; i < newArr.length; i++) {
  let large = Math.max.apply(null, newArr);
  newArr[i] = large;
}

console.log(newArr);
