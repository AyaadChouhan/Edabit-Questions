function arrayOfMultiples(num, numLength) {
    const newArr = [];
    for (let i = 1; i <= numLength; i++) {
        newArr.push(num * i)
    }
    return newArr
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(17, 6));