function nextIterator(arr) {
  const iter = arr[Symbol.iterator]();
  return iter;
}

const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next().value); // -> should log 1
console.log(iteratorWithNext.next().value); // -> should log 2
console.log(iteratorWithNext.next().value); // -> should log 3
