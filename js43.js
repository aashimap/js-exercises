let arr = [3, 5, 2, 6, 3, 6, 7, 6, 3];
let even = [];
let odd = [];
for (i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    even.push(arr[i]);
  } else {
    odd.push(arr[i]);
  }
}
console.log(even);
console.log(odd);

let newArr = [even.reduce((a, b) => a + b), odd.reduce((a, b) => a + b)];
console.log(newArr);
