let arr1 = [4, 6, 4, 2, 3, 7, 5, 8, 2, 9, 5, 3, 4, 5, 5, 5];
let count = 0;
let c = 0;
let value;
for (i = 0; i < arr1.length; i++) {
  for (j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      c++;
      if (c > count) {
        count++;
        value = arr1[i];
      }
    }
  }
  c = 0;
}
console.log(value);
