// Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

function getLength(arr) {
  return arr.flat().length;
}
console.log(getLength([1, [2, 3]]));

