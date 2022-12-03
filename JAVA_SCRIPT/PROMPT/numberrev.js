const prompt = require("prompt-sync")();

// function revers(n) {
//     while (n > 0) {
//         sum = n % 10;
//         rev = rev * 10 + sum;
//         n = Math.floor(n / 10);
//         // console.log(rev)
//     }
//     return rev;

// }
// let sum, rev = 0;
// let n = (parseInt(prompt("Enter Number: ")));
// console.log(revers(n));


let revers=(n)=> {
    while (n > 0) {
        sum = n % 10;
        rev = rev * 10 + sum;
        n = Math.floor(n / 10);
        // console.log(rev)
    }
    return rev;

}
let sum, rev = 0;
let n = (parseInt(prompt("Enter Number: ")));
console.log(revers(n));
