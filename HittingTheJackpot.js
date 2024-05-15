function testJackpot(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
        return false;
    }    
  }
  return true
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["@", "@", "!", "@"]));

