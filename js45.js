function find(pos) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[pos]) {
      return arr[i];
    }
  }
}
let arr = [3, 5, 2, 6, 5, 7, 8, 9];
console.log(find(5));
