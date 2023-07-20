function sum(n) {
  let result = 0;
  let c = 0;
  while (n >= 1) {
    if (Number.isInteger(n)) {
      result += n;
      n = n / 2;
    } else {
      c = 1;
      return false;
    }
  }
  if (c != 1) {
    return result;
  }
}

console.log(sum(8));
