let arr = [43, 22, 61, 12];
for (i of arr) {
  let q = Math.floor(i / 10);
  let r = Math.floor(i % 10);
  if ((q | r) === (1 | 3)) {
    console.log("checked");
  }
}
