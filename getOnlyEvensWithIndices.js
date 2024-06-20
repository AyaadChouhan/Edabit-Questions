function getOnlyEvensWithIndices(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(getOnlyEvensWithIndices([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvensWithIndices([0, 1, 2, 3, 4]));
console.log(getOnlyEvensWithIndices([1, 2, 3, 4, 5]));

