function calculateExponent(n1, n2) {
    let n = 1;
    for (let i = 1; i <= n2; i++) {
        n *= n1       
    }
    return n;
    //Math.pow(5,5)
}
console.log(calculateExponent(5,5));
console.log(calculateExponent(3,3));
console.log(calculateExponent(10,10));

