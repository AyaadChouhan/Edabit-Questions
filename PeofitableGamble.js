function  profitableGamble(prob, prize, pay) {
    return ((prob * prize) > pay) ? true : false ;
}
console.log(profitableGamble(9,9,34));
