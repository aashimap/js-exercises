let str1 = "bititude";
let str2 = "technologies";
if (str1.length > str2.length) {
  console.log(str1.slice(0, str2.length) + str2);
} else if (str1.length < str2.length) {
  console.log(str1 + str2.slice(0, str1.length));
} else {
  console.log(str1 + str2);
}
