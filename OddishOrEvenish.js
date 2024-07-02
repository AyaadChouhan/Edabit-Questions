function oddishOrEvenish(num) {
    let str = toString(num);
    let sum = 0;
    let val = str.split("")
    for (let i = 0; i < str.length; i++) {
        sum += val[i];
    }
    return str[0]
}
console.log(oddishOrEvenish(43))