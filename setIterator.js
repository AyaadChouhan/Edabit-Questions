function setIterator(set) {
    let iter = set[Symbol.iterator]();
    return iter;
  }
  
  const mySet = new Set('hey');
  const iterateSet = setIterator(mySet);
  console.log(iterateSet.next().value); // -> should log 'h'
  console.log(iterateSet.next().value); // -> should log 'e'
  console.log(iterateSet.next().value); // -> should log 'y'
  