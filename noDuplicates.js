//A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// original array

// [1, 3, 5]
// original array transformed into a set

function set(arr) {
    // const newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //         if (!newArr.includes(arr[i])) {
    //             newArr.push(arr[i]);
    //         }
    // }
    // return newArr

    let set =  new Set(arr);
    return new Array(set)
}
console.log(set([1, 3, 3, 5, 5]));
console.log(set([4, 4, 4, 4]));