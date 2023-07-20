let num = 56456;
let temp = num;
let result = 0;

let startTime = new Date();

while (temp > 0) {
  result += temp % 10;
  temp = Math.floor(temp / 10);
}

let endTime = new Date();
let timeElapsed = endTime - startTime;

console.log(result);
console.log(timeElapsed);
