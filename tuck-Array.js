function tuckIn(arr1, arr2) {
    let newArr = [];
    newArr = arr1[0] +" "+ arr2 +" "+ arr1[1];
    return newArr;
}

console.log(tuckIn([1,10,], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));
