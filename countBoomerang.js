function countBoomerang(arr) {
  let countBoomerang = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      countBoomerang += 1;
    }
  }
  return countBoomerang;
}
console.log(countBoomerang([[9, 5, 9, 5, 1, 1, 1]]));
