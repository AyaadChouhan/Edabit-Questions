function secondLargest(arr) {
  let newArr = arr.sort();
  newArr.reverse();
  return newArr[1];
  // return arr[1];
}
console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
