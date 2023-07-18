let str = "Good morning";
function remove(pos) {
  return str.slice(0, pos) + str.slice(pos + 1);
}
let newStr = remove(7);
console.log(newStr);
