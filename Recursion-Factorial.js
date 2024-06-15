function factorial(num) {
  let newVal = 1;
  for (let i = num; i > 1; i--) {
    newVal *= i 
  }
  return newVal;
}
console.log(factorial(3));
console.log(factorial(1));
console.log(factorial(5));



