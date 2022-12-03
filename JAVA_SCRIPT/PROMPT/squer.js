const prompt = require("prompt-sync")();


function sqqb(n) {
   
    let sq=[];
    let qb=[];
    for(let i=0;i<n.length;i++)
    {
        sq.push(n[i]*n[i])
        qb.push(n[i]*n[i]*n[i])
    }
    return [sq,qb]



}
let n = (prompt("Enter Number : "));
console.log(sqqb(n));