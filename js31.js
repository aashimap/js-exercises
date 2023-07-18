function convert(n) {
  let q = Math.floor(n / 60);
  let r = n % 60;
  console.log(q + " hours and " + r + " minutes");
}

convert(500);
