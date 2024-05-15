function dis(price, discount) {
    let remaining = (discount / 100) * price;
    return price - remaining;
}
console.log(dis(1500, 50));
console.log(dis(89, 20));
console.log(dis(100, 75));