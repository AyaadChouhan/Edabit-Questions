function Concat(...arr){
    return arr.reduce((acc,el)=> {
      return acc.concat(el);
    },[]);
}
console.log(Concat([1,2,3],[4,5],[6,7]));

