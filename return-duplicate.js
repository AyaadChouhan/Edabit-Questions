function duplicate_nums(arr) {
    let newArr = [];
    let duplicateVal = [];
    arr.forEach((value , index) => {
      if (newArr.includes(value) && !duplicateVal.includes(value)) {
        duplicateVal.push(value);
      } else {
        newArr.push(value);
      }
    });
    return  (duplicateVal.length > 0) ? duplicateVal : "None";
  }
  console.log(duplicate_nums([1, 2, 3, 4, 3, 5, 6]));
  