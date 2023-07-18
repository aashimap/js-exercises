let newStr = "";
function reverse(s) {
  let len = s.length;
  for (let i = len - 1; i >= 0; i--) {
    newStr += s[i];
  }
  console.log(newStr);
}

reverse("bititude");
