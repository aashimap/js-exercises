let newStr = "";
function replace(s) {
  let len = s.length;
  for (let i = 0; i < len; i++) {
    newStr += String.fromCharCode(s[i].charCodeAt(0) + 1);
  }
  console.log(newStr);
}

replace("bititude");
