function sumFunc(arr) {
    let num = 0;
      for(let i=0; i<arr.length; i++){
          num += arr[i];
    }
    return num;
  }
  
  const array = [1, 2, 3, 4];
  console.log(sumFunc(array)); // -> should log 10