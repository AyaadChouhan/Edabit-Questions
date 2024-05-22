function arrayOfMultiples(num, length) {
    let newArr = [];
    for (let i = 1; i <= length; i++) {
        newArr.push(num * i);
    }
    return newArr;
}
console.log(arrayOfMultiples(7, 5));


