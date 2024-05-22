function make_rug(col, row, print){
    let str = "";
    for(let i = 0; i < col; i++){
      for(let j = 0; j < row; j++){
        str += print;
      }
      str += "\n";
    }
    return str;
  }
  console.log(make_rug(4,5,"#"));
  
  