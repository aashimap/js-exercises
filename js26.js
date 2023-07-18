function rightMost(a, b, c) {
  if (a % 10 === (b % 10 || c % 10)) {
    console.log("Checked ok");
  }
}

rightMost(457, 237, 566);
