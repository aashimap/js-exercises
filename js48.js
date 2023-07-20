function prime(b) {
  let pr = [2];
  for (let i = 3; i < b; i++) {
    let c = 0;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        c++;
      }
    }
    if (c === 0) {
      pr.push(i);
    }
  }
  return pr;
}

console.log(prime(45));
