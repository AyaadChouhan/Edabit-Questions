// create a function that take a string and returns a string in which character is repeated once
function repeatingLetters(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.includes(str[i])) {
      newStr += str[i].repeat(2);
    }
  }
  return newStr;
}
console.log(repeatingLetters("String"));
console.log(repeatingLetters("hello world"));
console.log(repeatingLetters("hello people"));

