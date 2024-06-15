function recursiveFunc(str, val) {
    let newStr = "";
    for (let i = 0; i < val; i++) {
        newStr += str;
    }
    return newStr
}
console.log(recursiveFunc("ab", 3));


