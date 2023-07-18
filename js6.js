let fname = prompt("Enter the filename");
let extname = "";
for (let i = 0; i < fname.length; i++) {
  if (fname[i] === ".") {
    while (i < fname.length - 1) {
      i = i + 1;
      extname += fname[i];
    }
  }
}
console.log(extname);
