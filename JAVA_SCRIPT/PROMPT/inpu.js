const prompt = require("prompt-sync")();

let arr = [1, 2, 3, 4, 5]
let ch

function firstinsert() {
    arr.unshift(parseInt(prompt("Enter Value : ")));
    console.log(arr);
}
function firstdelete() {
    arr.shift();
    console.log(arr);
}
function lastinsert() {
    arr.push(parseInt(prompt("Enter Value : ")));
    console.log(arr);
}
function lastdelete() {
    arr.pop();
    console.log(arr);
}
while (1) {
    console.log("1.FIRST INSERT\n2.FISRTDELETE\n3.LASTINSERT\n4.LASTDELETE")
    ch = parseInt(prompt("Enter Your choice : "))

    switch (ch) {
        case 1:
            firstinsert();
            break;
        case 2:
            firstdelete();
            break;
        case 3:
            lastinsert();
            break;
        case 4:
            lastdelete()
            break;
    }
}