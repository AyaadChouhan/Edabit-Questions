// Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

// makeRug(2, 2, 'A')  ➞ [
//   "AA",
//   "AA"
// ]

function makeRug(height, width, val) {
  let arr = [];

  for (let i = 0; i < height; i++) {
    
    arr.push(val.repeat(width))
    console.log(val.repeat(width))
  }
  return arr
}

console.log(makeRug(2, 3, "A"));
