const prompt = require("prompt-sync")();


function fectorial(n) {
   
    if(n==1)
        return 1;
    else
        return n*fectorial(n-1);
}
let n = parseInt(prompt("Enter Number : "));
console.log(fectorial(n));