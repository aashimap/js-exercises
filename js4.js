let rand = Math.floor(Math.random() * 10);
console.log(rand);
let guess = prompt("Guess the number");
if (Number(guess) === rand) {
  alert("Good Work");
} else {
  alert("Not Matched");
}
