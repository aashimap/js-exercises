let str = "bititude";
let first = str[0];
let last = str[str.length - 1];
let newStr = last + str.slice(1, str.length - 1) + first;
console.log(newStr);
