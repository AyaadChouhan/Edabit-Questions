function allTruthy(...el) {
  for (let i = 0; i < el.length; i++) {
    if (!el[i]) {
        return false;
    }
  }
  return true;
}
console.log(allTruthy(true, true, true));
console.log(allTruthy(5, 4, 3, 2, 1, 0));
console.log(allTruthy(true, false, true));
