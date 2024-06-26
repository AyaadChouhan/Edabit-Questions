// Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// calculateExponent(5, 5) ➞ 3125

// calculateExponent(10, 10) ➞ 10000000000

// calculateExponent(3, 3) ➞ 27

function calculateExponent(num) {
    return Math.pow(num, num);
}
console.log(calculateExponent(5,5));
console.log(calculateExponent(3,3));
console.log(calculateExponent(10,10));