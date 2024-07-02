// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]

function numInStr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let val = arr[j].split("");
  
        if (!isNaN(arr[i][j]) && arr[i][j] !== "") {
          newArr.push(arr[j]);
        }
      }
    }
    return newArr;
  }
  console.log(numInStr(["1a", "a"]));
  