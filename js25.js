function mode(a, b, c) {
  if (a < b && b < c) {
    console.log("Strict mode");
  } else if (b > a || c > a) {
    console.log("Soft mode");
  } else {
    console.log("Not defined");
  }
}

mode(22, 22, 34);
mode(5, 6, 8);
