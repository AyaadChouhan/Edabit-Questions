function findingNemo(str) {
    let newStr = str.split(" ");
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == "Nemo") {
           return `i found Nemo at ${i}`
        }
    }  return "cant find Nemo"
}
console.log(findingNemo("I am finding Nemo !"));