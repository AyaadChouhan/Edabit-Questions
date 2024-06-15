function getAbsSum(arr) {
    let newval = 0;
       return arr.reduce( (acc, val)=>{
           let newval = Math.abs(val)
          return  acc + newval
        })
    }
    console.log(getAbsSum([2, -1, 4, 8, 10]));
    