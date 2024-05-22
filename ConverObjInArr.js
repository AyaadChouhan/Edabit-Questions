function objectToArray(obj) {
  let key = Object.keys(obj);
  let val = Object.values(obj);
  let newArr = [];
//   newArr.push([key[0], val[0]]);
//   newArr.push([key[1], val[1]]);
//   newArr.push([key[2], val[2]]);
  for (let i = 0; i < key.length; i++) {
    newArr.push([key[i], val[i]]);
  }
  return newArr;
}
console.log(objectToArray({ A: 1, B: 2, C: 3 }));
