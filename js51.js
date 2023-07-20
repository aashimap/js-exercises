function check(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        console.log("Not diagonal matrix");
        return false;
      }
    }
  }
  console.log("Diagonal matrix");
  return true;
}

console.log(
  check([
    [1, 0, 0],
    [0, 7, 0],
    [5, 4, 0],
  ])
);
console.log(
  check([
    [1, 0, 0],
    [0, 7, 0],
    [0, 0, 8],
  ])
);
