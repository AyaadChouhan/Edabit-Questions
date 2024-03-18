// function  profitableGamble(prob, prize, pay) {
//     return ((prob * prize) > pay) ? true : false ;
// }
// console.log(profitableGamble(9,9,34));
/////////////......./////////////


// let arr =  [10, 17, 32, 18];
// let arr = ["ayaad", "khan", "ahad", "noor"]
// let value = "ayaad";

// let check = arr.findIndex(check);
// console.log(check);

// // function findValue(age) {
// //     return age == "noor";
// // }
// let b = arr.includes("kkr");
// // console.log(b);
// // //..........................
// let obj = {
//     name: "ayaad",
//     age: 22,
//     add: "jodhpur"
// }
// let arr = ["ayaad", "khan", "ahad", "noor"];
// let y = arr[Symbol.iterator]();
// y.next();
// y.next();
// y.next();
// console.log(y.next().value);

//generaor.....
// function *data() {
//     yield "helloayaad "
//     console.log("helloWorld")
//     console.log("helloWorld")
//     console.log("helloNoor")
// }
// let x = data();
// console.log(x.next());
// console.log(x.next());
// console.log(x.return("ending Now"))
 

//async - await.......................
// async function data() {
//     console.log("ayaad");
//     await console.log("khan");
//     console.log("ayaad");
//     console.log("noor");
// }

// data();
// console.log("helloWorld");


function name (val) {
    return function data() {
        return val;
    }
}

const myName = name("ayaad");
// console.log(myName());
function x() {
    console.log(2);
}

// console.log(3)(function y() {
//     console.log(4);
// })();

setTimeout(() => console.log(5.1), 10);

setTimeout(() => console.log(5), 0);

setTimeout(() => console.log(5.2), 5);

setTimeout(() => console.log(5.3), 0);

console.log(6);

promise(console.log(7), 0);

console.log(8);