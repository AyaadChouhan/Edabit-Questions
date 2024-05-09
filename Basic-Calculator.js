function calculator(val1, operator, val2) {
switch (operator) {
    case "+":
        return val1 + val2;
        break;
    case "-":
        return val1 - val2;
        break;
    case "*":
        return val1 * val2;
        break;
    case "/":
        return val1 / val2;
        break;

    default:
        return NAN;
}
}
console.log(calculator(2, "/", 2));
