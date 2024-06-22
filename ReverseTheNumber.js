function reverseNumber(number) {
  let numStr = number.toString();
  let val = numStr.split("").reverse();
  let newNum = "";

  for (let i = 0; i < val.length; i++) {
    newNum += val[i];
  }
  return newNum;
}

console.log(reverseNumber(5121));
console.log(reverseNumber(-122157));

