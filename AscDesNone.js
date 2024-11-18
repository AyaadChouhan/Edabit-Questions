// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

function ascDesNone(arr, str) {
  const asc = "Asc";
  const des = "Des";
  const none = "None";
  let newArr = [];
  if (str === asc) {
    return arr.sort();
  }
  if (str === none) {
    return arr;
  }
  if (str === des) {
    // for (let i = 0; i < arr.length; i++) {
    //   newArr.push(arr[i]);
    // }
   let val = arr.sort((a, b) => a - b)
   return val.reverse()
  }
  return newArr;
}
console.log(ascDesNone([4, 3, 2, 1], "Des"));
console.log(ascDesNone([1,2,3,4], "Des"));
console.log(ascDesNone([7, 8, 11, 66], "Des"));
console.log(ascDesNone([7, 8, 11, 66], "Asc"));
