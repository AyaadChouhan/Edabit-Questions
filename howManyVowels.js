// Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
  let count = 0;
  const obj = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello"));
