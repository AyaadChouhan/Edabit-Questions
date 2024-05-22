"to strict";
function addsNum(n) {
  return function (num) {
    return (n + num);
  };
}

let adds1 = addsNum(1);
console.log(adds1(3));
console.log(adds1(5.7));


let adds10 = addsNum(10);
console.log(adds10(44));
console.log(adds10(20));


