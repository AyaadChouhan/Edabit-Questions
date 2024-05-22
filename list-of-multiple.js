function list_of_multiple(num, length, arr) {
    arr = [];
    for (let i = 1; i <= length; i++) {
         arr.push(num * i);
    }
    return arr;
}
console.log(list_of_multiple(7, 5));