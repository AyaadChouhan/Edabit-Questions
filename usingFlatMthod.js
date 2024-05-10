function flatten(arr) {
  let newArr = [];
  return arr.flat();
}
console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
);

console.log(flatten([["a", "b"], ["c", "d"]]));
