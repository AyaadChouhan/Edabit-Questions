function CalFuel(para){
    let Availablefuel = 100;
    let perTimeFuel = 10;
//    let result = ;
    if(para < 10){
        return Availablefuel;
    }else{
        return (para * perTimeFuel) ;
    }
}
console.log(CalFuel(23.5));