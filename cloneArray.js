function cloneArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);        
    }
    return newArr.concat([arr])
}
console.log(cloneArr([1,1]));