function checkEquals(arr1, arr2) {
    let newarr1 = arr1.join("");
    let newarr2 = arr2.join("");

    if (newarr1 === newarr2) {
        return true;
    } else {
        return false;
    }
}
console.log(checkEquals([1,2],[1,3]));
console.log(checkEquals([1,2],[1,2]));
console.log(checkEquals([1,1],[1,2]));