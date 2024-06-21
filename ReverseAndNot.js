// ReverseAndNot
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

// To illustrate:

// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.


function reverseAndNot(num) {
    let n = num.toString().split("")
    let newnum = "";
    for (let i = n.length - 1; i >= 0; i--) {
        newnum += n[i]
    }
    const values = newnum + num
    return +values
}
console.log((reverseAndNot(123)));
console.log((reverseAndNot(54454)));
