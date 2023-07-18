function check(a, b, c) {
  if (a >= 20 && a < (b | c)) {
    console.log(a);
  } else if (b >= 20 && b < (a | c)) {
    console.log(b);
  } else if (c >= 20 && c < (a | b)) {
    console.log(c);
  }
}

check(283, 33, 53);
