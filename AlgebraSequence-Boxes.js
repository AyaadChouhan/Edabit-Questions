function boxSeq(val) {
  let element = 0;
  for (let i = 1; i <= val; i++) {
    if (i % 2 === 1) {
      element += 3;
    } else {
      element -= 1;
    }
  }
  return element;
}
console.log(boxSeq(0));
console.log(boxSeq(1));
console.log(boxSeq(2));
