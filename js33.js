let str = "alphabet";
let count = 0;
const vowels = ["a", "e", "i", "o", "u"];
for (let i of str.toLowerCase()) {
  if (vowels.includes(i)) {
    count++;
  }
}
console.log(count);
