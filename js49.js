let num1 = 20;
for (let i = num1 - 1; i > 0; i--) {
  num1 = num1 * i;
}
let fact = num1;

let c = 0;

while (fact % 10 === 0) {
  c++;
  fact = fact / 10;
}

console.log(c);
