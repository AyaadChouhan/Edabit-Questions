function sum_of_missingNum(el, missingVal = 0) {
    let data = "";
    for (let i = 0; i < el.length; i++) {
      if (el[i] == i) {
        missingVal += i;
      }
    }
    return missingVal;
  }
  console.log(sum_of_missingNum([4, 3, 8, 1, 2]));
  