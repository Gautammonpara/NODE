const prompt=require("prompt-sync")();

// let a=parseInt(prompt("Enter a :"));

// console.log(a);

let arr=[1,2,3,4,5]

function firstinsert()
{
    arr.unshift(0);
    console.log(arr)
}
function firstdelete()
{
    arr.shift();
    console.log(arr)
}
function lastinsert()
{
    arr.push(6);
    console.log(arr)
}
function lastdelete()
{
    arr.pop();
    console.log(arr)
}
firstinsert()
firstdelete()
lastinsert()
lastdelete()

