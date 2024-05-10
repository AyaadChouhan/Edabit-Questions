function squareDigits(num) {
  let toStr = num.toString();
  let newArr = "";
  for (let i = 0; i < toStr.length; i++) {
    if (toStr[i]) {
      newArr += toStr[i] * toStr[i];
    }
  }
  return newArr;
}
console.log(squareDigits(9119));
