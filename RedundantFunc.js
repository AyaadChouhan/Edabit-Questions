function redundant(str) {
    return function () {
        return str;
    }
    
}
const newStr = redundant("apple")
console.log(newStr());