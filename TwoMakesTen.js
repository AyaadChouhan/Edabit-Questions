function makesTen(n1, n2){
    let sum = n1 + n2;
    if(n1 === 10 && n2 === 10){
       return true;
    }else if(sum === 10){
        return true;
    }else{
        return false
    }
}
console.log(makesTen(5,10));