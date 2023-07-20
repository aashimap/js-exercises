function check(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (j > i && matrix[i][j] !== 0) {
        return false;
      }
    }
  }

  return true;
}

console.log(
  check([
    [1, 0, 9],
    [0, 7, 9],
    [5, 4, 0],
  ])
);
console.log(
  check([
    [1, 0, 0],
    [0, 1, 0],
    [0, 7, 9],
  ])
);
