function avg(arr) {
    let sum = arr.reduce((acc,val)=>{
      return acc += val
       })
     return Number.isInteger(sum / arr.length)
     // (sum / arr.length)
 }
 console.log(avg([1,5,6]));
 console.log(avg([1,1,1]));
 console.log(avg([1,2,3,4]));