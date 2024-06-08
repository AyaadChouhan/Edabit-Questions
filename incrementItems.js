function incrementItems(arr) {
    return arr.map( (element, index)=>{
      return element + 1;
    })
   }
   console.log(incrementItems([0, 1, 2, 3]))