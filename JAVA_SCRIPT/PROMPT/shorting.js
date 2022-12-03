const prompt = require("prompt-sync")();


function short(n) {
   console.log(n.split('').sort().join(''))
}
let n = (prompt("Enter Number : "));
console.log(short(n));