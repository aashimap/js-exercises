const marks = {
  English: 92,
  Maths: 98,
  Science: 97,
  Language: 95,
};

let arr = [];

for (let key in marks) {
  arr.push(marks[key]);
}

console.log(arr);

let sum = arr.reduce((a, b) => {
  return a + b;
});

console.log(sum);

if ((sum / 400) * 100 >= 90) {
  console.log("Grade=A+");
} else if ((sum / 400) * 100 >= 70) {
  console.log("Grade=B+");
} else if ((sum / 400) * 100 >= 60) {
  console.log("Grade=B");
} else {
  console.log("Grade=C");
}
