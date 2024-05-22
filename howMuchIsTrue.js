function countTrue(arr) {
    let counter = 0;
    arr.forEach( (value, index) => {
        if (value === true) {
            counter++; 
        }
    });
    return counter++;
}
console.log(countTrue([true, true, false, false, true]));