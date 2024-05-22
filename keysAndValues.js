function keysAndValues(obj) {
  let arrKeys = Object.keys(obj);
  let arrValues = Object.values(obj);

  return [arrKeys, arrValues];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
