function findindex(arr, target) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        newArr.push(i,j);
      }
    }
  }
  return newArr;
}
console.log(findindex([5, 2, 2], 9));
