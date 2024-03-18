function compare(str1, str2) {
    let string1 = str1.length;
    let string2 = str2.length;
  if(string1 === string2) {
    return true;
  } else {
    return false;
  }
}
console.log(compare("hello", "ello"));
