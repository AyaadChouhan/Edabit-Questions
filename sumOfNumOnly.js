// sum of number element in array...
function numbersSum(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      num += arr[i];
    }
  }
  return num;
}
console.log(numbersSum([1, 2, "3", "32"]));